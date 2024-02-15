---
title: Cellpose and Suite2p
tagline: Maintain, extend, adapt and document Suite2p and Cellpose.
author names: Stringer et al.
project type: [OSSI - current]
github repository link array:
  [https://github.com/MouseLand/cellpose, https://github.com/MouseLand/suite2p]
github repository text array: [Github Cellpose, Github Suite2p]
project homepage link array:
  [https://www.cellpose.org/, https://www.suite2p.org/]
project homepage text array: [Cellpose, Suite2p]
publication DOI array:
  [https://doi.org/10.1038/s41592-020-01018-x, https://doi.org/10.1101/061507]
publication text array: [Stringer et al. 2021, Pachitariu et al. (2017)]
# related blog posts: [Optional-file-name]
# image file: ./optional-file-path.jpg
# image alt text: Alt text is required if you upload an image file
associated labs and projects: [Pachitariu, Stringer]
scientific domain: [Bioimaging, Deep learning, Neuroscience]
# model organism: [C. Elegans, Fly, Mouse]
software type: [Package]
programming language: [Python]
software ecosystem: [Napari]
open source license: [BDS-3 Clause, GPL-2.0]
# supported file types: [N5, NWB, OME-Zarr, SWC, TIFF, Zeiss CZI, mpeg, avi]
related experimental techniques:
  [
    Calcium imaging,
    Confocal light microscopy (LM),
    Electron microscopy (EM),
    Expansion microscopy (ExM),
    Two-photon imaging,
  ]
software use case: [Image analysis]
usage environment: [Google Colab, Local installation]
---

Many biological applications require the segmentation of cell bodies, membranes and nuclei from microscopy images. Computational methods are essential to process these large imaging datasets. We have developed two widely adopted imaging processing pipelines: Suite2p and Cellpose. This project will maintain and further develop these packages for Janelia and the scientific community.

Suite2p is a fast, accurate and complete pipeline written in Python that registers raw movies, detects active cells, extracts their calcium traces and infers their spike times. Suite2p runs on standard workstations, operates faster than real time, and recovers ~2 times more cells than the previous state-of-the-art methods. Its low computational load allows routine detection of ~25,000 cells simultaneously from recordings taken with standard two-photon resonant-scanning microscopes. In addition to its ability to detect cell somas, the detection algorithm can detect axonal segments, boutons, dendrites, and spines. Suite2p has an extensive graphical user interface (GUI) which allows the user to explore their data, and is currently the only fully-functional pythonic GUI for calcium imaging data. Software developers have integrated Suite2p into their packages, such as those for multi-day cell alignment and photostimulation experiments.

Cellpose is a generalist, deep learning-based segmentation algorithm written in Python, which can precisely segment cells from a wide range of image types and does not require model retraining or parameter adjustments. Cellpose can be applied to 2D and 3D imaging data without requiring 3D-labelled data. To support community contributions to the training data, we developed GUI software for manual labeling and for curation of the automated results. We have retrained the model on community-contributed data to ensure the continual improvement of Cellpose. Software developers have integrated Cellpose into their own image processing software, such as CellProfiler, ImagePy, ImJoy, and aPeer. We also developed a Napari plugin for Cellpose [(cellpose-napari)](https://cellpose-napari.readthedocs.io/en/latest/).

This project will focus on: (1) the maintenance of Suite2p and Cellpose, (2) its integration in processing pipelines for Janelia labs, (3) the development of new features for labs at Janelia that would be made available for the entire community, and (4) the widening of the current documentation.
