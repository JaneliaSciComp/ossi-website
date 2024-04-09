---
title: Entrypoints
tagline: Support multiple entrypoint scripts in a container for use in containerized scientific tools.
author names: Rokicki
project type: [Other]
github repository link array: [https://github.com/JaneliaSciComp/entrypoints]
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
associated labs and projects: [
    # Branson,
    # Pachitariu,
    # Saalfeld,
    # Spruston,
    # Stringer,
    # Turaga,
    # CellMap,
    # FlyEM,
    # FlyLight,
    # MouseLight,
    # MultiFISH,
    Scientific Computing Software,
  ]
# software type:
#   [
#     Command line application,
#     Framework,
#     Native application,
#     Package,
#     Service,
#     Web application,
#     Website,
#   ]
programming language: [Go]
# software ecosystem:
#   [
#     BigDataViewer,
#     Fiji,
#     ImgLib2,
#     Janelia Workstation,
#     Java Virtual Machine,
#     Napari,
#   ]
open source license: [BSD-3 Clause]
# supported file types: [N5, NWB, OME-Zarr, SWC, TIFF, Zeiss CZI, mpeg, avi]
# experimental techniques:
#   [
#     Calcium imaging,
#     Confocal light microscopy (LM),
#     Correlative light EM (CLEM),
#     Electron microscopy (EM),
#     Expansion microscopy (ExM),
#     Lightsheet fluorescence microscopy (LFSM),
#     Neural recording,
#     Single-molecule localization microscopy (SMLM),
#     Spatial transcriptomics,
#   ]
software use case: [
    # Annotation,
    # Electrophysiology analysis,
    # Image analysis,
    # Image registration,
    # Sequence analysis,
    # Tool packaging/distribution,
    # Video analysis,
    Containerization,
  ]
# usage environment:
#   [
#     Cloud,
#     Google Colab,
#     HPC cluster,
#     Jupyter notebook,
#     Local installation,
#     Web browser,
#   ]
---

Simple support for multiple entrypoint scripts in an OCI container. Just install this tiny binary as your ENTRYPOINT and put all of your entrypoint shell scripts in one directory. The binary takes care of providing a listing of valid "apps" and lets the user invoke them without knowing the internals of the container filesystem.

## Installation

The following Dockerfile commands install the `entrypoint` binary into /app/entrypoints and set it as the entrypoint:

```
ARG ENTRYPOINTS_VERSION=latest
WORKDIR app
RUN curl -sL https://github.com/JaneliaSciComp/entrypoints/releases/download/${ENTRYPOINTS_VERSION}/entrypoints_linux_x86_64.tar.gz | tar -xz -C /app
ENTRYPOINT [ "/app/entrypoints", "-s", "/app/scripts/cmd" ]
```

A multi-stage build is recommended to improve build speed:

```
FROM janeliascicomp/common-tools:1.0.2 as entrypoints-builder
ARG ENTRYPOINTS_VERSION=0.1.1
RUN curl -sL https://github.com/JaneliaSciComp/entrypoints/releases/download/${ENTRYPOINTS_VERSION}/entrypoints_linux_x86_64.tar.gz | tar -xz -C /tmp
```

In the final container:

```
COPY --from=entrypoints-builder --chown=root:root /tmp/entrypoints /app/entrypoints
ENTRYPOINT [ "/app/entrypoints", "-s", "/app/scripts/cmd" ]

```

See also: [SCIF](https://sci-f.github.io/)

## Development

### Build

```
go install
```

### Release

```
VERSION=<version number>
git tag -a $VERSION -m "Release $VERSION"
git push origin $VERSION
goreleaser --rm-dist
```
