import { Component, Vue } from "vue-property-decorator";

@Component({
    components: {}
})
export default class Home extends Vue {

    columns: any = [];

    public mounted() {
        let data = [
            {
                id: "10001",
                username: "杜甫",
                email: "xianxin@layui.com",
                sex: "男",
                city: "浙江杭州",
                sign: "人生恰似一场修行",
                experience: "116",
                ip: "192.168.0.8",
                logins: "108",
                joinTime: "2016-10-14"
            },
            {
                id: "10002",
                username: "李白",
                email: "xianxin@layui.com",
                sex: "男",
                city: "浙江杭州",
                sign: "人生恰似一场修行",
                experience: "12",
                ip: "192.168.0.8",
                logins: "106",
                joinTime: "2016-10-14",
                LAY_CHECKED: true
            },
            {
                id: "10003",
                username: "王勃",
                email: "xianxin@layui.com",
                sex: "男",
                city: "浙江杭州",
                sign: "人生恰似一场修行",
                experience: "65",
                ip: "192.168.0.8",
                logins: "106",
                joinTime: "2016-10-14"
            },
            {
                id: "10004",
                username: "贤心",
                email: "xianxin@layui.com",
                sex: "男",
                city: "浙江杭州",
                sign: "人生恰似一场修行",
                experience: "666",
                ip: "192.168.0.8",
                logins: "106",
                joinTime: "2016-10-14"
            },
            {
                id: "10005",
                username: "贤心",
                email: "xianxin@layui.com",
                sex: "男",
                city: "浙江杭州",
                sign: "人生恰似一场修行",
                experience: "86",
                ip: "192.168.0.8",
                logins: "106",
                joinTime: "2016-10-14"
            },
            {
                id: "10006",
                username: "贤心",
                email: "xianxin@layui.com",
                sex: "男",
                city: "浙江杭州",
                sign: "人生恰似一场修行",
                experience: "12",
                ip: "192.168.0.8",
                logins: "106",
                joinTime: "2016-10-14"
            },
            {
                id: "10007",
                username: "贤心",
                email: "xianxin@layui.com",
                sex: "男",
                city: "浙江杭州",
                sign: "人生恰似一场修行",
                experience: "16",
                ip: "192.168.0.8",
                logins: "106",
                joinTime: "2016-10-14"
            },
            {
                id: "10008",
                username: "贤心",
                email: "xianxin@layui.com",
                sex: "男",
                city: "浙江杭州",
                sign: "人生恰似一场修行",
                experience: "106",
                ip: "192.168.0.8",
                logins: "106",
                joinTime: "2016-10-14"
            }
        ];

        for (let index = 0; index < 1000000; index++) {
            data.push({
                id: index.toString(),
                username: "贤心" + index,
                email: "xianxin@layui.com",
                sex: "男",
                city: "浙江杭州",
                sign: "人生恰似一场修行",
                experience: "106",
                ip: "192.168.0.8",
                logins: "106",
                joinTime: "2016-10-14"
            });
        }
        layui.use(['table', 'form'], function () {
            let form = layui.form;
            let table = layui.table;

            form.render();

            table.render({
                elem: "#test",
                //url: "https://www.layui.com/demo/table/user/",
                cellMinWidth: 80, //全局定义常规单元格的最小宽度，layui 2.2.1 新增
                cols: [
                    [
                        { type: "radio", fixed: "left" },
                        { type: "checkbox", fixed: "left" },
                        { field: "id", width: 80, title: "ID", sort: true, fixed: "left" },
                        { field: "username", width: 80, title: "用户名" },
                        { field: "sex", width: 80, title: "性别", sort: true },
                        { field: "city", width: 80, title: "城市" },
                        { field: "sign", title: "签名", width: "30%", minWidth: 100 }, //minWidth：局部定义当前单元格的最小宽度，layui 2.2.1 新增
                        { field: "experience", title: "积分", sort: true, totalRow: true },
                        { field: "score", title: "评分", sort: true },
                        { field: "classify", title: "职业" },
                        { field: "wealth", width: 137, title: "财富", sort: true },
                        {
                            field: "id",
                            title: "编辑",
                            width: 160,
                            templet: "#barDemo",
                            unresize: true,
                            fixed: "right"
                        }
                    ]
                ],
                data,
                page: true,
                toolbar: "#toolbarDemo",
                totalRow: true,
                height: 'full-100'
            });

            //监听行单击事件（单击事件为：rowDouble）
            table.on("row(test)", (obj: any) => {
                var data = obj.data;

                layer.alert(JSON.stringify(data), {
                    title: "当前行数据："
                });

                //标注选中样式
                obj.tr
                    .addClass("layui-table-click")
                    .siblings()
                    .removeClass("layui-table-click");
            });
        });
    }

    /**
     * 配置操作
     */
    public option(data: {
        dataSource:[],
        columns: []
    }) {

        this.columns = data.columns;
    }

    /**
     * 刷新
     */
    public refush() {

    }

    /**
     * 获取工具条实例
     */
    public getToolBar(){

    }

    /**
     * 获取搜索表单
     */
    public getSearchForm(){

    }
}