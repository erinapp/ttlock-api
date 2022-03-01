import Client, { ClientInterface } from "./client"

import user from "./resources/user"

export function createClient(parameters: ClientInterface) {
  const client = new Client(parameters)

  const api = {
    user: user(client)
  }

  return api
}