import Client from "../client"
import type { EkeyType } from '../types'

type SendType = EkeyType['Send']
type ListType = EkeyType['List']
type GetOneEkeyType = EkeyType['GetOneEkey']
type DeleteType = EkeyType['Delete']
type FreezeType = EkeyType['Freeze']
type UnfreezeType = EkeyType['Unfreeze']
type ChangeValidTimeType = EkeyType['ChangeValidTime']
type AuthorizeType = EkeyType['Authorize']
type UnauthorizeType = EkeyType['Unauthorize']

export default (client: Client) => ({
    send: (parameters: SendType['Parameters']): Promise<SendType['Response']> => {
        const endpoint = '/v3/key/send'
    
        return client.request<SendType['Response']>(endpoint, parameters)
    },
    list: (parameters: ListType['Parameters']): Promise<ListType['Response']> => {
        const endpoint = '/v3/key/list'
    
        return client.request<ListType['Response']>(endpoint, parameters)
    },
    getKeyOneEkey: (parameters: GetOneEkeyType['Parameters']): Promise<GetOneEkeyType['Response']> => {
        const endpoint = '/v3/key/get'
    
        return client.request<GetOneEkeyType['Response']>(endpoint, parameters)
    },
    delete: (parameters: DeleteType['Parameters']): Promise<DeleteType['Response']> => {
        const endpoint = '/v3/key/delete'
    
        return client.request<DeleteType['Response']>(endpoint, parameters)
    },
    freeze: (parameters: FreezeType['Parameters']): Promise<FreezeType['Response']> => {
        const endpoint = '/v3/key/freeze'
    
        return client.request<FreezeType['Response']>(endpoint, parameters)
    },
    unfreeze: (parameters: UnfreezeType['Parameters']): Promise<UnfreezeType['Response']> => {
        const endpoint = '/v3/key/unfreeze'
    
        return client.request<UnfreezeType['Response']>(endpoint, parameters)
    },
    changeValidTime: (parameters: ChangeValidTimeType['Parameters']): Promise<ChangeValidTimeType['Response']> => {
        const endpoint = '/v3/key/changePeriod'
    
        return client.request<ChangeValidTimeType['Response']>(endpoint, parameters)
    },
    authorize: (parameters: AuthorizeType['Parameters']): Promise<AuthorizeType['Response']> => {
        const endpoint = '/v3/key/authorize'
    
        return client.request<AuthorizeType['Response']>(endpoint, parameters)
    },
    unauthorize: (parameters: UnauthorizeType['Parameters']): Promise<UnauthorizeType['Response']> => {
        const endpoint = '/v3/key/unauthorize'
    
        return client.request<UnauthorizeType['Response']>(endpoint, parameters)
    },
})