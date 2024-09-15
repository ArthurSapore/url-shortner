import { AuthSchemaTP } from "@/schemas/auth/authSchema"
import { useUserStore } from "@/store/UserStore"
import axios from "axios"
import { AuthRequests } from "./AuthRequests"

export const useAuthRequest = () => {
    const {setUser } = useUserStore()
    const auth = async (data: AuthSchemaTP) => {
        try{
            const authRequest = axios(AuthRequests.auth(data))
            const response = (await authRequest).data.toJSON()
            setUser(response)
            return response
        }catch(err){
             console.log(err) 
        }
        
    }
    
    const getUser = async (id: string) => {
        try{
            const getUserRequest = axios(AuthRequests.getUser(id))
            const response = (await getUserRequest).data

            
            if(response) return response
        }catch(err){
            console.log(err)
        }
    }

    return{
        auth, 
        getUser
    }



}
