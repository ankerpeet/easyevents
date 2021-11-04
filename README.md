# About EasyDom

EasyDom makes attaching and unattaching events to DOM elements easy.

---
## Installation

1. Install with NPM
   ```sh
   npm install easy-dom
   ```

2. Or include links to the CDN in your HTML
```html
<link rel="stylesheet" href="https://unpkg.com/simple-dragn@1.0.3/stand-alone/core.css">
<script src="https://unpkg.com/simple-dragn@1.0.3/stand-alone/dragnDrop.js">
```
---
## Usage

1. In EasyDom, we keep everything within an object called the Dom object. To start out instantiate a new Dom object.
```javascript
var dom = new Dom();
```

EasyDom is set up to be used as either a CDN, or as an NPM package that you can install and bundle with your application.

Here is an example of how to create a basic HTML document that uses the CDN to attach events to DOM elements:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>EasyDom Sample App</title>
    </head>
    <body>
        <div id="container" class="container">
        </div>
        <script src="https://unpkg.com/simple-dragn@1.0.4/stand-alone/dragnDrop.js"></script>
        <script>
            var dom = new Dom();
        </script>
    </body>    
</html>
```

---
## License

Distributed under the MIT License.

---
## Contact

LinkedIn - [in/anker-peet](https://www.linkedin.com/in/anker-peet/)

Portfolio: [ankerpeet.com](https://www.ankerpeet.com)