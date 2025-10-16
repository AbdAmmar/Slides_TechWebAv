
# jQuery Basics

<div class="text-2xl text-gray-500">
A quick introduction to jQuery fundamentals
</div>


---
hideInToc: true
---

# What is jQuery?

- **Lightweight JavaScript library** (write less, do more)
- **Cross-browser compatible**
- **Simplifies**:
  - DOM manipulation
  - Event handling
  - Animations
  - AJAX calls

```html
<!-- Include jQuery -->
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
```


---
hideInToc: true
---

# jQuery Syntax

## Basic syntax: `$(selector).action()`

- `$` - Access jQuery
- `(selector)` - Find HTML elements
- `action()` - Perform action on elements

```js
$(document).ready(function(){
    // jQuery code here
});

// Shorthand
$(function(){
    // jQuery code here
});
```

---
hideInToc: true
---

# Selectors

```js
// Element selector
$("p")                  // All <p> elements

// ID selector  
$("#myId")              // Element with id="myId"

// Class selector
$(".myClass")           // All elements with class="myClass"

// Attribute selector
$("[href]")             // All elements with href attribute

// Multiple selectors
$("h1, h2, p")         // All h1, h2, and p elements
```

---
hideInToc: true
---

# DOM Manipulation

## Get/Set Content

```js
// Get
$("#myDiv").text()              // Get text content
$("#myDiv").html()              // Get HTML content
$("#myInput").val()             // Get input value

// Set
$("#myDiv").text("Hello")       // Set text
$("#myDiv").html("<b>Bold</b>") // Set HTML
$("#myInput").val("New Value")  // Set input value
```

---
hideInToc: true
---

# DOM Manipulation (cont.)

## Add/Remove Elements

```js
// Add
$("#myDiv").append("<p>New paragraph</p>")    // Add at end
$("#myDiv").prepend("<p>First paragraph</p>") // Add at beginning
$("#myDiv").after("<div>After</div>")         // Add after element
$("#myDiv").before("<div>Before</div>")       // Add before element

// Remove
$("#myDiv").remove()    // Remove element and children
$("#myDiv").empty()     // Remove children only
```


