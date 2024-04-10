---
title: Spatial Transcriptomics as Images Project (STIM)
tagline: A framework for storing, (interactively) viewing, aligning, and processing spatial transcriptomics data.
maintainer: Preibisch et al.
maintainer contact info: placeholder@gmail.com
project type: [OSSI - current]
OSSI proposal link: https://drive.google.com/file/d/1Bjtqz49JdwpXg9rA_Xk_0qjQuV7fwKvu/view
source code link: https://github.com/PreibischLab/STIM
documentation link: https://github.com/PreibischLab/STIM/wiki
how to cite link: https://doi.org/10.1101/2021.12.07.471629
how to cite text: "S. Preibisch, N. Karaiskos, N.Rajewsky, Image-based representation of massive spatial transcriptomics datasets, bioRxiv 2021.12.07.471629 (2021)."
# related blog posts: [Optional-file-name]
# image file: ./optional-file-path.jpg
# image alt text: Alt text is required if you upload an image file
development team: [Scientific Computing Software]
programming language: [Java]
open source license: [GPL-2.0, GPL-3.0]
software type: [Command line application, Framework, Native application]
use case: [Spatial transcriptomics, Sequence analysis]
usage environment: [HPC cluster, Local installation]
software ecosystem: [BigDataViewer, Fiji]
supported file types: [N5]
---

[STIM](https://github.com/PreibischLab/STIM) is a framework for storing, exploring, visualizing, and processing high-throughput spatial sequencing datasets and can for example be used for robust alignment for slices of SlideSeq and Visium datasets. It is based on ImgLib2, BigDataViewer, and the N5 file format. STIM is not yet used at Janelia, but the community started to adapt it for the handling of sequencing-based spatially resolved datasets, as it is able to transfer image processing concepts such as spatial filtering to irregularly-spaced sequencing datasets.
