<template>
  <div>
    <dxform ref="boxForm"></dxform>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import dxform from "@/components/boxForm.vue";

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
        title: "1331231312",
        classid: 2,
        sex: 1,
        classids: "1,2",
        switch: 1,
        date: "2018-09-20",
        editor: "我是编辑器内容"
      },
      colCount: 2,
      items: [
        {
          colSpan: 2,
          dataField: "title",
          label: {
            text: "标题"
          },
          editorType: "boxLabel",
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
                name: "男",
                id: 1
              },
              {
                name: "女",
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
          ]
        },
        // {
        //   colSpan: 2,
        //   dataField: "template",
        //   label: {
        //     text: "编辑器"
        //   },
        //   editorType: "boxTemplate",
        //   editorOptions: {
        //     placeholder: "请输入编辑器内容."
        //   },
        //   validationRules: [
        //     {
        //       type: "required",
        //       message: "不能为空!"
        //     }
        //   ],
        //   template: (data: any, aItemEle: any) => {
        //     let aa = $("<textarea id='editor1'></textarea>");
        //     aItemEle.append(aa);

        //     let editor = UE.getEditor(aa[0].id, {
        //       autoHeightEnabled: false,
        //       autoFloatEnabled: true, //是否工具栏可浮动
        //       initialContent: "", //初始化编辑器的内容,也可以通过textarea/script给值，看官网例子
        //       autoClearinitialContent: true, //是否自动清除编辑器初始内容，注意：如果focus属性设置为true,这个也为真，那么编辑器一上来就会触发导致初始化的内容看不到了
        //       initialFrameWidth: null,
        //       initialFrameHeight: 450,
        //       BaseUrl: "/static/ueditor/",
        //       UEDITOR_HOME_URL: "/static/ueditor/",
        //       serverUrl: "http://www.baidu.com",
        //       elementPathEnabled: true,
        //       enableAutoSave: false
        //     });
            
        //   }
        // },
        // {
        //   itemType: "group",
        //   caption: "用户组",
        //   items: []
        // },
        // {
        //   itemType: "button",
        //   caption: "按钮组",
        //   items: []
        // },
        // {
        //   itemType: "tabbed",
        //   caption: "标签组",
        //   items: []
        // }
      ]
    });

    form.getEditor();
  }
}
</script>
