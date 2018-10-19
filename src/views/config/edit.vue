<template>
  <div>
    <boxForm :ref="boxFormKey"></boxForm>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import boxForm from "@/components/boxForm.vue";
import BaseVue from "../../common/BaseVue";
import BoxExpress from "@/box.all";

@Component({
  components: {
    boxForm
  }
})
export default class User extends BaseVue {
  mounted() {
    let form = this.getInstanceByKey<BoxExpress.ui.boxForm>(this.boxFormKey);
    form.option({
      title: "系统配置"
    });
  }
}
</script>
