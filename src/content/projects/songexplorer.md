---
title: SongExplorer
tagline: "deep learning for acoustic signals"
maintainer: ben arthur
#project type - Required. Pick one of the three options - delete the other two.
project type: [Other]
github link: https://github.com/JaneliaSciComp/SongExplorer
documentation link: https://github.com/JaneliaSciComp/SongExplorer?tab=readme-ov-file#table-of-contents
installation instructions link: https://github.com/JaneliaSciComp/SongExplorer?tab=readme-ov-file#installation
preferred contact method: mailto:arthurb@hhmi.org
how to cite text: "BJ Arthur, Y Ding, M Sosale, F Khalif, E Kim, P Waddell, S Turaga, DL Stern (2021), SongExplorer: A deep learning workflow for discovery and segmentation of animal acoustic communication signals"
how to cite link: "https://www.biorxiv.org/content/10.1101/2021.03.26.437280v1"
image file: ./songexplorer.png
image caption: screenshot of SongExplorer GUI
#Optional "tag" fields. Select tags from the provided options - delete the options that are not applicable. If you feel another option is required to describe your project, add it and then note this in your pull request.
development team:
  [
    Scientific Computing Software,
  ]
programming language:
  [
    Python,
  ]
open source license:
  [BSD-3 Clause]
software type:
  [
    GUI application,
  ]
use case:
  [
    Annotation,
    Segmentation,
  ]
usage environment:
  [
    HPC cluster,
    Local installation,
  ]
software ecosystem:
  [
    Tensorflow,
  ]
supported file types:
  [
    "wav",
  ]
---

You have an audio recording, and you want to know where certain classes of
sounds are.  SongExplorer is trained to recognize such words by manually giving
it a few examples.  It will then automatically calculate the probability,
over time, of when those words occur in all of your recordings.

Alternatively, you have two or more sets of audio recordings, and you want to
know if there are differences between them.  SongExplorer can automatically
detect sounds in those recordings and cluster them based on how well it
can distinguish between them.

Applications suitable for SongExplorer include quantifying the rate or pattern
of words emitted by a particular species, distinguishing a recording of one
species from another, and discerning whether individuals of the same species
produce different song.

Underneath the hood is a deep convolutional neural network.  The input is the
raw audio stream, and the output is a set of mutually-exclusive probability
waveforms corresponding to each word of interest.

Training begins by first thresholding one of your recordings in the time- and
frequency-domains to find sounds that exceed the ambient noise.  These sounds
are then clustered based on similarities in the waveforms for you to manually
annotate with however many word labels naturally occur.  A classifier is
then trained on this corpus of ground truth, and a new recording is analyzed
by it.  The words it automatically finds are then clustered, this time using
the activations of the hidden neurons, and displayed with predicted labels.
You manually correct the mistakes, both re-labeling words that it got wrong,
as well as labeling words it missed.  These new annotations are added to the
ground truth, and the process of retraining the classifier and analyzing and
correcting new recordings is repeated until the desired accuracy is reached.
