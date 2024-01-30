# Open Source Science Initative (OSSI) at HHMI Janelia website

## Overview
- The source code for the Open Source Science Initative (OSSI) at HHMI Janelia website. The site showcases OSSI-supported projects.
- Built with the static-site-generator [Astro](https://GitHub.com/withastro/astro), using components and styling from the [Astrowind](https://GitHub.com/onwidget/astrowind/tree/main) template.

## How to add/edit your OSSI-supported project
### Table of Contents
- [Prerequesites](#prerequisites)
- [Set-up](#set-up)
- [Edit the project file](#edit-the-project-file)
- [Optional - add an image](#optional---adding-an-image)
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

3. Install dependencies and start the local dev server at `localhost:4321`.
```
npm install
npm run dev
```
4. Copy `project-template.md` and paste it into `/src/content/projects` (see key folders and files below). Rename the template with your project's title, e.g., `my-awesome-project.md`, with dashes connecting each word.

```text
/
├── public/
└── src/
    └── project-template.md
    └── content/
        └── projects/
```


### Edit the project file

1. Open your newly-created project file. At the top of the file are data sandwiched between triple-dashes (---). These data are used by the Static Site Generator to create the webpage for your project. **Follow the guidance in the table below to edit the data for your project.**

2. **The first item to edit is the `title`- this should match the name of your project file, without the dashes.** For example, if your project file is named `my-awesome-project.md`, your project title should be `my awesome project`.

3. If you'd like to add an image for your project, follow the optional step [adding an image](#adding-an-image). 

**Notes:**
- For each *required* variable, delete the placeholder text to the right of the colon in the template file and use the table guidance to provide your own value.

- For each *optional* variable, if you do not wish to provide a value, delete or comment out  the entire entry.

- **For "tag" variables:**
    - Tags are used to allow website visitors to filter displayed projects. The current tag categories and example options are provided in the project template.
    - Delete any tags provided in the project template that don't apply to your project. Keep relevant tags inside the square brackets, separated by commas. 
    - If you feel there is an additional tag category or option required to describe your project - read the guidance on [Adding new tag categories or options](#optional---adding-new-tag-categories-or-options).
    


| Variable name             | Required or optional      |How to complete                                  |
| :------------------------ | :-------------------------|:----------------------------------------------- |
| `title`                   | Required                  |Your project title.                              |
| `tagline`                 | Required                  |One or two sentences describing your project.    |
| `author names`            | Required                  |The names of the project authors, written exactly as you want them to appear on the webpage. For example, do not include square brackets with author names separated by commas for a list, as with some of the other variables below - instead, write out how you would like the author list to appear.      |
| `github repository link`         | Optional                  |The link to the project GitHub repository, e.g., https://github.com/JaneliaSciComp/ossi-website     |
| `project homepage link`         | Optional                  |If your project has it's own website, other than a GitHub repository, provide it here. For example, the HortaCloud project's [documentation site](https://hortacloud.janelia.org/).     |
| `image file`       |Optional                  | Format as: ./[your-image-file-name-with-dashes-between-words].[your image file extension]<br/> Then see [Adding an image](#optional---adding-an-image) for more information about uploading an image. |
| `image alt text` | Optional;<br/> Required if you add an image file                 |A brief description of the image    |
| `associated labs and projects`    | Optional  | [Tag variable - see guidance](#edit-the-project-file) <br/> *Examples:* Branson, Pachitariu, Preibisch, Saalfeld, Spruston, Stringer, Turaga, COSEM, FlyEM, FlyLight, MouseLight, MultiFISH, Scientific Computing Software <br/> *Important:* Additional steps are required if adding a new lab or project name option - please see [Case 2 under Adding new tag categories or options](#optional---adding-new-tag-categories-or-options)  |
| `scientific domain`        | Optional  | [Tag variable - see guidance](#edit-the-project-file) <br/> *Examples:* Animal behavior, Bioimaging, Deep learning, Electrophysiology, Machine learning, Neuroscience, Spatial transcriptomics  |
| `model organism`        | Optional  | [Tag variable - see guidance](#edit-the-project-file) <br/> *Examples:* C. Elegans, Fly, Mouse  |
| `software type`        | Optional  | [Tag variable - see guidance](#edit-the-project-file) <br/> *Examples:* Command line application, Framework, Native application, Package, Service, Web application, Website  |
| `programming language`        | Optional  | [Tag variable - see guidance](#edit-the-project-file) <br/> *Examples:* C++, Java, Julia, Kotlin, MATLAB, Nextflow, Python  |
| `software ecosystem`        | Optional  | [Tag variable - see guidance](#edit-the-project-file) <br/> *Examples:* BigDataViewer, Fiji, ImgLib2, Janelia Workstation, Java Virtual Machine, Napari  |
| `open source license`        | Optional  | [Tag variable - see guidance](#edit-the-project-file) <br/> *Examples:* BDS-3 Clause, CC-by-0, GPL, MIT  |
| `supported file types`        | Optional  | [Tag variable - see guidance](#edit-the-project-file) <br/> *Examples:* N5, NWB, OME-Zarr, SWC, TIFF, Zeiss CZI  |
| `related laboratory techniques`        | Optional  | [Tag variable - see guidance](#edit-the-project-file) <br/> *Examples:* Calcium imaging, Confocal light microscopy (LM), Correlative light EM (CLEM), EASI-FISH, Electron microscopy (EM), Expansion microscopy (ExM), FISH, Lightsheet fluorescence microscopy (LFSM), MERFISH, Neural recording, Single-molecule localization microscopy (SMLM), SlideSeq, Two-photon imaging  |
| `software use case`        | Optional  | [Tag variable - see guidance](#edit-the-project-file) <br/> *Examples:* Annotation, Electrophysiology analysis, Image analysis, Image registration, Sequence analysis, Tool packaging/distribution, Video analysis  |
| `usage environment`        | Optional  | [Tag variable - see guidance](#edit-the-project-file) <br/> *Examples:* Cloud, Google Colab, HPC cluster, Jupyter notebook, Local installation, Web browser  |
| `related blog posts`        | Optional  | If your project has an associated blog post file, provide the file name here in square brackets, without the .md extenstion (e.g., `[my-related-blog-post-file]`). If there is more than one related blog posts separate the file names by commas.  |

### Optional - Adding an image
1. Add your desired image to `/src/content/projects`, using a filenmae without spaces.
2. Edit your project file to include a value for `image file` as outlined in [Edit the project file](#edit-the-project-file).

*Note:* If, after adding your image, you get an error when trying to view your project page on the local dev server, try manually installing the Sharp package by running `npm install sharp`, and restarting your local server. Sharp is the image service used by `astro:assets`, and it requires a manual install when using strict package managers. Read more in the [Astro docs](https://docs.astro.build/en/reference/errors/missing-sharp/).

### Optional - Adding new tag categories or options
*Tag categories are the the variable name to the left of the colon in the project Markdown file.*
*Tag options are the values in the square brackets to the right of the colon.*

**Case 1 - Add new tag category**
1. Add a new line in your project file's frontmatter and type your new tag category, followed by a colon and the tag options you wish to assign to your project wrapped in square brackets with commas separating each option. *Note - the options you add should not be exhaustive. They should only be what you require to describe your project.* 
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
5. Save your changes and [preview your changes on the dev server](#preview-and-commit-your-changes). If your tag categories are successfully added, you will see them displayed in the filter menu on the `/projects` page.

**Case 2 - Add new tag option**
1. In your project file, simply add the tag option you would like in the array of options for the tag category. For example:
```
model organism: [C. Elegans, Fly, Mouse, Your New Option]
```
2. **Exception:** If you add a new tag option to `associated labs and projects`, please also add the lab or project name and a corresponding URL to the `/src/data/labNamesUrl.js` file.
3. Please note in your pull request that you added a new tag option.


### Preview and commit your changes
1. Preview your changes on the local dev server at `localhost:4321`.
2. When you're done editing the project file and adding optional images, commit your changes and push them to GitHub.

### Open a pull request
1. Go to your repository on GitHub - on the banner indicating your branch is one commit ahead, click **Contribute** and then **Open a pull request**. 
2. Title your pull request "Add a project - [Project Name]". Include in the description any helpful notes or specific requests.
3. Create your pull request - your request will be reviewed by the mainters of the OSSI site. You may receive requests for changes before your request is approved.
