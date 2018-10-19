import Mock from 'mockjs';

Mock.mock('/api/user',"get",()=>{
    return {
        code:0,
        msg:"成功",
        data:[
            
        ]
    }
});
Mock.mock('/api/user/list',"get",()=>{
    return {
        code:0,
        msg:"成功",
        data:[

        ]
    }
});
Mock.mock('/api/user',"post",()=>{
    return {
        code:0,
        msg:"成功",
    }
});
Mock.mock('/api/user/1',"put",()=>{
    return {
        code:0,
        msg:"成功",
    }
});

Mock.mock('/api/user/1',"delete",()=>{
    return {
        code:0,
        msg:"成功",
    }
});