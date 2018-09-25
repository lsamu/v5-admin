<template>
<div class="layui-form-item layui-form-text">
        <label class="layui-form-label" v-text="label"></label>
        <div class="layui-input-block">
            <input type="text" class="layui-input" :id="dateId" @click="changeDate(dateId)" v-model="currentValue">
        </div>
    </div>
    
</template>
<script>
    export default {
        props:['value','isTime','dateFormat','label'],
        data(){
            return {
                dateId:'laydate_'+Date.now(),
                currentValue: this.value
            }
        },
        created(){
            
        },
        methods:{
            changeDate(dateId){
                let self=this;
                layui.use(['laydate'],function(){
                        var laydate = layui.laydate;
                         laydate.render({
                            elem:document.getElementById(dateId), 
                                                    istime: self.isTime||false, 
                                                    //format: self.dateFormat||'YYYY-MM-DD',
                                                    done: function(dates){ //选择好日期的回调
                                                        self.currentValue=dates;
                                                        
                                                    }
                        });
                        
                })
                
            }
        },
        watch: {
            value(val) {
                // console.log('value：'+val)
                this.currentValue = val;
            },
            currentValue(val) {
                // console.log('currentValue：'+val)
                this.$emit('input', val);
            }
        }
    }
</script>