import Mock from 'mockjs';

Mock.mock('/api/ext',"get",()=>{
    return {
        code:0,
        msg:"成功",
        data:[
            
        ]
    }
});
Mock.mock('/api/ext/list',"get",()=>{
    return {
        code:0,
        msg:"成功",
        data:[

        ]
    }
});
Mock.mock('/api/ext',"post",()=>{
    return {
        code:0,
        msg:"成功",
    }
});
Mock.mock('/api/ext/1',"put",()=>{
    return {
        code:0,
        msg:"成功",
    }
});

Mock.mock('/api/ext/1',"delete",()=>{
    return {
        code:0,
        msg:"成功",
    }
});