import Client from "../client";

import { LockType } from '../types';

export default (client: Client) => ({
    init: async(parameters: LockType['Init']['Parameters']) => {
        const { clientId } = client.data!

        const endpoint = '/v3/lock/initialize'
        const body = {
            clientId,
            ...parameters
        }
    
        const response = await client.request(endpoint, body) as LockType['Init']['Response']
    
        return response
    },
})