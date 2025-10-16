

# JavaScript Promises

<div class="text-2xl text-gray-500">
Handling Asynchronous Operations
</div>


---
hideInToc: true
---

# What is a Promise?

A **Promise** is an object representing the eventual completion or failure of an asynchronous operation.

<div class="grid grid-cols-2 gap-4 mt-8">

<div>

## Promise States

- 🕒 **Pending** - Initial state
- ✅ **Fulfilled** - Operation succeeded
- ❌ **Rejected** - Operation failed

</div>

<div>

```js {monaco-run} {autorun:false}
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve("👍👍👍");
    } else {
      reject("👎👎👎");
    }
  }, 1000);
});

// Using the promise
promise
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

</div>

</div>

---
hideInToc: true
---

# From Callback Hell to Promises

<br>

<div class="grid grid-cols-2 gap-8">

<div>

## Callback Hell ☠️


```js
getData(function(a) {
  getMoreData(a, function(b) {
    getMoreData(b, function(c) {
      getMoreData(c, function(d) {
        console.log(d);
      });
    });
  });
});
```

</div>

<div>

## Promises ✨

```js
getData()
  .then(a => getMoreData(a))
  .then(b => getMoreData(b))
  .then(c => getMoreData(c))
  .then(d => console.log(d))
  .catch(error => console.error(error));
```

</div>

</div>

---
hideInToc: true
---

# Async/Await - Modern Promise Syntax

<div class="grid grid-cols-2 gap-4">

<div>

```js {monaco-run} {autorun:false}
function myAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("👋👋👋"), 2000);
  });
}

// Using the promise
myAsyncOperation()
  .then(result => console.log(result))
```

</div>

<div v-click>

```js {monaco-run} {autorun:false}
async function myAsyncOperation() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("👋👋👋"), 2000);
  });

  // Using the promise
  let result = await promise;
  console.log(result);
}

myAsyncOperation();
```

</div>

</div>

