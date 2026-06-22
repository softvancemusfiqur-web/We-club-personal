import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path: path.join(process.cwd(),".env")})
export default{
    MONGO_URI : process.env.MONGO_URI || "",
    DB_NAME : process.env.DB_NAME || ""
}