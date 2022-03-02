import { MD5 } from 'crypto-js';

import Client from "../client";

import { UserType } from '../types';

export default (client: Client) => ({
    register: async(parameters: UserType['Register']['Parameters']) => {
        const { username, password, date } = parameters
        const { clientId, clientSecret } = client.data!

        const endpoint = '/v3/user/register'
        const body = {
            clientId,
            clientSecret,
            username,
            password: MD5(password),
            date
        }
    
        const response = await client.request(endpoint, body) as UserType['Register']['Response']
    
        return response
    },
    resetPassword: async(parameters: UserType['ResetPassword']['Parameters']) => {
        const { username, password, date } = parameters
        const { clientId, clientSecret } = client.data!

        const endpoint = '/v3/user/resetPassword'
        const body = {
            clientId,
            clientSecret,
            username,
            password: MD5(password),
            date
        }
    
        const response = await client.request(endpoint, body) as UserType['ResetPassword']['Response']
    
        return response
    },
    getUserList: async(parameters: UserType['GetUserList']['Parameters']) => {
        const { clientId, clientSecret } = client.data!

        const endpoint = '/v3/user/list'
        const body = {
            clientId,
            clientSecret,
            ...parameters
        }

        const response = await client.request(endpoint, body) as UserType['GetUserList']['Response']

        return response
    },
    deleteUser: async(parameters: UserType['DeleteUser']['Parameters']) => {
        const { clientId, clientSecret } = client.data!

        const endpoint = '/v3/user/delete'
        const body = {
            clientId,
            clientSecret,
            ...parameters
        }

        const response = await client.request(endpoint, body) as UserType['DeleteUser']['Response']

        return response
    }
})