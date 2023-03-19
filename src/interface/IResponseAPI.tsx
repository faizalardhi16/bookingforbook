export interface IResponseAPI {
    meta: Meta;
    data: Data;
}

export interface Data {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    token: string;
}

export interface Meta {
    message: string;
    code: number;
    status: string;
}