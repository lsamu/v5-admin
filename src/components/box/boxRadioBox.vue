<template>
<div class="layui-form-item layui-form-text">
        <label class="layui-form-label" v-text="label"></label>
        <div class="layui-input-block">
           <div class="layui-unselect layui-form-radio" 
          v-for="item in options"
            @click="changeRadio(item)" 
            :class="{'layui-form-radioed':currentValue.Value==item.Value}">
            <i class="layui-anim layui-icon" :class="{'layui-anim-scaleSpring':currentValue.Value==item.Value}"></i>
            <span>{{item.Text}}</span>
        </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:['value','options','label'],
        data(){
            return {
                currentValue: {
                    Text:'',
                    Value:null
                }
            }
        },
        created(){
            let self=this
            self.options.forEach(item=>{
                if(item.Value==self.value){
                    self.currentValue={
                        Text:item.Text,
                        Value:item.Value
                    }
                }
            })
        },
        methods:{
            changeRadio(item){
                this.currentValue={
                        Text:item.Text,
                        Value:item.Value
                }
                this.$emit('input', item.Value);
            }
        }
    }
</script>