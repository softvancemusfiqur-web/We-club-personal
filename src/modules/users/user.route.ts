import { NextFunction, Request, Response, Router } from "express";
import User from "./users.model.schema";
import sendResponse from "../../utility/sendResponse";

const router = Router();

router.get("/", async (req : Request, res : Response, next : NextFunction) => {
  try {
    const  users = await User.find();

    sendResponse(res, {
        statusCode : 200,
        sucess: true,  
        message : "Users retrieved successfully",
        data : users
    })

  } catch (error) {
    next(error);
  }
});

export const userRoutes = router;

// export default router;