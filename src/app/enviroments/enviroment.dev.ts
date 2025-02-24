import { User } from "../models/user/user";

export const environment = {
    DEV_EMAIL: "dev@gmail.com",
    DEV_MASTERKEY: "dev123",
    SERVIDOR: "http://localhost:8080",
    DEV_USER: new User(9999, "Dev", "dev@gmail.com", "dev@gmail.com", "DEV123")
};