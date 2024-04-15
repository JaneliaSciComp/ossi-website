# Janelia Open Source Science Initative (OSSI) website

[**View the current deploy**](https://janeliascicomp.github.io/ossi-website/)

## Overview

- The source code for the Open Source Science Initative (OSSI) at HHMI Janelia website. The site showcases OSSI-supported projects.
- Built with the static-site-generator [Astro](https://GitHub.com/withastro/astro), using components and styling from the [Astrowind](https://GitHub.com/onwidget/astrowind/tree/main) template.

## Table of Contents

- [How to add/edit your software project](#how-to-addedit-your-software-project)
  - [Prerequesites](#prerequisites)
  - [Set-up](#set-up)
  - [Add a new project](#add-a-new-project)
  - [Edit a project](#edit-a-project)
    - [Edit the frontmatter](#edit-the-frontmatter)
    - [Optional - edit the project description](#optional---edit-the-project-description)
    - [Optional - add an image](#optional---add-an-image)
    - [Optional - add new tag categories or options](#optional---add-new-tag-categories-or-options)
  - [Preview and commit your changes](#preview-and-commit-your-changes)
  - [Open a pull request](#open-a-pull-request)

## How to add/edit your software project

### Prerequisites

1. A [GitHub account](https://docs.GitHub.com/en/get-started/quickstart/creating-an-account-on-GitHub)
1. A code editor (e.g., [Visual Studio Code](https://code.visualstudio.com/download)) and [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installed on your local computer
1. [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (v18.14.1 or later) and npm

### Set-up

**Note:** These instructions assume you are familiar with the GitHub [pull request flow](https://docs.GitHub.com/en/get-started/exploring-projects-on-GitHub/contributing-to-a-project) for contributing to projects.

1. Fork and clone the [OSSI Website repository](https://github.com/JaneliaSciComp/ossi-website).

1. Open the respository in your local code editor.

1. Install dependencies and start the local dev server at `localhost:4321`.

```
npm install
npm run dev
```

### Add a new project

If a Markdown file for your project already exists under `src/content/projects` - skip to [Edit a project](#edit-a-project)

```text
/
├── public/
│   └── project-images/
└── src/
    └── project-template.md
    └── content/
        └── projects/
```

1. Copy `/src/project-template.md` and paste it into `/src/content/projects` (see key folders and files above). Rename the template with your project's title, e.g., `my-awesome-project.md`, with dashes connecting each word.

2. Open your project file. At the top of the file are data sandwiched between triple-dashes (---). These data are used by Astro to create the webpage for your project.
3. **Edit the `title`- this should match the name of your project file, without the dashes.** For example, if your project file is named `my-awesome-project.md`, your project title should be `my awesome project`.

### Edit a project

#### Edit the frontmatter

At the top of the file are data sandwiched between triple-dashes (---). These data are used by Astro to create the webpage for your project.

Follow the guidance in the below table to edit your project's data and change the appearance of your project's associated webpage.

You can also refer to `/src/project-template.md` for further guidance and examples for each data variable.

**Notes:**

- For each _required_ variable, delete the placeholder text to the right of the colon in the template file and use the table guidance to provide your own value.

- For each _optional_ variable, if you do not wish to provide a value, comment out or delete the entire entry.

- **For "tag" variables:**
  - Tags are used to allow website visitors to filter displayed projects.
  - We strive to keep the tag categories and example options up-to-date in the project template, but the final reference for the currently-allowed tag categories and options can always be found [here](https://github.com/JaneliaSciComp/ossi-website/blob/main/.github/actions/validTagsList.json).
  - Delete any tags provided in the project template that don't apply to your project. Keep relevant tags inside the square brackets, separated by commas.
  - If you feel there is an additional tag category or option required to describe your project - read the guidance on [Requesting new tag categories or options](#optional---requesting-new-tag-categories-or-options).

| Variable name                    | Required or optional                                               | How to complete                                                                                                                                                                                                                                                         |
| :------------------------------- | :----------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`                          | Required                                                           | Your project title.                                                                                                                                                                                                                                                     |
| `tagline`                        | Required                                                           | One or two sentences describing your project.                                                                                                                                                                                                                           |
| `maintainer`                     | Required                                                           | The maintainer of the project page on this website. This should be the name of one primary point-of-contact.                                                                                                                                                            |
| `maintainer contact info`        | Required                                                           | The preferred contact method for the maintainer - this should either an email address or a link to a contact method such as X, Instagram, LinkedIn, or Facebook.                                                                                                        |
| `project type`                   | Required                                                           | Pick **one** of the three options provided in the template based on whether your software project is currently or was ever supported by OSSI: `[OSSI - current, OSSI - previous, Other]`. Delete the other two options, leaving the square brackets around your choice. |
| `OSSI proposal link`             | Required for current and previous OSSI-funded projects             | Link to the OSSI proposal, written as a string (no square brackets).                                                                                                                                                                                                    |
| `github link`                    | Required                                                           | Link to the software project's GitHub repository.                                                                                                                                                                                                                       |
| `documentation link`             | Required                                                           | Link to software documentation - can be the same as the GitHub repo if the README is the documentation                                                                                                                                                                  |
| `installation instructions link` | Required                                                           | Link to software installation instructions - can be the same as the GitHub repo                                                                                                                                                                                         |
| `how to cite text`               | Required if your software has an associated published paper or DOI | The citation for your software - wrap in quotes to ensure colons are interpreted correctly. If your software doesn't have an associated published paper or DOI, leave this blank.                                                                                       |
| `how to cite link`               | Optional                                                           | A DOI. Wrap in quotes to ensure the colon is interpreted correctly. If a DOI is not available, leave this blank - your GitHub repo will be used as the default. Each DOI should start with `https://doi.org/`                                                           |
| `additional links array`         | Optional                                                           | Optional external links formatted in a comma-separated array. If there is a colon in a link, wrap the entire link in quotations. For example, you could provide links to a project homepage, an externally-hosted blog post, additional publications, etc.              |
| `additional links text array`    | Optional                                                           | If your project has an associated blog post file, provide the file name here in square brackets, without the .md extenstion (e.g., `[my-related-blog-post-file]`). If there is more than one related blog posts separate the file names by commas.                      |
| `image file`                     | Optional                                                           | Format as: `image-file-name-with-no-spaces.fileExtension`<br/> Then see [Adding an image](#optional---add-an-image) for more information about uploading an image.                                                                                                      |
| `image caption`                  | Required if you add an image file                                  | A brief description of the image - this will be displayed on the site                                                                                                                                                                                                   |
| `youtube url`                    | Optional                                                           | Link to a YouTube-hosted video demoing your software.                                                                                                                                                                                                                   |
| `youtube caption`                | Required if you add a video link                                   | A brief description of the video - this will be displayed on the site                                                                                                                                                                                                   |
| `development team`               | Optional                                                           | [Tag variable - see guidance](#edit-a-project)                                                                                                                                                                                                                          |
| `programming language`           | Optional                                                           | [Tag variable - see guidance](#edit-a-project)                                                                                                                                                                                                                          |
| `open source license`            | Optional                                                           | [Tag variable - see guidance](#edit-a-project)                                                                                                                                                                                                                          |
| `software type`                  | Optional                                                           | [Tag variable - see guidance](#edit-a-project)                                                                                                                                                                                                                          |
| `use case`                       | Optional                                                           | [Tag variable - see guidance](#edit-a-project)                                                                                                                                                                                                                          |
| `usage environment`              | Optional                                                           | [Tag variable - see guidance](#edit-a-project)                                                                                                                                                                                                                          |
| `software ecosystem`             | Optional                                                           | [Tag variable - see guidance](#edit-a-project)                                                                                                                                                                                                                          |
| `supported file types`           | Optional                                                           | [Tag variable - see guidance](#edit-a-project)                                                                                                                                                                                                                          |

#### Optional - Edit the project description

You are strongly encouraged to use your software project's GitHub README as it's description. This will minimize the amount of work required by the maintainer to keep the project description and details up-to-date.

To use your project's GitHub README as the project description:

1. Ensure your project is public on GitHub
2. Delete all the text in your project's Markdown file following the closing triple dashes (---) on the frontmatter.

If you would rather provide a custom project description, you can do so by typing it below the closing triple dashes on the frontmatter. You can use [Markdown syntax](https://www.markdownguide.org/basic-syntax/) to add hyperlinks, layout/text effects (e.g., headings, lists, **bold** or _italic_ text), etc.

#### Optional - Add an image

1. Add your desired image to `/public/project-images`, using a filename without spaces.
2. Edit your project file to include a value for `image file` as outlined in [Edit a project](#edit-a-project).

#### Optional - Requesting new tag categories or options

- _Tag categories are the the variable name to the left of the colon in the project Markdown file._
- _Tag options are the values in the square brackets to the right of the colon._

_Do not add the new tag category or option to your project's template._ Open a separate [pull request](#open-a-pull-request) listing the new tag category(ies) and/or tag options(s) you wish to add. Make sure to select the "new tags added" label.

### Preview and commit your changes

1. Preview your changes on the local dev server at `localhost:4321`.
2. When you're done editing the project file and adding optional images, commit your changes and push them to GitHub.

### Open a pull request

1. Go to your repository on GitHub - on the banner indicating your branch is one commit ahead, click **Contribute** and then **Open a pull request**.
2. Title your pull request "Add a project - [Project Name]". Include in the description any helpful notes or specific requests.
3. In the panel on the right side of the screen, click the gear icon next to "Labels." Select relevant labels, e.g.,:
   - New Project Page
   - Edit Project Page
   - New tags
4. When you're finished, click "Create pull request" - your PR will be reviewed by the maintainers of the OSSI site. You may receive requests for changes before your PR is approved.
