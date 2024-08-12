<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>File Icons</title>
  </head>
  <body>
    <div id="app">
      <span class="fi fi-pdf" style="font-size: 75pt"></span>
      <span class="fi fi-mp3" style="font-size: 75pt"></span>
      <span class="fi fi-cmd" style="font-size: 75pt"></span>
    </div>
    <script type="module">
      import "@whykhamist/vue-file-icons/style.css";

      //Just call the setPaths function after the DOM is ready
      import { setPaths } from "@whykhamist/vue-file-icons";

      window.addEventListener("DOMContentLoaded", setPaths());
    </script>
  </body>
</html>
