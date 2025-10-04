import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // base: '/mnu/', // 👈 اسم المجلد اللي هيتحط فيه الموقع
})
