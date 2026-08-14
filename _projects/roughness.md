---
layout: page
title: Robust Tactile Roughness Perception
description: Learning and adaptation under sensor and interaction variability
img: assets/projects/1_tactile/2025_roughness/THUMBNAIL.png
importance: 2
category: tactile
related_publications: false
---

Vision-based tactile signals can change substantially across sensors, gel pads, and exploration conditions.  
This project studies **how tactile roughness perception can remain reliable when the sensing conditions change**.

<div class="alert alert-light border mt-3 mb-4">
  <strong>Core question:</strong>
  When absolute tactile measurements are unstable, what information remains reliable enough to learn and transfer?
</div>

---

## Study 1: Ranking under Domain Shift

<div class="row align-items-center">
  <div class="col-md-7 mt-3">
    {% include figure.liquid
       path="assets/projects/1_tactile/2025_roughness/FIGURE_RANKING_CONCEPT.png"
       title="Ranking-based tactile roughness perception under domain shift"
       class="img-fluid rounded z-depth-1"
    %}
  </div>

  <div class="col-md-5 mt-3">
    <h4>Relative ordering is more stable than absolute scale.</h4>

    <p>
      We compared <strong>classification, regression, and pairwise ranking</strong>
      using five sandpaper grit levels. All three formulations performed similarly
      under well-conditioned in-domain data, but their behavior diverged when
      training data became scarce or sensing conditions changed.
    </p>

    <p>
      Ranking directly optimizes ordinal relationships rather than absolute numerical
      targets, making it less sensitive to shifts in the tactile response scale.
    </p>
  </div>
</div>

<div class="row mt-4 text-center">
  <div class="col-md-4">
    <h3>9,595</h3>
    <p>in-domain tactile samples</p>
  </div>

  <div class="col-md-4">
    <h3>5</h3>
    <p>ordered roughness levels</p>
  </div>

  <div class="col-md-4">
    <h3>+0.290</h3>
    <p>Spearman correlation over regression under OOD shift</p>
  </div>
</div>

<div class="row justify-content-sm-center mt-3">
  <div class="col-sm-12">
    {% include figure.liquid
       path="assets/projects/1_tactile/2025_roughness/FIGURE_RANKING_RESULTS.png"
       title="Out-of-distribution comparison of classification, regression, and ranking"
       class="img-fluid rounded z-depth-1"
    %}
  </div>
</div>

<div class="caption">
  Ranking-based learning preserves ordinal consistency more effectively under sensor and exploration shift, particularly when training supervision is limited.
</div>

---

## Study 2: Real-Time Deployment & Hardware Adaptation

<div class="row align-items-center">
  <div class="col-md-7 mt-3">
    {% include figure.liquid
       path="assets/projects/1_tactile/2025_roughness/FIGURE_ADAPTATION.png"
       title="Real-time performance and few-shot hardware adaptation"
       class="img-fluid rounded z-depth-1"
    %}
  </div>

  <div class="col-md-5 mt-3">
    <h4>Offline accuracy does not guarantee deployed performance.</h4>

    <p>
      A follow-on study examined what happens when a tactile classifier is moved
      from an offline test set to <strong>live robotic contact</strong>, and then to
      a previously unseen DIGIT sensor and gel configuration.
    </p>

    <p>
      The performance drop was substantial, but most of the hardware-induced gap
      could be recovered using only a small amount of target-domain data.
    </p>
  </div>
</div>

<div class="row mt-4 text-center">
  <div class="col-md-3">
    <h3>96.76%</h3>
    <p>offline test</p>
  </div>

  <div class="col-md-3">
    <h3>82.96%</h3>
    <p>real-time, known hardware</p>
  </div>

  <div class="col-md-3">
    <h3>72.22%</h3>
    <p>real-time, unseen hardware</p>
  </div>

  <div class="col-md-3">
    <h3>88.15%</h3>
    <p>after few-shot adaptation</p>
  </div>
</div>

<div class="alert alert-light border mt-3">
  <strong>Few-shot result:</strong>
  14 images per class recovered most of the hardware-induced performance gap,
  and 28 images per class matched the real-time performance obtained on hardware
  seen during training.
</div>

---

## Publications

**Seojung Min**, Juhee Park, Gunhee Park, and Jung Kim  
“Ranking-Based Learning for Robust Tactile Roughness Perception under Domain Shift”  
*2026 23rd International Conference on Ubiquitous Robots (UR), IEEE.*

<br>

Juhee Park, **Seojung Min**, and Jung Kim  
“Real-Time Evaluation and Few-Shot Hardware Adaptation of a Vision-Based Tactile Sensor”  
*2026 26th International Conference on Control, Automation and Systems (ICCAS).*