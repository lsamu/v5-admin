import Mock from 'mockjs';

Mock.mock('/api/ad',"get",()=>{
    return {
        code:0,
        msg:"成功",
        data:[
            
        ]
    }
});
Mock.mock('/api/ad/list',"get",()=>{
    return {
        code:0,
        msg:"成功",
        data:[

        ]
    }
});
Mock.mock('/api/ad',"post",()=>{
    return {
        code:0,
        msg:"成功",
    }
});
Mock.mock('/api/ad/1',"put",()=>{
    return {
        code:0,
        msg:"成功",
    }
});

Mock.mock('/api/ad/1',"delete",()=>{
    return {
        code:0,
        msg:"成功",
    }
});