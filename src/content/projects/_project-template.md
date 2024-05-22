---
title: Required. Your project title.
tagline: "Required. 1-2 sentences that describe your project. An aside: if you use a colon in a field value, you must wrap the entire phrase in quotes. Otherwise, quotes are not required."
maintainer: Required. Name of the person responsible for maintaining this project page. For internal use/reference - not posted to the website.
#project type - Required. Pick one of the three options - delete the other two.
project type: [OSSI - current, OSSI - alumni, Other]
OSSI proposal link: Required if your project is OSSI-funded. Preferred - upload the proposal as a PDF to `public/proposals` and provide the link in the format `../../proposals/PROPOSAL.pdf`. Other option - URL to the externally hosted proposal.
github link: Required. Link to GitHub repository
documentation link: Required. Link to documentation - can be the same as the GitHub repo if the README is the documentation
installation instructions link: Required. Link to installation instructions - can be the same as the GitHub repo
preferred contact method: "Creates the link for the 'Reach out for help' button on the project page. Encouraged if there is a preferred way for users to reach out for help other than creating an issue in the project's GitHub repo. Examples: link to Image.sc forum, or an email in the format of mailto:email@example.com."
how to cite text: "If your software doesn't have an associated published paper or DOI, delete or comment-out this field to use your GitHub repo as the default. Otherwise, provide the citation for your software - wrap in quotes to ensure colons are interpreted correctly. "
how to cite link: "https://doi.org/example - wrap entire link in quotes. If a DOI is not available, then delete or comment-out this field to use your GitHub repo as the default."
additional links array:
  [
    Optional additional external links,
    For example - to a project hompage,
    External blog posts,
    Additional related publications,
    Etc.,
  ]
additional links text array:
  [
    Optional. The display text you wish to appear for each link provided above,
    Display text for link 2,
    Display text for link 3,
    Display text for link 4,
    Etc.,
  ]
related blog posts:
  [Optional, Only-for-blog-posts-hosted-on-this-site, Optional-file-name]
image file: ./optional-file-path--only-one-file-currently-supported.jpg
image caption: Required if you upload an image file
youtube url: https://optional-youtube-url.com
youtube caption: Required if you provide a youtube url
#Optional "tag" fields. Select tags from the provided options - delete the options that are not applicable. If you feel another option is required to describe your project, add it and then note this in your pull request.
development team:
  [
    Branson Lab,
    Dudman Lab,
    Pachitariu Lab,
    Preibisch Lab,
    Saalfeld Lab,
    Stringer Lab,
    Turaga Lab,
    CellMap,
    FlyEM,
    FlyLight,
    MouseLight,
    MultiFISH,
    Scientific Computing Software,
  ]
programming language:
  [
    C++,
    Go,
    Java,
    Julia,
    Kotlin,
    MATLAB,
    Nextflow,
    Python,
    Javascript,
    Typescript,
  ]
open source license: [BSD-3 Clause, CC-by-0, GPL-2.0, GPL-3.0, MIT]
software type:
  [
    Command line application,
    Framework,
    Native application,
    Package,
    Service,
    Web application,
    Website,
  ]
use case:
  [
    Annotation,
    Calcium imaging,
    Confocal light microscopy (LM),
    Containerization,
    Correlative light EM (CLEM),
    Electron microscopy (EM),
    Electrophysiology,
    Expansion microscopy (ExM),
    Image registration,
    Lightsheet fluorescence microscopy (LFSM),
    Neural recording,
    Sequence analysis,
    Single-molecule localization microscopy (SMLM),
    Spatial transcriptomics,
    Tool packaging/distribution,
  ]
usage environment:
  [
    Cloud,
    Google Colab,
    HPC cluster,
    Jupyter notebook,
    Local installation,
    Web browser,
  ]
software ecosystem:
  [
    BigDataViewer,
    Fiji,
    ImgLib2,
    Janelia Workstation,
    Java Virtual Machine,
    Napari,
  ]
supported file types:
  [
    "HDF5",
    "N5",
    "NWB",
    "OBJ",
    "OME-Zarr",
    "SWC",
    "H5J",
    "TIFF",
    "Zeiss CZI",
    "mpeg",
    "avi",
  ]
---

To use your project's GitHub README as your project's description - delete all text below the triple dash (---) . Note - your GitHub repo must be public for this to work. This option is strongly encouraged - it will minimize the effort required on your part to keep your software information up to date on this site.

If you wish to provide an alternative description, you can write it here. Separate each paragraph with a blank line. If desired, use [Markdown syntax](https://www.markdownguide.org/basic-syntax/) to add hyperlinks, layout/text effects (e.g., headings, lists, **bold** or _italic_ text), etc.
