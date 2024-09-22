import { AuthSchemaTP } from "@/schemas/auth/authSchema";
import { RequestTP } from "@/zenith-ui/services/types/requestTP";

export type userTP = {
    createdAt: string,
    name: string,
    avatar: string,
    id: string
}

export class AuthRequests {
    static login = (data: AuthSchemaTP, header: string): RequestTP<AuthSchemaTP> => ({
        url: 'http://localhost:3007/auth/login',
        method: "POST",
        headers: {"Content-Type": "application/json", schema: header},
        data: data
    })

    static getUser = (id: string): RequestTP<userTP> =>({
        url: 'https://669c3ead276e45187d37982f.mockapi.io/users/:id'.replace(':id', id),
        method: 'GET',
        headers: {"Content-Type": "application/json"}
    })
}