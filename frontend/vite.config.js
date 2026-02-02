import sitemap from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        sitemap({
            hostname: 'https://www.lmksofttech.in',
            dynamicRoutes: [
                '/',
                '/services',
                '/portfolio',
                '/about',
                '/contact'
            ]
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        outDir: 'dist',
        sourcemap: false,
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom', 'react-router-dom'],
                    ui: ['framer-motion', 'lucide-react', 'sonner'],
                },
            },
        },
    },
    server: {
        port: 3000,
        open: true,
    },
});
