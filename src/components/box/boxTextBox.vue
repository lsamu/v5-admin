<template>
  <input type="text" lay-verify="title" autocomplete="off" class="layui-input" :placeholder="placeholder" v-model="value"/>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {
  /**
   * 文本值
   */
  @Prop()
  private value!: string;

  /**
   * 提示
   */
  @Prop()
  private placeholder!: string;

  /**
   * 值改变
   */
  @Prop()
  private onValueChanged!: (val: string) => void;

  mounted() {
    this.setWatchProps();
  }

  /**
   * 属性
   */
  @Watch("value")
  @Watch("placeholder")
  @Watch("onValueChanged")
  public setWatchProps() {
    this.$emit("input", this.value);
    if(this.onValueChanged){
      this.onValueChanged(this.value);
    }
  }
}
</script>