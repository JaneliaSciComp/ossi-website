---
title: EASI-FISH Pipeline
tagline: Automated analysis pipeline for EASI-FISH spatial transcriptomics data
maintainer: Cristian Goina
maintainer contact info: https://github.com/JaneliaSciComp/multifish/issues
project type: [OSSI - current]
OSSI proposal link: ../../proposals/easifish_pipeline.pdf
github link: https://github.com/JaneliaSciComp/multifish
documentation link: https://janeliascicomp.github.io/multifish/
installation instructions link: https://janeliascicomp.github.io/multifish/QuickStart.html
how to cite link: https://doi.org/10.1016/j.cell.2021.11.024
how to cite text: Wang Y, Eddison M, Fleishman G, Weigert M, Xu S, Wang T, Rokicki K, Goina C, Henry FE, Lemire AL, Schmidt U, Yang H, Svoboda K, Myers EW, Saalfeld S, Korff W, Sternson SM, Tillberg PW. EASI-FISH for thick tissue defines lateral hypothalamus spatio-molecular organization. Cell. 2021 Dec 22;184(26):6361-6377.e24. 
#related blog posts: [Optional-file-name]
image file: EASI-FISH.png
image alt text: Data processed by the EASI-FISH pipeline
development team: [MultiFISH, Scientific Computing Software]
programming language: [Nextflow, Python, Java, MATLAB]
open source license: [BSD-3 Clause]
software type: [Command line application]
supported file types: [Zeiss CZI, N5]
use case:
  [
    Spatial transcriptomics,
    Expansion microscopy (ExM)
  ]
usage environment: [Cloud, HPC cluster, Local installation]
software ecosystem: [BigDataViewer]
---

This pipeline analyzes spatial transcriptomics imagery collected using the [EASI-FISH](https://github.com/multiFISH/EASI-FISH) (Expansion-Assisted Iterative Fluorescence In Situ Hybridization) method described in [this paper](https://doi.org/10.1016/j.cell.2021.11.024). It includes automated image stitching, distributed multi-round image registration, cell segmentation, and distributed spot detection. It can be run on a local workstation, or on any cloud or HPC cluster that is [supported by Nextflow](https://www.nextflow.io/docs/latest/executor.html).
