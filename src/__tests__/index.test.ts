import { createClient } from '../'

import { describe, expect, it } from '@jest/globals'

describe('Tests for createClient', () => {
    it('should store the configuration in the instance', () => {
        const client = createClient({
            baseUrl: 'https://example.com',
            clientId: 'EXAMPLE_CLIENT_ID',
            clientSecret: 'EXAMPLE_CLIENT_SECRET'
        })

        expect(client.data!.baseUrl).toBe('https://example.com')
        expect(client.data!.clientId).toBe('EXAMPLE_CLIENT_ID')
        expect(client.data!.clientSecret).toBe('EXAMPLE_CLIENT_SECRET')
    })
})