import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class formController extends Vue {

  formData: object = {};
  /**
   * 表单项
   */
  items: any = [];

  form: any = {};
  /**
   * 
   */
  public mounted() {
    layui.use(["form", "layedit", "laydate"], () => {
      let form = layui.form,
        layer = layui.layer,
        layedit = layui.layedit,
        laydate = layui.laydate;
      this.form = form;
      form.render();
      //日期
      laydate.render({
        elem: "#date"
      });
      laydate.render({
        elem: "#date1"
      });

      //创建一个编辑器
      var editIndex = layedit.build("LAY_demo_editor");

      //自定义验证规则
      form.verify({
        title: function (value: any) {
          if (value.length < 5) {
            return "标题至少得5个字符啊";
          }
        },
        pass: [/(.+){6,12}$/, "密码必须6到12位"],
        content: function (value: any) {
          layedit.sync(editIndex);
        }
      });

      //监听指定开关
      form.on("switch(switchTest)", function (data: any) {
        // layer.msg("开关checked：" + (this.checked ? "true" : "false"), {
        //   offset: "6px"
        // });
        layer.tips(
          "温馨提示：请注意开关状态的文字可以随意定义，而不仅仅是ON|OFF",
          data.othis
        );
      });

      //监听提交
      form.on("submit(demo1)", function (data: any) {
        layer.alert(JSON.stringify(data.field), {
          title: "最终的提交信息"
        });
        return false;
      });

      //表单初始赋值
      form.val("example", {
        username: "贤心", // "name": "value"
        password: "123456",
        interest: 1,
        "like[write]": true, //复选框选中状态
        close: true, //开关状态
        sex: "女",
        desc: "我爱 layui"
      });
    });
  }

  /**
   * 初始化表单
   * @param data 
   */
  public option(
    data: {
      formData: object,
      items: []
    }
  ) {
    this.formData = data.formData;
    this.items = data.items;

    // layui.use(["form", "layedit", "laydate"], function () {
    //   var form = layui.form,
    //     layer = layui.layer,
    //     layedit = layui.layedit,
    //     laydate = layui.laydate;
    //   form.render();
    // });

    // setTimeout(() => {
    //   layui.use('laydate', function () {
    //     var laydate = layui.laydate;
    //     laydate.render({
    //       elem: '.box-date' //指定元素
    //     });
    //   });

    //   layui.use(["form", "layedit", "laydate"], function () {
    //     var form = layui.form,
    //       layer = layui.layer,
    //       layedit = layui.layedit,
    //       laydate = layui.laydate;
    //     form.render();
    //   });
    // }, 0);
  }

  /**
   * 获取控件实例
   * @param dataField 
   */
  public getEditor(dataField: string) {

  }

  /**
   * 日期选择
   */
  public onDateBoxHandler(sender:any){
    layui.laydate({
        elem:document.getElementById(sender.target.id), 
        istime: sender.isTime||false, 
        format: sender.dateFormat||'YYYY-MM-DD',
        choose: function(dates:any){ //选择好日期的回调
          sender.target.value=dates;
        }
    })
  }
}