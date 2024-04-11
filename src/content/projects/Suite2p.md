---
title: Suite2p
tagline: Pipeline for processing two-photon calcium imaging data.
maintainer: Stringer et al.
maintainer contact info: placeholder@gmail.com
project type: [OSSI - current]
OSSI proposal link: https://drive.google.com/file/d/1-KLHwZ3g6A1F8AWYge7llfEHViaHWsoc/view
github link: https://github.com/MouseLand/suite2p
documentation link: https://suite2p.readthedocs.io/en/latest/
installation instructions link: https://github.com/MouseLand/suite2p?tab=readme-ov-file#local-installation
how to cite link: https://doi.org/10.1101/061507
how to cite text: "Pachitariu, M., Stringer, C., Schröder, S., Dipoppa, M., Rossi, L. F., Carandini, M., & Harris, K. D. (2016). Suite2p: beyond 10,000 neurons with standard two-photon microscopy. BioRxiv, 061507."
# related blog posts: [Optional-file-name]
# image file: ./optional-file-path.jpg
# image alt text: Alt text is required if you upload an image file
development team: [Pachitariu Lab, Stringer Lab]
programming language: [Python]
open source license: [BSD-3 Clause, GPL-2.0]
software type: [Package]
use case:
  [
    Calcium imaging,
    Confocal light microscopy (LM),
    Electron microscopy (EM),
    Expansion microscopy (ExM),
  ]
usage environment: [Google Colab, Local installation]
software ecosystem: [Napari]
---

Suite2p is a fast, accurate and complete pipeline written in Python that registers raw movies, detects active cells, extracts their calcium traces and infers their spike times. Suite2p runs on standard workstations, operates faster than real time, and recovers ~2 times more cells than the previous state-of-the-art methods. Its low computational load allows routine detection of ~25,000 cells simultaneously from recordings taken with standard two-photon resonant-scanning microscopes. In addition to its ability to detect cell somas, the detection algorithm can detect axonal segments, boutons, dendrites, and spines. Suite2p has an extensive graphical user interface (GUI) which allows the user to explore their data, and is currently the only fully-functional pythonic GUI for calcium imaging data. Software developers have integrated Suite2p into their packages, such as those for multi-day cell alignment and photostimulation experiments.
