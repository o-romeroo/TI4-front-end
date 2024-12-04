import { defineConfig } from '@vue/cli-service'

export default defineConfig({
  transpileDependencies: ['vuetify'],
  outputDir: 'dist', // Importante para a Vercel
  publicPath: '/', // Importante para evitar problemas com rotas

  // Essa configuração é crucial para o roteamento funcionar corretamente na Vercel
  devServer: {
    historyApiFallback: true
  }
})