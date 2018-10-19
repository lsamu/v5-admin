import Mock from 'mockjs';

Mock.mock('/api/menu',"get",()=>{
    return {
        code:0,
        msg:"成功",
        data:[
            
        ]
    }
});
Mock.mock('/api/menu/list',"get",()=>{
    return {
        code:0,
        msg:"成功",
        data:[

        ]
    }
});
Mock.mock('/api/menu',"post",()=>{
    return {
        code:0,
        msg:"成功",
    }
});
Mock.mock('/api/menu/1',"put",()=>{
    return {
        code:0,
        msg:"成功",
    }
});

Mock.mock('/api/menu/1',"delete",()=>{
    return {
        code:0,
        msg:"成功",
    }
});