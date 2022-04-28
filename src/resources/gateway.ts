import Client from "../client"
import type { GatewayType } from '../types'

type GetUserIDType = GatewayType['GetUserID']
type GetLockTimeType = GatewayType['GetLockTime']
type AdjustLockTimeType = GatewayType['AdjustLockTime']
type UnlockType = GatewayType['Unlock']
type LockType = GatewayType['Lock']
type GetOpenStateType = GatewayType['GetOpenState']
type FreezeType = GatewayType['Freeze']
type UnfreezeType = GatewayType['Unfreeze']
type GetLockStatusType = GatewayType['GetLockStatus']
type GetGatewayListOfAnAccountType = GatewayType['GetGatewayListOfAnAccount']
type GetGatewayListOfALockType = GatewayType['GetGatewayListOfALock']
type GetLockListOfGatewayType = GatewayType['GetLockListOfGateway']
type QueryGatewayInitStatusType = GatewayType['QueryGatewayInitStatus']
type UploadGatewayDetailInfoType = GatewayType['UploadGatewayDetailInfo']
type GatewayUpgradeCheckType = GatewayType['GatewayUpgradeCheck']
type SetGatewayIntoUpgradeModeType = GatewayType['SetGatewayIntoUpgradeMode']

export default (client: Client) => ({
    getUserID: (parameters: GetUserIDType['Parameters']): Promise<GetUserIDType['Response']> => {
        const endpoint = '/v3/user/getUid'
    
        return client.request<GetUserIDType['Response']>(endpoint, parameters)
    },
    getLockTime: (parameters: GetLockTimeType['Parameters']): Promise<GetLockTimeType['Response']> => {
        const endpoint = '/v3/lock/queryDate'
    
        return client.request<GetLockTimeType['Response']>(endpoint, parameters)
    },
    adjustLockTime: (parameters: AdjustLockTimeType['Parameters']): Promise<AdjustLockTimeType['Response']> => {
        const endpoint = '/v3/lock/updateDate'
    
        return client.request<AdjustLockTimeType['Response']>(endpoint, parameters)
    },
    unlock: (parameters: UnlockType['Parameters']): Promise<UnlockType['Response']> => {
        const endpoint = '/v3/lock/unlock'
    
        return client.request<UnlockType['Response']>(endpoint, parameters)
    },
    lock: (parameters: LockType['Parameters']): Promise<LockType['Response']> => {
        const endpoint = '/v3/lock/lock'
    
        return client.request<LockType['Response']>(endpoint, parameters)
    },
    getOpenState: (parameters: GetOpenStateType['Parameters']): Promise<GetOpenStateType['Response']> => {
        const endpoint = '/v3/lock/queryOpenState'
    
        return client.request<GetOpenStateType['Response']>(endpoint, parameters)
    },
    freeze: (parameters: FreezeType['Parameters']): Promise<FreezeType['Response']> => {
        const endpoint = '/v3/lock/freeze'
    
        return client.request<FreezeType['Response']>(endpoint, parameters)
    },
    unfreeze: (parameters: UnfreezeType['Parameters']): Promise<UnfreezeType['Response']> => {
        const endpoint = '/v3/lock/unfreeze'
    
        return client.request<UnfreezeType['Response']>(endpoint, parameters)
    },
    getLockStatus: (parameters: GetLockStatusType['Parameters']): Promise<GetLockStatusType['Response']> => {
        const endpoint = '/v3/lock/queryStatus'
    
        return client.request<GetLockStatusType['Response']>(endpoint, parameters)
    },
    getGatewayListOfAnAccount: (parameters: GetGatewayListOfAnAccountType['Parameters']): Promise<GetGatewayListOfAnAccountType['Response']> => {
        const endpoint = '/v3/gateway/list'
    
        return client.request<GetGatewayListOfAnAccountType['Response']>(endpoint, parameters)
    },
    getGatewayListOfALock: (parameters: GetGatewayListOfALockType['Parameters']): Promise<GetGatewayListOfALockType['Response']> => {
        const endpoint = '/v3/gateway/listByLock'
    
        return client.request<GetGatewayListOfALockType['Response']>(endpoint, parameters)
    },
    getLockListOfGateway: (parameters: GetLockListOfGatewayType['Parameters']): Promise<GetLockListOfGatewayType['Response']> => {
        const endpoint = '/v3/gateway/listLock'
    
        return client.request<GetLockListOfGatewayType['Response']>(endpoint, parameters)
    },
    queryGatewayInitStatus: (parameters: QueryGatewayInitStatusType['Parameters']): Promise<QueryGatewayInitStatusType['Response']> => {
        const endpoint = '/v3/gateway/isInitSuccess'
    
        return client.request<QueryGatewayInitStatusType['Response']>(endpoint, parameters)
    },
    uploadGatewayDetailInfo: (parameters: UploadGatewayDetailInfoType['Parameters']): Promise<UploadGatewayDetailInfoType['Response']> => {
        const endpoint = '/v3/gateway/uploadDetail'
    
        return client.request<UploadGatewayDetailInfoType['Response']>(endpoint, parameters)
    },
    gatewayUpgradeCheckType: (parameters: GatewayUpgradeCheckType['Parameters']): Promise<GatewayUpgradeCheckType['Response']> => {
        const endpoint = '/v3/gateway/upgradeCheck'
    
        return client.request<GatewayUpgradeCheckType['Response']>(endpoint, parameters)
    },
    setGatewayIntoUpgradeModeType: (parameters: SetGatewayIntoUpgradeModeType['Parameters']): Promise<SetGatewayIntoUpgradeModeType['Response']> => {
        const endpoint = '/v3/gateway/setUpgradeMode'
    
        return client.request<SetGatewayIntoUpgradeModeType['Response']>(endpoint, parameters)
    },
})