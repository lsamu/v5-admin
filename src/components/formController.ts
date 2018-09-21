import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class formController extends Vue {

  formData: any = {};
  items: any = [];
  form: any = {};
  //ItemObj:any=[];
  /**
   * 
   */
  public mounted() {
    // layui.use(["form", "layedit", "laydate"], () => {
    //   let form = layui.form,
    //     layer = layui.layer,
    //     layedit = layui.layedit,
    //     laydate = layui.laydate;
    //   this.form = form;
    //   form.render();
    //   //日期
    //   laydate.render({
    //     elem: "#date"
    //   });
    //   laydate.render({
    //     elem: "#date1"
    //   });

    //   //创建一个编辑器
    //   var editIndex = layedit.build("LAY_demo_editor");

    //   //自定义验证规则
    //   form.verify({
    //     title: function (value: any) {
    //       if (value.length < 5) {
    //         return "标题至少得5个字符啊";
    //       }
    //     },
    //     pass: [/(.+){6,12}$/, "密码必须6到12位"],
    //     content: function (value: any) {
    //       layedit.sync(editIndex);
    //     }
    //   });

    //   //监听指定开关
    //   form.on("switch(switchTest)", function (data: any) {
    //     // layer.msg("开关checked：" + (this.checked ? "true" : "false"), {
    //     //   offset: "6px"
    //     // });
    //     layer.tips(
    //       "温馨提示：请注意开关状态的文字可以随意定义，而不仅仅是ON|OFF",
    //       data.othis
    //     );
    //   });

    //   //监听提交
    //   form.on("submit(demo1)", function (data: any) {
    //     layer.alert(JSON.stringify(data.field), {
    //       title: "最终的提交信息"
    //     });
    //     return false;
    //   });

    //   //表单初始赋值
    //   form.val("example", {
    //     username: "贤心", // "name": "value"
    //     password: "123456",
    //     interest: 1,
    //     "like[write]": true, //复选框选中状态
    //     close: true, //开关状态
    //     sex: "女",
    //     desc: "我爱 layui"
    //   });
    // });
  }

  @Watch("items")
  public async render_form(oldVal: any, newVal: any) {
    await this.$nextTick(() => {
      layui.use(["form", "layedit", "laydate",'jquery'], () => {
        let form = layui.form,
          layer = layui.layer,
          layedit = layui.layedit,
          laydate = layui.laydate;
        let $ = layui.jquery;
        this.form = form;
        form.on('select', (data: any) => {
          this.formData[data.elem.name] = data.value;
        });
        form.on('checkbox', (data: any) => {
          let m = new Map<number, number>();
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

        form.on('radio', (data: any) => {
          this.formData[data.elem.name] = data.value;
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

        let ee = document.getElementsByClassName("box-editor");
        let editor_index = 1;
        for (const e of ee) {
          e.id = "box-editor" + editor_index;
          let index = layedit.build(e.id);
          // form.verify({
          //   content: function (value: any) {
          //     return layedit.getContent(index);
          //   }
          // });
          console.log(index);
          editor_index++;
        }

        $("iframe[textarea=editor]").contents().find("body").keyup(function(a:any,b:any,c:any){
            console.log(a,b,c);
       });
       // console.log($("iframe[textarea=editor]").contents());

      });
    });
  }

  @Watch("formData")
  public layeditUpdate() {
    console.log("formData");
  }

  /**
   * 初始化表单
   * @param data 
   */

  public async option(
    data: {
      formData: object,
      items: []
    }
  ) {
    this.formData = data.formData;
    this.items = data.items;
  }

  /**
   * 获取控件实例
   * @param dataField 
   */
  public getEditor(dataField?: string) {
    console.log(this.form);
    
  }

  public editChangeHandler() {
    console.log("1233123");
  }

  public submitHandler() {
    console.log(13123);
    layui.use(["form", "layedit", "laydate"], () => {
      let layedit = layui.layedit;
      layedit.sync(1);
    });
  }
}