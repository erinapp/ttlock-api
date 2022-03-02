import fetch from 'node-fetch'

import { ClientType } from './types'

export default class Client {
    data?: ClientType

    constructor(data: ClientType) {
        this.data = data
    }

    async request(endpoint: string, body: any) {
        const response = await fetch(`${this.data?.baseUrl}${endpoint}`, {
          method: 'POST',
          body: new URLSearchParams(body)
        })
      
        const responseJSON = await response.json()
      
        return responseJSON
    }
}