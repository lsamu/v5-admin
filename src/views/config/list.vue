<template>
     <div>
        <boxForm></boxForm>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import boxForm from '@/components/boxForm.vue';

@Component({
  components:{
    boxForm
  }
})
export default class Layout extends Vue {

  mounted(){
      
  }
}
</script>
