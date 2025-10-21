# Debouncer

A lightweight, zero-dependency JavaScript utility for resetting timeouts
on user-defined events (like keydown, click, etc).

[![npm version](https://img.shields.io/npm/v/chaoswd-debouncer.svg)](https://www.npmjs.com/package/chaoswd-debouncer) [![license](https://img.shields.io/npm/l/chaoswd-debouncer.svg)](LICENSE)


🚀 Features

-   Simple and modern ES module (import/export)
-   No dependencies
-   Works in browser or Node
-   Customizable delay
-   Optional attach() helper for DOM events

📦 Installation

    npm install chaoswd-debouncer

🧩 Usage

Import

    import { Debouncer } from 'chaoswd-debouncer';

Example

    const log = new Debouncer(() => console.log('Typing stopped!'), 1000);
    document.querySelector('input').addEventListener('input', e => log.trigger(e));
    // The callback runs 1s after the user stops typing.

Manual trigger

    const d = new Debouncer(() => console.log('done!'), 5000);
    d.trigger(); // resets timeout each call

Cancel

    d.cancel(); // clears the active timeout

Attach

    const clicker = new Debouncer(() => console.log('Clicked!'), 2000);
    clicker.attach(document.getElementById('myButton'), 'click');

🧪 Testing

    npm test

Uses Vitest for fast, modern unit testing.

⚙️ Build

    npm run build

Builds to /dist using Vite in library mode.

📁 Project Structure

    debouncer/
    ├─ src/
    │  ├─ debouncer.js
    │  └─ index.js
    ├─ tests/
    │  └─ debouncer.test.js
    ├─ dist/
    ├─ package.json
    ├─ vite.config.js
    └─ README.md

📜 License

MIT License © 2025 Chaos Web Development & Jordan Gerber
