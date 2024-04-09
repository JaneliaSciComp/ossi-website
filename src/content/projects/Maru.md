---
title: Maru
tagline: Maru is an opinionated command-line interface for quickly and easily containerizing scientific applications.
author names: Rokicki
project type: [Other]
github repository link array: [https://github.com/JaneliaSciComp/maru]
# github repository text array:
#   [
#     Text for GitHub link 1,
#     Text for GitHub link 2,
#     Required if more than one GitHub link,
#   ]
# project homepage link array:
#   [
#     Optional URL to a homepage for the project (not a GitHub repository),
#     Can provide more than one link,
#   ]
# project homepage text array:
#   [
#     Text to appear for homepage link 1,
#     Text to appear for homepage link 2,
#     Required only if more than one homepage,
#   ]
# publication DOI array:
#   [https://doi.org/10.DOI.1, https://doi.org/10.DOI.2, https://doi.org/10.DOI.n]
# publication text array:
#   [
#     text you want to appear for each DOI link,
#     "Suggested format: Author et al. (YYYY)",
#     "if text has colons: or commas followed by a space, use quotes",
#   ]
# related blog posts: [Optional-file-name]
# image file: ./optional-file-path.jpg
# image alt text: Alt text is required if you upload an image file
development team: [Scientific Computing Software]
programming language: [Go]
open source license: [BSD-3 Clause]
use case: [Containerization]
---

Maru is an opinionated command-line interface for quickly and easily containerizing scientific applications, enabling reproducible results and low-friction collaboration.

Maru provides a CLI wizard for easily creating containers of various flavors (Python, Java, MATLAB, Fiji, etc.) which follow best practices and are optimized for performance. It also makes it easy to keep your container versioned and provides convenience commands so that you can focus on your algorithms instead of learning arcane details about containers.

## Get Maru

Maru depends on [Docker](https://docs.docker.com/get-docker/) and/or [Singularity](https://github.com/hpcng/singularity).

The following one-liners install the `maru` binary into /usr/local/bin:

### Linux

```
curl -skL https://data.janelia.org/maru-linux | sudo tar -xz -C /usr/local/bin
```

### MacOS

```
curl -skL https://data.janelia.org/maru-macos | sudo tar -xz -C /usr/local/bin
```

You can also download the [latest release](https://github.com/JaneliaSciComp/maru/releases/latest) and manually copy it to anywhere in your `$PATH`.

## Usage

Maru assumes that your project is committed to a remote git repository. During the container build, Maru will clone your repository and run any build commands you specify.

First, initialize the project configuration:

```
maru init
```

This is an interactive process that will ask you questions about where to find your project and how to build it.

Now you can build your project into a Docker container:

```
maru build
```

From your project directory, you can always run the current version of your Docker container:

```
maru run [args to app]
```

This will also output the Docker command used to run the container, which you can then use in scripts or pipelines to integrate your app into a larger workflow.

You can also run the Docker container using Singularity (e.g. on an HPC cluster):

```
maru singularity run [args to app]
```

## Documentation

Maru has lots of features for building, releasing, and distributing your containers.

For more details, see the [User Manual](docs/UserManual.md).

For developers, there are some notes available about [building and releasing Maru](docs/Development.md).
