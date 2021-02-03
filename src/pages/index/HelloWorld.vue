<template lang="pug">
.hello
  h1 {{msg}}
  Button nihao
</template>

<script>
import { Button } from 'ant-design-vue'

export default {
  name: 'HelloWorld',
  components: {
    Button
  },
  props: {
    msg: String
  }
}
</script>

<style scoped lang="stylus">
h3
  margin 40px 0 0
ul
  list-style-type none
  padding 0
li
  display inline-block
  margin 0 10px
a
  color #42b983
</style>
