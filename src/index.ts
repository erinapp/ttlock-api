import Client from "./client"

import user from "./resources/user"
import { ClientType } from "./types"

export function createClient(parameters: ClientType) {
  const client = new Client(parameters)

  const api = {
    user: user(client)
  }

  return api
}