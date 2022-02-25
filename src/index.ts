import { MapTTLockAPIs, APIConfigsType } from "./helpers/api-mapper"

import ResetPasswordInterfaces, { endpoint as resetPasswordEndpoint } from './endpoints/reset-password'

export const APIConfigs: APIConfigsType = {
  resetPassword: resetPasswordEndpoint,
}  

export type APIParamsType = {
  resetPassword: ResetPasswordInterfaces,
}

const TTLockAPI = MapTTLockAPIs()

export default TTLockAPI