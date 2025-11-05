# PHP

<div class="text-2xl text-gray-500">
PHP Introduction
</div>


---
hideInToc: true
---

## What is PHP?

- Hypertext Preprocessor
- Server-side scripting language

## Running PHP

- Built-in server: `php -S localhost:8000`
- XAMPP/WAMP stack

## Basic Syntax

<div class="grid grid-cols-2 gap-4">

<div>

- Files use `.php` extension
- PHP code wrapped in `<?php ?>`
- Statements end with semicolon `;`
- Variables start with `$`

</div>

<div>

```php
<?php
echo "Hello World!";
?>
```

</div>

</div>



---
hideInToc: true
---

# Example

<div class="grid grid-cols-2 gap-8">

<div>

## PHP file

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Example</title>
</head>
<body>
	<!-- comment inside html -->
	<?php
	echo "<h1>Hello from PHP!</h1>";
	// comment inside php
	?>
</body>
</html>
```

</div>

<div>

## after PHP interpretation

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Example</title>
</head>
<body>
	<!-- comment inside html -->
	<h1>Hello from PHP!</h1></body>
</html>
```

</div>

</div>



---
hideInToc: true
---

<div class="grid grid-cols-2 gap-8">

<div>

## Variables

```php
<?php
$string = "Hello World";
$number = 42;
$float = 3.14;
$bool = true;
$array = [1, 2, 3];

echo $string; // Output: Hello World
?>
```

</div>

<div>

## Conditional Statements

```php
<?php
$age = 25;

if ($age >= 18) {
    echo "You are an adult";
} else {
    echo "You are a minor";
}
?>
```

</div>

</div>



<div class="grid grid-cols-2 gap-8">

<div>

## Loops

```php
<?php
for ($i = 0; $i < 5; $i++) {
    echo "Number: $i<br>";
}

$colors = ["red", "green", "blue"];
foreach ($colors as $color) {
    echo "$color<br>";
}
?>
```

</div>

<div>

## Functions

```php
<?php
function greet($name) {
    return "Hello, $name!";
}

echo greet("Alice"); // Hello, Alice!
```

</div>

</div>




---
hideInToc: true
---

# PHP and MySQL


- PHP can connect directly to a **MySQL database** to display and modify data in real time

- It can:
  - Retrieve data (`SELECT`)
  - Add new records (`INSERT`)
  - Update existing information (`UPDATE`)
  - Delete unnecessary rows (`DELETE`)

- PHP provides **two main extensions** to interact with MySQL:
  - **MySQLi** (MySQL improved)
  - **PDO** (PHP Data Objects)





---
hideInToc: true
---

# Example

<div class="grid grid-cols-2 gap-8">

<div>

## MySQLi (Procedural) 

```php
<?php
// Open connection
$conn = new mysqli(
    "db_host",
    "db_user",
    "db_pass",
    "db_name"
);

// Run a query
$sql = "SELECT * FROM users";
$result = $conn->query($sql);

// Browse result
while ($row = $result->fetch_assoc()) {
  echo $row["username"] . "<br>";
}

// Close connection
$conn->close();
?>
```

</div>

<div>

## PDO (Object-Oriented)

```php
<?php
// Open connection
$conn = new PDO(
    "mysql:host=db_host;dbname=db_name",
    "db_user",
    "db_pass"
);

// Run a query
$sql = "SELECT * FROM users";
$result = $conn->query($sql);

// Browse result
while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
  echo $row["username"] . "<br>";
}

// Close connection (automatic when script ends)
$conn = null;
?>
```

</div>

</div>


