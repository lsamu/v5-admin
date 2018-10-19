import Mock from 'mockjs';

Mock.mock('/api/blocker',"get",()=>{
    return {
        code:0,
        msg:"成功",
        data:[
            
        ]
    }
});
Mock.mock('/api/blocker/list',"get",()=>{
    return {
        code:0,
        msg:"成功",
        data:[

        ]
    }
});
Mock.mock('/api/blocker',"post",()=>{
    return {
        code:0,
        msg:"成功",
    }
});
Mock.mock('/api/blocker/1',"put",()=>{
    return {
        code:0,
        msg:"成功",
    }
});

Mock.mock('/api/blocker/1',"delete",()=>{
    return {
        code:0,
        msg:"成功",
    }
});