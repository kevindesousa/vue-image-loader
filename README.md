# vue-image-loader

Vue progressive image loading plugin


![alt tag](https://raw.githubusercontent.com/kevindesousa/vue-image-loader/master/example.gif)

Article here : [https://www.kevindesousa.me/vue-image-loader/](https://www.kevindesousa.me/vue-image-loader/)

## Installation

```bash
$ npm install @kevindesousa/vue-image-loader
```

## Usage

```js
import Vue from 'vue'
import VueImageLoader from '@kevindesousa/vue-image-loader'

Vue.use(VueImageLoader)
```

#### Progressive loader image

Instead of using the normal `img` tag to load images

```html
<img src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304" />
```

use the `image-loader` component already globally available after the plugin installation

```html
<image-loader
  src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
  width="864px"
  height="476px" />
```

## Placeholders

To be able to immediately show some feedback to the user, it is possible to pass a placeholder image, which could be also 1% the size of the main image: it will be blurred so you can go crazy with optimizations here.

in this example I actually use the same image, but you have the idea here

```html
<image-loader
  src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
  placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
  width="864px"
  height="476px"
/>
```

# Issues and features requests
Please drop an issue, if you find something that doesn't work, or a feature request at https://github.com/kevindesousa/vue-image-loader/issues

Follow me on twitter [@kevin_desousa](https://twitter.com/kevin_desousa)
