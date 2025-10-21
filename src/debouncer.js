export class Debouncer {
    constructor(callback, delay = 3000) {
        this.callback = callback;
        this.delay = delay;
        this.timer = null;
    }

    trigger(...args) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => this.callback(...args), this.delay);
    }

    cancel() {
        clearTimeout(this.timer);
    }

    attach(element, event = 'keypress') {
        element.addEventListener(event, e => this.trigger(e));
    }

    flush(...args) {
        if (this.timer) {
            clearTimeout(this.timer);
            this.callback(...args);
        }
    }
}
