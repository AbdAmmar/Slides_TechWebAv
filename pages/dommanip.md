---

# DOM Manipulation

<div class="text-2xl text-gray-500">
Vanilla JavaScript
</div>



---
hideInToc: true
---

# Example

<div class="grid grid-cols-2 gap-8">

<div>

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Example</title>
</head>
<body>
</body>
</html>
```

</div>

<div>

```js {monaco-run} {autorun:false}
const win = window.open('./pages/html/file1.html');

win.onload = () => {
  hi();
};

function hi() {
  win.document.body.innerHTML += '<h1>👋👋👋</h1>';

  let str = "JavaScript can access and modify any part"
  win.document.body.innerHTML += `<h2>${str}</h2>`;
}
```

</div>

</div>


---
hideInToc: true
---

## Useful methods

```js {all|1-5|7-10|12-16|18-21}
// Get content
const element = document.getElementById("myDiv");
const text = element.textContent;                  // Get text content
const html = element.innerHTML;                    // Get HTML content
const inputValue = element.value;                  // Get value (form elements)

// Set content
element.textContent = "Hello World";               // Set text (escapes HTML)
element.innerHTML = "<b>Bold text</b>";            // Set HTML (renders HTML)
element.value = "New value";                       // Set input value

// Create elements
const newDiv = document.createElement("div");
const newText = document.createTextNode("Hello World");
newDiv.appendChild(newText);
newDiv.removeChild(newText);

// Inline styles
element.style.color = "red";
element.style.backgroundColor = "blue";
element.style.fontSize = "20px";
```

---
hideInToc: true
---

# Common Events

<br>

<div class="grid grid-cols-2 gap-8">

<div>

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Example</title>
</head>
<body>
  <h1 id="my-text">You can't change my color</h1>
</body>
</html>
```

</div>

<div>

```js {monaco-run} {autorun:false}
const win = window.open('./pages/html/file2.html');

win.onload = () => {
  changeColor();
};

function changeColor() {
  const text= win.document.getElementById('my-text');
  
  text.addEventListener('dblclick', function() {
    this.style.color = "red";
  });
}
```

</div>

</div>

