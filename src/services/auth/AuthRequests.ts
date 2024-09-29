import { AuthSchemaTP } from "@/schemas/auth/authSchema";
import { RequestTP } from "@/zenith-ui/services/types/requestTP";

const BASE_URL = 'http://localhost:3007'

export class AuthRequests {
    static login = (data: AuthSchemaTP): RequestTP<AuthSchemaTP> => ({
        url: `${BASE_URL}/auth/login`,
        method: "POST",
        headers: {"Content-Type": "application/json"},
        data: data
    })

}