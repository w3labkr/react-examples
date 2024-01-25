# react-ninja

React Ninja is a starter template for [React](https://react.dev/) typescript based on [shadcn/ui](https://ui.shadcn.com/).

## Directory Structure

```txt
.
└── src/
    ├── assets/
    ├── components/
    │   └── ui/
    ├── config/
    ├── context/
    ├── hooks/
    ├── lib/
    │   └── firebase/
    ├── pages/
    ├── styles/
    ├── App.tsx
    └── main.tsx
```

## Getting Started with Vite

```shell
npm create vite@latest . -- --template react-ts
```

Support for TypeScript's path mapping in Vite

```shell
npm install --save-dev vite-tsconfig-paths
```

Vite plugin that provide checks of TypeScript, ESLint, vue-tsc, Stylelint and more.

```shell
npm install --save-dev vite-plugin-checker
``

Declarative routing for React

```shell
npm install react-router-dom localforage match-sorter sort-by
```

Set the current Node.js version.

```shell
node -v > .nvmrc
```

Runs the app in the development mode.

```shell
npm run dev
```

## Configuration

Serving the Same Build from Different Paths: `package.json`

```json
{
    "homepage": ".",
}
```

After cleaning the directories, cache and install the dependency packages: `packages.json`:

```json
{
    "scripts": {
        "clean:dir": "rm -rf node_modules",
        "clean:cache": "npm cache clean --force",
        "clean": "npm run clean:dir && npm run clean:cache",
        "reinstall": "npm run clean && npm install"
    },
}
```

```shell
npm run reinstall
npm run --force reinstall
```

## Tailwind CSS

Install Tailwind CSS

```shell
npm install --save-dev tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Using 'clsx' or 'classnames' with 'tailwind-merge'

```shell
npm install tailwindcss-animate class-variance-authority clsx tailwind-merge
```

`src/lib/utils.ts`:

```typescript
import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));
```

## Shadcn UI

Beautifully designed components that you can copy and paste into your apps.

```shell
npx shadcn-ui@latest init
```

Add icon library

```shell
npm install lucide-react @radix-ui/react-icons
```

Adding dark mode

```shell
npm install next-themes
```

Use the add command to add components and dependencies to your project.

```shell
npx shadcn-ui@latest add
npx shadcn-ui@latest add [component]
```

## Schema Validation

React Hooks for form state management and validation (Web + React Native).

```shell
npm install react-hook-form 
npm install zod @hookform/resolvers
```

## ESLint

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

```shell
npm install --save-dev eslint eslint-plugin-react eslint-plugin-react-hooks
npm install --save-dev eslint-plugin-import eslint-import-resolver-typescript
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin 
npm install --save-dev prettier eslint-plugin-prettier eslint-config-prettier
npm install --save-dev eslint-plugin-tailwindcss prettier-plugin-tailwindcss
```

## Deployment

```shell
npx serve -s dist
npx serve -l 8000 -s dist
```
