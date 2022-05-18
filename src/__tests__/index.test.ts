import {createClient}  from '../index'

describe('Tests for createClient', () => {
    it('should store the configuration in the instance', async() => {
        const client = await createClient({
            baseUrl: 'https://example.com',
            clientId: 'EXAMPLE_CLIENT_ID',
            clientSecret: 'EXAMPLE_CLIENT_SECRET'
        })

        expect(client.data!.baseUrl).toBe('https://example.com')
        expect(client.data!.clientId).toBe('EXAMPLE_CLIENT_ID')
        expect(client.data!.clientSecret).toBe('EXAMPLE_CLIENT_SECRET')
    })
})