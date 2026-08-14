---
layout: page
title: Wearable Vibrotactile System
description: Multi-channel wearable haptic hardware and human experiment platform
img: assets/projects/2_hri/2022_proprio/wearing.jpg
importance: 1
category: hri
related_publications: false
---

I developed a **multi-channel wearable vibrotactile system** for studying haptic feedback during human joint-position tasks.

<div class="alert alert-light border mt-3 mb-4">
  <strong>Core idea:</strong>
  Build the complete haptic interface — from actuator electronics and wearable hardware
  to experimental software and human-subject testing — as one integrated system.
</div>

---

## Haptic Hardware

<div class="row align-items-center project-split">
  <div class="col-md-6">
    <div class="col">
        <div class="row">
          <div class="col-sm-6">
            {% include figure.liquid
               path="assets/projects/2_hri/2022_proprio/fpcb_1.png"
               title="FPCB layout"
               class="img-fluid rounded z-depth-1"
            %}
          </div>
    
          <div class="col-sm-6">
            {% include figure.liquid
               path="assets/projects/2_hri/2022_proprio/fpcb_2.png"
               title="3D design"
               class="img-fluid rounded z-depth-1"
            %}
          </div>
    
    
        </div>
          <div class="col-sm-10">
            {% include figure.liquid
               path="assets/projects/2_hri/2022_proprio/fpcb_3.jpg"
               title="Assembled actuator patch"
               class="img-fluid rounded z-depth-1"
            %}
          </div>
    </div>
  </div>

  <div class="col-md-6">
    <h4>From PCB design to wearable hardware.</h4>

    <p>
      I designed flexible PCB patches integrating vibrotactile actuators and a
      Teensy-based controller for independent multi-channel stimulation.
    </p>

    <p>
      The system was designed to remain lightweight and wearable while reducing
      cable bulk and protecting the flexible electronics during repeated experiments.
    </p>
  </div>
</div>

<div class="row mt-4 text-center">
  <div class="col-md-4">
    <h3>8</h3>
    <p>independent haptic channels</p>
  </div>

  <div class="col-md-4">
    <h3>FPCB</h3>
    <p>custom actuator patches</p>
  </div>

  <div class="col-md-4">
    <h3>End-to-end</h3>
    <p>hardware + software + experiment</p>
  </div>
</div>

---

## Wearable Interface

<div class="row align-items-center project-split">

  <div class="col-md-6">
    <div class="project-visual">
      <div class="col">
        <div class="col-8">
          {% include figure.liquid
             path="assets/projects/2_hri/2022_proprio/wearing.jpg"
             title="Wearable interface"
             class="img-fluid rounded z-depth-1"
          %}
        </div>

        <div class="col-12">
          {% include figure.liquid
             path="assets/projects/2_hri/2022_proprio/daisy_chain_wiring.png"
             title="Daisy-chain wiring"
             class="img-fluid rounded z-depth-1"
          %}
        </div>
      </div>
    </div>
  </div>

  <div class="col-md-6">
    <h4>Designed for repeated human experiments.</h4>

    <p>
      The actuator patches were integrated into a wearable interface that maintains
      consistent skin contact while allowing fast attachment and removal.
    </p>

    <p>
      An <strong>IN/OUT daisy-chain wiring architecture</strong> was used to connect
      up to eight independently controlled vibrotactile patches while reducing cable
      bulk along the leg.
    </p>

    <p>
      The mechanical interface was iterated to balance participant comfort,
      actuator contact, and protection of the flexible electronics during repeated trials.
    </p>
  </div>

</div>

---

## Human Experiment Platform

<div class="row align-items-center project-split">

  <div class="col-md-6">
    <div class="project-visual">
     
      <div>
        {% include figure.liquid
           path="assets/projects/2_hri/2022_proprio/experimental setup for jpm.jpeg"
           title="Joint position matching experiment"
           class="img-fluid rounded z-depth-1"
        %}
      </div>
    </div>
  </div>

  <div class="col-md-6">
    <h4>A complete joint-position matching testbed.</h4>

    <p>
      I integrated the wearable device with a modified leg-extension rig,
      IMU-based joint-angle measurement, and a LabVIEW interface for running
      repeatable joint-position matching experiments.
    </p>

    <p>
      The platform supported end-to-end pilot testing, including stimulus delivery,
      experiment control, sensing, and data collection.
    </p>
  </div>

</div>
---

## Related Publication

An earlier version of this wearable haptic system was used in:

*“Preliminary Study of Portable Vibrotactile and Electrical Stimulation System for Knee Proprioception Enhancement.”*

The project shown on this page reflects subsequent iterations of the hardware, wearable interface, and experimental platform.