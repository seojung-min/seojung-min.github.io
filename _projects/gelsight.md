---
layout: page
title: Tactile Force Estimation with GelSight Mini
description: Building a force estimator for future extrinsic contact reasoning
img: assets/projects/1_tactile/2025_gelsight/setup.jpg
importance: 3
category: tactile
related_publications: false
---

This project is a **foundational engineering effort** toward my research on **tactile-based manipulation and extrinsic contact reasoning**.
The goal here is not to produce a standalone scientific result, but to build a complete pipeline for learning **3-axis force estimation from GelSight tactile images**.
This force estimator will later serve as a key component for detecting **stick/slip during grasping** and reasoning about **unseen object–environment contacts** via simple free-body analysis.

---

## 🔧 Purpose of the Project

GelSight sensors provide rich deformation images, but do not measure forces directly. To reason about contact behavior—especially contacts that the sensor cannot see (such as **extrinsic contact points** between the object and the environment)— a reliable mapping from tactile images to **Fx, Fy, Fz** is essential.

The objectives of this project were:

- Build a dataset of *tactile image ↔ ground-truth force* pairs  
- Automate indentation motions using UR5e for repeatability  
- Integrate GelSight Mini with an ATI Nano17 sensor  
- Train a baseline model to check data quality  
- Establish tools for future work on stick–slip detection & extrinsic contact inference

This page summarizes that experimental setup and the initial validation steps.

---


## 🤖 Data Collection & Monitoring

<div class="row">
  <div class="col-sm-6 mt-3 mt-md-0">
    <div style="width:40%;">
        <video class="img-fluid rounded z-depth-1" controls playsinline muted>
          <source src="{{ '/assets/projects/1_tactile/2025_gelsight/indentation_video.mp4' | relative_url }}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
    </div>
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    <video class="img-fluid rounded z-depth-1" controls playsinline muted>
    <source src="{{ '/assets/projects/1_tactile/2025_gelsight/indentation_video_screen.mp4' | relative_url }}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</div>
<div class="caption">
  Left: UR5e-driven indentation during data collection (GelSight + Nano17 visible).  
  Right: Live monitoring view (tactile stream + Nano17 output).
</div>

---

## 🛠 Indenters

<div class="row justify-content-sm-center">
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/projects/1_tactile/2025_gelsight/indenters.jpg"
       title="Four indenters used for sampling tactile deformation"
       class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-8 mt-3 mt-md-0">
    I used a small set of indenters to generate diverse deformation patterns and contact conditions.
    This was mainly to validate that the tactile-to-force pipeline works across mild geometry variations,
    before moving to more complex manipulation settings.
  </div>
</div>

---

## 🧪 Training Curves (Sensor 1 → Sensor 2 Transfer)

<div class="row">
  <div class="col-sm-6 mt-3 mt-md-0">
    <div style="width:90%;">
        {% include figure.liquid path="assets/projects/1_tactile/2025_gelsight/full_training_curve.png"
           title="Sensor 1: full training (~30k samples)"
           class="img-fluid rounded z-depth-1" %}
    </div>
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/projects/1_tactile/2025_gelsight/fine_tuning_transfer_curve.png"
       title="Sensor 2: fine-tuning with a small dataset (~2k samples)"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Left: Fully trained model on Sensor 1 dataset (~30k samples).  
  Right: Fine-tuning the same model on Sensor 2 with a small dataset (~2k samples) to test transfer across sensors.
</div>

---

## ⚡ Real-time Inference (Qualitative Checks)

<div class="row">
  <div class="col-sm-6 mt-3 mt-md-0">
    <video class="img-fluid rounded z-depth-1" controls playsinline muted>
      <source src="{{ 'assets/projects/1_tactile/2025_gelsight/online_inference_fully.mp4' | relative_url }}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    <video class="img-fluid rounded z-depth-1" controls playsinline muted>
      <source src="{{ 'assets/projects/1_tactile/2025_gelsight/online_inference_transferred.mp4' | relative_url }}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</div>
<div class="caption">
  Left: Real-time inference using the Sensor 1 fully trained model (screen capture).  
  Right: Real-time inference using the Sensor 2 fine-tuned model (screen capture).
</div>

---


## 📝 How This Supports Future Research

Although simple, this pipeline forms the basis for several upcoming research directions:

- **Stick–slip detection** during grasping  
- **Inferring extrinsic contact states** (stick vs slip) using force balance  
- **Controlling the reaction force** to stay inside/outside a friction cone  
- Guiding **unseen contact point motion** using tactile-based feedback  
- Accurate **tool–environment interaction** modeling

This project provided the calibration workflow, data structure, and  
software tools needed to explore these ideas.

---

## 🚀 Next Steps

- Integrate force estimation into manipulation control loops  
- Use learned forces for extrinsic contact point reasoning during tool use  

