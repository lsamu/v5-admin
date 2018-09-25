<template>
<div class="layui-form-item layui-form-text">
        <label class="layui-form-label" v-text="label"></label>
        <div class="layui-input-block">
           <div class="layui-unselect layui-form-checkbox" :class="{'layui-form-checked':currentValue}" @click="changeCheckd"><span>{{text}}</span><i class="layui-icon"></i></div>
        </div>
    </div>
      
</template>
<script>
    export default {
        props:['value','text','label'],
        data(){
            return {
                selectShow:false,
                currentValue: this.value
            }
        },
        created(){
        },
        methods:{
            changeCheckd(){
                this.currentValue=!this.currentValue;
                this.$emit('input', this.currentValue);
            }
        }
    }
</script>