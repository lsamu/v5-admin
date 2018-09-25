<template>
    <div class="layui-form">
        <div class="layui-form-item layui-form-text">
            <label class="layui-form-label" v-text="label"></label>
            <div class="layui-input-block">
                <input
                        name="checkbox"
                        type="checkbox"
                        :title="item[currentDisplayExpr]"
                        :value ="item[currentValueExpr]"
                        v-for="item in options"
                        v-model="currentValue"
                        :key="item.aaa"
                    >
        </div>
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
    await this.$nextTick(() => {
      layui.use(["form"], () => {
        let form = layui.form;
        form.on("checkbox", (data: any) => {
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