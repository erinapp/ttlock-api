import { MD5 } from 'crypto-js';

import Client from "../client";
import type { UserType } from '../types';

type GetAccessTokenType = UserType['GetAccessToken']
type RefreshToken = UserType['RefreshToken']
type RegisterType = UserType['Register']
type ResetPasswordType = UserType['ResetPassword']
type GetUserListType = UserType['GetUserList']
type DeleteUserType = UserType['DeleteUser']

export default ({ request, data }: Client) => ({
    getAccessToken: (parameters: GetAccessTokenType['Parameters']): Promise<GetAccessTokenType['Response']> => {
        const { password, } = parameters
        const { clientSecret } = data!

        const endpoint = '/oauth2/token'
        const body = {
            ...parameters,
            client_secret: clientSecret,
            password: MD5(password),
        }
    
        return request<GetAccessTokenType['Response']>(endpoint, body, true)
    },
    refreshToken: (parameters: RefreshToken['Parameters']): Promise<RefreshToken['Response']> => {
        const { clientSecret } = data!

        const endpoint = '/oauth2/token'
        const body = {
            ...parameters,
            client_secret: clientSecret,
        }
    
        return request<RefreshToken['Response']>(endpoint, body, true)
    },
    register: (parameters: RegisterType['Parameters']): Promise<RegisterType['Response']> => {
        const { password, } = parameters
        const { clientSecret } = data!

        const endpoint = '/v3/user/register'
        const body = {
            clientSecret,
            ...parameters,
            password: MD5(password),
        }
    
        return request<RegisterType['Response']>(endpoint, body)
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
    
        return request<ResetPasswordType['Response']>(endpoint, body)
    },
    getUserList: async(parameters: GetUserListType['Parameters']): Promise<GetUserListType['Response']> => {
        const { clientSecret } = data!

        const endpoint = '/v3/user/list'
        const body = {
            clientSecret,
            ...parameters
        }

        return request<GetUserListType['Response']>(endpoint, body)
    },
    deleteUser: async(parameters: DeleteUserType['Parameters']): Promise<DeleteUserType['Response']> => {
        const { clientSecret } = data!

        const endpoint = '/v3/user/delete'
        const body = {
            clientSecret,
            ...parameters
        }

        return request<DeleteUserType['Response']>(endpoint, body)
    }
})