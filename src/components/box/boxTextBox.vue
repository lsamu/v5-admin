<template>
  <input type="text" lay-verify="title" autocomplete="off" class="layui-input" :placeholder="options.placeholder" v-model="options.value"/>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {

  @Prop()
  private p_option!: {};

  options: any = {
    value: "",
    placeholder: ""
  };

  mounted() {
    this.setWatchProps();
  }

  /**
   * 属性
   */
  @Watch("value")
  @Watch("placeholder")
  public setWatchProps() {
    Object.assign(this.options, this.p_option);
    this.setWatchOptions();
  }

  /**
   * 选项
   */
  @Watch("options.value")
  public setWatchOptions() {
    this.$emit("input", this.options.value);
  }



  /**
   * 配置
   */
  public option(data: any) {
    Object.assign(this.options, data);
    this.setWatchOptions();
  }
}
</script>