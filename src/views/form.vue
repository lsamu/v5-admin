<template>
  <div>
    <dxform ref="boxForm"></dxform>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import dxform from "@/components/form.vue";

@Component({
  components: {
    dxform
  }
})
export default class Home extends Vue {
  boxForm = "boxForm";

  public mounted() {
    let form = this.$refs[this.boxForm] as any;
    form.option({
      formData: {
       date:"123131231"
      },
      colCount: 2,
      items: [
        {
          colSpan: 2,
          dataField: "title",
          label: {
            text: "标题"
          },
          editorType: "boxTextBox",
          editorOptions: {
            placeholder: "请输入标题."
          },
          validationRules: [
            {
              type: "required",
              message: "不能为空!"
            }
          ]
        },
        {
          colSpan: 2,
          dataField: "content",
          label: {
            text: "内容"
          },
          editorType: "boxTextArea",
          editorOptions: {
            placeholder: "请输入内容."
          },
          validationRules: [
            {
              type: "required",
              message: "不能为空!"
            }
          ]
        },
        {
          colSpan: 2,
          dataField: "classid",
          label: {
            text: "下拉列表"
          },
          editorType: "boxSelectBox",
          editorOptions: {
            placeholder: "请选择下拉列表.",
            dataSource: [
              {
                name: "分类1",
                id: 1
              },
              {
                name: "分类2",
                id: 2
              }
            ],
            displayExpr: "name",
            valueExpr: "id"
          },
          validationRules: [
            {
              type: "required",
              message: "不能为空!"
            }
          ]
        },
        {
          colSpan: 2,
          dataField: "sex",
          label: {
            text: "单选"
          },
          editorType: "boxRadioBox",
          editorOptions: {
            placeholder: "请选择单选.",
            dataSource: [
              {
                name: "分类1",
                id: 1
              },
              {
                name: "分类2",
                id: 2
              }
            ],
            displayExpr: "name",
            valueExpr: "id"
          },
          validationRules: [
            {
              type: "required",
              message: "不能为空!"
            }
          ]
        },
        {
          colSpan: 2,
          dataField: "classids",
          label: {
            text: "复选"
          },
          editorType: "boxCheckListBox",
          editorOptions: {
            placeholder: "请选择复选.",
            dataSource: [
              {
                name: "分类1",
                id: 1
              },
              {
                name: "分类2",
                id: 2
              }
            ],
            displayExpr: "name",
            valueExpr: "id"
          },
          validationRules: [
            {
              type: "required",
              message: "不能为空!"
            }
          ]
        },
        {
          colSpan: 2,
          dataField: "switch",
          label: {
            text: "开关"
          },
          editorType: "boxSwitch",
          editorOptions: {
            placeholder: "请选择开关."
          },
          validationRules: [
            {
              type: "required",
              message: "开关不能为空!"
            }
          ]
        },
        {
          colSpan: 2,
          dataField: "date",
          label: {
            text: "日期"
          },
          editorType: "boxDateBox",
          editorOptions: {
            placeholder: "请选择日期."
          },
          validationRules: [
            {
              type: "required",
              message: "日期不能为空!"
            }
          ]
        },
        {
          colSpan: 2,
          dataField: "editor",
          label: {
            text: "编辑器"
          },
          editorType: "boxTextEditor",
          editorOptions: {
            placeholder: "请输入编辑器内容."
          },
          validationRules: [
            {
              type: "required",
              message: "不能为空!"
            }
          ],
          template: (data: any, aItemEle: any) => {
            console.log(data);
          }
        },
        {
          itemType: "group",
          caption: "用户组",
          items: []
        },
        {
          itemType: "button",
          caption: "按钮组",
          items: []
        },
        {
          itemType: "tabbed",
          caption: "标签组",
          items: []
        }
      ]
    });
  }
}
</script>
