<template>
  <div class="layui-form-item layui-form-text">
    <label class="layui-form-label" v-text="label"></label>
    <div class="layui-input-block">
      <div class="layui-unselect layui-form-select" :class="{'layui-form-selected':selectShow}">
        <div class="layui-select-title">
          <input type="text" placeholder="请选择" :value="currentText" readonly="" class="layui-input layui-unselect" @click="setChangeValue">
          <i class="layui-edge"></i>
        </div>
        <dl class="layui-anim layui-anim-upbit" v-show="selectShow">
          <dd :class="{'layui-this':currentValue==item[currentValueExpr]}" :lay-value="item[currentValueExpr]" v-for="item in options" :key="item.aaa" @click="setCurrentValue(item[currentValueExpr])">{{item[currentDisplayExpr]}}</dd>
        </dl>
      </div>
    </div>
  </div>
  <!-- </div>-->
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
@Component({})
export default class Home extends Vue {
  @Prop()
  value!: string;
  @Prop()
  label!: string;
  @Prop()
  options!: any[];

  @Prop()
  displayExpr!: string;
  @Prop()
  valueExpr!: string;

  //选择值
  currentValue: string = "";
  currentText: string = "";
  currentDisplayExpr: string = "";
  currentValueExpr: string = "";

  //是否显示
  selectShow: boolean = false;

  async mounted() {
    this.currentValue = this.value;
    this.currentDisplayExpr = this.displayExpr;
    this.currentValueExpr = this.valueExpr;
    for (const item of this.options) {
      if (item[this.currentValueExpr] == this.currentValue) {
        this.currentText = item[this.currentDisplayExpr];
      }
    }
  }

  @Watch("currentValue")
  setItemValue(val: any) {
    for (const item of this.options) {
      if (item[this.currentValueExpr] == val) {
        this.currentText = item[this.currentDisplayExpr];
      }
    }
    this.$emit("input", val);
  }

  /**
   * 设置当前选择
   */
  setCurrentValue(val: any) {
    this.currentValue = val;
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