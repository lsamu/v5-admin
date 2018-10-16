<template>
    <div>
        <boxDataGrid></boxDataGrid>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import boxDataGrid from "@/components/boxDataGrid.vue";

@Component({
  components: {
    boxDataGrid
  }
})
export default class User extends Vue {
  mounted() {}
}
</script>
