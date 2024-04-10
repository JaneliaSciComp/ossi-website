---
title: BigStitcher
tagline: A software package that allows simple and efficient alignment of multi-tile and multi-angle image datasets, for example acquired by lightsheet, widefield or confocal microscopes.
maintainer: Preibisch
maintainer contact info: placeholder@gmail.com
project type: [OSSI - current]
OSSI proposal link: https://drive.google.com/file/d/17m9LCBOg_YXQj0Q_LOsGYDOnSd_88ONJ/view
source code link: https://github.com/preibischlab/bigstitcher/
documentation link: https://imagej.net/plugins/bigstitcher/
installation instructions link: https://imagej.net/plugins/bigstitcher/#download
how to cite link: https://doi.org/10.1038/s41592-019-0501-0
how to cite text: "Hörl, D., Rojas Rusak, F., Preusser, F. et al. BigStitcher: reconstructing high-resolution image datasets of cleared and expanded samples. Nature Methods 16, 870–874 (2019). https://doi.org/10.1038/s41592-019-0501-0"
development team: [Saalfeld Lab, MultiFISH, Scientific Computing Software]
programming language: [Java, Nextflow]
open source license: [BSD-3 Clause]
software type: [Package]
use case:
  [
    Expansion microscopy (ExM),
    Lightsheet fluorescence microscopy (LFSM),
    Spatial transcriptomics,
    Image registration,
  ]
usage environment: [Cloud, HPC cluster, Local installation]
software ecosystem: [BigDataViewer, ImgLib2]
supported file types: [N5, TIFF, Zeiss CZI]
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
