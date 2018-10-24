<template>
    <div>
        <boxTest ref="boxTestKey" :disabled="disabled" value="默认值"></boxTest>
        <button @click="open">打开</button>
        <button @click="close">关闭</button>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";
import boxTest from "@/components/boxTest.vue";
@Component({
  components: {
    boxTest
  }
})
export default class test_index extends Vue {
  private boxTestKey = "boxTestKey";
  private disabled = true;
  private mounted() {
    // (this.$refs["boxTestKey"] as any).option({
    //   placeholder: "用户名不能为空!",
    //   value: "默认为1",
    //   style: "color:red;font-size:60px",
    //   onChangeValued: (val: any) => {
    //     console.log(val);
    //   },
    //   disabled: true
    // });
  }

  private open() {
    this.disabled = false;
    // (this.$refs["boxTestKey"] as any).option({
    //   disabled: false
    // });
  }

  private close() {
    this.disabled = true;
    // (this.$refs["boxTestKey"] as any).option({
    //   disabled: true
    // });
  }

  private asd() {
    this.disabled = true;
  }
}
</script>
