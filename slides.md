---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Tech du Web
info: |
  ## Web Development
  EC2 - Technologies du Web avancées

# apply UnoCSS classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
hideInToc: true
---

# Tech du Web avancées

<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  <!-- Press Space for next page <carbon:arrow-right /> -->
  <h3>Abdallah Ammar - CNRS</h3>
  <p class="opacity-80">MIASHS L2 - 2024/2025</p>
</div>

<div class="abs-br m-6 text-xl">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="slidev-icon-btn">
    <carbon:edit />
  </button>
  <a href="https://github.com/AbdAmmar" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. 
It will be visible and editable in Presenter Mode along with the 
slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->



---

# Table of Contents

<Toc />

---
src: ./pages/dommanip.md
---

---
src: ./pages/jquery.md
---

---
src: ./pages/promises.md
---

---
src: ./pages/ajax.md
---

---
src: ./pages/php.md
---
