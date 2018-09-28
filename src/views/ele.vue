<template>
  <div>
    {{formData}}
    <boxButton :p_option='{
      type:"normal",
      text:"搜索"
    }' ref="boxButtonKey"></boxButton>
    <boxTextBox value="我是文本123456" placeholder="我是文本提示信息"  v-model="formData['title']"></boxTextBox>
    <boxSelectBox :dataSource="[{title:'分类1',id:1},{title:'分类2',id:2}]" value="1" v-model="formData['classid']"></boxSelectBox>
    <boxCheckBox :dataSource="[{title:'分类1',id:1},{title:'分类2',id:2}]" value="1" v-model="formData['classids']"></boxCheckBox>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import boxButton from "@/components/box/boxButton.vue";
import boxTextBox from "@/components/box/boxTextBox.vue";
import boxSelectBox from "@/components/box/boxSelectBox.vue";
import boxCheckBox from "@/components/box/boxCheckBox.vue";
import { ui } from "@/components/ui";

@Component({
  components: {
    boxButton,
    boxTextBox,
    boxSelectBox,
    boxCheckBox
  }
})
export default class Home extends Vue {
  formData:any={};
  boxButtonKey = "boxButtonKey";
  mounted() {
    // let btn = this.$refs[this.boxButtonKey] as any;
    // btn.option({
    //   type:"warning",
    //   onClick: (sender: any) => {
    //     ui.alert("我是弹出层!");
    //     ui.confirm("你确定是否删除?");
    //   }
    // });
  }
}
</script>
