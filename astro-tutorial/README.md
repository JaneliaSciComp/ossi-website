# Astro OSSI site

## Overview

This version of the OSSI site is built with [Astro](https://github.com/withastro/astro), following the [Astro "Build a blog" tutorial](https://docs.astro.build/en/tutorial/0-introduction/) and then integrating components from the [Astrowind](https://github.com/onwidget/astrowind/tree/main) template.

**[View the current deployment](https://earnest-banoffee-0c0dc1.netlify.app/)

## What would you like to do?

- [Add or edit a project](#add-or-edit-a-project)
- [Run a local version of the site](#run-a-local-version)

## Run a local version

To get this version of the OSSI site up and running on your local machine:

1. **Clone the OSSI Website Frameworks Tests Repository:**
Open your terminal and run the following command to clone the repository to your local machine:
``` 
    gh repo clone allison-truhlar/ossi-website-framework-tests
```

2. **Navigate to Project Directory:**
Move into the project directory using the following command:
```
    cd astro-tutorial
```

3. **Install Dependencies:**
Ensure you have all the necessary dependencies by running:
```
    npm install
```

4. **Start the Server:**
Launch the server with the command:
```
    npm run dev
```



## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
