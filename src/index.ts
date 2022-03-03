import Client from "./client"

import user from "./resources/user"
import lock from "./resources/lock"
import ekey from "./resources/ekey"
import type { ClientType } from "./types"

export function createClient(parameters: ClientType) {
  const client = new Client(parameters)

  const api = {
    user: user(client),
    lock: lock(client),
    ekey: ekey(client),
  }

  return api
}