import { AuthorizationDataType } from "./AthorizationDataType"

export type AuthorizationResponseType = {
    message: string, 
    code: number,
    user?: AuthorizationDataType | null
}