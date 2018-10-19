import Mock from 'mockjs';

Mock.mock('/api/plugin',"get",()=>{
    return {
        code:0,
        msg:"成功",
        data:[
            
        ]
    }
});
Mock.mock('/api/plugin/list',"get",()=>{
    return {
        code:0,
        msg:"成功",
        data:[

        ]
    }
});
Mock.mock('/api/plugin',"post",()=>{
    return {
        code:0,
        msg:"成功",
    }
});
Mock.mock('/api/plugin/1',"put",()=>{
    return {
        code:0,
        msg:"成功",
    }
});

Mock.mock('/api/plugin/1',"delete",()=>{
    return {
        code:0,
        msg:"成功",
    }
});