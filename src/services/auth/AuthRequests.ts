import { AuthSchemaTP } from "@/schemas/auth/authSchema";
import { RequestTP } from "@/zenith-ui/services/types/requestTP";

export type userTP = {
    createdAt: string,
    name: string,
    avatar: string,
    id: string
}

export class AuthRequests {
    static auth = (data: AuthSchemaTP): RequestTP<AuthSchemaTP> => ({
        url: 'https://669c3ead276e45187d37982f.mockapi.io/user',
        method: "POST",
        headers: {"Content-Type":"application/json"},
        params: data
    })

    static getUser = (id: string): RequestTP<userTP> =>({
        url: 'https://669c3ead276e45187d37982f.mockapi.io/users/:id'.replace(':id', id),
        method: 'GET',
        headers: {"Content-Type": "application/json"}
    })
}