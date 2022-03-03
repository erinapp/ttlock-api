import Client from "../client"
import type { PasscodeType } from '../types'

type GetType = PasscodeType['Get']
type DeleteType = PasscodeType['Delete']
type ChangeType = PasscodeType['Change']
type AddType = PasscodeType['Add']

export default ({ request }: Client) => ({
    get: (parameters: GetType['Parameters']): Promise<GetType['Response']> => {
        const endpoint = '/v3/keyboardPwd/get'
    
        return request<GetType['Response']>(endpoint, parameters)
    },
    delete: (parameters: DeleteType['Parameters']): Promise<DeleteType['Response']> => {
        const endpoint = '/v3/keyboardPwd/delete'
    
        return request<DeleteType['Response']>(endpoint, parameters)
    },
    change: (parameters: ChangeType['Parameters']): Promise<ChangeType['Response']> => {
        const endpoint = '/v3/keyboardPwd/change'
    
        return request<ChangeType['Response']>(endpoint, parameters)
    },
    add: (parameters: AddType['Parameters']): Promise<AddType['Response']> => {
        const endpoint = '/v3/keyboardPwd/add'
    
        return request<AddType['Response']>(endpoint, parameters)
    },
})