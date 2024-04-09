---
title: EASI-FISH Pipeline
tagline: Automated analysis pipeline for EASI-FISH spatial transcriptomics data
author names: MultiFISH Project Team
project type: [OSSI - current]
github repository link array: [https://github.com/JaneliaSciComp/multifish]
project homepage link array: [https://janeliascicomp.github.io/multifish/]
image file: EASI-FISH.png
image alt text: Data processed by the EASI-FISH pipeline
associated labs and projects:
  [
    MultiFISH Project Team,
    Scientific Computing Software,
  ]
software type: [Command line application]
programming language: [Nextflow, Python, Java, MATLAB]
software ecosystem: [BigDataViewer]
open source license: [BSD-3 Clause]
supported file types: [Zeiss CZI, N5]
related experimental techniques:
  [
    Spatial transcriptomics,
    Expansion microscopy (ExM)
  ]
software use case: [Image analysis]
usage environment: [Cloud, HPC cluster, Local installation]
#related blog posts: [Optional-file-name]
---

This pipeline analyzes spatial transcriptomics imagery collected using the [EASI-FISH](https://github.com/multiFISH/EASI-FISH) (Expansion-Assisted Iterative Fluorescence In Situ Hybridization) method described in [this paper](https://doi.org/10.1016/j.cell.2021.11.024). It includes automated image stitching, distributed multi-round image registration, cell segmentation, and distributed spot detection. It can be run on a local workstation, or on any cloud or HPC cluster that is [supported by Nextflow](https://www.nextflow.io/docs/latest/executor.html).
