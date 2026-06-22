import User from "./users.model.schema";


const getAllUsersFromDB  = async (query: any) => {

    const { limit, skip , sort, search } = query; // Destructure any query parameters if needed

    const users =  await User.find({
        name: { $regex: search || "", $options: "i" } // Example search by name, case-insensitive
    }).select("-password").limit(limit).skip(skip).sort(sort); // Exclude password field
    return users;
}

export const userService = { getAllUsersFromDB };