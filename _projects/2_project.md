---
layout: page
title: Tactile Force Estimation with GelSight Mini
description: Building a force estimator for future extrinsic contact reasoning
img: assets/img/12.jpg
importance: 1
category: work
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

## 🛠 Hardware Setup (limited documentation)

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/indenters.jpg"
           title="Custom indenters used for GelSight deformation sampling"
           class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/testbed.jpg"
           title="Testbed: GelSight Mini + Nano17 (partial view)"
           class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">
    A small set of indenters (left) and an early testbed photo (right).  
    Most setup photos were lost due to an environment reset.
</div>

---

## 🤖 Robot-driven Data Collection

To ensure consistent contact conditions, I collected data using a **UR5e robot**  
performing simple indentation motions.  
Only one short clip of the procedure remains.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        <a href="https://youtu.be/VIDEO_ID_INDENT">
            {% include figure.liquid path="assets/img/indentation_thumbnail.jpg"
               title="UR5e automated indentation during data collection"
               class="img-fluid rounded z-depth-1" %}
        </a>
    </div>
</div>

<div class="caption">
    Automated indentation motion used to generate paired tactile–force samples.
</div>

---

## 🧪 Baseline Learning: Tactile → 3-Axis Force

To verify that the dataset was usable, I trained a simple **ResNet18 regression model** to estimate normal and shear forces from GelSight images. The purpose was not performance optimization, but **sanity checking** of the pipeline.

A rough real-time inference test (quickly recorded):

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        <a href="https://youtu.be/VIDEO_ID_RT">
            {% include figure.liquid path="assets/img/inference_thumbnail.jpg"
               title="Rough real-time inference test (tactile → force)"
               class="img-fluid rounded z-depth-1" %}
        </a>
    </div>
</div>

<div class="caption">
    GelSight deformation video (left) with a real-time estimated force curve (right).
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

