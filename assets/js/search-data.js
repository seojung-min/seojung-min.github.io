// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-relocating-to-boston-️-for-a-year-starting-march-2026-to-pursue-research-and-collaboration-opportunities",
          title: 'Relocating to Boston✈️ for a year starting March 2026 to pursue research and...',
          description: "",
          section: "News",},{id: "news-settled-in-boston-and-officially-starting-my-year-as-a-remote-ph-d-student",
          title: 'Settled in Boston and officially starting my year as a remote Ph.D. student....',
          description: "",
          section: "News",},{id: "news-our-paper-ranking-based-learning-for-robust-tactile-roughness-perception-under-domain-shift-was-accepted-to-ur-2026",
          title: 'Our paper, “Ranking-Based Learning for Robust Tactile Roughness Perception under Domain Shift,” was...',
          description: "",
          section: "News",},{id: "news-our-paper-geometric-reconstruction-of-extrinsic-contact-trajectories-using-tactile-sensing-and-proprioception-for-tool-manipulation-was-accepted-to-iros-2026",
          title: 'Our paper, “Geometric Reconstruction of Extrinsic Contact Trajectories using Tactile Sensing and Proprioception...',
          description: "",
          section: "News",},{id: "news-our-paper-real-time-evaluation-and-few-shot-hardware-adaptation-of-a-vision-based-tactile-sensor-was-accepted-to-iccas-2026",
          title: 'Our paper, “Real-Time Evaluation and Few-Shot Hardware Adaptation of a Vision-Based Tactile Sensor,”...',
          description: "",
          section: "News",},{id: "projects-online-tactile-based-extrinsic-contact-tracking",
          title: 'Online Tactile-Based Extrinsic Contact Tracking',
          description: "Online tool-tip trajectory estimation using dual GelSight tactile sensors",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dynamic_extrinsic/";
            },},{id: "projects-tactile-force-estimation-with-gelsight-mini",
          title: 'Tactile Force Estimation with GelSight Mini',
          description: "Building a force estimator for future extrinsic contact reasoning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gelsight/";
            },},{id: "projects-enhancing-ar-interaction-with-vibrotactile-feedback-hololens2",
          title: 'Enhancing AR Interaction with Vibrotactile Feedback (HoloLens2)',
          description: "Exploring how fingertip haptics improve immersion and task performance in AR",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hololens/";
            },},{id: "projects-wearable-vibrotactile-haptic-feedback-system",
          title: 'Wearable Vibrotactile Haptic Feedback System',
          description: "Hardware prototyping + human experiment design for proprioception-inspired haptic feedback",
          section: "Projects",handler: () => {
              window.location.href = "/projects/proprioception/";
            },},{id: "projects-tactile-roughness-estimation-with-the-digit-sensor",
          title: 'Tactile Roughness Estimation with the DIGIT Sensor',
          description: "A feasibility study on ordinal tactile representation learning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/roughness/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%65%6F%6A%75%6E%67.%6D%69%6E@%6B%61%69%73%74.%61%63.%6B%72", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/seojung-min-a28b7416b", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=yBy8Pu8AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
