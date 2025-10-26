import { defineConfig } from 'vite'

export default defineConfig(({ command }) => {
  // Determine the base path depending on whether we are building or serving
  const base = command === 'build' ? '/Slides_TechWebAv/' : '/'
  
  return {
    define: {
      // Create a global constant __BASE_URL__ to use in the code
      '__BASE_URL__': JSON.stringify(base)
    }
  }
})
