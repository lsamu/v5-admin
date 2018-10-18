<template>
    <div>
        <boxDataGrid :ref="boxDataGridKey"></boxDataGrid>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import boxDataGrid from "@/components/boxDataGrid.vue";
import BaseVue from '../../common/BaseVue';
import BoxExpress from '@/box.all';

@Component({
  components: {
    boxDataGrid
  }
})
export default class User extends BaseVue {
  mounted() {
    let grid = this.getInstanceByKey<BoxExpress.ui.boxDataGrid>(
      this.boxDataGridKey
    );
    grid.option({
      title: "留言板"
    });
  }
}
</script>

