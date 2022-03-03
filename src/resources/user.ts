import { MD5 } from 'crypto-js';

import Client from "../client";
import type { UserType } from '../types';

type RegisterType = UserType['Register']
type ResetPasswordType = UserType['ResetPassword']
type GetUserListType = UserType['GetUserList']
type DeleteUserType = UserType['DeleteUser']

export default ({ request, data }: Client) => ({
    register: (parameters: RegisterType['Parameters']): Promise<RegisterType['Response']> => {
        const { password, } = parameters
        const { clientSecret } = data!

        const endpoint = '/v3/user/register'
        const body = {
            clientSecret,
            ...parameters,
            password: MD5(password),
        }
    
        return request(endpoint, body)
    },
    resetPassword: (parameters: ResetPasswordType['Parameters']): Promise<ResetPasswordType['Response']>  => {
        const { password } = parameters
        const { clientSecret } = data!

        const endpoint = '/v3/user/resetPassword'
        const body = {
            clientSecret,
            ...parameters,
            password: MD5(password),
        }
    
        return request(endpoint, body)
    },
    getUserList: async(parameters: GetUserListType['Parameters']): Promise<GetUserListType['Response']> => {
        const { clientSecret } = data!

        const endpoint = '/v3/user/list'
        const body = {
            clientSecret,
            ...parameters
        }

        return request(endpoint, body)
    },
    deleteUser: async(parameters: DeleteUserType['Parameters']): Promise<DeleteUserType['Response']> => {
        const { clientSecret } = data!

        const endpoint = '/v3/user/delete'
        const body = {
            clientSecret,
            ...parameters
        }

        return request(endpoint, body)
    }
})