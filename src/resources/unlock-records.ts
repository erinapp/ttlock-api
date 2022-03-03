import Client from "../client"
import type { UnlockRecordsType } from '../types'

type GetListType = UnlockRecordsType['GetList']
type UploadType = UnlockRecordsType['Upload']

export default ({ request }: Client) => ({
    getList: (parameters: GetListType['Parameters']): Promise<GetListType['Response']> => {
        const endpoint = '/v3/lockRecord/list'
    
        return request<GetListType['Response']>(endpoint, parameters)
    },
    upload: (parameters: UploadType['Parameters']): Promise<UploadType['Response']> => {
        const endpoint = '/v3/lockRecord/upload'
    
        return request<UploadType['Response']>(endpoint, parameters)
    },
})