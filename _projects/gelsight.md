---
layout: page
title: Tactile Force–Torque Calibration
description: Building a multi-contact GelSight–Nano17 dataset for force and torque estimation
img: assets/projects/1_tactile/2025_gelsight/setup.jpg
importance: 3
category: tactile
related_publications: false
---

This project develops a **force–torque calibration pipeline for GelSight Mini** using synchronized measurements from an ATI Nano17 sensor.

<div class="alert alert-light border mt-3 mb-4">
  <strong>Core idea:</strong>
  Build a large, controlled tactile dataset spanning different contact geometries,
  indentation depths, and shear conditions, and learn the mapping from tactile images
  to 6-axis contact force and torque.
</div>

---

## Dataset & Experimental Setup

<div class="row align-items-center mt-3">
  <div class="col-md-6 mt-3">
    <video class="img-fluid rounded z-depth-1" controls playsinline muted>
      <source src="{{ '/assets/projects/1_tactile/2025_gelsight/indentation_video.mp4' | relative_url }}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>

  <div class="col-md-6 mt-3">
    <h4>Controlled tactile–force data collection.</h4>

    <p>
      A UR5e robot performs controlled indentation and shear motions while a
      <strong>GelSight Mini</strong> records tactile images and an
      <strong>ATI Nano17</strong> provides synchronized 6-axis force/torque measurements.
    </p>

    <p>
      Data were collected across multiple contact locations, indentation depths,
      shear magnitudes and directions, and four different indenter geometries.
    </p>
  </div>
</div>

<div class="row mt-4 text-center">
  <div class="col-md-3">
    <h3>29,896</h3>
    <p>training/validation samples</p>
  </div>

  <div class="col-md-3">
    <h3>4</h3>
    <p>indenter geometries</p>
  </div>

  <div class="col-md-3">
    <h3>600</h3>
    <p>contact locations</p>
  </div>

  <div class="col-md-3">
    <h3>6-axis</h3>
    <p>force & torque labels</p>
  </div>
</div>

<div class="row align-items-center mt-3">
  <div class="col-md-6">
    {% include figure.liquid
       path="assets/projects/1_tactile/2025_gelsight/indenters.jpg"
       title="Indenters used for tactile force–torque data collection"
       class="img-fluid rounded z-depth-1"
    %}
  </div>

  <div class="col-md-6">
    <h4>Contact diversity by design.</h4>

    <p>
      The dataset includes spherical, flat, and sharp contact geometries.
      For each geometry, the sensor was sampled under controlled normal indentation
      and bidirectional shear in ±X and ±Y.
    </p>

    <p>
      This provides tactile deformation patterns spanning both normal and tangential
      loading rather than calibrating the sensor at a single contact condition.
    </p>
  </div>
</div>

---

## Force–Torque Estimation

<div class="row align-items-center project-split">
  <div class="col-md-6 mt-3">
    {% include figure.liquid
       path="assets/projects/1_tactile/2025_gelsight/full_training_curve.png"
       title="Training of the six-axis force–torque regression model"
       class="img-fluid rounded z-depth-1"
    %}
  </div>

  <div class="col-md-6 mt-3">
    <h4>Tactile image → 6-axis force and torque.</h4>

    <p>
      An ImageNet-pretrained ResNet18 was trained to regress
      <strong>Fx, Fy, Fz, Tx, Ty, and Tz</strong> from individual GelSight images.
    </p>

    <p>
      The model was trained on four indenter types and no-contact data,
      with force/torque supervision obtained from the Nano17 measurements.
    </p>
  </div>
</div>

<div class="row mt-4 text-center">
  <div class="col-md-4">
    <h3>0.049 N</h3>
    <p>Fx MAE</p>
  </div>

  <div class="col-md-4">
    <h3>0.055 N</h3>
    <p>Fy MAE</p>
  </div>

  <div class="col-md-4">
    <h3>0.247 N</h3>
    <p>Fz MAE</p>
  </div>
</div>

<div class="alert alert-light border mt-3">
  <strong>Validation result:</strong>
  All six force/torque axes achieved R² above 0.99 on the reconstructed
  validation split. Shear contacts were consistently more difficult than
  pure indentation contacts.
</div>

---

## Cross-Sensor Transfer

<div class="row align-items-center project-split">
  <div class="col-md-6 mt-3">
    {% include figure.liquid
       path="assets/projects/1_tactile/2025_gelsight/fine_tuning_transfer_curve.png"
       title="Transfer learning to a second GelSight sensor"
       class="img-fluid rounded z-depth-1"
    %}
  </div>

  <div class="col-md-6 mt-3">
    <h4>Reusing the learned representation on another sensor.</h4>

    <p>
      The model was subsequently adapted to a second GelSight Mini using a much
      smaller target-domain dataset. A two-stage fine-tuning procedure transferred
      the learned visual representation while adapting the force prediction head
      and upper backbone layers.
    </p>

    <p>
      On the target sensor validation set, the resulting 3-axis force model achieved
      MAE values of <strong>0.060 N, 0.054 N, and 0.167 N</strong> for Fx, Fy, and Fz.
    </p>
  </div>
</div>

---

<div class="alert alert-secondary border mt-4">
  <strong>Evaluation note:</strong>
  These results are based on the original sample-level train/validation split rather
  than a fully independent test set. Samples from related contact locations or
  collection sessions may therefore appear across both splits.
</div>
