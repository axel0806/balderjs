/**
 * BalderJS
 * version 15.1 (2026-08-31)
 * Mattias Steinwall
 * Baldergymnasiet, Skellefteå, Sweden
 */
/**
 * BalderJS
 *
 */
 declare const canvasContainer: HTMLDivElement;
 /**
  * BalderJS
  *
  */
 declare const ioContainer: HTMLDivElement;
 /**
  * BalderJS
  *
  */
 declare const logContainer: HTMLDivElement;
 declare const _canvasLayers: Record<number, HTMLCanvasElement>;
 declare const _ctxs: Record<number, CanvasRenderingContext2D>;
 declare let _layer: number;
 /**
  * BalderJS
  *
  * The rendering context for the current canvas layer.
  * Used for customized graphics.
  * @example
  * // Draw a tilted filled yellow half-ellipse
  * ctx.ellipse(100, 100, 100, 50, radians(45), 0, radians(180))
  * ctx.fillStyle = "yellow"
  * ctx.fill()
  */
 declare let ctx: CanvasRenderingContext2D;
 /**
  * BalderJS
  *
  * The width, in pixels, of the canvas. See also `H`.
  * @example
  * //Draw a circle in the middle, and a line across the canvas.
  * drawCircle(W / 2, H / 2, 100)
  * drawLine(0, 0, W, H)
  */
 declare const W: number;
 /**
  * BalderJS
  *
  * The height, in pixels, of the canvas. See also `W`.
  * @example
  * // Draw a circle in the middle, and a line across the canvas.
  * drawCircle(W / 2, H / 2, 100)
  * drawLine(0, 0, W, H)
  */
 declare const H: number;
 /**
  * BalderJS
  *
  * Draws a circle with center in (`x`, `y`).
  *
  *
  * @example
  * // A filled circle with default color (black)
  * drawCircle(100, 50, 50)
  *
  * // A filled red circle:
  * drawCircle(200, 50, 50, "red")
  *
  * // A blue circle with a line width of 5 pixels:
  * drawCircle(300, 50, 50, "blue", 5)
  */
 declare function drawCircle(x: number, y: number, radius: number, color?: string, lineWidth?: number): void;
 /**
  * BalderJS
  *
  * Draws an ellipse with center in (`x`, `y`).
  *
  * @example
  * // A filled ellipse with default color (black)
  * drawEllipse(100, 50, 50, 30)
  *
  * // A filled red ellipse
  * drawEllipse(200, 50, 50, 30,  "red")
  *
  * // A ellipse with a line width of 5 pixels
  * drawEllipse(300, 50, 50, 30, "blue", 5)
  */
 declare function drawEllipse(x: number, y: number, radiusX: number, radiusY: number, color?: string, lineWidth?: number): void;
 /**
  * BalderJS
  *
  * @example
  * const image = await fetchImage("./path/to/image.jpg")
  * drawImage(image, 100, 100)
  */
 declare function drawImage(image: HTMLImageElement, x?: number, y?: number, width?: number, height?: number): void;
 /**
  * BalderJS
  *
  * Draws a line on the canvas between (`x1`, `y1`) and (`x2`, `y2`).
  *
  * @example
  * // Draw two thick blue lines across the canvas
  * drawLine(0, 0, W, H, "blue", 20)
  * drawLine(0, H, W, 0, "blue", 20)
  */
 declare function drawLine(x1: number, y1: number, x2: number, y2: number, color?: string, lineWidth?: number): void;
 /**
  * BalderJS
  *
  * Draws a rectangle on the canvas with upper left corner in (`x`, `y`).
  *
  */
 declare function drawRectangle(x: number, y: number, width: number, height: number, color?: string, lineWidth?: number): void;
 /**
  * BalderJS
  *
  * Draws a square on the canvas with upper left corner in (`x`, `y`).
  *
  */
 declare function drawSquare(x: number, y: number, side: number, color?: string, lineWidth?: number): void;
 /**
  * BalderJS
  *
  * Draws `value` on the canvas. The baseline is set by `y`.
  *
  * @example
  * // Draw text with the lower left corner in (`100`, `50`)
  * drawText("abcd", 100, 50, 36, "red")
  *
  * //Draw text right-aligned
  * drawText("abcd", [W, "right"])
  *
  * // Draw text center-aligned
  * drawText("abcd", [W / 2, "center"])
  */
 declare function drawText(value: string, x?: number | [number, 'left' | 'center' | 'right'], y?: number | [number, 'top' | 'center' | 'bottom'], fontSize?: number, color?: string): void;
 /**
  * BalderJS
  *
  * Draws a triangle on the canvas with corners in (`x1`, `y1`), (`x2`, `y2`) and (`x3`, `y3`).
  *
  * @example
  * // Draw a triangle with default color (black)
  * drawTriangle(100, 50, 200, 50, 200, 150)
  *
  * //Draw a red triangle:
  * drawTriangle(100, 150, 200, 150, 200, 250, "red")
  *
  * //Draw a blue triangle with linewidth 2:
  * drawTriangle(100, 250, 200, 250, 200, 350, "blue", 2)
  */
 declare function drawTriangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, color?: string, lineWidth?: number): void;
 /**
  * BalderJS
  *
  * Clears the canvas.
  *
  * @example
  * update = () => {
  *     clear()
  *
  *     // Draw a circle at a random postiton
  *     drawCircle(randomNumber(10, W - 10), randomNumber(10, H - 10), 10)
  * }
  */
 declare function clear(x?: number, y?: number, width?: number, height?: number): void;
 /**
  * BalderJS
  *
  * Fills the canvas with given color.
  * @example
  * fill("blue")
  */
 declare function fill(color?: string): void;
 /**
  * BalderJS
  *
  * Returns color information, as a 4-tuple, for a given pixel.
  * Values `r`(ed), `g`(reen), `b`(lue) and `a`(lpha) are all in the interval 0 to 255.
  * @example
  * drawCircle(50, 100, 30, randomItem("red", "green", "blue"))
  * output("[r, g, b, a]:", getPixel(50, 100))
  */
 declare function getPixel(x: number, y: number): [r: number, g: number, b: number, a: number];
 /**
  * BalderJS
  *
  */
 declare function fetchImages(...paths: string[]): Promise<HTMLImageElement[]>;
 /**
  * BalderJS
  *
  */
 declare function fetchImage(path: string): Promise<HTMLImageElement>;
 /**
  * BalderJS
  *
  * Converts `value` to a string.
  */
 declare function str(value: unknown): string;
 /**
  * BalderJS
  *
  * An object for keyboard input.
  *
  * @example
  * update = () => {
  *     clear()
  *
  *     if (keyboard.w) {
  *         drawText("key W")
  *     }
  *
  *     if (keyboard.keys["Digit1"]) {
  *         drawText("key 1")
  *     }
  * }
  */
 declare const keyboard: {
     /**
      * Returns true if any key is pressed.
      * @example
      * update = () => {
      *     clear()
      *
      *     if (keyboard.pressed) {
      *         drawText("Any key pressed!")
      *     }
      * }
      */
     readonly pressed: boolean;
     /**
      * Returns the latest key pressed. Not affected by keyboard layout.
      * @example
      * update = () => {
      *     clear()
      *     drawText(keyboard.keyName)
      * }
      */
     readonly keyName: string;
     /**
      * Returns the state of all keys.
      */
     readonly keys: Record<string, boolean | null>;
     get space(): boolean;
     set space(value: false);
     get enter(): boolean;
     set enter(value: false);
     get escape(): boolean;
     set escape(value: false);
     get left(): boolean;
     set left(value: false);
     get up(): boolean;
     set up(value: false);
     get right(): boolean;
     set right(value: false);
     get down(): boolean;
     set down(value: false);
     get a(): boolean;
     set a(value: false);
     get b(): boolean;
     set b(value: false);
     get c(): boolean;
     set c(value: false);
     get d(): boolean;
     set d(value: false);
     get e(): boolean;
     set e(value: false);
     get f(): boolean;
     set f(value: false);
     get g(): boolean;
     set g(value: false);
     get h(): boolean;
     set h(value: false);
     get i(): boolean;
     set i(value: false);
     get j(): boolean;
     set j(value: false);
     get k(): boolean;
     set k(value: false);
     get l(): boolean;
     set l(value: false);
     get m(): boolean;
     set m(value: false);
     get n(): boolean;
     set n(value: false);
     get o(): boolean;
     set o(value: false);
     get p(): boolean;
     set p(value: false);
     get q(): boolean;
     set q(value: false);
     get r(): boolean;
     set r(value: false);
     get s(): boolean;
     set s(value: false);
     get t(): boolean;
     set t(value: false);
     get u(): boolean;
     set u(value: false);
     get v(): boolean;
     set v(value: false);
     get w(): boolean;
     set w(value: false);
     get x(): boolean;
     set x(value: false);
     get y(): boolean;
     set y(value: false);
     get z(): boolean;
     set z(value: false);
 };
 declare let _keyName: string;
 declare let _keys: Record<string, boolean | null>;
 /**
  * BalderJS
  *
  * An object for input from mouse or other pointing device.
  */
 declare const mouse: {
     readonly x: number;
     readonly y: number;
     readonly over: boolean;
     get left(): boolean;
     set left(value: false);
     get right(): boolean;
     set right(value: false);
     /**
      * Returns the state of all buttons.
      */
     readonly buttons: (boolean | null)[];
 };
 declare let _mouseX: number;
 declare let _mouseY: number;
 declare let _mouseOver: boolean;
 declare let _buttons: (boolean | null)[];
 /**
  * BalderJS
  *
  * An object for input from touchscreen.
  */
 declare const touchscreen: {
     readonly x: number;
     readonly y: number;
     readonly touches: {
         readonly x: number;
         readonly y: number;
         readonly identifier: number;
     }[];
     get touched(): boolean;
     set touched(value: false);
 };
 declare let _touches: {
     readonly x: number;
     readonly y: number;
     readonly identifier: number;
 }[];
 declare let _touchable: boolean;
 declare function _touchHandler(event: TouchEvent): void;
 /**
  * BalderJS
  *
  */
 declare class Cell {
     readonly row: number;
     readonly column: number;
     readonly x: number;
     readonly y: number;
     readonly width: number;
     readonly height: number;
     private _color;
     private _image;
     private _text;
     private fontSize;
     private textColor;
     private _custom;
     /**
      * Additional info about this cell.
      */
     tag: any;
     constructor(row: number, column: number, x: number, y: number, width: number, height: number);
     get color(): string | null;
     set color(value: string | null);
     get image(): HTMLImageElement | null;
     set image(value: HTMLImageElement | null);
     get text(): string | null;
     set text(value: string | [value: string, fontSize?: number, color?: string] | null);
     get custom(): ((cell: Cell) => void) | null;
     set custom(value: ((cell: Cell) => void) | null);
     draw(): void;
 }
 /**
  * BalderJS
  *
  */
 declare class Grid {
     readonly rows: number;
     readonly columns: number;
     private x;
     private y;
     private width;
     private height;
     private color;
     private lineWidth;
     private activatable;
     private _activeCell;
     private cells;
     private cellWidth;
     private cellHeight;
     constructor(rows: number, columns: number, x?: number, y?: number, width?: number, height?: number, color?: string, lineWidth?: number);
     /**
      * Returns cell at given position.
      */
     getCell(row: number, column: number): Cell;
     /**
      * Applies the `callback`-function to each cell.
      */
     forEach(callback: (c: Cell) => void): void;
     /**
      * Returns `true` if a cell was either clicked or touched.
      */
     get activated(): boolean;
     /**
      * Returns the active cell.
      */
     get activeCell(): Cell;
     /**
      * Returns the cell, if any, containing (`x`, `y`).
      */
     cellFromPoint(x: number, y: number): Cell | undefined;
     /**
      * Draws this grid.
      */
     draw(): void;
 }
 /**
  * BalderJS
  *
  * A rectangular hitbox.
  */
 declare class Hitbox {
     x: number;
     y: number;
     width: number;
     height: number;
     /**
      * Additional info about this hitbox.
      */
     tag: any;
     constructor(x: number, y: number, width: number, height: number);
     /**
      * Returns `true` if this hitbox intersects `other` hitbox.
      */
     intersects(other: Hitbox): boolean;
     /**
      * Returns `true` if this hitbox contains (`x`, `y`).
      */
     contains(x: number, y: number): boolean;
     /**
      * Draws this hitbox outline.
      */
     drawOutline(color?: string, lineWidth?: number): void;
 }
 /**
  * BalderJS
  *
  */
 declare class Sprite {
     private spritesheet;
     private rows;
     private columns;
     private index;
     private _frames;
     private frameWidth;
     private frameHeight;
     private sxs;
     private sys;
     private _framesPerSecond;
     private remainingTime;
     private _finished;
     private _hitbox;
     /**
      * Set hitbox offsets for individual frames.
      * @example
      * // Make the hitbox smaller for the first frame
      * sprite.hitboxOffsets[0] = [10, 10, -20, -20]
      *
      */
     hitboxOffsets: [x: number, y: number, width: number, height: number][];
     x: number;
     y: number;
     width: number;
     height: number;
     /**
      * Set to `false` if sprite shouldn't loop.
      */
     loop: boolean;
     constructor(spritesheet: HTMLImageElement, rows: number, columns: number);
     set frames(value: number[]);
     set framesPerSecond(value: number);
     get framesPerSecond(): number;
     get finished(): boolean;
     get frame(): number;
     get hitbox(): Hitbox;
     update(): void;
     draw(): void;
     getImages(): HTMLImageElement[];
 }
 /**
  * BalderJS
  *
  */
 declare class Turtle {
     private x;
     private y;
     private heading;
     private container;
     private turtle;
     private points;
     private _color;
     penIsDown: boolean;
     penSize: number;
     /**
      * The delay, in milliseconds, between changes in state (movements and rotations).
      */
     delay: number;
     /**
      * Create a turtle.
      *
      * @example
      * //Creates a turtle in the middle of the canvas, headed east (default settings):
      * let t1 = new Turtle()
      *
      * //Creates a turtle at (`100`, `200`), headed north:
      * let t2 = new Turtle(100, 200, -90)
      */
     constructor(x?: number, y?: number, heading?: number);
     /**
      * The state of the turtle as a 3-tuple.
      *
      * @example
      * //Place turtle `t` at (`100`, `200`) headed south:
      * t.state = [100, 200, 90]
      *
      * // Get the position and heading of turtle `t`:
      * let [x, y, heading] = t.state
      */
     get state(): [x: number, y: number, heading: number];
     set state(value: [x: number, y: number, heading: number]);
     /**
      * The color of this turtle. Used when drawing and filling.
      */
     get color(): string;
     set color(value: string);
     private move;
     private turn;
     /**
      * Move this turtle `length` pixels in the direction it is headed.
      */
     forward(length: number): Promise<void>;
     /**
      * Move this turtle `length` pixels in the direction opposite it is headed.
      */
     backward(length: number): Promise<void>;
     /**
      * Turn this turtle `degAngle` degrees clockwise.
      */
     right(degAngle?: number): Promise<void>;
     /**
      * Turn this turtle `degAngle` degrees counterclockwise.
      */
     left(degAngle?: number): Promise<void>;
     hide(): void;
     fill(): void;
 }
 /**
  * BalderJS
  *
  */
 declare function createButtonElement(textContent: string, x: number, y: number, color?: string): HTMLButtonElement;
 /**
  * BalderJS
  *
  */
 declare function createInputElement(x: number, y: number, color?: string): HTMLInputElement;
 /**
  * BalderJS
  *
  */
 declare let deltaTime: number;
 /**
  * BalderJS
  *
  * The `update`-function is run once for every screen update.
  * @example
  * update = () => {
  *     // Draw a circle at a random postiton
  *     drawCircle(randomNumber(10, W - 10), randomNumber(10, H - 10), 10)
  * }
  * @example
  * // Count the number of updates between two space pressings.
  * drawText("Press space twice.")
  *
  * update = () => {
  *     if (keyboard.space) {
  *         keyboard.space = false
  *         let n = 0
  *
  *         update = () => {
  *             clear()
  *             n++
  *             drawText(n)
  *
  *             if (keyboard.space) {
  *                 update = null
  *             }
  *         }
  *     }
  * }
  */
 declare let update: (() => void | Promise<void>) | null;
 declare let _timestamp0: number;
 declare function _updateHandler(timestamp: number): Promise<void>;
 /**
  * BalderJS
  *
  * Create an array filled with values returned by the `callback`-function.
  * @example
  * // Create the array `[0, 2, 4, 6, 8, 10]`
  * let a = createArray(6, i => 2 * i)
  */
 declare function createArray<T>(length: number, callback: (index: number) => T): T[];
 /**
  * BalderJS
  *
  * Creates an array filled with `value`.
  * @example
  * // Create the array `["-", "-", "-", "-", "-"]`
  * let a = createArray(5, "-")
  */
 declare function createArray<T>(length: number, value: T): T[];
 /**
  * BalderJS
  *
  * Create a 2D-array filled with values returned by the `callback`-function.
  */
 declare function createArray2D<T>(rows: number, columns: number, callback: (rowIndex: number, columnIndex: number) => T): T[][];
 /**
  * BalderJS
  *
  * Create a 2D-array filled with `value`.
  */
 declare function createArray2D<T>(rows: number, columns: number, value: T): T[][];
 declare let _audioContext: AudioContext;
 declare const _audioList: [OscillatorNode, GainNode][];
 /**
  * BalderJS
  *
  * Plays a beep. A user interaction is mandatory.
  * @example
  * // Beeps for two seconds:
  * const f = +await input("Frequency (Hz):")
  * beep(f, 2000)
  */
 declare function beep(frequency?: number, msDuration?: number, volume?: number): Promise<void>;
 /**
  * BalderJS
  *
  * Returns `radAngle`, an angle in radians, to degrees.
  * @example
  * output(degrees(Math.PI))      // 180
  */
 declare function degrees(radAngle: number): number;
 /**
  * BalderJS
  *
  *  Returns the distance between (`x1`, `y1`) and (`x2`, `y2`).
  */
 declare function distance(x1: number, y1: number, x2: number, y2: number): number;
 /**
  * BalderJS
  *
  * Returns the point with polar coordinates (`radius`, `degAngle`).
  */
 declare function pointFromPolar(radius: number, degAngle: number, x0?: number, y0?: number): [x: number, y: number];
 /**
  * BalderJS
  *
  * Returns `degAngle`, an angle in degrees, to radians.
  * @example
  * output(radians(180))      // 3.141592653589793
  */
 declare function radians(degAngle: number): number;
 /**
  * BalderJS
  *
  * Returns the triangle number `n`, the sum 1 + 2 + ... + `n`.
  * Returns -1 if `n` is not a whole number of at least 1.
  * @example
  * output(triangleNum(4))      // 10
  */
 declare function triangleNum(n: number): number;
 /**
  * BalderJS
  *
  * Returns `true` if `n` is a prime number, otherwise `false`.
  * @example
  * output(isPrime(7))      // true
  * output(isPrime(9))      // false
  */
 declare function isPrime(n: number): boolean;
 /**
  * BalderJS
  *
  * Returns the factorial of `n`, the product 1 * 2 * ... * `n`.
  * Returns -1 if `n` is not a whole number of at least 0.
  * @example
  * output(factorial(5))      // 120
  */
 declare function factorial(n: number): number;
 /**
  * BalderJS
  *
  * Returns the sum of all proper divisors of `n`, the divisors smaller than `n`.
  * Returns -1 if `n` is not a whole number of at least 1.
  * @example
  * output(divisorSum(12))      // 16
  */
 declare function divisorSum(n: number): number;
 /**
  * BalderJS
  *
  * Returns `true` if `n` is an amicable number, otherwise `false`.
  * Two different numbers are amicable if each one's proper divisors sum to the other.
  * @example
  * output(isAmicable(220))      // true
  * output(isAmicable(6))        // false
  */
 declare function isAmicable(n: number): boolean;
 /**
  * BalderJS
  *
  * Returns `true` if `n` can be written as the sum of two abundant numbers, otherwise `false`.
  * A number is abundant if its proper divisors sum to more than the number itself.
  * Returns -1 if `n` is not a whole number of at least 1.
  * @example
  * output(isSumOfTwoAbundants(24))      // true
  * output(isSumOfTwoAbundants(20))      // false
  */
 declare function isSumOfTwoAbundants(n: number): boolean | -1;
 /**
  * BalderJS
  *
  * Returns the Fibonacci number `n`. The sequence starts 0, 1, 1, 2, 3, 5, ...
  * Returns -1 if `n` is not a whole number of at least 0.
  * @example
  * output(fibonacci(6))      // 8
  */
 declare function fibonacci(n: number): number;
 /**
  * BalderJS
  *
  * Returns a random number between `min` and `max`, both included.
  * @example
  * let die = randomNumber(1, 6)
  */
 declare function randomNumber(min: number, max: number, step?: number): number;
 /**
  * BalderJS
  *
  * Returns a random item from `items`, the argument list.
  * @example
  * // A random color
  * let color = randomItem("red", "green", "blue")
  */
 declare function randomItem<T>(...items: T[]): T;
 /**
  * BalderJS
  *
  * Returns a RGBA color.
  * Values `r`(ed), `g`(reen) and `b`(lue) are integers in the interval 0 to 255.
  * Value `a`(lpha) is between `0` and `1`.
  */
 declare function colorFromRGB(r: number, g: number, b: number, a?: number): string;
 /**
  * BalderJS
  *
  * Shuffles `array` in place.
  */
 declare function shuffle(array: unknown[]): void;
 /**
  * BalderJS
  *
  * Pauses execution for `msDuration` ms.
  * @example
  * fill("red")
  *
  * // Wait 3 seconds
  * await sleep(3000)
  *
  * fill("green")
  */
 declare function sleep(msDuration: number): Promise<void>;
 /**
  * BalderJS
  *
  */
 declare class Vector2 {
     x: number;
     y: number;
     constructor(x: number, y: number);
     static fromPolar(length: number, angle: number): Vector2;
     get length(): number;
     set length(value: number);
     get angle(): number;
     set angle(value: number);
     clone(): Vector2;
     normalize(): void;
     toNormalized(): Vector2;
     add(v: Vector2): void;
     toAdded(v: Vector2): Vector2;
     subtract(v: Vector2): void;
     toSubtracted(v: Vector2): Vector2;
     multiply(v: Vector2): void;
     toMultiplied(v: Vector2): Vector2;
     divide(v: Vector2): void;
     toDivided(v: Vector2): Vector2;
     scale(s: number): void;
     toScaled(s: number): Vector2;
     distanceTo(v: Vector2): number;
     directionTo(v: Vector2): Vector2;
     dot(v: Vector2): number;
     toString(): string;
 }
 /**
  * BalderJS
  *
  */
 declare function setLayer(layer: number): void;
 declare const _params: URLSearchParams;
 declare const _iElt: HTMLTextAreaElement;
 declare const _oElt: HTMLTextAreaElement;
 declare let _setterElt: HTMLTextAreaElement;
 declare const _setParam: string | null;
 declare const _iParam: string | null;
 declare let _inputLines: string[];
 declare let _inputLineIndex: number;
 /**
  * BalderJS
  *
  */
 declare function input(): string;
 /**
  * BalderJS
  *
  * Writes `prompt`, and waits for user input.
  * @example
  * ```
  * let name = await input("Your name? ")
  * ```
  */
 declare function input(prompt: string): Promise<string>;
 /**
  * BalderJS
  */
 declare const TAB: unique symbol;
 /**
  * BalderJS
  */
 declare const EMPTY_STRING: unique symbol;
 /**
  * BalderJS
  */
 declare const SPACE: unique symbol;
 /**
  * BalderJS
  */
 declare const NEWLINE: unique symbol;
 declare let _output: HTMLDivElement | null;
 /**
  * BalderJS
  */
 declare function output(..._: [...values: unknown[], terminator: Symbol]): void;
 declare function output(...values: unknown[]): void;
 declare const _log: (...data: any[]) => void;
 /**
  * BalderJS
  *
  */
 declare const log: (...args: unknown[]) => void;
 declare function clearLog(): void;
 /**
  * BalderJS
  *
  */
 declare function clearIO(): void;
 