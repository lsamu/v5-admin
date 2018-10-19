import Mock from 'mockjs';

Mock.mock('/api/template',"get",()=>{
    return {
        code:0,
        msg:"成功",
        data:[
            
        ]
    }
});
Mock.mock('/api/template/list',"get",()=>{
    return {
        code:0,
        msg:"成功",
        data:[

        ]
    }
});
Mock.mock('/api/template',"post",()=>{
    return {
        code:0,
        msg:"成功",
    }
});
Mock.mock('/api/template/1',"put",()=>{
    return {
        code:0,
        msg:"成功",
    }
});

Mock.mock('/api/template/1',"delete",()=>{
    return {
        code:0,
        msg:"成功",
    }
});