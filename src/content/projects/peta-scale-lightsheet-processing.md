---
title: Peta-scale lightsheet processing
tagline: Developer-friendly & user-friendly software for processing peta-byte scale lightsheet datasets.
author names: Preibisch & Saalfeld
project type: [OSSI - current]
github repository link array:
  [
    https://github.com/preibischlab/bigstitcher/,
    https://github.com/saalfeldlab/stitching-spark,
  ]
github repository text array: [GitHub BigStitcher, GitHub Stitching-Spark]
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
associated labs and projects:
  [Preibisch, Saalfeld, MultiFISH, Scientific Computing Software]
scientific domain: [Bioimaging, Spatial transcriptomics]
# model organism: [C. Elegans, Fly, Mouse]
software type: [Package]
programming language: [Java, Nextflow]
software ecosystem: [BigDataViewer, ImgLib2]
open source license: [BDS-3 Clause]
supported file types: [N5, TIFF, Zeiss CZI]
related experimental techniques:
  [
    EASI-FISH,
    Expansion microscopy (ExM),
    FISH,
    Lightsheet fluorescence microscopy (LFSM),
  ]
software use case: [Image analysis, Image registration]
usage environment: [Cloud, HPC cluster, Local installation]
---

Lightsheet fluorescence microscopy (LFSM) is an emerging technology that creates a thin sheet of light to illuminate the sample. Emitted light is collected in an orthogonal direction to the lightsheet, which enables optical sectioning with high resolution, low photobleaching and high speed. While LSFM has initially been used to image developing organisms with high spatial and temporal resolution, it has recently gained a lot of attention for imaging large fixed and expanded samples (e.g. [EASI-FISH project](https://doi.org/10.1101/2021.03.08.434304)).

To be able to acquire large volumes (e.g. entire mouse brains), many overlapping three- dimensional image tiles are acquired using microscopic stages, sample rotation, and/or different illumination directions. Additionally, acquired stacks can be sheared due to a non-orthogonal orientation (e.g. 45 degrees) of the stage relative to the detection objective.

To analyze such data, registration as well as fusion or deconvolution of the tiled images is required. A powerful software ecosystem based on [ImgLib2](https://doi.org/10.1093/bioinformatics/bts543) and [BigDataViewer](https://doi.org/10.1038/nmeth.3392) is able to reconstruct such datasets accurately and efficiently.

While the use of lightsheet microscopy in biology is growing, we are lacking resources to maintain and teach these essential, highly successful lightsheet reconstruction software projects.
Excitingly, there are currently several efforts that aim at imaging significantly larger samples (human and monkey tissues, expanded mouse brain, multiplexed samples) by modifying existing lightsheet microscopes. These datasets are expected to reach the peta-byte range, for which no general software solution exists to date1. Further development of the existing software ecosystem to support such large datasets requires significant development effort. However, it would enable pioneering key efforts at the Allen Institute, Cold Spring Harbor Laboratories, and HHMI Janelia and would potentially make peta-scale lightsheet imaging widely available as a technology to the community.

### Scope of the project

- Maintenance of existing lightsheet software
- Combining existing tools into scalable software
- The development of new features to reconstruct large-scale lightsheet microscopy datasets
