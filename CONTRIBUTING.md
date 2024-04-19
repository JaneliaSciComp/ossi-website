# Contributing Guidelines

## Contents

- [Prerequesites](#prerequisites)
- [Set-up](#set-up)
- [Add a new project](#add-a-new-project)
- [Edit a project](#edit-a-project)
  - [Edit the frontmatter](#edit-the-frontmatter)
  - [Guidance for tag variables](#guidance-for-tag-variables)
  - [Optional - edit the project description](#optional---edit-the-project-description)
  - [Optional - add an image](#optional---add-an-image)
  - [Requesting new tag categories or options](#requesting-new-tag-categories-or-options)
- [Preview and push your changes to GitHub](#preview-your-project-page-and-push-your-changes-to-github)
- [Open a pull request](#open-a-pull-request)

## Prerequisites

1. A **[GitHub account](https://docs.GitHub.com/en/get-started/quickstart/creating-an-account-on-GitHub)**
2. A **code editor** (e.g., [Visual Studio Code](https://code.visualstudio.com/download)) installed on your local computer
3. **Git** installed on your local computer
   - Need to install Git? [Download it here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
4. **Node.js (v18.14.1 or later) and npm** (comes installed with Node) installed on your local computer
   - Need to install Node? [Download it here](https://nodejs.org/en/download).

Want to check if you have Git, Node, and npm installed, or to confirm that your installation worked? Use the below commands in the terminal. If the software is successfully installed, each command will return the corresponding software's version number to the terminal.

```
git -v
node -v
npm -v
```

## Set-up

**Fork the OSSI website repository to create your own copy of the repository on your GitHub account.**

1.  On GitHub.com, naviagate to the [JaneliaSciComp/ossi-website](https://github.com/JaneliaSciComp/ossi-website) repository page.

2.  In the upper-right corner of the page, click **Fork**.
    ![Fork button on the GitHub repository page](./public/readme-images/fork.png)

3.  On the next page, you can keep the defaults and click **Create Fork** in the lower right. Or, optionally, you can change the repository name or description to be different than ossi-website, to further distinguish your copy from the original repository.

**Clone your forked repository, to make it available on your local computer.**

1.  On the [JaneliaSciComp/ossi-website](https://github.com/JaneliaSciComp/ossi-website) repository page, above the list of files, click the green **Code** button.

2.  In the dropdown that appears, select the **SSH** tab.

3.  Click the **Copy** icon found to the right of the SSH key.
    ![Green code button and associated dropdown menu on the GitHub repository page](./public/readme-images/clone.png)

**Note**: If you see an error like the below when attempting to copy the SSH key, please follow the instructions in [this tutorial](https://sbme-tutorials.github.io/2019/data-structures/notes/public_key.html) to create a public SSH key for your GitHub account.
![Error message on GitHub.com indicating the account does not have a public SSH key](./public/readme-images/SSH-error.png)

4.  Open a new terminal in your code editor.

5.  Change the current working directory to the location where you want the cloned directory, e.g.,:

```
cd PATH/TO/DESIRED/LOCATION/HERE
```

6.  Type `git clone` and then paste the SSH key you just copied. E.g.,:

```
git clone git@github.com:YOUR-USERNAME/YOUR-REPO-NAME.git
```

7.  Hit enter to clone the repo onto your local computer. You should see output in the terminal like the below.
    ![Sample terminal output after using the command to clone a GitHub repo](./public/readme-images/clone-2.png)

**Install the repository dependencies and start the local dev server to preview a local copy of the website.**

1.  In the terminal of the code editor, navigate to the directory you just created by typing `cd` and the name you gave your repository copy. For example, in the above image, the repository name is `copy-ossi-website`.

```
cd YOUR-REPOSITORY-NAME
```

2.  Type the below two commands in the terminal - the first command installs dependencies and the second starts the local server and opens it automatically in your default web browswer.

```
npm install
npm run dev
```

**Note:** If the local server does not automatically appear in your web browser, input `localhost:4321/ossi-website` into your preferred web browser to view the website.

## Add a new project

1. Use your code editor GUI to open the directory you just created to your local computer so that you can see all the files.

1. Below is an abbreviated file tree showing key folders and files you'll find in your local copy of the repository. Open the `src/content/projects` folder. If a Markdown file for your project already exists in this folder - skip to [Edit a project](#edit-a-project)

```text
/
├── public/
│   └── project-images/
└── src/
    └── content/
        └── projects/
            └── _project-template.md
```

3. Copy `/src/content/projects/_project-template.md` and paste a duplicate of the file into the same folder (`/src/content/projects/`). Rename the template file with your software project's title with dashes connecting each word. For example, if your software is called "Awesome Software", you would rename the file as `Awesome-Software.md`.

Open your project file to view its contents. At the top of the file are data sandwiched between triple-dashes (---). These data are collectively called **frontmatter** and are used by Astro to populate the webpage content for a project.

4. **Start by editing the `title` value - this must match the name of your project file, without the dashes.** For example, if your project file is named `Awesome-Project.md`, your `title` entry should appear as:

```
title: Awesome Software
```

## Edit a project

At the top of your project file are data sandwiched between triple-dashes (---). These data are collectively referred to as **frontmatter** and are used by Astro to populate the content on your project's webpage.

### Edit the frontmatter

- Follow the guidance in the table below to fill out your project file's frontmatter. You can also refer to `/src/projects/_project-template.md` for further guidance and examples for each data variable.

- For all variables, only edit the values to the right of the colon in the project template (e.g., for `title:`, delete and replace "Your project title" circled in red below). Editing values to the left of the colon may result in errors being thrown by the local server.
  ![The top of the project template file, showing some sample frontmatter](./public/readme-images/frontmatter.png)

- For each **required** variable, you must provide a value or an error will be thrown when you try to view your project page on the local server.

- For each **optional** variable, **if you do not wish to provide a value you must comment out or delete the entire entry.**

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
| `development team`               | Optional                                                           | [Tag variable - see guidance](#guidance-for-tag-variables)                                                                                                                                                                                                              |
| `programming language`           | Optional                                                           | [Tag variable - see guidance](#guidance-for-tag-variables)                                                                                                                                                                                                              |
| `open source license`            | Optional                                                           | [Tag variable - see guidance](#guidance-for-tag-variables)                                                                                                                                                                                                              |
| `software type`                  | Optional                                                           | [Tag variable - see guidance](#guidance-for-tag-variables)                                                                                                                                                                                                              |
| `use case`                       | Optional                                                           | [Tag variable - see guidance](#guidance-for-tag-variables)                                                                                                                                                                                                              |
| `usage environment`              | Optional                                                           | [Tag variable - see guidance](#guidance-for-tag-variables)                                                                                                                                                                                                              |
| `software ecosystem`             | Optional                                                           | [Tag variable - see guidance](#guidance-for-tag-variables)                                                                                                                                                                                                              |
| `supported file types`           | Optional                                                           | [Tag variable - see guidance](#guidance-for-tag-variables)                                                                                                                                                                                                              |

### Guidance for "tag" variables

Tags are used to allow website visitors to filter displayed projects.

- **Use only the tag categories (in blue below) and options (in orange below) provided in the project template.** If the spelling or capitalization is incorrect, you will be asked to go back and edit the your project file to ensure consistency across projects.
- Delete any tag options provided in the project template that don't apply to your project. Keep relevant tags inside the square brackets, separated by commas.
- If an entire tag category is not relevant to your project, delete or comment out the entire category and associated options.
  ![Sample tag categories and options from the project template](./public/readme-images/tags.png)
- We strive to keep the tag categories and example options up-to-date in the project template, but the final reference for the currently-allowed tag categories and options can always be found [here](https://github.com/JaneliaSciComp/ossi-website/blob/main/.github/actions/validTagsList.json).
- If you feel there is an additional tag category or option required to describe your project - read the guidance on [Requesting new tag categories or options](#requesting-new-tag-categories-or-options).

### Optional - Edit the project description

You are strongly encouraged to use your software project's GitHub README as it's description. This will minimize the amount of work required by the maintainer to keep the project description and details up-to-date.

To use your project's GitHub README as the project description:

1. Ensure your project is public on GitHub
2. Delete all the text in your project's Markdown file following the closing triple dashes (---) on the frontmatter.

If you would rather provide a custom project description, you can do so by typing it below the closing triple dashes on the frontmatter. You can use [Markdown syntax](https://www.markdownguide.org/basic-syntax/) to add hyperlinks, layout/text effects (e.g., headings, lists, **bold** or _italic_ text), etc.

### Optional - Add an image

1. Add your desired image to `/public/project-images/`, using a filename without spaces.
2. Edit your project file to include a value for `image file` as outlined in the [table above](#edit-the-frontmatter).

### Requesting new tag categories or options

- _Tag categories are the the variable name to the left of the colon in the project Markdown file._
- _Tag options are the values in the square brackets to the right of the colon._
  ![Sample tag categories and options from the project template](./public/readme-images/tags.png)

_Do not add the new tag category or option to your project's template._ Open a separate [pull request](#open-a-pull-request) listing the new tag category(ies) and/or tag options(s) you wish to add. Make sure to select the "new tags added" label.

## Preview your project page and push your changes to GitHub

**Preview your project page on the local dev server.**

1.  Make sure you've saved all your changes on your local computer.

2.  If you don't already have the local dev server running, follow [Step 3 in **Set Up**](#set-up).

3.  Navigate in your web browser to:

```
localhost:4321/ossi-webiste/projects/YOUR-PROJECT-NAME
```

**When you're done editing the project file and adding optional images, commit your changes and push them to GitHub.**

1.  Commit your project file locally by typing the following in your code editor's terminal. Modify the message on the commit (wrapped in double quotes) to indicate whether you are adding or editing your project.

```
git add src/content/projects/YOUR-PROJECT-NAME.md
git commit -m "Add/edit YOUR PROJECT NAME"
```

2.  Push your changes to your online GitHub repository by entering the following in your code editor's terminal. Note - this code snippet assumes you are working on the default "main" branch. If you created a branch in your GitHub repo for this specific change, edit "main" to your branch name below.

```
git push origin main
```

## Open a pull request

Navigate to your copy of the ossi-website repository on GitHub.com. Along the top navigation tabs:

1.  Select **Pull Requests**.

2.  On the page that opens, click the green **New pull request** button in the upper right corner.

![GitHub.com interface to view existing and open new pull requests](./public/readme-images/open-pr.png)

A page title **Comparing changes** will open. In the dropdown menus:

1.  Check that your pull request is originating from the correct place (your repo and branch) and going to the correct place (the original Janelia/ossi-website repo) - see the exact settings written out below.

- **Base repository** is set to **JaneliaSciComp/ossi-website**
- **Base** is set to **main**
- **Head** repository is set to **YOUR-USERNAME/YOUR-REPO-NAME**
- **Compare** is set to **main** (unless you opened a specific branch to add/edit your project on)

2.  Then click the green **New pull request** button.

![GitHub.com interface to set the base and head of a pull request](./public/readme-images/open-pr-2.png)

The **Open pull request** page will open.

1. Add a title in the format of "Add/edit YOUR PROJECT NAME", if needed. If you only made one commit, the **Add a title** text box should autopopulate as from your commit message. Optionally, you can add specific requests or explanations to the **Add a description** text box.

2. In the panel on the right side of the screen, (2) select **Labels**. In the dropdown, select the relevant labels for your pull request, e.g.,:

   - New Project Page
   - Edit Project Page
   - New Tags

3. Click the green **Create pull request** button to submit your pull request. **Note**: leave the option **Allow edits by maintainers** checked. This will allow the website maintainers to help edit your project file before completing the pull request, if needed.
   ![GitHub.com interface to set the title, description, and other details about a pull request. Also includes the button to submit the pull request](./public/readme-images/open-pr-3.png)

After you submit your pull request, an automated check will run to ensure your tag categories and options are valid. If the check fails, a comment will publish to your pull request, indicating where the problem is.

![Comment on a GitHub pull request indicating that the project file has invalid tags](./public/readme-images/tag-validation-fail.png)

To fix the error, return to your code editor and make the required changes to the file. Then follow the instructions to [commit and push your changes](#preview-your-project-page-and-push-your-changes-to-github). These changes will be added to the open pull request. Once there are no tag validation errors, a success comment will post to your pull request.

![Comment on a GitHub pull request indicating the modified project files have valid tags](./public/readme-images/tag-validation-success.png)

Your PR will be reviewed by the maintainers of the OSSI site. You may receive requests for changes before your PR is approved.

## Thank you for your contribution!
