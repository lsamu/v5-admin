import Mock from 'mockjs';

Mock.mock('http://bb.cn/api/article',"get",()=>{
    return {
        code:0,
        msg:"成功",
        data:[
            
        ]
    }
});
Mock.mock('/api/article/list',"get",()=>{
    return {
        code:0,
        msg:"成功",
        data:[

        ]
    }
});
Mock.mock('/api/article',"post",()=>{
    return {
        code:0,
        msg:"成功",
    }
});
Mock.mock('/api/article/1',"put",()=>{
    return {
        code:0,
        msg:"成功",
    }
});

Mock.mock('/api/article/1',"delete",()=>{
    return {
        code:0,
        msg:"成功",
    }
});