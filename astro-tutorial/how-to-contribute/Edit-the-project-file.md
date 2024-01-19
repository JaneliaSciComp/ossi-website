# Edit the project file

1. Orient yourself to the `project-template.md` file. At the top of the file are data sandwiched between triple-dashes (---). These data are used by the Static Site Generator to create the webpage for your project. Follow the guidance below to edit the data for your project.
<br/>
2. The first item to edit is the title - this will also be used to name your project file. For example, if your project title is `my awesome project`, name your project file `my-awesome-project.md`, with dashes connecting each word.
<br/>

| Variable name                   | How to complete                                           |
| :------------------------ | :----------------------------------------------- |
| title             | Your project title. <br/> *If the title includes a comma, use quotes around your project title.*  |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                    