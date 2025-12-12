---
layout: page
title: Tactile Roughness Estimation with the DIGIT Sensor
description: A feasibility study on ordinal tactile representation learning
img: assets/projects/1_tactile/2025_roughness/kinova.png
importance: 2
category: tactile
---

## 🧭 Project Overview

This project explores **tactile roughness estimation** using  
high-resolution **vision-based tactile images from the DIGIT sensor**.

Rather than treating roughness as a precise scalar value,
this work investigates **ordinal formulations**  
(e.g., *“A is rougher than B”*) as a more robust learning signal
under **limited data and sensor variation**.

At the current stage, this project focuses on a **controlled feasibility study**
using **sandpaper samples** to understand how different learning paradigms behave
before extending to textiles and human perceptual labels.

---

## 🎯 Motivation

Estimating tactile roughness is not merely a regression problem.

In real-world tactile perception:

- labels are ambiguous,
- sensor conditions vary (gel wear, lighting, unit differences),
- and human judgments are fundamentally **ordinal**.

This project asks a simple question:

> **Is ranking-based learning more stable than regression or classification
> for tactile material perception?**

---

## 🛠 Hardware & Data Collection Setup

### Automated Indentation with Kinova + DIGIT

<div class="row">
    <div class="col-sm mt-3">
        <video controls class="img-fluid rounded z-depth-1">
          <source src="/assets/projects/1_tactile/2025_roughness/kinova.mp4" type="video/mp4">
        </video>
    </div>
    <div class="col-sm mt-3">
        <div style="width:40%;">
            {% include figure.liquid
               path="assets/projects/1_tactile/2025_roughness/closeup.png"
               title="Close-up view of DIGIT sensor and sandpaper contact"
               class="img-fluid rounded z-depth-1"
            %}
        </div>
    </div>

</div>

<div class="caption">
Kinova Gen3 performs repeatable vertical indentations while streaming DIGIT tactile images.
</div>

---

## 🧪 Materials & Dataset (Current)

**Sensors**
- DIGIT tactile sensors (multiple units)
- Different gel conditions (new / worn)

**Materials**
- 5 sandpaper classes  
  *(grit: 100, 180, 240, 320, 400)*

**Data**
- ~2,000 tactile images per class
- Robot-collected + small hand-collected mix
- Uncontrolled gel wear and illumination variation

---

## 📊 Learning Paradigms Evaluated

We evaluated three common formulations:

- **Classification** (Cross-Entropy loss)
- **Scalar Regression** (MSE loss)
- **Pairwise Ranking** (RankNet-style loss)

Each paradigm was tested under:

- **Data regimes:** full / medium / low
- **Evaluation settings:**
  - in-domain (same sensor)
  - cross-sensor transfer (different DIGIT units & gels)

---

## 🧠 Key Observations (Feasibility Findings)

- **Roughness is fundamentally ordinal**
  - Ordering between sandpapers is preserved even under sensor variation.

- **Ranking is label-efficient**
  - Stable ordering emerges even with very limited data.

- **Regression is fragile**
  - Performance degrades sharply under domain shift.

- **Classification is misleading**
  - High accuracy does not imply correct ordering or perceptual structure.

These trends suggest that **ranking-based supervision may be better aligned**
with tactile material perception than absolute labels.

---

## 🚀 Next Steps

This project is ongoing. Planned extensions include:

- Textile samples with richer geometry and compliance
- Human perceptual ranking experiments
- Larger-scale pairwise datasets
- Comparison of ranking formulations:
  - RankNet
  - Bradley–Terry
  - Thurstone
- Systematic cross-sensor generalization analysis

---

<div class="alert alert-info">
<strong>Status:</strong> Ongoing feasibility study.<br>
This page will be updated as textile data and perceptual experiments are added.
</div>
