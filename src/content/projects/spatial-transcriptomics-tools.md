---
title: Spatial transcriptomics tools
tagline: Maintain and extend RS-FISH (smFISH spot localization) and STIM (handling spatial transcriptomics data).
author names: Preibisch et al.
project type: [OSSI - current]
OSSI proposal link: https://drive.google.com/file/d/1Bjtqz49JdwpXg9rA_Xk_0qjQuV7fwKvu/view
github repository link array:
  [
    https://github.com/PreibischLab/RS-FISH,
    https://github.com/PreibischLab/STIM,
  ]
github repository text array: [GitHub RS-FISH, GitHub STIM]
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
publication DOI array:
  [
    https://doi.org/10.1101/2021.03.09.434205,
    https://doi.org/10.1101/2021.12.07.471629,
  ]
publication text array: [Bahry et al. (2021), Preibisch et al. (2021)]
# related blog posts: [Optional-file-name]
# image file: ./optional-file-path.jpg
# image alt text: Alt text is required if you upload an image file
associated labs and projects: [Scientific Computing Software Support Team]
software type: [Command line application, Framework, Native application]
programming language: [Java]
software ecosystem: [BigDataViewer, Fiji]
open source license: [GPL-2.0, GPL-3.0]
supported file types: [N5]
related experimental techniques: [EASI-FISH, FISH, MERFISH, SlideSeq]
software use case: [Image analysis, Sequence analysis]
usage environment: [HPC cluster, Local installation]
---

Spatially resolved transcriptomics is the description for a range of methods that can identify mRNA readouts for many genes at many locations inside a cell, potentially on a tissue level. The field is currently growing at an immense pace and is transforming biological sciences. Methods for spatial transcriptomics can generally be divided into imaging-based methods such as MERFISH and sequencing-based methods such as SlideSeq. Excitingly, this development leads to a merge of the fields of image and sequence analysis.

We developed two independent software solutions for spatial transcriptomics:

- [Radial Symmetry-FISH (RS-FISH)](https://github.com/PreibischLab/RS-FISH) accurately, robustly, and quickly detects single-molecule spots in 2D & 3D, making it applicable to several key assays, including single-molecule FISH (smFISH), spatial transcriptomics, and spatial genomics. It scales from small to very large images using workstations, clusters or the cloud, allows interactive parameter tuning and provides spot visualization of even very large datasets. It is based on ImgLib2, BigDataViewer, the N5 file format and Apache Spark. Currently, it is the only generic tool that can handle very large images. It is already used in the community and at Janelia, for example by the EASI-FISH project, the Sternson lab, or in the sequencing facility.
- [STIM](https://github.com/PreibischLab/STIM) is a framework for storing, exploring, visualizing, and processing high-throughput spatial sequencing datasets and can for example be used for robust alignment for slices of SlideSeq and Visium datasets. It is based on ImgLib2, BigDataViewer, and the N5 file format. STIM is not yet used at Janelia, but the community started to adapt it for the handling of sequencing-based spatially resolved datasets, as it is able to transfer image processing concepts such as spatial filtering to irregularly-spaced sequencing datasets.

Janelia is currently a leading institution in image analysis and much of its research is focused on imaging-based methods. We anticipatespatial transcriptomics will become an integral part of Janelia science. Therefore, we think it is important to maintain and further develop tools that can handle and process such data.
