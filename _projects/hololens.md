---
layout: page
title: AR Haptic Feedback
description: Fingertip vibrotactile feedback for hand interaction in augmented reality
img: assets/projects/2_hri/2022_hololens/2_haptic_feedback.gif
category: hri
related_publications: false
---

I built a small HoloLens 2 interaction prototype to explore how **fingertip vibrotactile feedback** can provide physical confirmation during virtual contact.

<div class="alert alert-light border mt-3 mb-4">
  <strong>Core idea:</strong>
  Add a simple tactile event cue to visually tracked hand interaction in AR.
</div>

---

## Prototype

<div class="row align-items-center project-split">

  <div class="col-md-6">
    <div class="project-visual">
      <video controls class="img-fluid rounded z-depth-1">
        <source src="{{ '/assets/projects/2_hri/2022_hololens/hololens2_handtracking.mp4' | relative_url }}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
  </div>

  <div class="col-md-6">
    <h4>Hand tracking with physical contact feedback.</h4>

    <p>
      The prototype used <strong>HoloLens 2 articulated hand tracking</strong>
      in a Unity environment, together with a small vibration motor attached
      to the fingertip.
    </p>

    <p>
      A virtual object registered contact when pushed by the index finger,
      allowing visual, auditory, and vibrotactile feedback conditions to be compared.
    </p>
  </div>

</div>

---
## Interaction Conditions

<div class="row mt-3">
  <div class="col-md-4">
    {% include figure.liquid
       path="assets/projects/2_hri/2022_hololens/1_no_feedback.gif"
       title="Vision only"
       class="img-fluid rounded z-depth-1"
    %}
  </div>

  <div class="col-md-4">
    {% include figure.liquid
       path="assets/projects/2_hri/2022_hololens/2_haptic_feedback.gif"
       title="Vision + haptic"
       class="img-fluid rounded z-depth-1"
    %}
  </div>

  <div class="col-md-4">
    {% include figure.liquid
       path="assets/projects/2_hri/2022_hololens/3_audio_feedback.gif"
       title="Vision + audio"
       class="img-fluid rounded z-depth-1"
    %}
  </div>
</div>

<div class="mt-4">
  <h4>Three simple feedback modes.</h4>

  <p>
    I implemented three interaction conditions:
    <strong>vision only</strong>,
    <strong>vision + audio</strong>, and
    <strong>vision + vibrotactile feedback</strong>.
  </p>

  <p>
    The goal was not to establish a perceptual result, but to test whether a
    lightweight tactile cue could be integrated naturally with real-time
    AR hand interaction.
  </p>
</div>

---

## Prototype Observation

<div class="row mt-4 text-center">
  <div class="col-md-4">
    <h3>~17 s</h3>
    <p>vision only</p>
  </div>

  <div class="col-md-4">
    <h3>~15 s</h3>
    <p>vision + audio</p>
  </div>

  <div class="col-md-4">
    <h3>~12 s</h3>
    <p>vision + haptic</p>
  </div>
</div>

<div class="alert alert-light border mt-3">
  <strong>Prototype observation:</strong>
  In a small self-test involving six repeated virtual clicks,
  vibrotactile feedback produced the shortest completion time.
  These measurements were exploratory and were not a controlled user study.
</div>