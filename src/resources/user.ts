
import Client from "../client";

import { MD5 } from 'crypto-js'

export interface RegisterParametersType {
    date: string;
    password: string;
    username: string;
}

export interface RegisterResponseType {
    username: string;
}

export default (client: Client) => ({
    register: async(parameters: RegisterParametersType) => {
        const { username, password, date } = parameters
    
        const response = await client.request('/v3/user/register', {
            clientId: client.data!.clientId,
            clientSecret: client.data!.clientSecret,
            username,
            password: MD5(password),
            date
        })
    
        return response as RegisterResponseType
    }
})