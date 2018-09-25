<template>         
    <div class="layui-form-item layui-form-text">
        <label class="layui-form-label" v-text="label"></label>
        <div class="layui-input-block">
           <div class="layui-unselect layui-form-switch" :class="{'layui-form-onswitch':currentValue}" @click="changeSwitch"><i></i></div>
        </div>
    </div>
</template>
<script>
    export default {
        props:['value','label'],
        data(){
            return {
                selectShow:false,
                currentValue: this.value
            }
        },
        created(){
        },
        methods:{
            changeSwitch(){
                this.currentValue=!this.currentValue;
                this.$emit('input', this.currentValue);
            }
        }
    }
</script>