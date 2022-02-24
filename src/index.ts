import { MapTTLockAPIs, APIConfigsType } from "./helpers/api-mapper"

import UserRegisterInterfaces, { endpoint as userRegisterEndpoint } from './endpoints/user-register'

export const APIConfigs: APIConfigsType = {
  userRegister: userRegisterEndpoint,
}  

export type APIParamsType = {
  userRegister: UserRegisterInterfaces,
}

const TTLockAPI = MapTTLockAPIs()

export default TTLockAPI