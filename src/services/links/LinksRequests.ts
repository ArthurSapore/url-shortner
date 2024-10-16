import { RequestTP } from "@/zenith-ui/services/types/requestTP"
import { BaseURL } from ".."

export class LinksRequests {
    
    static  CONTROLLER_ROOT = 'links'
    static  LOGIN_EP = 'search'

    static search = ():RequestTP<void> =>({
        method: 'GET',
        url: `${BaseURL.API}/${LinksRequests.CONTROLLER_ROOT}/${LinksRequests.LOGIN_EP}`
    })
}