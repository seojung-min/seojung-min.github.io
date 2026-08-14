---
layout: page
title: Extrinsic Contact Reconstruction
description: Reconstructing remote tool-tip contact trajectories from grasp-level tactile sensing
img: assets/projects/1_tactile/2025_dynamic_extrinsic/dynamic_extrinsic_thumbnail.png
importance: 1
category: tactile
related_publications: false
---

**IROS 2026 · Accepted**

Tool-mediated manipulation often involves contact at a location far from the tactile sensor, such as the tip of a grasped tool.  
This project reconstructs the **3D trajectory of remote tool–environment contact** using tactile sensing at the grasp and robot proprioception.

<div class="alert alert-light border mt-3 mb-4">
  <strong>Core idea:</strong>
  Remote contact motion can be reconstructed from deformation observed at the grasp,
  without directly sensing the tool tip.
</div>

---

## Demo

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    <video controls class="img-fluid rounded z-depth-1">
      <source src="{{ '/assets/projects/1_tactile/2025_dynamic_extrinsic/iros26_demo.mp4' | relative_url }}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</div>

---

## Approach

<div class="row justify-content-sm-center mt-3">
  <div class="col-md-12">
    {% include figure.liquid
       path="assets/projects/1_tactile/2025_dynamic_extrinsic/pipeline.png"
       title="Two-stage extrinsic contact reconstruction pipeline"
       class="img-fluid rounded z-depth-1"
    %}
  </div>

  <div class="col-md-12 mt-3">
    <h4>From grasp deformation to remote contact motion.</h4>

    <p>
      Two GelSight Mini sensors observe tactile marker motion at the grasp,
      while robot proprioception provides the end-effector pose.
      The tactile markers are lifted into 3D and used to estimate the
      relative <strong>6-DoF motion of the grasped tool</strong>.
    </p>
  </div>
</div>

The reconstruction has two stages. First, a short anchoring segment provides a
**fixed-contact constraint** to estimate the unknown initial tool-tip location.
The anchored point is then propagated using tactile-derived relative rigid motion,
recovering the full trajectory as the contact moves along the environment.

---

## Results

<div class="row justify-content-sm-center mt-3">
  <div class="col-sm-12">
    {% include figure.liquid
       path="assets/projects/1_tactile/2025_dynamic_extrinsic/result.png"
       title="Reconstructed tool-tip trajectories across experimental conditions"
       class="img-fluid rounded z-depth-1"
    %}
  </div>
</div>

<div class="caption">
  Reconstructed and ground-truth trajectories across variations in trajectory shape,
  tool geometry, wrist pose, and grasp configuration.
</div>

<div class="row mt-4 text-center">
  <div class="col-md-3">
    <h3>51</h3>
    <p>real-robot trials</p>
  </div>

  <div class="col-md-3">
    <h3>8.59 mm</h3>
    <p>trajectory RMSE</p>
  </div>

  <div class="col-md-3">
    <h3>5.96 mm</h3>
    <p>shape RMSE</p>
  </div>

  <div class="col-md-3">
    <h3>14 Hz</h3>
    <p>online reconstruction</p>
  </div>
</div>

<div class="alert alert-light border mt-3">
  <strong>Key result:</strong>
  Trajectory shape remained consistent across the tested tools, wrist poses,
  grasp configurations, and trajectory geometries. Absolute localization error
  was primarily influenced by the initial contact anchoring.
</div>

---

## Publication

**Seojung Min**, Yoonjin Kim, Jeong-Jung Kim, and Jung Kim  
“Geometric Reconstruction of Extrinsic Contact Trajectories using Tactile Sensing and Proprioception for Tool Manipulation”  
*2026 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS).*
