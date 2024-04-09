---
title: BigWarp
tagline: Maintain and extend BigWarp (3D non-rigid registration for very large volumes).
author names: Bogovic & Saalfeld
project type: [OSSI - current]
OSSI proposal link: https://drive.google.com/file/d/1jwba3zCZcSDjPUGKq1APkwVA20TIeJUY/view
github repository link array: [https://github.com/saalfeldlab/bigwarp]
project homepage link array: [https://imagej.net/plugins/bigwarp]
publication DOI array: [https://doi.org/10.1109/ISBI.2016.7493463]
publication text array: ["Bogovic et al. 2016"]
# image file: ./optional-file-path.jpg
# image alt text: Alt text is required if you upload an image file
development team: [FlyEM, FlyLight]
programming language: [Java]
open source license: [GPL-2.0]
software type: [Native application]
use case:
  [
    Confocal light microscopy (LM),
    Correlative light EM (CLEM),
    Electron microscopy (EM),
    Expansion microscopy (ExM),
    Image registration,
  ]
usage environment: [Local installation]
supported file types: [N5]
# related blog posts: [Optional-file-name]
---

The registration of biological images is a crucial part of many analyses. This proposed work will make state-of-the art image registration methods more FAIR (findable, accessible, inoperable, reusable). Especially important is our goal of making these tools more accessible to non-expert users by improving user-interfaces, software infrastructure, and documentation.

Automated registration methods work well for some applications but not others, especially inter-modality (e.g. CLEM) tasks. Most tools do not provide convenient user-interfaces, relying on command-line tools or APIs with software developers in mind. Finally, parameter tuning is usually necessary to achieve good results, but to do so effectively requires specialized knowledge and experience with the algorithm. As a result, these methods are not accessible to non-experts.

Manual registration is necessary for users and tasks where automatic methods are in- adequate. We developed BigWarp, a tool for non-linear manual registration [(Bogovic et al. 2016)](https://doi.org/10.1109/ISBI.2016.7493463). BigWarp has played a critical role for many Janelia projects across several labs and imaging modalities. Most of these research projects required custom scripts to perform their analyses. Time constraints prevent these useful features from being documented or integrated into BigWarp as built-in features. This project will remove this constraint, inform new users of those currently undocumented features, and empower them to perform analyses without expert help or customization.

Finally, software for registration and spatial transformations are not interoperable. Tedious and technical steps are required to import transformations created in one library to another. This project will begin the integration of currently disparate software, starting with BigWarp, TrakEM2 [(Cardona et al. 2012)](https://doi.org/10.1371/journal.pone.0038011), and elastix [(Klein et al. 2010)](https://doi.org/10.1109/TMI.2009.2035616).
