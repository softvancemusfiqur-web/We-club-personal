import User from "./users.model.schema";


const getAllUsersFromDB  = async () => {

    const users =  await User.find({}).select("-password"); // Exclude password field
    return users;
}

export const userService = { getAllUsersFromDB };