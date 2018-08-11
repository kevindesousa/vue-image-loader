<template>
  <span class="box-image" :style="styles">
    <transition name="fade" v-if="placeholder">
      <img v-show="loadedPlaceholder" v-on:load="onLoadedPlaceholder" :src="placeholder"  :style="styles" class="blured" :class="{'loaded': loaded}">
    </transition>
    <transition name="fade">
      <img v-show="loaded" v-on:load="onLoaded" :src="src"  :style="styles" >
    </transition>
  </span>
</template>

<script>
  export default {
    name: 'image-loader',

    props: {
      src: {
        type: String,
        required: true
      },
      placeholder: {
        type: String,
        required: false
      },
      width: {
        type: String,
        required: false
      },

      height: {
        type: String,
        required: false
      }
    },

    data () {
      return {
        loaded: false,
        loadedPlaceholder: false,
      }
    },

    computed: {
      styles: function () {
        let styles = {}
        
        if (this.width) {
          styles.width = this.width
        }

        if (this.height) {
          styles.height = this.height
        }

        return styles
      }
    },

    methods: {
      onLoaded () {
        this.loaded = true
      },
      onLoadedPlaceholder () {
        this.loadedPlaceholder = true
      }
    }
  }
</script>

<style scoped lang="css">
.fade-enter-active {
  transition: opacity 800ms ease-in-out;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter {
  opacity: 0;
}

.box-image {
  display: inline-block;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: placeholderSkeleton;
  -webkit-animation-timing-function: linear;
  background: #f6f7f8;
  background-image: -webkit-gradient(linear, left center, right center, from(#f6f7f8), color-stop(.2, #edeef1), color-stop(.4, #f6f7f8), to(#f6f7f8));
  background-image: -webkit-linear-gradient(left, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
  background-repeat: no-repeat;
  position: relative;
}

.box-image img {
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(1.1);
  transition: 800ms all ease-in-out;
} 

.box-image img.loaded {
  transform: scale(1);
}

@-webkit-keyframes placeholderSkeleton {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}

.blured {
  filter: blur(25px);
    -webkit-filter: blur(25px);
    -moz-filter: blur(25px);
    -o-filter: blur(25px);
    -ms-filter: blur(25px);
}


</style>
