---
title: Video Annotation Library
tagline: A usable and extensible video annotation library for machine learning
maintainer: Xi Peng, Kristin Branson
preferred contact method: mailto:bransonk@janelia.hhmi.org
project type: [OSSI - current]
OSSI proposal link: ../../proposals/video_annotation_library.pdf
github link: https://github.com/JaneliaSciComp/videoAnnotation
documentation link: https://github.com/JaneliaSciComp/videoAnnotation
installation instructions link: https://github.com/JaneliaSciComp/videoAnnotation
how to cite link: https://github.com/JaneliaSciComp/videoAnnotation
how to cite text: Cite the software on GitHub
image file: jacob-miller-ot5kWZkH97s-unsplash.jpg
image alt text: Image that look like video annotation timeline
development team: [Branson Lab, Scientific Computing Software]
programming language: [Python, Javascript]
open source license: [BSD-3 Clause]
software type: [Framework, Package, Web application]
use case: [Annotation]
usage environment: [Cloud, Local installation, Web browser]
supported file types: [mpeg, avi]
# related blog posts:
---

Video is captured in a wide variety of biology applications, including cell and animal behavior. Modern
analysis of these data requires machine learning, used in problems such as cell or animal tracking and pose
recognition, cell division detection, and behavior classification. As good training data is essential to the
success of practical applications of machine learning, we need efficient methods for data annotation and
visualization. We’ve been developing such applications for over about [15 years](http://kristinbranson.github.io/APT/), and, for each new
application we have worked on, we have had to write new, from-scratch interfaces. While each application
has had differences, there are many commonalities that a well-designed library could exploit. Even more
problematic is the fact that, throughout computer vision, we often artificially constrain ourselves to inference
and learning over single time points because access to time series annotations is unavailable.

We have developed a **general-purpose, extensible library for visualizing and annotating video data.**
It enables new machine learning applications to biology time series data, as it allows developers
to efficiently collect annotations. One can quickly and easily incorporate this library
into a new application, and tailor it to the details of the application, allowing for efficient labeling.

<hr/>
<p>A test to see if html is rendered correctly and tailwind is applied</p>
<div class="flex flex-row">
  <div class="basis-1/3 bg-red-100">
   01
  </div>
  <div class="basis-1/3 bg-green-100">
  02
  </div>
  <div class="basis-1/3 bg-blue-100">
  03
  </div>
</div>
