<template>
    <div class="layui-form-item layui-form-text">
        <label class="layui-form-label" v-text="label"></label>
        <div class="layui-input-block">
            <input type="text" lay-verify="title" autocomplete="off" class="layui-input" :placeholder="placeholder" v-model="currentValue" :class="areaClass">
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {
  @Prop() private value!: string;
  @Prop() private label!: string;
  @Prop() private placeholder!: string;
  @Prop() private areaClass!: string;

  currentValue = "";

  mounted() {
    this.currentValue = this.value;
  }
  @Watch("currentValue")
  public setCurrentValue(val: any) {
    this.$emit("input", val);
  }

  //   @Watch("value")
  //   public setValue(val: any) {
  //     this.currentValue = val;
  //   }
}
</script>