import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import Crypter from './src/utils/crypter.js'
import CYAN_VAR from './var.json'


const HiddenCrypter = new Crypter(CYAN_VAR.SALT);
for (const key in CYAN_VAR.VAR) CYAN_VAR.VAR[key][1] = HiddenCrypter.encrypt(CYAN_VAR.VAR[key][1],CYAN_VAR.PASSWORD);
delete CYAN_VAR.PASSWORD

export default defineConfig({
  plugins: [tailwindcss(), vue()],
  define: { __RESUME_DATA__: JSON.stringify(CYAN_VAR) }
})
