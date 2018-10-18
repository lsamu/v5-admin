<template>
  <div>
    <div class="x-nav">
      <span class="layui-breadcrumb" style="visibility: visible;">
        <a href="/#/admin/index">首页</a>
        <span lay-separator="">/</span>
        <a>
          <cite>{{options.title}}</cite>
        </a>
        <span lay-separator="">/</span>
        <a>
          <cite>表单</cite>
        </a>
      </span>
    </div>
    <fieldset class="layui-elem-field layui-field-title" style="margin-top: 20px;">
      <legend>{{options.title}}</legend>
    </fieldset>
    <form class="layui-form">
      <div class="layui-form-item" v-for="(item, index) in items" :key="item.id">
        <label class="layui-form-label" v-if="item.label">{{item.label.text}}：</label>
        <div class="layui-input-block" v-if="item.editorOptions&&item.editorOptions.placeholder">
          <!-- 显示文本 -->
          <label v-if="item.editorType&&item.editorType=='boxLabel'"></label>
          <!-- 普通文本 -->
          <input v-if="!item.editorType||item.editorType=='boxTextBox'" type="text" :name="item.dataField" lay-verify="title" autocomplete="off" class="layui-input" :placeholder="item.editorOptions.placeholder" v-model="formData[item.dataField]" />
          <!-- 文本区域 -->
          <textarea v-if="item.editorType&&item.editorType=='boxTextArea'" :name="item.dataField" :placeholder="item.editorOptions.placeholder" class="layui-textarea" v-model="formData[item.dataField]"></textarea>
          <!-- 编辑器 -->
          <textarea v-if="item.editorType&&item.editorType=='boxTextEditor'" :name="item.dataField" class="layui-textarea layui-hide" id="box-editor" lay-verify="content" v-model="formData[item.dataField]"></textarea>
          <!-- 下拉列表 -->
          <select v-if="item.editorType&&item.editorType=='boxSelectBox'" :name="item.dataField" lay-filter="aihao" v-model="formData[item.dataField]">
            <option :value="select_item[item.editorOptions.valueExpr]" v-for="(select_item,select_index) in item.editorOptions.dataSource" :key="select_item.id">{{select_item[item.editorOptions.displayExpr]}}</option>
          </select>
          <!-- 单选框 -->
          <input v-if="item.editorType&&item.editorType=='boxRadioBox'" type="radio" :name="item.dataField" checked="" :value="select_item[item.editorOptions.valueExpr]" :title="select_item[item.editorOptions.displayExpr]" v-for="(select_item,select_index) in item.editorOptions.dataSource" :key="select_item.id" v-model="formData[item.dataField]" />
          <!-- 复选框 -->
          <input v-if="item.editorType&&item.editorType=='boxCheckListBox'" type="checkbox" :name="item.dataField" :title="select_item[item.editorOptions.displayExpr]" v-for="(select_item,select_index) in item.editorOptions.dataSource" :key="select_item.id" v-model="formData[item.dataField]" :value="select_item[item.editorOptions.valueExpr]" />
          <!-- 开关 -->
          <input v-if="item.editorType&&item.editorType=='boxSwitch'" type="checkbox" :name="item.dataField" lay-skin="switch" lay-text="ON|OFF" v-model="formData[item.dataField]">
          <!-- 日期 -->
          <input v-if="item.editorType&&item.editorType=='boxDateBox'" type="text" :name="item.dataField" lay-verify="date" placeholder="yyyy-MM-dd" autocomplete="off" class="layui-input box-date" v-model="formData[item.dataField]" />
          <!--模板-->
          <div v-if="item.editorType&&item.editorType=='boxTemplate'" :name="item.dataField" class="box-template" :data="item.dataField">
            <!-- {{item.template({
                  component: this,
                  dataField: item.dataField,
                  editorOptions: item.editorOptions,
                  editorType: item.editorType
              })}} -->
          </div>
          <!-- 百度编辑器 -->
          <textarea v-if="item.editorType&&item.editorType=='boxUEditor'" v-model="formData[item.dataField]"></textarea>
          <!-- 上传图片 -->
          <input v-if="item.editorType=='boxUploadBox'" type="text" :name="item.dataField" lay-verify="title" autocomplete="off" class="layui-input" :placeholder="item.editorOptions.placeholder" v-model="formData[item.dataField]" />
        </div>
        <!-- <div class="layui-form-item">
          <label class="layui-form-label">自定义验证</label>
          <div class="layui-input-inline">
            <input type="password" name="password" lay-verify="pass" placeholder="请输入密码" autocomplete="off" class="layui-input">
          </div>
          <div class="layui-form-mid layui-word-aux">请填写6到12位密码</div>
        </div> -->
      </div>
      <div class="layui-form-item">
        <div class="layui-input-block">
          <button type="button" class="layui-btn" lay-submit="" lay-filter="demo1" @click="onSubmitHandler">立即提交</button>
          <button type="reset" class="layui-btn layui-btn-primary">重置</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";

@Component({})
export default class boxForm extends Vue {
  @Prop()
  public title!: string;
  public formData: any = {};
  public items: any[] = [];
  public options: any = {};
  /**
   * 挂载完毕后执行
   */
  private mounted() {
    //this.itemsUpdate();
    this.options.title = this.title ? this.title : "表单测试";
  }

  @Watch("items")
  public async itemsUpdate() {
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
          if (content) {
            this.formData["content"] = content;
          }
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
          let aa = this.formData[data.elem.name];
          if (aa) {
            aa.push(data.value);
          } else {
            aa = [];
            aa.push(data.value);
          }
        });
        //单选框
        form.on("switch", (data: any) => {
          let c = data.elem.checked;
          if (c) {
            this.formData[data.elem.name] = 1;
          } else {
            this.formData[data.elem.name] = 0;
          }
        });
        form.render();

        //日期选择框
        let bb = document.getElementsByClassName("box-date");
        for (let b of bb) {
          laydate.render({
            elem: b,
            done: (value: any, date: any, endDate: any) => {
              let name = (b as any).name;
              this.formData[name] = value;
            }
          });
        }
      });
    });
    //
  }

  /**
   *初始化选项
   */
  public async option(data: any) {
    this.formData = data.formData;
    this.items = data.items;
  }

  public onSubmitHandler(sender: any) {
    console.log(this.formData);
  }
}
</script>