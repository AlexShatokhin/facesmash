import { URL, PORT } from "@/src/constants/server";
import { AuthorizationResponseType } from "@/src/types/AuthorizationFormType";

async function sendRegistrationQuery(name : string, 
                                    phone: string, 
                                    password: string,
                                    request: (url: string, method?: string, body?: any, headers?: Record<string, string> | null) => Promise<any>) : Promise<AuthorizationResponseType>{

    const data = await request(`${URL}:${PORT}/registration`, "POST", JSON.stringify({name, phone, password}));
    return data as AuthorizationResponseType;
}

export default sendRegistrationQuery;