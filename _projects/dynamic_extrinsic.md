---
layout: page
title: Online Tactile-Based Extrinsic Contact Tracking
description: Online tool-tip trajectory estimation using dual GelSight tactile sensors
img: assets/projects/1_tactile/2025_dynamic_extrinsic/dynamic_extrinsic_thumbnail.png   # 나중에 썸네일 넣을 수 있음
importance: 1
category: tactile
related_publications: false
---

This project presents an **online tactile-based method** for estimating a tool’s **3D tip trajectory** during sliding interactions with the environment.  
Using **dual GelSight Mini sensors**, the system tracks dense markers and estimates rigid motion in an online fashion, enabling reconstruction of **extrinsic contact** without external cameras or motion capture.

---

## 🎥 Demo Video

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    <video controls class="img-fluid rounded z-depth-1">
      <source src="/assets/projects/1_tactile/2025_dynamic_extrinsic/iros_2026_demo_v2.mp4" type="video/mp4">
    </video>
  </div>
</div>


---

## Overview

The goal is to perform **online estimation** of the tool-tip trajectory during sliding, relying solely on tactile sensing.  
Unlike intrinsic tactile tasks, this work focuses on **extrinsic contact**, meaning the interaction occurs between the **tool and environment**, not the robot–tool interface.

The estimation pipeline includes:

- Dense marker tracking from GelSight images  
- Online rigid motion estimation  
- A fixed-point assumption for the tool-tip  
- Sequential 3D trajectory reconstruction  

This provides a foundation for tactile-based servoing and geometry-aware manipulation.

---

## Applications

- Groove following  
- Constrained tool manipulation  
- Environment geometry inference  
- Tactile servo control  
- Contact-rich skill learning  

---

## Future Work

- Generalizing to various groove and edge shapes  
- Online estimation of environment geometry  
- Closed-loop tactile-based servo control  
- Integration with low-level velocity controllers  

