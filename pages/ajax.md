# AJAX

<div class="text-2xl text-gray-500">
A quick introduction to AJAX
</div>


---
hideInToc: true
---

# What is AJAX?

Asynchronous JavaScript and XML.

A technique for creating interactive web applications that can update content on a web page without requiring a full page reload.

1. The client (usually a web browser) sends an HTTP request to the server.
2. The server processes the request and returns data in a format like JSON, XML, etc.
3. The client receives the data and updates the web page dynamically using JavaScript.

---
hideInToc: true
---

# Example using Fetch API

<br>

<div class="grid grid-cols-2 gap-4">

<div>

```js {monaco-run} {autorun:false}
let api_url = "https://catfact.ninja/fact";

fetch(api_url)
  .then(response => response.json())
  .then(data => console.log(data.fact));
```

</div>

<div v-click>

```js {monaco-run} {autorun:false}
let api_url = "https://catfact.ninja/fact";

const response = await fetch(api_url);
const data = await response.json();
console.log(data.fact);
```

</div>

</div>



---
hideInToc: true
---

# Running AJAX Applications Locally

Opening your HTML file using the `file` protocol (e.g., `file:///path/to/index.html`) may not work for 
AJAX applications

### Option 1: Python's HTTP Server

Use Python's built-in HTTP server to serve your files:
```bash
python3 -m http.server 8000
```
Then, access your application at http://localhost:8000.

&nbsp;


### Option 2: Use XAMPP

Alternatively, you can install XAMPP, a popular development stack that includes Apache, MySQL, PHP, and Perl. 
It provides a more comprehensive environment for web development and testing.


