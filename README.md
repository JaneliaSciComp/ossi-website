# Janelia Open Source Science Initative (OSSI) website

[**View the current deploy**](https://janeliascicomp.github.io/ossi-website/)

## Overview

- The source code for the Open Source Science Initative (OSSI) at HHMI Janelia website. The site showcases OSSI-supported projects.
- Built with the static-site-generator [Astro](https://GitHub.com/withastro/astro), using components and styling from the [Astrowind](https://GitHub.com/onwidget/astrowind/tree/main) template.

## How to add/edit your software project

### Table of Contents

- [Prerequesites](#prerequisites)
- [Set-up](#set-up)
- [Add a new project](#add-a-new-project)
- [Edit a project](#edit-a-project)
- [Optional - add an image](#optional---add-an-image)
- [Optional - add new tag categories or options](#optional---add-new-tag-categories-or-options)
- [Preview and commit your changes](#preview-and-commit-your-changes)
- [Open a pull request](#open-a-pull-request)

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

2. Open your project file. At the top of the file are data sandwiched between triple-dashes (---). These data are used by the Static Site Generator to create the webpage for your project.
3. **Edit the `title`- this should match the name of your project file, without the dashes.** For example, if your project file is named `my-awesome-project.md`, your project title should be `my awesome project`.

### Edit a project

At the top of the file are data sandwiched between triple-dashes (---). These data are used by the Static Site Generator to create the webpage for your project.

Follow the guidance in the below table to edit your project's data and change the appearance of your project's associated webpage.

You can also refer to `/src/project-template.md` for further guidance and examples for each data variable.

**Notes:**

- For each _required_ variable, delete the placeholder text to the right of the colon in the template file and use the table guidance to provide your own value.

- For each _optional_ variable, if you do not wish to provide a value, comment out or delete the entire entry.

- **For "tag" variables:**
  - Tags are used to allow website visitors to filter displayed projects. The current tag categories and example options are provided in the project template.
  - Delete any tags provided in the project template that don't apply to your project. Keep relevant tags inside the square brackets, separated by commas.
  - If you feel there is an additional tag category or option required to describe your project - read the guidance on [Adding new tag categories or options](#optional---add-new-tag-categories-or-options).

| Variable name                     | Required or optional                       | How to complete                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| :-------------------------------- | :----------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`                           | Required                                   | Your project title.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `tagline`                         | Required                                   | One or two sentences describing your project.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `author names`                    | Required                                   | The names of the project authors, written exactly as you want them to appear on the webpage. For example, do not include square brackets with author names separated by commas for a list, as with some of the other variables below - instead, write out how you would like the author list to appear.                                                                                                                                                                                                                                 |
| `project type`                    | Required                                   | Pick **one** of the three options provided in the template based on whether your Janelia software project is currently or was ever supported by OSSI: `[OSSI - current, OSSI - previous, Other]`. Delete the other two options, leaving the square brackets around your choice.                                                                                                                                                                                                                                                         |
| `github repository link array`    | Optional                                   | The link(s) to the project GitHub repository(ies). Must be wrapped in square brackets, with each link comma-separated. E.g., `[https://github.com/preibischlab/bigstitcher/, https://github.com/saalfeldlab/stitching-spark]`                                                                                                                                                                                                                                                                                                           |
| `github repository text array`    | Required if more than one GitHub link      | If you provided more than one GitHub link for your project, provide the corresponding text you would like displayed for each link. Must be wrapped in square brackets, with each entry comma-separated. E.g., `[GitHub BigStitcher, GitHub Stitching-Spark]`                                                                                                                                                                                                                                                                            |
| `project homepage link array`     | Optional                                   | If your project has it's own website, other than a GitHub repository, provide it here. For example, the HortaCloud project's [documentation site](https://hortacloud.janelia.org/). As with the GitHub repository link array - must be wrapped in square brackets, with each link comma-separated.                                                                                                                                                                                                                                      |
| `project homepage text array`     | Required if more than one project homepage | If you provided more than one homepage for your project, provide the corresponding text you would like displayed for each link. As with the GitHub repository text array - must be wrapped in square brackets, with each link comma-separated.                                                                                                                                                                                                                                                                                          |
| `publication DOI array`           | Optional                                   | If you would like your project page to feature related publications, provide the DOIs in square brackets, separated by commas. Each DOI should start with `https://doi.org/`                                                                                                                                                                                                                                                                                                                                                            |
| `publication text array`          | Optional                                   | If you provided DOI links, provide the corresponding text you would like to display for each link (again in square brackets, separated by commas). The suggested text for each link is: `Author et al. (YYYY)`                                                                                                                                                                                                                                                                                                                          |
| `related blog posts`              | Optional                                   | If your project has an associated blog post file, provide the file name here in square brackets, without the .md extenstion (e.g., `[my-related-blog-post-file]`). If there is more than one related blog posts separate the file names by commas.                                                                                                                                                                                                                                                                                      |
| `image file`                      | Optional                                   | Format as: `image-file-name-with-no-spaces.fileExtension`<br/> Then see [Adding an image](#optional---add-an-image) for more information about uploading an image.                                                                                                                                                                                                                                                                                                                                                                      |
| `image alt text`                  | Required if you add an image file          | A brief description of the image                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `associated labs and projects`    | Optional                                   | [Tag variable - see guidance](#edit-a-project) <br/> _Examples:_ Branson Lab, Pachitariu Lab, Preibisch Lab, Saalfeld Lab, Spruston Lab, Stringer Lab, Turaga Lab, CellMap Project Team, FlyEM Project Team, FlyLight Project Team, MouseLight Project Team, MultiFISH Project Team, Scientific Computing Software Support Team<br/> _Important:_ Additional steps are required if adding a new lab or project name option - please see [Case 2 under Add new tag categories or options](#optional---add-new-tag-categories-or-options) |
| `software type`                   | Optional                                   | [Tag variable - see guidance](#edit-a-project) <br/> _Examples:_ Command line application, Framework, Native application, Package, Service, Web application, Website                                                                                                                                                                                                                                                                                                                                                                    |
| `programming language`            | Optional                                   | [Tag variable - see guidance](#edit-a-project) <br/> _Examples:_ C++, Go, Java, Julia, Kotlin, MATLAB, Nextflow, Python                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `software ecosystem`              | Optional                                   | [Tag variable - see guidance](#edit-a-project) <br/> _Examples:_ BigDataViewer, Fiji, ImgLib2, Janelia Workstation, Java Virtual Machine, Napari                                                                                                                                                                                                                                                                                                                                                                                        |
| `open source license`             | Optional                                   | [Tag variable - see guidance](#edit-a-project) <br/> _Examples:_ BDS-3 Clause, CC-by-0, GPL-2.0, GPL-3.0, MIT                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `supported file types`            | Optional                                   | [Tag variable - see guidance](#edit-a-project) <br/> _Examples:_ N5, NWB, OME-Zarr, SWC, TIFF, Zeiss CZI                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `related experimental techniques` | Optional                                   | [Tag variable - see guidance](#edit-a-project) <br/> _Examples:_ Calcium imaging, Confocal light microscopy (LM), Correlative light EM (CLEM), EASI-FISH, Electron microscopy (EM), Expansion microscopy (ExM), FISH, Lightsheet fluorescence microscopy (LFSM), MERFISH, Neural recording, Single-molecule localization microscopy (SMLM), SlideSeq, Two-photon imaging                                                                                                                                                                |
| `software use case`               | Optional                                   | [Tag variable - see guidance](#edit-a-project) <br/> _Examples:_ Annotation, Containterization, Electrophysiology analysis, Image analysis, Image registration, Sequence analysis, Tool packaging/distribution, Video analysis                                                                                                                                                                                                                                                                                                          |
| `usage environment`               | Optional                                   | [Tag variable - see guidance](#edit-a-project) <br/> _Examples:_ Cloud, Google Colab, HPC cluster, Jupyter notebook, Local installation, Web browser                                                                                                                                                                                                                                                                                                                                                                                    |

### Optional - Add an image

1. Add your desired image to `/public/project-images`, using a filename without spaces.
2. Edit your project file to include a value for `image file` as outlined in [Edit a project](#edit-a-project).

### Optional - Add new tag categories or options

_Tag categories are the the variable name to the left of the colon in the project Markdown file._
_Tag options are the values in the square brackets to the right of the colon._

**Case 1 - Add new tag category**

1. Add a new line in your project file's frontmatter and type your new tag category, followed by a colon and the tag options you wish to assign to your project wrapped in square brackets with commas separating each option. _Note - the options you add should not be exhaustive. They should only be what you require to describe your project._
2. Repeat for as many tag categories as you would like to add. For example:

```
new tag category: [tag option]
second new tag category: [tag option 1, tag option 2]
```

3. Open `/src/data/tagCategoryNames.js`
4. Add your tag category name(s), wrapped in quotation marks and followed by a comma, to the existing array. For example:

```
export const tagKeyNames = [
    ...
    "new tag category",
    "second new tag category",
  ]
```

5. Open `/src/content/config.ts`
6. In the `Projects Frontmatter` section, type your new tag category names. Each cateogry name should be followed by a colon and wrapped in single quotes if the category names consist of more than one word. After each colon, paste this code, which allows the tag to be input as an array of strings, a single string, or completely omitted:

```
z.union([z.array(z.string()), z.string(), z.undefined(), z.null()]),
```

For example:

```
// Projects frontmatter
const projectsCollection = defineCollection({
    type: 'content',
    schema: ({image}) => z.object({
      title: z.string(),
      ...
      'usage environment': z.union([z.array(z.string()), z.string(), z.undefined(), z.null()]),
      'new tag category': z.union([z.array(z.string()), z.string(), z.undefined(), z.null()]),
      'second new tag category': z.union([z.array(z.string()), z.string(), z.undefined(), z.null()]),
    })
});
```

6. Save your changes and [preview your changes on the dev server](#preview-and-commit-your-changes). If your tag categories are successfully added, you will see them displayed in the filter menu on the `/projects` page.

**Case 2 - Add new tag option**

1. In your project file, simply add the tag option you would like in the array of options for the tag category. For example:

```
programming language: [C++, Java, ..., Your New Option]
```

2. **Exception:** If you add a new tag option to `associated labs and projects`, please also add the lab or project name and a corresponding URL to the `/src/data/labNamesUrl.js` file.

### Preview and commit your changes

1. Preview your changes on the local dev server at `localhost:4321`.
2. When you're done editing the project file and adding optional images, commit your changes and push them to GitHub.

### Open a pull request

1. Go to your repository on GitHub - on the banner indicating your branch is one commit ahead, click **Contribute** and then **Open a pull request**.
2. Title your pull request "Add a project - [Project Name]". Include in the description any helpful notes or specific requests.
3. In the panel on the right side of the screen, click the gear icon next to "Labels." Select the following labels, as appropriate:
   - New Project Page
   - Edit Project Page
   - New tags added
4. When you're finsihed, click "Create pull request" - your PR will be reviewed by the maintainers of the OSSI site. You may receive requests for changes before your PR is approved.
