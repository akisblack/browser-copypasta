# Browser Copypasta

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/akisblack/browser-copypasta/Build%20and%20Deploy?style=for-the-badge)
![GitHub top language](https://img.shields.io/github/languages/top/akisblack/browser-copypasta?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/akisblack/browser-copypasta?style=for-the-badge)
![Website](https://img.shields.io/website?down_color=red&down_message=offline&style=for-the-badge&up_color=green&up_message=online&url=https%3A%2F%2Fbrowsercp.tk)

>Live version: https://browsercp.tk

### A copypasta generator built with [SvelteKit](https://kit.svelte.dev). It uses MDsveX for markdown compiling and TailwindCSS for its CSS.

---

## Developing

### Prerequisites

- Install [node.js](https://nodejs.org).
- Learn [Svelte](https://svelte.dev).
- Install [pnpm](https://pnpm.io).

### Install dependencies

```bash
pnpm i
```

### Scripts

#### `pnpm dev`

Runs a development server on http://localhost:3000.

#### `pnpm build`

Builds the project into the `build` folder.

#### `pnpm preview`

Runs the built project on http://localhost:3000.

### Project structure
```
/src/routes/_data/ --> The folder where the pastas are located.
```
```
All other directories should be in the SvelteKit docs.
```

### Pasta metadata
- "slug" is the link your post will be on ex: https://example.com/blog/my-first-post.

- "title" should be self explanatory.

- "name" is the pasta's title in capitals.

- "published" is a boolean. If true the post will display otherwise it will stay unpublished and not accessible anywhere outside the source code.

---

## License
This project is licensed under the MIT license.