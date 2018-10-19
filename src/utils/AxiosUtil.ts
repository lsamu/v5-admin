import axios, { AxiosResponse } from 'axios';

export class AxiosUtil {

    public static async get<T>(url: string) {
        let d = await axios.get(url);
        return d.data as T;
    }

    public static async post<T>(url: string, data: any) {
        let d = await axios.post(url, data);
        return d.data as T;
    }

    public static async put<T>(url: string, data: any) {
        let d = await axios.put(url, data);
        return d.data as T;
    }

    public static async delete<T>(url: string) {
        let d = await axios.delete(url);
        return d.data as T;
    }
}