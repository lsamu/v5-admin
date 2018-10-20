<template>
  <div>
    <boxDataGrid :ref="boxDataGridKey"></boxDataGrid>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import boxDataGrid from "@/components/boxDataGrid.vue";
import BaseVue from "../../common/BaseVue";
import BoxExpress from "@/box.all";

@Component({
  components: {
    boxDataGrid
  }
})
export default class User extends BaseVue {
  mounted() {
    let grid = this.getInstanceByKey<BoxExpress.ui.boxDataGrid>(
      this.boxDataGridKey
    );

    let ds = [];
    for (let index = 1; index <= 21; index++) {
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
    grid.option({
      title: "文章",
      cols: [
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
      data: ds
    });
  }
}
</script>
