---
title: Stitching-Spark
tagline: Reconstructing large microscopy images from overlapping image tiles on a high-performance Spark cluster.
maintainer: Saalfeld
maintainer contact info: placeholder@gmail.com
project type: [OSSI - current]
OSSI proposal link: https://drive.google.com/file/d/17m9LCBOg_YXQj0Q_LOsGYDOnSd_88ONJ/view
github link: https://github.com/saalfeldlab/stitching-spark
documentation link: https://github.com/saalfeldlab/stitching-spark
installation instructions link: https://github.com/saalfeldlab/stitching-spark?tab=readme-ov-file#usage
how to cite link: https://doi.org/10.1126/science.aau8302
how to cite text: Gao, R., Asano, S. M., Upadhyayula, S., Pisarev, I., Milkie, D. E., Liu, T. L., Singh, V., Graves, A., Huynh, G. H., Zhao, Y., Bogovic, J., Colonell, J., Ott, C. M., Zugates, C., Tappan, S., Rodriguez, A., Mosaliganti, K. R., Sheu, S. H., Pasolli, H. A., ... Betzig, E. (2019). Cortical column and whole-brain imaging with molecular contrast and nanoscale resolution. Science, 363(6424), Article eaau8302. https://doi.org/10.1126/science.aau8302
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
