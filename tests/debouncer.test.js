import { describe, it, expect, vi } from 'vitest';
import { Debouncer } from '../src/debouncer.js';

describe('Debouncer', () => {
    it('calls callback after delay', async () => {
        const mock = vi.fn();
        const d = new Debouncer(mock, 100);

        d.trigger();
        expect(mock).not.toHaveBeenCalled();

        // wait longer than delay
        await new Promise(res => setTimeout(res, 150));

        expect(mock).toHaveBeenCalledTimes(1);
    });

    it('resets timer if triggered again', async () => {
        const mock = vi.fn();
        const d = new Debouncer(mock, 100);

        d.trigger();
        await new Promise(res => setTimeout(res, 50));
        d.trigger(); // should reset

        await new Promise(res => setTimeout(res, 150));

        expect(mock).toHaveBeenCalledTimes(1);
    });
});
