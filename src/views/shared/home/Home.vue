<template>
  <div class="home">
    <h1>主页</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
console.log(process.env.NODE_ENV, '当前环境');
import { prefix, iamPrefix, filefix } from '@/api';
console.log(prefix, '====');

@Component({
  components: {},
})
export default class Home extends Vue {}
</script>
