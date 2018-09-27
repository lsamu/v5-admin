<template>
  <div class="layui-unselect layui-form-select" :class="{'layui-form-selected':selectShow}">
    <div class="layui-select-title">
      <input type="text" :placeholder="options.placeholder" :value="options.text" readonly="" class="layui-input layui-unselect" v-on:click="setChangeValue">
      <i class="layui-edge"></i>
    </div>
    <dl class="layui-anim layui-anim-upbit" v-show="selectShow">
      <dd v-for="item in options.dataSource" :key="item.id" @click="setCurrentValue(item[options.valueExpr])" 
        :class="{'layui-this':options.value==item[options.valueExpr]}"
      >{{item[options.displayExpr]}}</dd>
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

  //选择值
  currentValue: string = "";
  currentText: string = "";
  currentDisplayExpr: string = "";
  currentValueExpr: string = "";

  public options: any = {
    value: 0,
    text: "请选择",
    placeholder: "",
    dataSource: [],
    displayExpr: "title",
    valueExpr: "id"
  };
  selectShow: boolean = false;
  async mounted() {
    this.setWatchProp();
  }
  /**
   * 属性
   */
  @Watch("value")
  @Watch("text")
  @Watch("placeholder")
  @Watch("dataSource")
  @Watch("displayExpr")
  @Watch("valueExpr")
  setWatchProp() {
    this.options.value = this.value;
    this.options.placeholder = this.placeholder;
    this.options.dataSource = this.dataSource;
    this.options.displayExpr = this.displayExpr ? this.displayExpr : "title";
    this.options.valueExpr = this.valueExpr ? this.valueExpr : "id";

    for (const item of this.options.dataSource) {
      if (item[this.options.valueExpr] == this.options.value) {
        this.options.text = item[this.options.displayExpr];
      }
    }
  }
  /**
   * 设置当前选择
   */
  setCurrentValue(val: any) {
    this.options.value = val;
    for (const item of this.options.dataSource) {
      if (item[this.options.valueExpr] == val) {
        this.options.text = item[this.options.displayExpr];
        this.$emit("input", val);
      }
    }
    this.setChangeValue();
  }

  /**
   * 设置选择
   */
  setChangeValue() {
    this.selectShow = !this.selectShow;
  }
}
</script>