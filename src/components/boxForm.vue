<template>
  <div>
    <fieldset class="layui-elem-field layui-field-title" style="margin-top: 20px;">
      <legend>表单集合演示</legend>
    </fieldset>
    {{formData}}
    <form class="layui-form">
      <div class="layui-form-item" v-for="(item, index) in items">
        <label class="layui-form-label" v-if="item.label">{{item.label.text}}：</label>
        <div class="layui-input-block" v-if="item.editorOptions&&item.editorOptions.placeholder">
          <!-- 显示文本 -->
          <label v-if="item.editorType&&item.editorType=='boxLabel'"></label>
          <!-- 普通文本 -->
          <input type="text" lay-verify="title" autocomplete="off" class="layui-input" :name="item.dataField" :placeholder="item.editorOptions.placeholder" v-model="formData[item.dataField]" v-if="!item.editorType||item.editorType=='boxTextBox'" />
          <!-- 文本区域 -->
          <textarea :name="item.dataField" :placeholder="item.editorOptions.placeholder" class="layui-textarea" v-model="formData[item.dataField]" v-if="item.editorType&&item.editorType=='boxTextArea'"></textarea>
          <!-- 编辑器 -->
          <textarea class="layui-textarea layui-hide" id="box-editor" lay-verify="content" :name="item.dataField" v-model="formData[item.dataField]" v-if="item.editorType&&item.editorType=='boxTextEditor'"></textarea>
          <!-- 下拉列表 -->
          <select lay-filter="aihao" :name="item.dataField" v-if="item.editorType&&item.editorType=='boxSelectBox'" v-model="formData[item.dataField]">
            <option :value="select_item[item.editorOptions.valueExpr]" v-for="(select_item,select_index) in item.editorOptions.dataSource">{{select_item[item.editorOptions.displayExpr]}}</option>
          </select>
          <!-- 单选框 -->
          <input type="radio" checked="" :value="select_item[item.editorOptions.valueExpr]" :title="select_item[item.editorOptions.displayExpr]" :name="item.dataField" v-if="item.editorType&&item.editorType=='boxRadioBox'" v-for="(select_item,select_index) in item.editorOptions.dataSource" v-model="formData[item.dataField]" />
          <!-- 复选框 -->
          <input type="checkbox" v-if="item.editorType&&item.editorType=='boxCheckListBox'" :name="item.dataField[select_item[item.editorOptions.valueExpr]]" :title="select_item[item.editorOptions.displayExpr]" v-for="(select_item,select_index) in item.editorOptions.dataSource" v-model="formData[item.dataField]" />
          <!-- 开关 -->
          <input type="checkbox" :name="item.dataField" lay-skin="switch" lay-text="ON|OFF" v-if="item.editorType&&item.editorType=='boxSwitch'" v-model="formData[item.dataField]">
          <!-- 日期 -->
          <input type="text" :name="item.dataField" lay-verify="date" placeholder="yyyy-MM-dd" autocomplete="off" class="layui-input box-date" v-if="item.editorType&&item.editorType=='boxDateBox'" v-model="formData[item.dataField]" />
          <!--模板-->
          <div v-if="item.editorType&&item.editorType=='boxTemplate'" :id="item.dataField" class="box-template" :data="item.dataField">
              <!-- {{item.template({
                  component: this,
                  dataField: item.dataField,
                  editorOptions: item.editorOptions,
                  editorType: item.editorType
              })}} -->
          </div>
          <!-- 百度编辑器 -->
          <textarea 
              v-if="item.editorType&&item.editorType=='boxUEditor'" 
              v-model="formData[item.dataField]"
          ></textarea>
        </div>
      </div>
      <div class="layui-form-item">
        <div class="layui-input-block">
          <button class="layui-btn" lay-submit="" lay-filter="demo1">立即提交</button>
          <button type="reset" class="layui-btn layui-btn-primary">重置</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";

@Component({})
export default class TestForm extends Vue {
  public formData: any = {};
  public items: any[] = [];

  /**
   * 挂载完毕后执行
   */
  private mounted() {}

  @Watch("items")
  public async itemsUpdate(oldVal: any, newVal: any) {
    await this.$nextTick(() => {
      layui.use(["form", "layedit", "laydate"], () => {
        let form = layui.form,
          layer = layui.layer,
          layedit = layui.layedit,
          laydate = layui.laydate;
        //编辑器
        let index = layedit.build("box-editor");
        window.setInterval(() => {
          let content = layui.layedit.getContent(index);
          this.formData["content"] = content;
        }, 500);
        //下拉分类
        form.on("select", (data: any) => {
          this.formData[data.elem.name] = data.value;
        });
        //单选框
        form.on("radio", (data: any) => {
          this.formData[data.elem.name] = data.value;
        });
        //选择列表
        form.on("checkbox", (data: any) => {
          this.formData[data.elem.name] = data.value;
        });
        //单选框
        form.on('switch', (data: any) => {
          let c = data.elem.checked;
          if (c) {
            this.formData[data.elem.name] = 1;
          } else {
            this.formData[data.elem.name] = 0;
          }
        });
        form.render();
        //日期
        laydate.render({
          elem: ".box-date",
          done: (value: any, date: any, endDate: any) => {
            console.log(value, date, endDate);
          }
        });
      });
    });
  }

  /**
   *初始化选项
   */
  public option(data: { formData: object; items: any[] }) {
    console.log(data);
    this.formData = data.formData;
    this.items = data.items;
  }
}
</script>