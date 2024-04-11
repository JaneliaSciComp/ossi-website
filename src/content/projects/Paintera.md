---
title: "Paintera"
tagline: Maintain and extend Paintera (3D annotation software for very large volumes).
maintainer: "Saalfeld et al."
maintainer contact info: placeholder@gmail.com
project type: [OSSI - current]
OSSI proposal link: https://drive.google.com/file/d/1pcrKTbzkNczkoDETg8og-y5XzCdauVJ3/view
github link: https://github.com/saalfeldlab/paintera
documentation link: https://github.com/saalfeldlab/paintera
installation instructions link: https://github.com/saalfeldlab/paintera?tab=readme-ov-file#installation-and-usage
how to cite link: https://github.com/saalfeldlab/paintera
how to cite text: Cite the software on GitHub
development team: [Saalfeld Lab]
programming language: [Java, Kotlin]
open source license: GPL-2.0
use case: [Electron microscopy (EM), Annotation]
usage environment: [Local installation]
software ecosystem: [ImgLib2, BigDataViewer]
supported file types: N5
related blog posts: [working-with-ossi-supported-projects]
---

The Paintera tool enables dense annotation of large 3D volumes. It uses the ImgLib2-based BigDataViewer rendering engine to virtually slice and zoom into arbitrarily large composites of 3D volumes. The N5 API is used to store and load large multi-scale raw volumes, labels, and meta-data in HDF5 files, N5 file stores, or in the cloud. Paintera is implemented in Java and Kotlin and uses JavaFX for its user interface which provides hardware accelerated 3D rendering on all major platforms. At this time, Paintera features 2D and 3D label brushes and interactive shape interpolation in arbitrarily re-sliced orientations, tools for manual superpixel agglomeration, and on-the-fly mesh generation and interactive display with adaptive level of detail (LoD) and smoothing.
