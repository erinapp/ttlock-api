import fetch from 'node-fetch'

export interface ClientInterface {
    baseUrl: string;
    clientId: string;
    clientSecret: string;
  }

export default class Client {
    data?: ClientInterface

    constructor(data: ClientInterface) {
        this.data = data
    }

    async request(endpoint: string, parameters: any) {
        const response = await fetch(`${this.data?.baseUrl}${endpoint}`, {
          method: 'POST',
          body: new URLSearchParams(parameters)
        })
      
        const responseJSON = await response.json()
      
        return responseJSON
    }
}