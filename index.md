---
layout: splash
title: "Hi, I'm Daehun"
permalink: /
header:
  overlay_color: "#ffffff"
  overlay_filter: "0.0"
  overlay_image: /assets/images/avatar.jpg
  actions:
    - label: "Projects"
      url: /#projects
      class: "btn btn--primary"
    - label: "About"
      url: /about/
      class: "btn"
excerpt: "AI · Web · VR — 사용자 경험 중심의 개발자"


feature_row:
  - image_path: /assets/images/projects/sonsation.png
    alt: "Son’sation – AI Sign Language Learning"
    title: "Son’sation"
    excerpt: "AI 기반 수어 학습 플랫폼 (React · Spring Boot · PyTorch SignBERT)"
    
  - image_path: /assets/images/projects/trashbin.png
    alt: "Smart Trash Bin System"
    title: "스마트 쓰레기통 SW 시스템"
    excerpt: "Spring Boot · Spring Security · JWT · MySQL"
    
  - image_path: /assets/images/projects/voca.png
    alt: "Voca – 나만의 단어장"
    title: "Voca – 나만의 단어장"
    excerpt: "React · Express · MySQL · UX 최적화 퀴즈 학습"
---

<section id="projects">
  {% include feature_row type="left" %}
</section>
