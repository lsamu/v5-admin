<template>
  <div>
    <datagrid ref="datagridKey"></datagrid>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import datagrid from "@/components/datagrid.vue";

@Component({
  components: {
    datagrid
  }
})
export default class Home extends Vue {
  datagridKey = "datagridKey";
  public mounted() {
    let datagrid = this.$refs[this.datagridKey] as any;
    console.log(datagrid);

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
      ]
    });
  }
}
</script>
