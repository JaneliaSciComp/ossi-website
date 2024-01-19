# Astro OSSI site

## Overview

This version of the OSSI site is built with [Astro](https://github.com/withastro/astro), following the [Astro "Build a blog" tutorial](https://docs.astro.build/en/tutorial/0-introduction/) and then integrating components from the [Astrowind](https://github.com/onwidget/astrowind/tree/main) template.

[**View the current deployment**](https://earnest-banoffee-0c0dc1.netlify.app/)

## How to contribute to the site
Below, two options for contributing to the site are outlined. Option 1 involves using the online Github editor. Option 2 involves creating a local copy of the code and using a code editor installed on your local machine.

### Prerequisites
1. A [Github account](https://docs.github.com/en/get-started/quickstart/creating-an-account-on-github)
1. A fork of the site repository ([instructions below](#fork-the-site-repository))

**Additional prerequisites for Option 2**
1. A code editor, e.g., [Visual Studio Code](https://code.visualstudio.com/download)
1. [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installed on your computer

### Fork the site repository
This creates a copy of the OSSI Website Framework Tests repository in your online Github account.

1. Navigate to the [OSSI Website Framework Tests repository](https://github.com/allison-truhlar/ossi-website-framework-tests) on Github.
<br/>
1. In the top right corner of the screen, click **Fork**.
![fork-repository](/assets/fork-repository.png)
<br/>
3. On the page that appears, keep the default settings. They should be:
    - Your Github username as the "owner" of the fork.
    - Copy the main branch only is selected.
    - Optionally, you can change the name and description of your forked repository to whatever is meaningful to you.
<br/>  
4. In your newly forked repository, navigate to the `astro-tutorial` folder. Here is some key folders and files you'll find inside `astro-tutorial`:
```text
/
├── public/
└── src/
    └── how-to-contribute/
        └── project-template.md
    └── content/
        └── projects/
```

### Option 1 - Make additions/edits on Github




- [Run a local version of the site](#run-a-local-version-of-the-site): Do this before adding or editing your project if you would like to preview what your changes will look like on the site.

- [Add or edit a project](#add-or-edit-a-project)

## Run a local version of the site

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
Launch the local dev server at localhost:4321 with the command:
```
    npm run dev
```

## Add or edit a project

### File structure

Inside the astro-tutorial folder, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── content/
│       └── projects/
└── project-template.md
```



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
