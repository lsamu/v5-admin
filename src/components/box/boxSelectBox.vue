<template>
  <div class="layui-form">
    <div class="layui-form-item layui-form-text">
      <label class="layui-form-label" v-text="label"></label>
      <div class="layui-input-block">
        <select lay-filter="aihao" v-model="currentValue">
          <option :value="item[currentValueExpr]" v-for="item in options" :key="item.aaa">{{item[currentDisplayExpr]}}</option>
        </select>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { setTimeout } from "timers";
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
  currentDisplayExpr: string = "";
  currentValueExpr: string = "";

  async mounted() {
    this.currentValue = this.value;
    this.currentDisplayExpr = this.displayExpr;
    this.currentValueExpr = this.valueExpr;
    await this.$nextTick(() => {
      layui.use(["form", "layedit", "laydate", "jquery"], () => {
        let form = layui.form;
        form.on("select", (data: any) => {
          this.currentValue = data.value;
        });
        form.render();
      });
    });
  }

  @Watch("currentValue")
  setItemValue(val: any) {
    this.$emit("input", val);
  }
}
</script>