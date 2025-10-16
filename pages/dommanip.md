
# DOM Manipulation

<div class="text-2xl text-gray-500">
Vanilla JavaScript
</div>


---
hideInToc: true
---

# Selecting Elements

- **DOM** = Document Object Model
- JavaScript can access and modify any part
- Built into all browsers - no libraries needed


```js
// Single element selectors
document.getElementById("myId")                    // Returns single element by ID
document.querySelector(".myClass")                 // Returns first matching element
document.querySelector("p")                        // Returns first <p> element
document.querySelector("#header nav")              // Returns first nav inside #header

// Multiple element selectors
document.getElementsByClassName("myClass")         // Returns HTMLCollection
document.getElementsByTagName("p")                 // Returns all <p> elements
document.querySelectorAll(".myClass")             // Returns NodeList of all matches
document.querySelectorAll("div p")                // Returns all <p> inside <div>

// Modern preference: querySelector/querySelectorAll for flexibility
```

---
hideInToc: true
---

# Getting & Setting Content

```js
// Get content
const element = document.getElementById("myDiv");
const text = element.textContent                  // Get text content
const html = element.innerHTML                    // Get HTML content
const inputValue = element.value                  // Get value (form elements)

// Set content
element.textContent = "Hello World"               // Set text (escapes HTML)
element.innerHTML = "<b>Bold text</b>"            // Set HTML (renders HTML)
element.value = "New value"                       // Set input value

// Attributes
element.getAttribute("href")                      // Get attribute
element.setAttribute("href", "https://example.com") // Set attribute
element.removeAttribute("disabled")               // Remove attribute
```

---
hideInToc: true
---

# Creating & Adding Elements

```js
// Create elements
const newDiv = document.createElement("div")
const newText = document.createTextNode("Hello World")
newDiv.appendChild(newText)

// Classic methods
const parent = document.getElementById("container")
parent.appendChild(newDiv)                        // Add at end
parent.insertBefore(newDiv, parent.firstChild)   // Add at beginning

// Modern methods (better browser support now)
element.append("text", otherElement)              // Append multiple items
element.prepend("text", otherElement)             // Prepend multiple items
element.after(newElement)                         // Insert after element
element.before(newElement)                        // Insert before element

// Insert HTML directly
element.insertAdjacentHTML("beforeend", "<p>New paragraph</p>")
// Positions: "beforebegin", "afterbegin", "beforeend", "afterend"
```

---
hideInToc: true
---

# Removing Elements

```js
// Remove single element
const element = document.getElementById("myDiv")
element.remove()                                  // Modern way (IE not supported)

// Alternative for older browsers
element.parentNode.removeChild(element)

// Remove all children
element.innerHTML = ""                            // Quick but destroys event listeners

// Safer way to remove all children
while (element.firstChild) {
    element.removeChild(element.firstChild)
}

// Replace element
const newElement = document.createElement("span")
element.replaceWith(newElement)                  // Modern way
// Or: element.parentNode.replaceChild(newElement, element)
```

---
hideInToc: true
---

# Modifying Styles & Classes

```js
const element = document.getElementById("myDiv")

// Inline styles
element.style.color = "red"
element.style.backgroundColor = "blue"            // Note: camelCase for CSS properties
element.style.fontSize = "20px"
element.style.display = "none"                    // Hide element

// Working with classes
element.classList.add("active", "highlight")      // Add one or more classes
element.classList.remove("active")                // Remove class
element.classList.toggle("active")                // Toggle class on/off
element.classList.contains("active")              // Returns true/false
element.classList.replace("old", "new")           // Replace class

// Get computed styles
const styles = window.getComputedStyle(element)
console.log(styles.color)                         // Get actual computed color
```

---
hideInToc: true
---

# Event Handling

```js
const button = document.getElementById("myButton")

// Add event listener
button.addEventListener("click", function(event) {
    console.log("Button clicked!")
    console.log(event.target)                     // Element that triggered event
})

// Arrow function syntax
button.addEventListener("mouseenter", (e) => {
    e.target.style.backgroundColor = "yellow"
})

// Remove event listener (requires named function)
const handleClick = (e) => console.log("Clicked!")
button.addEventListener("click", handleClick)
button.removeEventListener("click", handleClick)

// Event delegation (handle events on dynamic elements)
document.addEventListener("click", function(e) {
    if (e.target.classList.contains("dynamic-btn")) {
        console.log("Dynamic button clicked!")
    }
})
```

---
hideInToc: true
---

# Common Events

```js
// Mouse events
element.addEventListener("click", handler)        // Single click
element.addEventListener("dblclick", handler)     // Double click
element.addEventListener("mouseenter", handler)   // Mouse enters element
element.addEventListener("mouseleave", handler)   // Mouse leaves element
element.addEventListener("mousemove", handler)    // Mouse moves over element

// Keyboard events
document.addEventListener("keydown", handler)     // Key pressed down
document.addEventListener("keyup", handler)       // Key released
document.addEventListener("keypress", handler)    // Character typed (deprecated)

// Form events
input.addEventListener("focus", handler)          // Input focused
input.addEventListener("blur", handler)           // Input lost focus
input.addEventListener("change", handler)         // Value changed
form.addEventListener("submit", handler)          // Form submitted

// Window events
window.addEventListener("load", handler)          // Page fully loaded
window.addEventListener("resize", handler)        // Window resized
window.addEventListener("scroll", handler)        // Page scrolled
```

---
hideInToc: true
---

# Document Ready & Loading

```js
// Wait for DOM to be ready (doesn't wait for images/styles)
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed")
    // Safe to access DOM elements here
})

// Wait for everything to load (including images, styles)
window.addEventListener("load", function() {
    console.log("Page fully loaded")
    // Everything is loaded
})

// Check if document is ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", afterDOMLoaded)
} else {
    afterDOMLoaded()
}

function afterDOMLoaded() {
    // DOM manipulation code here
}
```

---
hideInToc: true
---

# Traversing the DOM

```js
const element = document.getElementById("myDiv")

// Navigate up (parents)
element.parentNode                               // Direct parent (could be text)
element.parentElement                            // Parent element only
element.closest(".container")                    // Nearest ancestor matching selector

// Navigate down (children)
element.children                                 // Direct child elements only
element.childNodes                               // All nodes including text
element.firstElementChild                        // First child element
element.lastElementChild                         // Last child element

// Navigate sideways (siblings)
element.nextElementSibling                       // Next sibling element
element.previousElementSibling                   // Previous sibling element

// Find within element
element.querySelector(".child")                  // First matching descendant
element.querySelectorAll(".child")              // All matching descendants
element.getElementsByClassName("child")          // All descendants with class
```

