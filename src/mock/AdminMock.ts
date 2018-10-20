import Mock from 'mockjs';
let Random = Mock.Random;

Mock.mock('/api/admin',"get",()=>{
    return {
        code:0,
        msg:"成功",
        data:[
            
        ]
    }
});
Mock.mock('/api/admin/list',"get",()=>{
    return {
        code:0,
        msg:"成功",
        data:[

        ]
    }
});

Mock.mock('/api/admin',"post",()=>{
    return {
        code:0,
        msg:"成功",
    }
});
Mock.mock('/api/admin/1',"put",()=>{
    return {
        code:0,
        msg:"成功",
    }
});

Mock.mock('/api/admin/1',"delete",()=>{
    return {
        code:0,
        msg:"成功",
    }
});