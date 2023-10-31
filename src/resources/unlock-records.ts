import Client from "../client"
import type { UnlockRecordsType } from '../types'

type GetListType = UnlockRecordsType['GetList']
type UploadType = UnlockRecordsType['Upload']

export default (client: Client) => ({
    getList: (parameters: GetListType['Parameters']): Promise<GetListType['Response']> => {
        const endpoint = '/v3/lockRecord/list'
    
        return client.request<GetListType['Response']>(endpoint, parameters)
    },
    upload: (parameters: UploadType['Parameters']): Promise<UploadType['Response']> => {
        const endpoint = '/v3/lockRecord/upload'
    
        return client.request<UploadType['Response']>(endpoint, parameters)
    },
})