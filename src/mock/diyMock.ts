import Mock from 'mockjs';

Mock.mock('/api/diy',"get",()=>{
    return {
        code:0,
        msg:"成功",
        data:[
            
        ]
    }
});
Mock.mock('/api/diy/list',"get",()=>{
    return {
        code:0,
        msg:"成功",
        data:[

        ]
    }
});
Mock.mock('/api/diy',"post",()=>{
    return {
        code:0,
        msg:"成功",
    }
});
Mock.mock('/api/diy/1',"put",()=>{
    return {
        code:0,
        msg:"成功",
    }
});

Mock.mock('/api/diy/1',"delete",()=>{
    return {
        code:0,
        msg:"成功",
    }
});