import { getLocalStorageItem } from "./localStorage.helpers";
import jwt_decode from "jwt-decode";
import { getUserByMail } from "../api/users";

const getType = async () => {
    const token = getLocalStorageItem("accessToken");
    const { mail } = jwt_decode(token);
    const user = await getUserByMail(mail);
    const { data } = user;
    return data;
}

export {getType};