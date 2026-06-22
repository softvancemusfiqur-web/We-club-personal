import { Response } from "express";


type responseType<T> = {
    statusCode : number;
    sucess: boolean;
    message : string;
    data? : T,
    error? : any
}

const sendResponse = <T>(res : Response, data : responseType<T>) => {
    const { statusCode, sucess, message, data: responseData, error } = data;
    res.status(statusCode).json({
        sucess,
        message,
        data: responseData,
        error
    })
}

export default sendResponse;