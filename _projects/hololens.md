---
layout: page
title: Enhancing AR Interaction with Vibrotactile Feedback (HoloLens2)
description: Exploring how fingertip haptics improve immersion and task performance in AR
img: assets/projects/2_hri/2022_hololens/2_haptic_feedback.gif
category: hri
related_publications: false
---

This project explores how adding **simple vibrotactile fingertip feedback** can improve  
interaction quality and task performance in **HoloLens 2 AR environments**.  
I built a small Unity-based AR “click test” game where the user pushes a floating cube,  
and compared three feedback conditions:

1. **Vision only**  
2. **Vision + audio feedback**  
3. **Vision + vibrotactile feedback**

Even with this minimal setup, tactile cues noticeably improved both immersion and efficiency.

---

## 🎯 Purpose of the Project

Humans rely heavily on tactile sensations to judge contact and timing.  
AR systems, however, often depend almost entirely on vision.

This prototype explored:

- Whether **a single fingertip vibration motor** can enhance AR interaction
- How task performance changes when adding **audio or haptic cues**
- How users perceive “successful contact” in an AR environment
- Practical development with **HoloLens2 articulated hand tracking + Unity**

---

## 🥽 Hardware & Setup

<div class="row">
    <div class="col-sm mt-3 mt-md-0 d-flex justify-content-center">
        <div style="width:40%;">
            {% include figure.liquid path="assets/projects/2_hri/2022_hololens/hololens2.png"
               title="Microsoft HoloLens 2"
               class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</div>

<div class="caption">
    The system combines HoloLens 2 hand-tracking with a small ERM vibration motor on the fingertip.
</div>

---

## ✋ Hand Tracking Prototype

A simple Unity scene was created to visualize real-time fingertip tracking.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        <video controls class="img-fluid rounded z-depth-1">
          <source src="/assets/projects/2_hri/2022_hololens/hololens2_handtracking.mp4" type="video/mp4">
        </video>
    </div>
</div>

---

## 🎮 AR “Click Test” Game

A floating virtual cube registers a “click” when pushed with the index finger.  
The task: **successfully click the cube six times as quickly as possible.**

<div class="row">
    <div class="col-sm mt-3">
        {% include figure.liquid path="assets/projects/2_hri/2022_hololens/1_no_feedback.gif"
           title="1) Vision Only"
           class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3">
        {% include figure.liquid path="assets/projects/2_hri/2022_hololens/2_haptic_feedback.gif"
           title="2) Vision + Haptic Feedback"
           class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3">
        {% include figure.liquid path="assets/projects/2_hri/2022_hololens/3_audio_feedback.gif"
           title="3) Vision + Audio Feedback"
           class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

## ⏱ Performance Summary (Self-Test)

Even with a very small prototype test, the trend was clear:

| Condition                | Time for 6 clicks |
|-------------------------|-------------------|
| Vision only             | **~17 sec**       |
| Vision + audio cue      | **~15 sec**       |
| Vision + haptic cue     | **~12 sec**       |

**Vibrotactile feedback yielded the best performance**,  
suggesting that even a simple fingertip vibration can provide rapid confirmation of contact,  
leading to faster and more confident interaction.

These results also align with human perceptual intuition—  
tactile cues reduce ambiguity about “when contact happened.”

---

## 📝 Insights & Takeaways

This small prototype provided several useful insights:

- **Haptic cues significantly enhance AR interaction** even when minimal  
- Users rely on **tactile confirmation** to time their actions precisely  
- Audio feedback helps but does not replace the natural feel of touch  
- AR systems benefit from adding **physical sensory channels** in addition to visual ones

This early project foreshadowed my later research interests in  
**tactile sensing, multimodal feedback, and contact-aware robot control**.

---

## 🚀 Future Extensions

If revisited today, interesting directions would include:

- Running a proper user study with multiple participants  
- Testing richer actuator types (voice coils, LRAs, multi-finger patterns)  
- Combining tactile cues with **force estimation** or **robot teleoperation**  
- Designing AR interaction models that adapt based on tactile “event detection”  

---

If you'd like to discuss this prototype or AR–tactile feedback design, feel free to reach out.
