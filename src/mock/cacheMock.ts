import Mock from 'mockjs';

Mock.mock('/api/cache',"get",()=>{
    return {
        code:0,
        msg:"成功",
        data:[
            
        ]
    }
});
Mock.mock('/api/cache/list',"get",()=>{
    return {
        code:0,
        msg:"成功",
        data:[

        ]
    }
});
Mock.mock('/api/cache',"post",()=>{
    return {
        code:0,
        msg:"成功",
    }
});
Mock.mock('/api/cache/1',"put",()=>{
    return {
        code:0,
        msg:"成功",
    }
});

Mock.mock('/api/cache/1',"delete",()=>{
    return {
        code:0,
        msg:"成功",
    }
});