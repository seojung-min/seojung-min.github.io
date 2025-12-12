---
layout: page
title: Wearable Vibrotactile Haptic Feedback System
description: Hardware prototyping + human experiment design for proprioception-inspired haptic feedback
img: assets/projects/2_hri/2022_proprio/final fpcb board.png
importance: 1
category: hri
related_publications: false
---

This project focuses on building a **robust wearable vibrotactile feedback system**  
and designing **human–robot interface experiments** to evaluate its effect on joint position awareness.

Originally inspired by proprioception enhancement studies,  
the project evolved into a broader contribution toward **lightweight haptic feedback hardware**,  
**durable FPCB-based actuator arrays**, and **rapid experiment prototyping**.

---

## 🎯 Purpose of the Project

The main goal was to create a **portable, multi-channel vibrotactile device**  
that can deliver reliable and independent vibration signals at up to 8 locations.  

Rather than emphasizing the proprioception enhancement results themselves  
(which were mixed), this project highlights the engineering achievements that made the system work:

- High-durability **FPCB design** integrating vibration actuators  
- **Wearable interface** that is easy for experimenters to attach, yet protects delicate components  
- A custom **LabVIEW-driven experiment UI**  
- A modified **leg-extension rig** that replicates Biodex-style joint-position testing at a fraction of the cost  
- Full pipeline for **human-subject pilot testing**, analysis, and hardware iteration

---

## 🛠 Hardware Development

### FPCB-Integrated Vibrotactile Actuator Array

One of the key engineering challenges was creating a **compact, durable, vibration-ready FPCB** that hosts multiple LRAs.

The design goals were:

- Maximize **vibration transmission efficiency**  
- Ensure robustness under **continuous high-frequency excitation**  
- Minimize wiring bulk using a **daisy-chain topology**  
- Maintain flexibility for wearable applications  
- Support **independent control** of up to 8 vibrotactile channels  

#### 📷 FPCB & Actuator Array (Design → 3D → Real Hardware)

<div class="row">
  <div class="col-sm mt-3">
    {% include figure.liquid path="assets/projects/2_hri/2022_proprio/fpcb_1.png"
       title="KiCad PCB layout of the vibrotactile FPCB"
       class="img-fluid rounded z-depth-1" %}
  </div>
    <div class="col-sm mt-3">
    {% include figure.liquid path="assets/projects/2_hri/2022_proprio/fpcb_2.png"
       title="3D visualization of the FPCB with LRAs mounted"
       class="img-fluid rounded z-depth-1" %}
  </div>
    <div class="col-sm mt-3">
    {% include figure.liquid path="assets/projects/2_hri/2022_proprio/fpcb_3.png"
       title="Assembled vibrotactile FPCB patch used in experiments"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
    From CAD to hardware: designing the FPCB for durability and vibration transmission, then validating with real patches.
</div>

Through multiple iterations, the final board achieved:

- Stable resonance performance  
- Strong mechanical adhesion to the skin interface  
- Minimal connector fatigue  
- Clean cable management for user comfort  

This FPCB development was one of the major engineering outcomes of the project.

---

### Multi-Channel Controller & System Form Factor

The vibrotactile patches are driven by a **Teensy-based controller board**,  
designed for **independent multi-channel control** while keeping the system portable.

#### 📷 Controller Board & System Weight

<div class="row">
  <div class="col-sm mt-3 mt-md-0"> 
    {% include figure.liquid path="assets/projects/2_hri/2022_proprio/teensy controller pcb.png"
       title="Teensy-based controller: schematic, PCB layout, 3D, and assembled board"
       class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/projects/2_hri/2022_proprio/total weight.png"
       title="Total system weight measurement (controller + battery + patches)"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
    Compact multi-channel controller and lightweight total system, designed to be integrated into wearable or exoskeleton platforms.
</div>

---

## 🧵 Wearable Interface Design

A critical part of the project was ensuring the device could be reliably **attached to human subjects**.

The wearable interface was designed to:

- Keep vibration actuators pressed against the skin with **consistent contact pressure**  
- Allow experimenters to **attach/remove the device quickly**  
- Protect the FPCB from bending and impact  
- Maintain comfort during repeated trials  

#### 📷 Wearable Interface

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/projects/2_hri/2022_proprio/wearable interface.png"
       title="Wearable interface wrapping the thigh with embedded vibrotactile patches"
       class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-10 mt-3 mt-md-0">
    <div style="width:20%;">
        <video controls class="img-fluid rounded z-depth-1">
          <source src="/assets/projects/2_hri/2022_proprio/wearable interface.mp4" type="video/mp4">
        </video>
    </div>
  </div>
</div>

<div class="caption">
    The wearable interface was iteratively designed to balance comfort, robustness, and consistent skin contact.
    A short demo of how the wearable interface is attached to a participant while preserving the durability of the FPCB.
</div>

---

### Daisy-Chain Wiring for 8 Patches

To reduce cable clutter, the system uses **daisy-chain wiring**:  
each FPCB has a clear **IN/OUT** wiring scheme so that multiple patches can be chained along the leg.

#### 📷 Daisy-Chain Wiring on the Body

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/projects/2_hri/2022_proprio/daisy_chain_wiring.png"
       title="Eight vibrotactile patches daisy-chained along the leg"
       class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/projects/2_hri/2022_proprio/daisy_chain_wiring_2.png"
       title="Close-up of controller and patch with IN/OUT wiring"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
    Daisy-chain wiring topology minimizes cable bulk while allowing up to 8 independently controlled vibrotactile patches.
</div>

---

## 🤖 Human Experiment System & Protocol

To evaluate the effect of vibrotactile feedback,  
I designed an entire **joint position matching** experiment setup modeled after Biodex systems.

### What was built:

- A compact **leg-extension machine modification** enabling controlled knee angle movement  
- A **LabVIEW front-end** guiding both experimenter and participant  
- IMU-based joint-angle measurement  
- A consistent, repeatable protocol inspired by proprioception literature  
- Noise-suppressed visual and auditory isolation (for proprioception-only trials)

#### 📷 Early Proprioception (JPM) Experiment Setup

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/projects/2_hri/2022_proprio/5.png"
       title="Participant wearing the vibrotactile device during the joint position matching task"
       class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/projects/2_hri/2022_proprio/experimental setup for jpm.jpeg"
       title="Overall experimental setup: leg extension rig, LabVIEW UI, and feedback system"
       class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
    Modified leg extension device and LabVIEW-based protocol used for ipsilateral joint position matching tests in the early proprioception study.
</div>

This part of the project demonstrates ability to:

- Design and run **human-subject experiments end-to-end**  
- Build **low-cost replicas of research-grade equipment**  
- Integrate hardware, software, and biomechanics knowledge  
- Handle **data collection** and analysis for pilot studies  

---

## 🧪 Pilot Study (Simplified)

A pilot study with young adult participants was conducted to verify feasibility.  
Although the original aim—proprioception enhancement—showed **limited improvements**,  
the study validated the **hardware reliability**, the **wearable robustness**,  
and the **experimental protocol**.

Key engineering takeaways:

- The multi-channel vibrotactile array remained mechanically stable throughout trials  
- The wearable interface preserved actuator performance  
- The experiment software and hardware operated seamlessly over repeated sessions  

---

## 📌 What This Project Demonstrates

### ✔ Haptic Hardware Engineering  
Durable FPCB design, vibration mechanics understanding, multi-channel control.

### ✔ Wearable System Prototyping  
Comfort, robustness, ease of attachment, repeatability in human testing.

### ✔ Experiment & Interface Design  
LabVIEW UI, biomechanics experiment replication, statistical evaluation.

### ✔ Human–Robot Interaction Engineering  
Bridging sensing, feedback, and human behavior through controlled protocols.

---

[//]: # ()
[//]: # (## 🚀 Next Steps)

[//]: # ()
[//]: # (- Integrate vibrotactile feedback with **robot teleoperation** interfaces  )

[//]: # (- Build **closed-loop haptic cues** for manipulation or rehabilitation  )

[//]: # (- Explore **data-driven personalization** of vibration patterns  )

[//]: # (- Combine tactile sensing &#40;e.g., GelSight&#41; with vibrotactile feedback for richer HRI systems  )

[//]: # ()
[//]: # (---)

[//]: # ()
[//]: # (If you’d like to learn more about this haptic system or its applications in human–robot interaction, feel free to reach out.)
