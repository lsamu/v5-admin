import { AxiosUtil } from '../utils/AxiosUtil';
import { BaseResult, BaseModel, BaseArray, BasePager } from '../models/BaseModel';
import { GuestModel } from '../models/GuestModel';
import { BaseApi } from './BaseApi';

export class GuestApi extends BaseApi {

    public async getListPager(strWhere: string = "", pageSize: number = 15, pageIndex: number = 1) {
        let url: string = "/api/admin?token=" + this.token + "&size=" + pageSize + "&page=" + pageIndex + strWhere;
        return await AxiosUtil.get<BasePager<GuestModel>>(url);
    }

    /**
     * 获取列表
     */
    public async getList(strWhere: string = "") {
        let url: string = "/api/admin/lists?token=" + this.token;
        return await AxiosUtil.get<BaseArray<GuestModel>>(url);
    }

    /**
     * 添加
     * @param model 
     */
    public async setAdd(data: GuestModel) {
        let url = "/api/admin";
        return await AxiosUtil.post<BaseResult>(url, data);
    }

    /**
     * 更新
     * @param id 
     * @param model 
     */
    public async setUpdate(id: number, data: GuestModel) {
        let url = "/api/admin/" + id;
        return await AxiosUtil.put<BaseResult>(url, data);
    }

    /**
     * 删除
     * @param ids 
     */
    public async setDelete(id: number) {
        let url = "/api/admin/" + id;
        return await AxiosUtil.delete<BaseResult>(url);
    }
    /**
     * 获取模型
     * @param id 
     */
    public async getModel(id: number) {
        let url = "/api/admin/" + id;
        return await AxiosUtil.get<BaseModel<GuestModel>>(url);
    }
}