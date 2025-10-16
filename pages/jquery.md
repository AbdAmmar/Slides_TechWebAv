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
- **Simplifies**: DOM manipulation, Event handling, Animations, etc.

<br>

<div class="grid grid-cols-2 gap-4">

<div>

Basic syntax: `$(selector).action()`
 - `$` - Access jQuery
 - `(selector)` - Find HTML elements
 - `action()` - Perform action on elements

</div>

<div>

```js
$(document).ready(function(){
    // jQuery code here
});

// Shorthand
$(function(){
    // jQuery code here
});
```

</div>

</div>

---
hideInToc: true
---

# DOM Manipulation

```html
<!-- Include jQuery -->
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
```

<div class="grid grid-cols-[450px_1fr] gap-4">

<div>

```js
document.getElementById("myDiv").textContent;
document.getElementById("myDiv").innerHTML;
document.getElementById("myInput").value;

document.getElementById("myDiv").textContent = "Hello";
document.getElementById("myDiv").innerHTML = "<b>Bold</b>";
document.getElementById("myInput").value = "New Value";
```

</div>

<div>

```js
$("#myDiv").text();
$("#myDiv").html();
$("#myInput").val();

$("#myDiv").text("Hello");
$("#myDiv").html("<b>Bold</b>");
$("#myInput").val("New Value");
```

</div>


</div>

