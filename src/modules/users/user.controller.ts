import { NextFunction, Request, Response } from "express";
import { userService } from "./auth.service";
import sendResponse from "../../utility/sendResponse";

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const users = await userService.getAllUsersFromDB();
        sendResponse(res, {
            statusCode : 200,
            success: true,  
            message : "Users retrieved successfully",
            data : users
        });

    }catch (error) {
       next(error);
    }
}

export const userController = { getAllUsers };