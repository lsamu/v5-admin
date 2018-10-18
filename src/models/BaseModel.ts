export interface BaseModel<T> {
    code?: number;
    msg?: string;
    data?: T
}

export interface BaseArray<T> {
    code?: number;
    msg?: string;
    data?: T[]
}

export interface BasePager<T> {
    code?: number;
    msg?: string;
    data?: {
        total: number;
        current_page: number;
        per_page: number;
        last_page: number;
        list: T[]
    }
}

export interface adminModel {
    id?: number;
    title?: string;
}

let aa: BaseModel<adminModel>;
let bb: BaseArray<adminModel>;
let cc: BasePager<adminModel>;
let dd:BaseModel<any>;