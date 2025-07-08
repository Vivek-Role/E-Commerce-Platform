// ------------------this is right (by correction)---------------------------
//------------------------------------------------------------------
// import path from 'path';
// import { defineConfig, loadEnv } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig(({ mode }) => {
  //   const env = loadEnv(mode, process.cwd(), '');
  //   return {
    //     plugins: [react()],
    //     server: {
      //       proxy: {
        //         '/api': env.VITE_BACKEND_URL,
        //         '/uploads': env.VITE_BACKEND_URL,
        //       },
        //     },
        //     resolve: {
          //       alias: {
            //         '@': path.resolve(__dirname, './src'),
            //       },
            //     },
            //   };
            // });
            
            
// ----------------------------this is right --------------------------------
//--------------------------------------------------------------------------------
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
})


// ----------------------------this is wrong --------------------------------
//-------------------------------------------------------------------------------
// import path from 'path';
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api/': 'http://localhost:3000',
//       '/uploads/': 'http://localhost:3000',
//     },
//   },
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
// });
