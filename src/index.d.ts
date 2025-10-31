export declare class Debouncer {
    /**
     * Creates a new debouncer.
     * @param callback The function to call after the debounce delay.
     * @param delay The delay in milliseconds before executing the callback (default 3000).
     */
    constructor(callback: (...args: any[]) => void, delay?: number);

    /** The callback function passed to the debouncer. */
    callback: (...args: any[]) => void;

    /** The delay duration in milliseconds. */
    delay: number;

    /** The internal timer handle. */
    timer: ReturnType<typeof setTimeout> | null;

    /**
     * Triggers the debouncer with optional arguments.
     * The callback will only execute if no further triggers occur within the delay period.
     */
    trigger(...args: any[]): void;

    /** Cancels any pending debounce timer. */
    cancel(): void;

    /**
     * Attaches the debouncer to a DOM element event (e.g., keypress, input, etc.).
     * @param element The element to attach to.
     * @param event The event name (default: 'keypress').
     */
    attach(element: HTMLElement, event?: string): void;

    /**
     * Immediately executes the callback if a timer exists, bypassing the remaining delay.
     */
    flush(...args: any[]): void;
}
