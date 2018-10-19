import Mock from 'mockjs';

Mock.mock('/api/config',"get",()=>{
    return {
        code:0,
        msg:"成功",
        data:[
            
        ]
    }
});
Mock.mock('/api/config/list',"get",()=>{
    return {
        code:0,
        msg:"成功",
        data:[

        ]
    }
});
Mock.mock('/api/config',"post",()=>{
    return {
        code:0,
        msg:"成功",
    }
});
Mock.mock('/api/config/1',"put",()=>{
    return {
        code:0,
        msg:"成功",
    }
});

Mock.mock('/api/config/1',"delete",()=>{
    return {
        code:0,
        msg:"成功",
    }
});