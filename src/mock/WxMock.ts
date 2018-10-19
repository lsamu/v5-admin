import Mock from 'mockjs';

Mock.mock('/api/wx',"get",()=>{
    return {
        code:0,
        msg:"成功",
        data:[
            
        ]
    }
});
Mock.mock('/api/wx/list',"get",()=>{
    return {
        code:0,
        msg:"成功",
        data:[

        ]
    }
});
Mock.mock('/api/wx',"post",()=>{
    return {
        code:0,
        msg:"成功",
    }
});
Mock.mock('/api/wx/1',"put",()=>{
    return {
        code:0,
        msg:"成功",
    }
});

Mock.mock('/api/wx/1',"delete",()=>{
    return {
        code:0,
        msg:"成功",
    }
});