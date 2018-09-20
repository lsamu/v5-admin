<template>
  <div>
    <dxlayout></dxlayout>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import dxlayout from '@/components/layout.vue';

@Component({
  components: {
    dxlayout
  },
})
export default class Home extends Vue {

}
</script>
