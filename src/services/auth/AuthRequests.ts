import { AuthSchemaTP } from "@/schemas/auth/authSchema";
import { RequestTP } from "@/zenith-ui/services/types/requestTP";
import { BaseURL } from "..";

export class AuthRequests {
    static CONTROLLER_ROOT = 'auth'
    static LOGIN_EP = 'login'

    static login = (data: AuthSchemaTP): RequestTP<AuthSchemaTP> => ({
        url: `${BaseURL.API}/${AuthRequests.CONTROLLER_ROOT}/${AuthRequests.LOGIN_EP}`,
        method: "POST",
        headers: {"Content-Type": "application/json"},
        data: data
    })
}