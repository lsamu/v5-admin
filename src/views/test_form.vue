<template>
  <div>
    <boxForm ref="boxFormKey"></boxForm>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import boxForm from "../components/boxForm.vue";

@Component({
  components: {
    boxForm
  }
})
export default class TestForm extends Vue {
  private boxFormKey = "boxFormKey";
  public items: any[] = [];
  /**
   * 挂载完毕后执行
   */
  private mounted() {
    let form = this.$refs[this.boxFormKey] as any;
    //console.log(form);
    //标题
    this.items.push({
      dataField: "title",
      label: {
        text: "标题"
      },
      editorOptions: {
        placeholder: "请输入标题"
      }
    });
    //简介
    this.items.push({
      dataField: "short_content",
      label: {
        text: "简介"
      },
      editorType: "boxTextArea",
      editorOptions: {
        placeholder: "请输入简介"
      }
    });
    //编辑器
    this.items.push({
      dataField: "content",
      label: {
        text: "编辑器"
      },
      editorType: "boxTextEditor",
      editorOptions: {
        placeholder: "请输入编辑内容"
      }
    });
    //下拉分类
    this.items.push({
      dataField: "classid",
      label: {
        text: "分类"
      },
      editorType: "boxSelectBox",
      editorOptions: {
        placeholder: "请选择分类",
        dataSource: [
          {
            classid: 1,
            classname: "默认公告"
          },
          {
            classid: 2,
            classname: "默认咨询"
          }
        ],
        valueExpr: "classid",
        displayExpr: "classname"
      }
    });
    //单选框
    this.items.push({
      dataField: "sex",
      label: {
        text: "性别"
      },
      editorType: "boxRadioBox",
      editorOptions: {
        placeholder: "请选择性别",
        dataSource: [
          {
            classid: 1,
            name: "男"
          },
          {
            id: 2,
            name: "女"
          }
        ],
        valueExpr: "id",
        displayExpr: "name"
      }
    });
    //状态
    this.items.push({
      dataField: "status",
      label: {
        text: "标签"
      },
      editorType: "boxCheckListBox",
      editorOptions: {
        placeholder: "请选择标签",
        dataSource: [
          {
            classid: 1,
            name: "Unity3D"
          },
          {
            id: 2,
            name: "麻将"
          }
        ],
        valueExpr: "id",
        displayExpr: "name"
      }
    });
    //日期
    this.items.push({
      dataField: "datetime",
      label: {
        text: "日期"
      },
      editorType: "boxDateBox",
      editorOptions: {
        placeholder: "请选择日期"
      }
    });
    //状态
    this.items.push({
      dataField: "switch",
      label: {
        text: "状态"
      },
      editorType: "boxSwitch",
      editorOptions: {
        placeholder: "请选择状态"
      }
    });
    form.option({
      formData: {},
      items: this.items
    });
  }
}
</script>
