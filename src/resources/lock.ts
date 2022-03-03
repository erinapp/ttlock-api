import Client from "../client"
import type { LockType } from '../types'

type InitType = LockType['Init']
type TransferType = LockType['TransferLock']

export default ({ request }: Client) => ({
    init: (parameters: InitType['Parameters']): Promise<InitType['Response']> => {
        const endpoint = '/v3/lock/initialize'
    
        return request<InitType['Response']>(endpoint, parameters)
    },
    transferLock: (parameters: TransferType['Parameters']): Promise<TransferType['Response']> => {
        const endpoint = '/v3/lock/transfer'
    
        return request<TransferType['Response']>(endpoint, parameters)
    },
})