# Astro OSSI site

## Overview

This version of the OSSI site is built with [Astro](https://GitHub.com/withastro/astro), following the [Astro "Build a blog" tutorial](https://docs.astro.build/en/tutorial/0-introduction/) and then integrating components from the [Astrowind](https://GitHub.com/onwidget/astrowind/tree/main) template.

[**View the current deployment**](https://earnest-banoffee-0c0dc1.netlify.app/)

## How to contribute to the site
### Table of Contents
- [Prerequesites](#prerequisites)
- [Set-up](#set-up)
- [Edit the project file](#edit-the-project-file)
- [Optional - add an image](#optional---adding-an-image)
- [Preview and commit your changes](#preview-and-commit-your-changes)
- [Open a pull request](#open-a-pull-request)

### Prerequisites
1. A [GitHub account](https://docs.GitHub.com/en/get-started/quickstart/creating-an-account-on-GitHub)
1. A code editor (e.g., [Visual Studio Code](https://code.visualstudio.com/download)), [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git), [Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed on your local computer

### Set-up
**Note:** These instructions assume you are familiar with the GitHub [pull request flow](https://docs.GitHub.com/en/get-started/exploring-projects-on-GitHub/contributing-to-a-project) for contributing to projects.
1. Fork and clone the [OSSI Website Framework Tests repository](https://GitHub.com/allison-truhlar/ossi-website-framework-tests).

1. Open the respository in your local code editor and use the terminal to change the directory to the `astro-tutorial` folder. 

1. Install dependencies and start the local dev server at `localhost:4321`.
```
npm install
npm run dev
```

4. Copy `project-template.md` and paste it into `/src/content/projects`.
<br/>Key folders and files inside `astro-tutorial`:
```text
/
├── public/
└── src/
    └── project-template.md
    └── content/
        └── projects/
```

### Edit the project file

1. Open your copy of the `project-template.md` file. At the top of the file are data sandwiched between triple-dashes (---). These data are used by the Static Site Generator to create the webpage for your project. **Follow the guidance in the table below to edit the data for your project.**

2. **The first item to edit is the `title`, and use this value to name your project file.** For example, if your project title is `my awesome project`, name your project file `my-awesome-project.md`, with dashes connecting each word.

3. If you'd like to add an image for your project, follow the optional step [adding an image](#adding-an-image). 

**Notes:**
- For each *required* variable, delete the placeholder text to the right of the colon in the template file and use the table guidance to provide your own value.

- For each *optional* variable, if you do not wish to provide a value, delete the entire entry.

- **For "tag" variables:**
    - Tags are used to allow website visitors to filter displayed projects. The current tag categories and options are provided in the project template.
    - Delete any tags provided in the project template that don't apply to your project. Keep relevant tags inside the square brackets, separated by commas. 
    - If you feel there is an additional tag category (the variable name to the left of the colon) or an individual tag option within an existing category (the values in the square brackets to the right of the colon) required to describe your project, please feel free to add it - this will be considered as part of your submitted pull request.
<br/>


| Variable name             | Required or optional      |How to complete                                  |
| :------------------------ | :-------------------------|:----------------------------------------------- |
| `title`                   | Required                  |Your project title.                              |
| `tagline`                 | Required                  |One or two sentences describing your project.    |
| `author names`            | Required                  |The names of the project authors, written however you want them to appear on the webpage.      |
| `GitHub repository link`         | Optional                  |The link to the project GitHub repository, e.g., https://GitHub.com/allison-truhlar/ossi-website-framework-tests     |
| `image file`       |Optional                  | Format as: ./[your-image-file-name-with-dashes-between-words].[your image file extension]<br/> Then see [Adding an image](#optional---adding-an-image) for more information about uploading an image. |
| `image alt text` | Optional;<br/> Required if you add an image file                 |A brief description of the image    |
| `associated labs and projects`    | Optional  | Tags - see information [above](#notes) for tag variables. <br/> *Current options* - Branson, Pachitariu, Preibisch, Saalfeld,Spruston, Stringer, Turaga, COSEM, FlyEM, FlyLight, MouseLight, MultiFISH, Scientific Computing Software  |
| `scientific domain`        | Optional  | Tags - see information [above](#notes) for tag variables. <br/> *Current options* - Animal behavior, Bioimaging, Deep learning, Electrophysiology, Machine learning, Neuroscience, Spatial transcriptomics  |
| `model organism`        | Optional  | Tags - see information [above](#notes) for tag variables. <br/> *Current options* - C. Elegans, Fly, Mouse  |
| `software type`        | Optional  | Tags - see information [above](#notes) for tag variables. <br/> *Current options* - Command line application, Framework, Native application, Package, Service, Web application, Website  |
| `programming language`        | Optional  | Tags - see information [above](#notes) for tag variables. <br/> *Current options* - C++, Java, Julia, Kotlin, MATLAB, Nextflow, Python  |
| `software ecosystem`        | Optional  | Tags - see information [above](#notes) for tag variables. <br/> *Current options* - BigDataViewer, Fiji, ImgLib2, Janelia Workstation, Java Virtual Machine, Napari  |
| `open source license`        | Optional  | Tags - see information [above](#notes) for tag variables. <br/> *Current options* - BDS-3 Clause, CC-by-0, GPL, MIT  |
| `supported file types`        | Optional  | Tags - see information [above](#notes) for tag variables. <br/> *Current options* - N5, NWB, OME-Zarr, SWC, TIFF, Zeiss CZI  |
| `related laboratory techniques`        | Optional  | Tags - see information [above](#notes) for tag variables. <br/> *Current options* - Calcium imaging, Confocal light microscopy (LM), Correlative light EM (CLEM), EASI-FISH, Electron microscopy (EM), Expansion microscopy (ExM), FISH, Lightsheet fluorescence microscopy (LFSM), MERFISH, Neural recording, Single-molecule localization microscopy (SMLM), SlideSeq, Two-photon imaging  |
| `software use case`        | Optional  | Tags - see information [above](#notes) for tag variables. <br/> *Current options* - Annotation, Electrophysiology analysis, Image analysis, Image registration, Sequence analysis, Tool packaging/distribution, Video analysis  |
| `usage environment`        | Optional  | Tags - see information [above](#notes) for tag variables. <br/> *Current options* - Cloud, Google Colab, HPC cluster, Jupyter notebook, Local installation, Web browser  |
| `related blog posts`        | Optional  | If your project has an associated blog post file, provide the file name here, without the .md extenstion (e.g., my-related-blog-post-file). If there is more than one related blog posts, list the file names in square brackets, separated by commas.  |

### Optional - Adding an image
1. Add your desired image to `/src/content/projects`, using a filenmae without spaces.
2. Edit your project file to include a value for `image file` as outlined in [Edit the project file](#edit-the-project-file).

### Preview and commit your changes
1. Preview your changes on the local dev server at `localhost:4321`.
2. When you're done editing the project file and adding optional images, commit your changes and push them to GitHub.

### Open a pull request
1. Go to your repository on GitHub - on the banner indicating your branch is one commit ahead, click **Contribute** and then **Open a pull request**. 
2. Title your pull request "Add a project - [Project Name]". Include in the description any helpful notes or specific requests.
3. Create your pull request - your request will be reviewed by the mainters of the OSSI site. You may receive requests for changes before your request is approved.