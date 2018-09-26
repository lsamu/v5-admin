<template>
  <div>
    <!-- <datagrid ref="datagridKey"></datagrid> -->
    <mydatagrid ref="mydatagridkey"></mydatagrid>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import datagrid from "@/components/datagrid.vue";
import mydatagrid from "@/components/box/boxDataGrid.vue";

@Component({
  components: {
    datagrid,
    mydatagrid
  }
})
export default class Home extends Vue {
  datagridKey = "datagridKey";
  mydatagridkey = "mydatagridkey";
  public mounted() {
    let datagrid = this.$refs[this.mydatagridkey] as any;

    let ds = [];
    for (let index = 0; index < 1000000; index++) {
      ds.push({
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

    datagrid.option({
      cols: [
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
      ],
      data:ds
    });

    // datagrid.option({
    //   dataSource: ds,
    //   columns: [
    //     { type: "radio", fixed: "left" },
    //     { type: "checkbox", fixed: "left" },
    //     { field: "id", width: 80, title: "ID", sort: true, fixed: "left" },
    //     { field: "username", width: 80, title: "用户名" },
    //     { field: "sex", width: 80, title: "性别", sort: true },
    //     { field: "city", width: 80, title: "城市" },
    //     { field: "sign", title: "签名", width: "30%", minWidth: 100 }, //minWidth：局部定义当前单元格的最小宽度，layui 2.2.1 新增
    //     { field: "experience", title: "积分", sort: true, totalRow: true },
    //     { field: "score", title: "评分", sort: true },
    //     { field: "classify", title: "职业" },
    //     { field: "wealth", width: 137, title: "财富", sort: true },
    //     {
    //       field: "id",
    //       title: "编辑",
    //       width: 160,
    //       templet: "#barDemo",
    //       unresize: true,
    //       fixed: "right"
    //     }
    //   ]
    // });
  }
}
</script>
