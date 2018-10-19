import Mock from 'mockjs';

Mock.mock('/api/friend',"get",()=>{
    return {
        code:0,
        msg:"成功",
        data:[
            
        ]
    }
});
Mock.mock('/api/friend/list',"get",()=>{
    return {
        code:0,
        msg:"成功",
        data:[

        ]
    }
});
Mock.mock('/api/friend',"post",()=>{
    return {
        code:0,
        msg:"成功",
    }
});
Mock.mock('/api/friend/1',"put",()=>{
    return {
        code:0,
        msg:"成功",
    }
});

Mock.mock('/api/friend/1',"delete",()=>{
    return {
        code:0,
        msg:"成功",
    }
});