<template lang="pug">
img(alt="Vue logo" src="../../assets/logo.png")
HelloWorld(msg="Welcome to Your Vue.js App")
</template>

<script>
// @ is an alias to /src
import HelloWorld from './HelloWorld.vue'

export default {
  name: 'Index',
  components: {
    HelloWorld
  }
}
</script>
