import Mock from 'mockjs';

Mock.mock('/api/logs',"get",()=>{
    return {
        code:0,
        msg:"成功",
        data:[
            
        ]
    }
});
Mock.mock('/api/logs/list',"get",()=>{
    return {
        code:0,
        msg:"成功",
        data:[

        ]
    }
});
Mock.mock('/api/logs',"post",()=>{
    return {
        code:0,
        msg:"成功",
    }
});
Mock.mock('/api/logs/1',"put",()=>{
    return {
        code:0,
        msg:"成功",
    }
});

Mock.mock('/api/logs/1',"delete",()=>{
    return {
        code:0,
        msg:"成功",
    }
});