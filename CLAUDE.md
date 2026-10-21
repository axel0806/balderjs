# CLAUDE.md — Using BalderJS

BalderJS (version 15.1) is a small teaching library by Mattias Steinwall, Baldergymnasiet, Skellefteå. It gives beginners a canvas, keyboard/mouse input, text I/O, sprites, and a turtle, all as **global functions and variables** with no imports.

Files in `src/`:

- `balder.ts` — the library source. It runs on load: it builds the DOM, starts the animation loop, and wires up input.
- `balder.d.ts` — ambient TypeScript declarations for the globals. Use it for editor types. It has no `import`/`export`.
- `balder.css` — the default layout and styling for the canvas, the I/O panel, and the log panel.

## Setting up a page

1. Link the stylesheet and load the compiled script **at the end of `<body>`** (or with `defer`). The library appends its containers to `document.body` as soon as it runs.
2. Write your program as plain top-level code. The library globals are available directly.
3. For TypeScript, make `balder.d.ts` part of the compilation so the globals are typed.

Example skeleton:

```html
<link rel="stylesheet" href="balder.css">
<script src="balder.js"></script>
<script src="program.js"></script>
```

## Coordinates and canvas

- Origin `(0, 0)` is the **upper-left** corner. `x` grows to the right, `y` grows down.
- `W` and `H` are the canvas width and height in pixels. They are read once at load.
- The canvas size is set by CSS, so resizing the window **reloads the page**.
- `ctx` is the current layer's `CanvasRenderingContext2D`, for custom drawing.
- `setLayer(n)` switches to layer `n` (created on first use). Higher layers are drawn on top. Layer 0 is the default.

## The game loop: `update`

Assign a function to the global `update`. It runs once per screen frame.

```ts
update = () => {
  clear()
  drawCircle(randomNumber(10, W - 10), randomNumber(10, H - 10), 10)
}
```

- `update` can be `async`. The next frame is scheduled after the returned promise is awaited.
- `deltaTime` is the milliseconds since the previous frame.
- Set `update = null` to stop the loop.
- To change behavior over time, reassign `update` to a new function (see the state-machine example in `balder.ts`).

## Drawing

All drawing uses the current `ctx` and the current layer. Colors are CSS color strings, such as `"red"`, `"#ff0000"`, or `colorFromRGB(r, g, b, a)`.

| Function | Notes |
|---|---|
| `drawCircle(x, y, radius, color?, lineWidth?)` | Filled by default. Pass `lineWidth` to stroke. |
| `drawEllipse(x, y, rx, ry, color?, lineWidth?)` | Same fill/stroke rule. |
| `drawRectangle(x, y, w, h, color?, lineWidth?)` | Upper-left corner at `(x, y)`. |
| `drawSquare(x, y, side, color?, lineWidth?)` | Same as the rectangle. |
| `drawTriangle(x1, y1, x2, y2, x3, y3, color?, lineWidth?)` | Same fill/stroke rule. |
| `drawLine(x1, y1, x2, y2, color?, lineWidth?)` | Defaults: black, 1 px. |
| `drawText(value, x?, y?, fontSize?, color?)` | `y` is the baseline. Use `[x, "left" \| "center" \| "right"]` or `[y, "top" \| "center" \| "bottom"]` for alignment. Default font is monospace. |
| `drawImage(image, x?, y?, width?, height?)` | `image` must already be loaded (see below). |
| `clear(x?, y?, w?, h?)` | With no arguments, clears the whole canvas. |
| `fill(color?)` | Fills the whole canvas. |
| `getPixel(x, y)` | Returns `[r, g, b, a]`, each 0–255. |

```ts
drawCircle(100, 50, 50)                     // filled black
drawCircle(200, 50, 50, "red")              // filled red
drawCircle(300, 50, 50, "blue", 5)          // blue outline, 5 px
drawText("abcd", [W, "right"], 30, 24)      // right-aligned
```

## Images

Images load asynchronously. Wait for them before drawing.

```ts
const image = await fetchImage("./path/to/image.jpg")
drawImage(image, 100, 100)
```

`fetchImages(...paths)` loads several at once and returns an array. Rejects if a path can't be loaded.

## Sprites (spritesheets)

`new Sprite(spritesheet, rows, columns)` splits a loaded `HTMLImageElement` into frames. Call `update()` each frame; it advances the animation and draws the sprite.

```ts
const sheet = await fetchImage("walk.png")
const hero = new Sprite(sheet, 2, 4)   // 2 rows, 4 columns = 8 frames
hero.x = 100
hero.y = 200
hero.framesPerSecond = 8
hero.frames = [0, 1, 2, 3]             // play a subset
hero.loop = false                      // then check hero.finished

update = () => {
  clear()
  hero.update()
}
```

- `x`, `y`, `width`, `height` set position and draw size.
- `hitbox` returns a `Hitbox` for the current frame. Use `hitboxOffsets[frame] = [dx, dy, dw, dh]` to adjust it.
- `getImages()` returns each frame as an `HTMLImageElement`.

## Hitboxes and collisions

`Hitbox(x, y, width, height)` is a rectangle. Use `intersects(other)`, `contains(x, y)`, and `drawOutline(color?, lineWidth?)`. Every `Hitbox` has a `tag: any` for extra data.

## Grids

`new Grid(rows, columns, x?, y?, width?, height?, color?, lineWidth?)` draws a grid of `Cell`s covering the given rectangle (default: the whole canvas).

- `getCell(row, column)` returns a `Cell`.
- `forEach(callback)` runs over every cell.
- `grid.activated` is `true` once per click or touch on a cell. Read `grid.activeCell` after it returns `true`.
- `cellFromPoint(x, y)` returns the cell at a point, or `undefined`.

A `Cell` has `color`, `image`, `text`, and `custom` (a draw callback). Setting any of these redraws the cell. `text` accepts a string or `[text, fontSize?, color?]`. `tag: any` holds extra data.

```ts
const grid = new Grid(3, 3)
grid.getCell(1, 1).color = "lightblue"
grid.getCell(0, 0).text = "X"

update = () => {
  if (grid.activated) {
    grid.activeCell.text = "O"
  }
}
```

## Turtle

`new Turtle(x?, y?, heading?)` starts in the middle of the canvas, heading east (0°). Headings use degrees, with positive angles turning clockwise on screen.

- `forward(length)`, `backward(length)`, `right(deg?)`, `left(deg?)` are **async**. Use `await` to run them in sequence. Each move waits `delay` ms (default 100).
- `penIsDown`, `penSize`, and `color` control drawing.
- `state` is `[x, y, heading]`. Reading or setting it moves the turtle.
- `fill()` fills the path drawn so far.
- `hide()` hides the turtle icon.

```ts
const t = new Turtle()
t.delay = 0
t.color = "green"
for (let i = 0; i < 4; i++) {
  await t.forward(100)
  await t.right()
}
```

> Known quirk: `backward()` calls `forward(-length)` without `await`, so `await t.backward(...)` returns before the move finishes. Await `forward(-length)` directly if the order matters.

## Keyboard

The `keyboard` object reads the current state each frame.

- Letters: `keyboard.a` … `keyboard.z`.
- Named keys: `space`, `enter`, `escape`, `left`, `up`, `right`, `down`.
- `keyboard.pressed` is `true` if any key is down.
- `keyboard.keyName` is the last key pressed, using `event.code` names such as `"KeyA"` or `"Digit1"`.
- `keyboard.keys["Digit1"]` gives the raw state of any key.

Setting a key property to `false` **consumes** the press, so it reads as `false` until released. Use this to act on a single press:

```ts
update = () => {
  if (keyboard.space) {
    keyboard.space = false   // only handle the press once
    console.log("Pressed!")
  }
}
```

Keyboard events are received when the canvas has focus. Click the canvas if input doesn't register.

## Mouse and touch

- `mouse.x`, `mouse.y`: position relative to the canvas. `-1` until the mouse moves over it.
- `mouse.over`: whether the pointer is over the canvas.
- `mouse.left`, `mouse.right`: button state. Setting to `false` consumes the press, like the keyboard.
- `mouse.buttons`: all button states.
- `touchscreen.x`, `touchscreen.y`, `touchscreen.touches`, `touchscreen.touched`. Setting `touched = false` consumes a touch.

## Buttons and text fields

- `createButtonElement(text, x, y, color?)` returns an `HTMLButtonElement` placed on the canvas at `(x, y)`. Add a `.onclick` handler.
- `createInputElement(x, y, color?)` returns an `HTMLInputElement` placed on the canvas.

Both are positioned absolutely, in pixels, relative to the canvas.

## Text input and output (the I/O panel)

These functions are for programs that read from and write to the user's console-like panel. They are separate from the canvas.

- `await input("prompt")` shows the prompt and waits for the user to type a line and press Enter. It returns a string.
- `input()` with no arguments returns the next line from the `i` URL parameter, or `""` if there is none. It is synchronous.
- `output(...values)` appends values to the output panel, separated by spaces, with a newline at the end. `str()` formats values: arrays become `[a,b]`, plain objects become JSON.
- End an `output` call with a terminator symbol to avoid the newline: `TAB`, `SPACE`, `NEWLINE`, or `EMPTY_STRING`.
- `clearIO()` clears the I/O panel. `clearLog()` clears the log panel.
- `str(value)` converts any value to a string.

```ts
const name = await input("Your name? ")
output("Hello", name)
output("Count: ", SPACE)     // no trailing newline
output(3)
```

`+await input("Number?")` converts the answer to a number.

`console.log` is also redirected to the log panel at the bottom of the page.

## Utilities

| Function | Notes |
|---|---|
| `sleep(ms)` | `await sleep(1000)` pauses the calling `async` function. |
| `randomNumber(min, max, step?)` | Both ends included. |
| `randomItem(...items)` | Random element from the argument list. |
| `shuffle(array)` | Shuffles in place. |
| `createArray(n, valueOrCallback)` | `createArray(5, i => i * 2)` or `createArray(5, "-")`. |
| `createArray2D(rows, cols, valueOrCallback)` | Same, as a 2D array. |
| `degrees(rad)`, `radians(deg)` | Angle conversion. |
| `distance(x1, y1, x2, y2)` | Euclidean distance. |
| `pointFromPolar(radius, deg, x0?, y0?)` | Returns `[x, y]`. |
| `colorFromRGB(r, g, b, a?)` | Returns a CSS `rgba(...)` string. |
| `beep(freq?, ms?, volume?)` | Square-wave tone. **Needs a prior user interaction** (browser rule). |

### Vector2

`new Vector2(x, y)` with `add`, `subtract`, `multiply`, `divide`, `scale` (mutating), plus `toAdded`, `toSubtracted`, and similar non-mutating versions. Also `length`, `angle`, `normalize()`, `distanceTo`, `dot`, `fromPolar(length, angle)`.

## URL parameters

The page URL can carry these parameters. They let a program be run with fixed input and checked against expected output:

| Parameter | Effect |
|---|---|
| `i=<text>` | Input lines, one per `input()` call. Newlines in the text separate the lines. Values are URI-encoded. |
| `o=<text>` | Expected output. On load, the output panel is compared with this value and the matching prefix is highlighted green, with the first mismatch in red. |
| `set=i` or `set=o` | Shows a text area and button to write the `i` or `o` parameter, then reloads. |
| `log=o` | Sends `console.log` output and errors to the output panel instead of the log panel. |
| `log=top` | Puts the log panel at the top of the page. |
| `log=no` | Hides the log panel. |

## Errors

Uncaught errors and unhandled promise rejections are shown in the log panel in red. With `log=o`, they go to the output panel instead.

## Conventions for code written for BalderJS

- Write top-level code and assign `update` for animation. Don't create your own `requestAnimationFrame` loop.
- Use `async`/`await` with `sleep`, `input`, `fetchImage`, and the turtle's movement methods.
- Use `clear()` at the start of `update` when the frame should be redrawn from scratch.
- Don't modify the library's internal `_`-prefixed variables. They are not part of the API.
- The version is printed in the header of `balder.ts`, `balder.d.ts`, and `balder.css`. Keep the three in sync when making a release.
