import Client from "./client"

import { ClientType } from "./types"

import user from "./resources/user"
import lock from "./resources/lock"

export function createClient(parameters: ClientType) {
  const client = new Client(parameters)

  const api = {
    user: user(client),
    lock: lock(client)
  }

  return api
}