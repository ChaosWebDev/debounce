import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.js',
            name: 'Debouncer',
            fileName: 'debouncer',
            formats: ['es'], // ESM-only
        },
        rollupOptions: {
            external: [],
            output: {
                globals: {},
            },
        },
        outDir: 'dist',
        emptyOutDir: true,
        minify: true,
    },
});
