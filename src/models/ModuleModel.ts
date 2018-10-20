/**
 *模块管理
 *
 * @export
 * @interface ModuleModel
 */
export interface ModuleModel {
    id?: number;//(编号)                     PKInteger
    controller?: string;//(控制器)           String(100)
    controller_name?: string;//(控制器名称)  String(100)
    controller_no?: number;//(控制器排序)    Integer
    action?: string;//(方法)                 String(100)
    action_name?: string;//(方法名称)        String(100)
    action_no?: number;//(方法排序)          Integer
    action_icon?: string;//(方法图标)        String(50)
    is_menu?: number;//(是否菜单)            Integer
    menu_icon?: string;//(菜单图标)          String(50)
    create_time?: string;//(创建时间)        Date
    update_time?: string;//(更新时间)        Date
}