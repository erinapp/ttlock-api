import Client from "../client"
import type { LockType } from '../types'

type InitType = LockType['Init']
type ListType = LockType['List']
type DetailType = LockType['Detail']
type CommonEkeysType = LockType['CommonEkeys']
type DeleteAllKeyType = LockType['DeleteAllKey']
type GetAllCreatedPasscodesType = LockType['GetAllCreatedPasscodes']
type ChangeSuperPasscodeType = LockType['ChangeSuperPasscode']
type ChangeLockNameType = LockType['ChangeLockName']
type UploadLockBatteryType = LockType['UploadLockBattery']
type TransferType = LockType['Transfer']
type GetElectricQuantityType = LockType['GetElectricQuantity']
type DeleteType = LockType['Delete']
type SetAutoLockTimeType = LockType['SetAutoLockTime']
type ConfigPassageModeType = LockType['ConfigPassageMode']
type GetPassageModeConfigType = LockType['GetPassageModeConfig']
type UpdateLockDataType = LockType['UpdateLockData']

export default ({ request }: Client) => ({
    init: (parameters: InitType['Parameters']): Promise<InitType['Response']> => {
        const endpoint = '/v3/lock/initialize'
    
        return request<InitType['Response']>(endpoint, parameters)
    },
    list: (parameters: ListType['Parameters']): Promise<ListType['Response']> => {
        const endpoint = '/v3/lock/list'
    
        return request<ListType['Response']>(endpoint, parameters)
    },
    detail: (parameters: DetailType['Parameters']): Promise<DetailType['Response']> => {
        const endpoint = '/v3/lock/detail'
    
        return request<DetailType['Response']>(endpoint, parameters)
    },
    commonEkeys: (parameters: CommonEkeysType['Parameters']): Promise<CommonEkeysType['Response']> => {
        const endpoint = '/v3/lock/listKey'
    
        return request<CommonEkeysType['Response']>(endpoint, parameters)
    },
    deleteAllKey: (parameters: DeleteAllKeyType['Parameters']): Promise<DeleteAllKeyType['Response']> => {
        const endpoint = '/v3/lock/deleteAllKey'
    
        return request<DeleteAllKeyType['Response']>(endpoint, parameters)
    },
    getAllCreatedPasscodes: (parameters: GetAllCreatedPasscodesType['Parameters']): Promise<GetAllCreatedPasscodesType['Response']> => {
        const endpoint = '/v3/lock/listKeyboardPwd'
    
        return request<GetAllCreatedPasscodesType['Response']>(endpoint, parameters)
    },
    changeSuperPasscode: (parameters: ChangeSuperPasscodeType['Parameters']): Promise<ChangeSuperPasscodeType['Response']> => {
        const endpoint = '/v3/lock/changeAdminKeyboardPwd'
    
        return request<ChangeSuperPasscodeType['Response']>(endpoint, parameters)
    },
    changeLockName: (parameters: ChangeLockNameType['Parameters']): Promise<ChangeLockNameType['Response']> => {
        const endpoint = '/v3/lock/rename'
    
        return request<ChangeLockNameType['Response']>(endpoint, parameters)
    },
    uploadLockBattery: (parameters: UploadLockBatteryType['Parameters']): Promise<UploadLockBatteryType['Response']> => {
        const endpoint = '/v3/lock/updateElectricQuantity'
    
        return request<UploadLockBatteryType['Response']>(endpoint, parameters)
    },
    transfer: (parameters: TransferType['Parameters']): Promise<TransferType['Response']> => {
        const endpoint = '/v3/lock/transfer'
    
        return request<TransferType['Response']>(endpoint, parameters)
    },
    getElectricQuantity: (parameters: GetElectricQuantityType['Parameters']): Promise<GetElectricQuantityType['Response']> => {
        const endpoint = '/v3/lock/queryElectricQuantity'
    
        return request<GetElectricQuantityType['Response']>(endpoint, parameters)
    },
    delete: (parameters: DeleteType['Parameters']): Promise<DeleteType['Response']> => {
        const endpoint = '/v3/lock/delete'
    
        return request<DeleteType['Response']>(endpoint, parameters)
    },
    setAutoLockTime: (parameters: SetAutoLockTimeType['Parameters']): Promise<SetAutoLockTimeType['Response']> => {
        const endpoint = '/v3/lock/setAutoLockTime'
    
        return request<SetAutoLockTimeType['Response']>(endpoint, parameters)
    },
    configPassageMode: (parameters: ConfigPassageModeType['Parameters']): Promise<ConfigPassageModeType['Response']> => {
        const endpoint = '/v3/lock/configPassageMode'
    
        return request<ConfigPassageModeType['Response']>(endpoint, parameters)
    },
    getPassageModeConfig: (parameters: GetPassageModeConfigType['Parameters']): Promise<GetPassageModeConfigType['Response']> => {
        const endpoint = '/v3/lock/getPassageModeConfig'
    
        return request<GetPassageModeConfigType['Response']>(endpoint, parameters)
    },
    updateLockData: (parameters: UpdateLockDataType['Parameters']): Promise<UpdateLockDataType['Response']> => {
        const endpoint = '/v3/lock/updateLockData'
    
        return request<UpdateLockDataType['Response']>(endpoint, parameters)
    },
})