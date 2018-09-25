<template>
  <div>
    {{formData}}
    <boxTextBox v-model="formData['title']" label="标题"></boxTextBox>
    <boxTextArea v-model="formData['content']" label="内容"></boxTextArea>
    <boxSelectBox v-model="formData['classid']" label="分类" :options="[{Text:'分类1',Value:1}]"></boxSelectBox>
    <boxSwitchBox v-model="formData['flag']" label="是否"></boxSwitchBox>
    <boxEditorBox v-model="formData['editor']" label="编辑器"></boxEditorBox>
    <boxCheckBox v-model="formData['classids']" label="多选"></boxCheckBox>
    <boxRadioBox v-model="formData['sex']" label="性别" :options="[{Text:'男',Value:1},{Text:'女',Value:2}]"></boxRadioBox>
    <boxDateBox v-model="formData['date']" label="日期"></boxDateBox>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import boxTextBox from "@/components/box/boxTextBox.vue";
import boxTextArea from "@/components/box/boxTextArea.vue";
import boxSelectBox from "@/components/box/boxSelectBox.vue";
import boxSwitchBox from "@/components/box/boxSwitchBox.vue";
import boxEditorBox from "@/components/box/boxEditorBox.vue";
import boxCheckBox from "@/components/box/boxCheckBox.vue";
import boxRadioBox from "@/components/box/boxRadioBox.vue";
import boxDateBox from "@/components/box/boxDateBox.vue";

@Component({
  components: {
    boxTextBox,
    boxTextArea,
    boxSelectBox,
    boxSwitchBox,
    boxEditorBox,
    boxCheckBox,
    boxRadioBox,
    boxDateBox
  }
})
export default class Home extends Vue {
  formData: object = {
    content: "我的文本内容121313123312312"
  };
}
</script>