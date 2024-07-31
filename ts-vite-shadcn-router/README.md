# ts-vite-shadcn-router

## Vite

```shell
npm create vite@latest . -- --template react-ts
```

## Shadcn/ui

```shell
npm install -D tailwindcss postcss autoprefixer
 
npx tailwindcss init -p
```

Edit `tsconfig.json` and `tsconfig.app.json` files

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

so you can import "path" without error

```shell
npm i -D @types/node
```

Update vite.config.ts

```typescript
import path from "path"

export default defineConfig({
  //...
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

Run the CLI

```shell
npx shadcn-ui@latest init
```

- Would you like to use TypeScript (recommended)? `yes`
- Which style would you like to use? › `Default`
- Which color would you like to use as base color? › `Slate`
- Where is your global CSS file? `src/index.css`
- Would you like to use CSS variables for colors? `yes`
- Are you using a custom tailwind prefix eg. tw-? (Leave blank if not) `…`
- Where is your tailwind.config.js located? `tailwind.config.js`
- Configure the import alias for components: `@/components`
- Configure the import alias for utils: `@/lib/utils`
- Are you using React Server Components? `no`
- Write configuration to components.json. Proceed? `yes`

Adding components

```shell
npx shadcn-ui@latest add
```

## Misc

```shell
node -v > .nvmrc
```

## React router dom

```shell
npm install react-router-dom @types/react-router-dom
```
