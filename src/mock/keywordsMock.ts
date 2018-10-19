import Mock from 'mockjs';

Mock.mock('/api/keywords',"get",()=>{
    return {
        code:0,
        msg:"成功",
        data:[
            
        ]
    }
});
Mock.mock('/api/keywords/list',"get",()=>{
    return {
        code:0,
        msg:"成功",
        data:[

        ]
    }
});
Mock.mock('/api/keywords',"post",()=>{
    return {
        code:0,
        msg:"成功",
    }
});
Mock.mock('/api/keywords/1',"put",()=>{
    return {
        code:0,
        msg:"成功",
    }
});

Mock.mock('/api/keywords/1',"delete",()=>{
    return {
        code:0,
        msg:"成功",
    }
});