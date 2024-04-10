---
title: RS-FISH
tagline: Precise, interactive, fast, and scalable FISH spot detection
maintainer: Preibisch et al.
maintainer contact info: placeholder@gmail.com
project type: [OSSI - current]
OSSI proposal link: https://drive.google.com/file/d/1Bjtqz49JdwpXg9rA_Xk_0qjQuV7fwKvu/view
source code link: https://github.com/PreibischLab/RS-FISH
documentation link: https://github.com/PreibischLab/RS-FISH
installation instructions link: https://github.com/PreibischLab/RS-FISH?tab=readme-ov-file#download
how to cite link: https://doi.org/10.1038/s41592-022-01669-y
how to cite text: "Ella Bahry, Laura Breimann, Marwan Zouinkhi, Leo Epstein, Klim Kolyvanov, Nicholas Mamrak, Benjamin King, Xi Long, Kyle I S Harrington, Timothée Lionnet & Stephan Preibisch Nature Methods 2022, doi: https://doi.org/10.1038/s41592-022-01669-y"
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

[Radial Symmetry-FISH (RS-FISH)](https://github.com/PreibischLab/RS-FISH) accurately, robustly, and quickly detects single-molecule spots in 2D & 3D, making it applicable to several key assays, including single-molecule FISH (smFISH), spatial transcriptomics, and spatial genomics. It scales from small to very large images using workstations, clusters or the cloud, allows interactive parameter tuning and provides spot visualization of even very large datasets. It is based on ImgLib2, BigDataViewer, the N5 file format and Apache Spark. Currently, it is the only generic tool that can handle very large images. It is already used in the community and at Janelia, for example by the EASI-FISH project, the Sternson lab, or in the sequencing facility.
