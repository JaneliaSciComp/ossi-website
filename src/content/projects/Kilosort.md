---
title: Kilosort
tagline: Maintain and develop python version of Kilosort (electrophysiology data).
author names: Pachitariu et al.
project type: [OSSI - current]
OSSI proposal link: https://drive.google.com/file/d/1YrH-O3F2BQGOQkHDQIyRyKKGHHiqZLag/view
github repository link array: [https://github.com/MouseLand/Kilosort]
publication DOI array: [https://doi.org/10.1101/061481]
publication text array: [Pachitariu et al. (2016)]
image file: rmWtVQN5RzU-unsplash.jpg
image alt text: Transparent skull model
video url: https://www.youtube.com/watch?v=9cjKYnC89OI
video alt text: A description of KiloSort by Marius Pachitariu, which is supported by the Open Science Software Initiative.
development team: Pachitariu Lab
programming language: ["MATLAB", "Python"]
open source license: GPL-2.0
software type: Package
use case: [Neural recording, Electrophysiology]
usage environment: [Local installation]
software ecosystem: []
supported file types: []
related blog posts: [working-with-ossi-supported-projects]
---

Neuropixels electrodes, developed at Janelia, have single-handedly transformed the field of electrophysiology. Almost overnight, our community went from mostly using single-channel electrodes to mostly using 384-channel Neuropixel electrodes. Instead of painstakingly recording one neuron at a time like before, researchers can now record hundreds or thousands of neurons simultaneously. We are already witnessing the acceleration in research provided by Neuropixels, with Janelia at the forefront of its science as well.

Kilosort is the main software used to analyze data from Neuropixels probes. Its
main task is to take hundreds of GB of electrophysiology data and output a set of neurons with their spike times. The pipeline includes several distinct algorithmic steps, such as data registration, clustering, spike extraction and quality control.
