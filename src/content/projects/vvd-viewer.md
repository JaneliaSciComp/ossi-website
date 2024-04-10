---
title: VVD Viewer
tagline: Develop documentation for the interactive VVD 3D viewer/renderer for very large image volumes.
maintainer: Kawase et al.
maintainer contact info: placeholder@gmail.com
project type: [OSSI - current]
OSSI proposal link: https://drive.google.com/file/d/1Mn_V_82wzQGgKOTy245qk7sATF9yp2vb/view
source code link: https://github.com/JaneliaSciComp/VVDViewer
documentation link: https://github.com/JaneliaSciComp/VVDViewer/wiki
installation instructions link: https://github.com/JaneliaSciComp/VVDViewer?tab=readme-ov-file#building-vvdviewer
how to cite link: https://github.com/JaneliaSciComp/VVDViewer
how to cite text: Cite the software on GitHub
# related blog posts: [Optional-file-name]
# image file: ./optional-file-path.jpg
# image alt text: Alt text is required if you upload an image file
development team: [FlyLight, Scientific Computing Software]
programming language: [C++]
open source license: [BSD-3 Clause]
software type: [Native application]
use case:
  [
    Confocal light microscopy (LM),
    Electron microscopy (EM),
    Expansion microscopy (ExM),
    Annotation,
  ]
usage environment: [Local installation]
supported file types: [N5, SWC, TIFF, Zeiss CZI]
---

VVD Viewer is an open source volumetric visualization application comparable feature-wise to commercial software such as Imaris and Amira. It supports multi-channel 3D and 4D volume data and polygon meshes, larger-than-memory imagery, arbitrary clipping planes, and many visualization adjustments.

The code underlying VVD’s visualization system is based on state-of-the-art Vulkan API and currently runs on Windows and macOS systems. Vulkan is a lower-level graphics and compute API that allows developers much greater control and further optimization. VVD was recently migrated from OpenGL to Vulkan, which increased the rendering speed four-fold. Importantly, once OpenGL ceases to be supported on Mac, VVD will be the only option for large-scale 3d visualization, as all other major volumetric viewers are built on OpenGL.

VVD is currently mostly used within Janelia by neurobiologists for viewing fluorescent-stained confocal and TB scale light-sheet samples. It is often used to verify EM-LM correspondence, by loading both LM imagery and EM skeletons in a single overlaid 3d view. Critically, VVD’s support for large imagery allows visualization of expansion microscopy (ExM) data sets.

In addition to rendering, VVD also offers functionality for segmentation. Users can paint 3D masks using add, subtract and diffuse brushes on top of the signals.The 3D painting segmentation is mainly used for extracting neurons. Extracted neurons are used for figures, movies and Color MIP Search. VVDViewer also has a gray value thresholding based on automatic segmentation. The function is used to train a machine learning based 3D neuronal segmentation [PatchPerPix](https://doi.org/10.48550/arXiv.2001.07626) by PTR. Also, it was used for machine learning training of presynaptic signal 3D segmentation in ExM data by Ding Sherry (E.x SciCompSoft) and Josh Lillvis (Dickson Lab).
