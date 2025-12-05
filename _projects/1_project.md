---
layout: page
title: Online Tactile-Based Extrinsic Contact Tracking
description: Online tool-tip trajectory estimation during sliding using dual GelSight tactile sensors
img: assets/img/tactile_online_thumb.jpg
importance: 1
category: work
related_publications: false
---

This project introduces an **online tactile-based method** for reconstructing a tool’s **3D tip trajectory** during sliding interactions with the environment.  
Using **dual GelSight Mini sensors**, dense marker motion is tracked and used to estimate local rigid motions in real time, enabling accurate online reconstruction of **extrinsic contact** without any external cameras or motion-capture systems.

Below are example images from the setup, tactile frames, and sliding experiments.

---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager"
            path="assets/img/tactile_setup.jpg"
            title="Experimental setup with dual GelSight Mini sensors"
            class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager"
            path="assets/img/tactile_markers.jpg"
            title="Dense markers captured by the GelSight sensor"
            class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager"
            path="assets/img/tactile_sliding.jpg"
            title="Sliding motion along a groove-like structure"
            class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">
    Left: dual-GelSight experimental setup.  
    Middle: rich marker distribution enabling online motion estimation.  
    Right: tool sliding along a constrained environment.
</div>

---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager"
            path="assets/img/tactile_depth.jpg"
            title="Depth + optical flow visualization used for online marker tracking"
            class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">
    Online marker tracking using GelSight depth and optical-flow fields.
</div>

---

You can also place descriptive text between rows.  
This project focuses on **extrinsic contact**, meaning the interaction occurs between the tool and the environment—not between the robot gripper and the tool.  
By estimating frame-to-frame rigid motion online and assuming a fixed tool-tip point, the system reconstructs the **3D trajectory** continuously as the tool slides.

The method is lightweight and suitable for **online control**, enabling applications in groove following, constrained manipulation, geometry reconstruction, and tactile servoing.

---

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid
            path="assets/img/tactile_traj.jpg"
            title="Reconstructed tool-tip trajectory"
            class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid
            path="assets/img/tactile_contact.jpg"
            title="Tool-tip sliding along an extrinsic constraint"
            class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">
    Left: reconstructed trajectory from online estimation.  
    Right: physical tool–environment contact during sliding.
</div>

The images above show the online trajectory reconstruction and corresponding physical interaction.  
This project demonstrates how tactile sensing alone can be used for **online extrinsic contact estimation**, providing an important building block for future tactile-based manipulation policies.
