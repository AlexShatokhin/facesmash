import { URL, PORT } from "@/src/constants/server";
import { AuthorizationResponseType } from "@/src/types/AuthorizationFormType";

async function sendAuthorizationQuery(phone: string, 
                                    password: string,
                                    request: (url: string, method?: string, body?: any, headers?: Record<string, string> | null) => Promise<any>) : Promise<{message: string, code: number}>{

    const data = await request(`${URL}:${PORT}/authorization/?phone=${phone}&password=${password}`, "GET"); 
    return data as AuthorizationResponseType;
}

export default sendAuthorizationQuery;