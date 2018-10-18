export class menuUtil {

    public static getAllMenuList() {
        let items = [
            {
                name: "文章管理",
                type: "content",
                items: [
                    {
                        name: "文章列表",
                        href: "/admin/article/list",
                        component: "@/views/article/list.vue"
                    },
                    {
                        name: "文章评论",
                        href: "/admin/article/commentlist",
                        component: "@/views/article/commentlist.vue"
                    },
                    {
                        name: "文章分类",
                        href: "/admin/article/classlist",
                        component: "@/views/article/classlist.vue"
                    },
                    {
                        name: "文章专题分类",
                        href: "/admin/article/topicclasslist",
                        component: "@/views/article/topicclasslist.vue"
                    },
                    {
                        name: "文章采集",
                        href: "/admin/article/collectionlist",
                        component: "@/views/article/collectionlist.vue"
                    },
                ]
            },
            {
                name: "模板管理",
                type: "template",
                items: [
                    {
                        name: "网站模板",
                        href: "/admin/template/list",
                        component: "@/views/template/list.vue"
                    },
                    {
                        name: "插件管理",
                        href: "/admin/plugin/list",
                        component: "@/views/plugin/list.vue"
                    },
                    {
                        name: "缓存管理",
                        href: "/admin/cache/list",
                        component: "@/views/cache/list.vue"
                    },
                    {
                        name: "文件管理",
                        href: "/admin/file/list",
                        component: "@/views/file/list.vue"
                    },
                ]
            },
            {
                name: "碎片管理",
                type: "template",
                items: [
                    {
                        name: "碎片块管理",
                        href: "/admin/blocker/list",
                        component: "@/views/blocker/list.vue"
                    },
                ]
            },
            {
                name: "管理员管理",
                type: "user",
                items: [
                    {
                        name: "管理员管理",
                        href: "/admin/admin/list",
                        component: "@/views/admin/list.vue"
                    },
                    {
                        name: "管理员角色",
                        href: "/admin/admin/rolelist",
                        component: "@/views/admin/rolelist.vue"
                    },
                ]
            },
            {
                name: "用户管理",
                type: "content",
                items: [
                    {
                        name: "用户管理",
                        href: "/admin/user/list",
                        component: "@/views/user/list.vue"
                    },
                    {
                        name: "角色管理",
                        href: "/admin/user/rolelist",
                        component: "@/views/user/rolelist.vue"
                    }
                ]
            },
            {
                name: "系统管理",
                type: "content",
                items: [
                    {
                        name: "网站配置",
                        href: "/admin/config/edit",
                        component: "@/views/config/edit.vue"
                    },
                    {
                        name: "关键词管理",
                        href: "/admin/keywords/list",
                        component: "@/views/keywords/list.vue"
                    },
                    {
                        name: "导航菜单",
                        href: "/admin/menu/list",
                        component: "@/views/menu/list.vue"
                    },
                    {
                        name: "留言管理",
                        href: "/admin/guest/list",
                        component: "@/views/guest/list.vue"
                    },
                    {
                        name: "网站日志",
                        href: "/admin/logs/list",
                        component: "@/views/logs/list.vue"
                    },
                ]
            },
            {
                name: "友情链接",
                type: "content",
                items: [
                    {
                        name: "友情链接",
                        href: "/admin/friend/list",
                        component: "@/views/friend/list.vue"
                    },
                    {
                        name: "友情链接分类",
                        href: "/admin/friend/classlist",
                        component: "@/views/friend/classlist.vue"
                    },
                ]
            },
            {
                name: "单页图文",
                type: "content",
                items: [
                    {
                        name: "页面管理",
                        href: "/admin/diy/list",
                        component: "@/views/diy/list.vue"
                    },
                    {
                        name: "分类管理",
                        href: "/admin/diy/classlist",
                        component: "@/views/diy/classlist.vue"
                    },
                ]
            },
            {
                name: "图片轮播",
                type: "content",
                items: [
                    {
                        name: "图片轮播",
                        href: "/admin/ad/list",
                        component: "@/views/ad/list.vue"
                    },
                    {
                        name: "分类管理",
                        href: "/admin/ad/classlist",
                        component: "@/views/ad/classlist.vue"
                    },
                ]
            },
            {
                name: "微信设置",
                type: "content",
                items: [
                    {
                        name: "公众号列表",
                        href: "/admin/wx/list",
                        component: "@/views/wx/list.vue"
                    }
                ]
            },
        ];
        return items;
    }
}