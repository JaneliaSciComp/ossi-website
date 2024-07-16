---
title: NIDAQ.jl
tagline: "A Julia wrapper for National Instruments' driver"
maintainer: ben arthur
#project type - Required. Pick one of the three options - delete the other two.
project type: [Other]
github link: https://github.com/JaneliaSciComp/NIDAQ.jl
documentation link: https://github.com/JaneliaSciComp/NIDAQ.jl?tab=readme-ov-file#national-instruments-data-acquisition-interface
installation instructions link: https://github.com/JaneliaSciComp/NIDAQ.jl?tab=readme-ov-file#installation
preferred contact method: mailto:arthurb@hhmi.org
image file: ./nidaq.png
image caption: a PXI NI DAQ board
#Optional "tag" fields. Select tags from the provided options - delete the options that are not applicable. If you feel another option is required to describe your project, add it and then note this in your pull request.
development team:
  [
    Scientific Computing Software,
  ]
programming language:
  [
    Julia,
  ]
open source license:
  [BSD-3 Clause]
software type:
  [
    Package,
  ]
use case:
  [
  ]
usage environment:
  [
    Local installation,
  ]
software ecosystem:
  [
  ]
supported file types:
  [
  ]
---

This package provides an interface to NI-DAQmx--- National Instruments' driver for their data acquisition boards. Their entire C header file was ported using Clang.jl, and a rudimentary higher-level API is provided for ease of use.
