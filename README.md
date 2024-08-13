# File-Icons

A custom font featuring icons for several types of files. This package uses the Vivid icons from [file-icons-vector](https://github.com/dmhendricks/file-icon-vectors)

### Installation

```js
$ npm i @whykhamist/file-icons
```

[Demo](https://whykhamist.github.io/file-icons/icons)

## Basic Use

```js
import "@whykhamist/file-icons/style.css";

<span class="fi fi-pdf">
  <span class="path1"></span>
  <span class="path2"></span>
  <span class="path3"></span>
  <span class="path4"></span>
</span>;
```

### Why the child elements?

- The SVG files have more than one color, since font glyphs can only have one color, it is necessary to use multiple paths for multicolor icons.

### How do I know how many paths the icon need?

- The package exports a "catalog" object that contains the number of paths for each icon.

```js
import { catalog } from "@whykhamist/file-icons";

console.log(catalog["pdf"]); // 4
```

### Is there a quicker way to use the icons?

- Yes, the package also exports a "setPaths" function. You can use it to set the number of paths for each icon. By default it will search elements with the class fi and automatically set the number of paths based on the icon name.

```html
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
```

## Vue Component

The package exports a vue component that you can use.

```js
<script setup lang="ts" >
    import { VueComponent as FileIcon } from "@whykhamist/file-icons";
</script>

<template>
    <FileIcon name="pdf" class="..."></FileIcon>
</template>
```

## API Reference

## Objects

### catalog : <i style="color: #4EC9B0">ICatalog</i>

    Contains the list of icon names with their number of paths.

## Methods

### `setPaths(src, options)` : <i style="color: #4EC9B0">void</i>

This function adds the necessary number of paths to the icon rendering element. (Uses the `appendChildPath` & `clearChildPaths` functions)

- #### Parameters

  - `src`

    Type: `string | HTMLELement`

    Default: `fi`

    The element that you want to set the number of paths for. If you pass a string, it will search for the element with that class name. You can also pass an HTMLElement.

  - `options`

    Type: `IOptions`

    Default: `{ tag: "span", classPrefix: "path" }`

---

### `appendChildPath(el, pathCtr, tag, classPrefix)` : <i style="color: #4EC9B0">void</i>

This function adds the necessary number of paths to the icon rendering element.

- #### Parameters

  - `el`

    Type: `HTMLElement`

    Required: `true`

    The element to append child paths to

  - `pathCtr`

    Type: `number`

    Required: `true`

    The number of paths to append

  - `tag`

    Type: `string`

    Default: `span`

    The element tag to use for the paths

  - `classPrefix`

    Type: `string`

    Default: `'path'`

---

### `clearChildPaths(el)` : <i style="color: #4EC9B0">void</i>

Clear child paths from the provided element.

- ### Parameters

  - `el`

    Type: `HTMLElemen`

    Required: `true`

    The element to clear child paths from

---

## Type Declaration

```js
export type ICatalog = Record<string, number>;

export type IOptions = {
  /**
   * Element tag to use for the paths
   * @default span
   */
  tag?: string,

  /**
   * Class prefix to use for the path's classname
   * (use only if you have custom css styling)
   * @default path
   */
  classPrefix?: string,
};
```
