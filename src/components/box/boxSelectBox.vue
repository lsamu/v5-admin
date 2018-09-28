<template>
  <div class="layui-unselect layui-form-select" :class="{'layui-form-selected':options.selectShow}">
    <div class="layui-select-title">
      <input type="text" :placeholder="options.placeholder" :value="options.text" readonly="" class="layui-input layui-unselect" v-on:click="setChangeValue">
      <i class="layui-edge"></i>
    </div>
    <dl class="layui-anim layui-anim-upbit" v-show="options.selectShow">
      <dd v-for="item in dataSource" 
          :key="item.id" 
          @click="setCurrentValue(item[options.valueExpr])" 
          :class="{'layui-this':options.value==item[options.valueExpr]}">{{item[options.displayExpr]}}</dd>
    </dl>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
@Component({})
export default class Home extends Vue {

  @Prop()
  value!: string;
  @Prop()
  placeholder!: string;
  @Prop()
  dataSource!: any[];
  @Prop()
  displayExpr!: string;
  @Prop()
  valueExpr!: string;

  /**
   * 操作选项
   */
  options: any = {
    placeholder: "",
    text: "",
    displayExpr: "",
    valueExpr: "",
    selectShow: false
  };

  async mounted() {
    //this.setWatchProp();
  }
  /**
   * 属性
   */
  @Watch("value")
  @Watch("placeholder")
  @Watch("dataSource")
  @Watch("displayExpr")
  @Watch("valueExpr")
  setWatchProp() {
    this.options.dataSource = this.dataSource;
    this.options.displayExpr = this.displayExpr ? this.displayExpr : "title";
    this.options.valueExpr = this.valueExpr ? this.valueExpr : "id";
    this.setCurrentValue(this.value);
  }
  /**
   * 设置当前选择
   */
  setCurrentValue(val: any) {
    this.options.value = val;
    for (const item of  this.options.dataSource) {
      if (item[this.options.valueExpr] == val) {
        this.options.text = item[this.options.displayExpr];
        this.$emit("input", this.options.value);
      }
    }
    this.setChangeValue();
  }

  /**
   * 设置选择
   */
  setChangeValue() {
    this.options.selectShow = !this.options.selectShow;
  }
}
</script>