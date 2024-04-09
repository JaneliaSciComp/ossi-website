---
title: VVD Viewer
tagline: Develop documentation for the interactive VVD 3D viewer/renderer for very large image volumes.
author names: Kawase et al.
project type: [OSSI - current]
OSSI proposal link: https://drive.google.com/file/d/1Mn_V_82wzQGgKOTy245qk7sATF9yp2vb/view
github repository link array: [https://github.com/JaneliaSciComp/VVDViewer]
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
associated labs and projects:
  [FlyLight Project Team, Scientific Computing Software]
software type: [Native application]
programming language: [C++]
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
supported file types: [N5, SWC, TIFF, Zeiss CZI]
related experimental techniques:
  [
    Confocal light microscopy (LM),
    Electron microscopy (EM),
    Expansion microscopy (ExM),
  ]
software use case: [Annotation, Image analysis]
usage environment: [Local installation]
---

VVD Viewer is an open source volumetric visualization application comparable feature-wise to commercial software such as Imaris and Amira. It supports multi-channel 3D and 4D volume data and polygon meshes, larger-than-memory imagery, arbitrary clipping planes, and many visualization adjustments.

The code underlying VVD’s visualization system is based on state-of-the-art Vulkan API and currently runs on Windows and macOS systems. Vulkan is a lower-level graphics and compute API that allows developers much greater control and further optimization. VVD was recently migrated from OpenGL to Vulkan, which increased the rendering speed four-fold. Importantly, once OpenGL ceases to be supported on Mac, VVD will be the only option for large-scale 3d visualization, as all other major volumetric viewers are built on OpenGL.

VVD is currently mostly used within Janelia by neurobiologists for viewing fluorescent-stained confocal and TB scale light-sheet samples. It is often used to verify EM-LM correspondence, by loading both LM imagery and EM skeletons in a single overlaid 3d view. Critically, VVD’s support for large imagery allows visualization of expansion microscopy (ExM) data sets.

In addition to rendering, VVD also offers functionality for segmentation. Users can paint 3D masks using add, subtract and diffuse brushes on top of the signals.The 3D painting segmentation is mainly used for extracting neurons. Extracted neurons are used for figures, movies and Color MIP Search. VVDViewer also has a gray value thresholding based on automatic segmentation. The function is used to train a machine learning based 3D neuronal segmentation [PatchPerPix](https://doi.org/10.48550/arXiv.2001.07626) by PTR. Also, it was used for machine learning training of presynaptic signal 3D segmentation in ExM data by Ding Sherry (E.x SciCompSoft) and Josh Lillvis (Dickson Lab).
