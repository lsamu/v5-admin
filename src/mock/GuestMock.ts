import Mock from 'mockjs';

Mock.mock('/api/guest',"get",()=>{
    return {
        code:0,
        msg:"成功",
        data:[
            
        ]
    }
});
Mock.mock('/api/guest/list',"get",()=>{
    return {
        code:0,
        msg:"成功",
        data:[

        ]
    }
});
Mock.mock('/api/guest',"post",()=>{
    return {
        code:0,
        msg:"成功",
    }
});
Mock.mock('/api/guest/1',"put",()=>{
    return {
        code:0,
        msg:"成功",
    }
});

Mock.mock('/api/guest/1',"delete",()=>{
    return {
        code:0,
        msg:"成功",
    }
});