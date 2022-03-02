import Client from "./client"

import { ClientType } from "./types"

import user from "./resources/user"

export function createClient(parameters: ClientType) {
  const client = new Client(parameters)

  const api = {
    user: user(client)
  }

  return api
}