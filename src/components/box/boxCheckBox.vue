<template>
  <div class="layui-form-item">
    <label class="layui-form-label" v-text="label"></label>
    <div class="layui-input-block">
      <div class="layui-unselect layui-form-checkbox" v-for="item in options" :key="item.aaa" :class="{'layui-form-checked':currentValue==item[currentValueExpr]}" @click="changeCheckd(item[currentValueExpr])"><span>{{item[currentDisplayExpr]}}</span><i class="layui-icon layui-icon-ok"></i></div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {
  @Prop()
  private value!: string;
  @Prop()
  private label!: string;
  @Prop()
  private text!: string;
  @Prop()
  private options!: any[];

  @Prop()
  displayExpr!: string;
  @Prop()
  valueExpr!: string;

  currentValue: string = "";
  currentDisplayExpr: string = "";
  currentValueExpr: string = "";

  async mounted() {
    this.currentValue = this.value;
    this.currentDisplayExpr = this.displayExpr;
    this.currentValueExpr = this.valueExpr;
  }

  @Watch("currentValue")
  setItemValue(val: any) {
    this.$emit("input", val);
  }

  changeCheckd(val:any) {
    this.currentValue = val;
    
  }
}
</script>