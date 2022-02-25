import BASE_URL from "../constants/base-url"
import { APIParamsType, APIConfigs } from '../'

export type APIConfigsType = { [key in keyof APIParamsType]: string }

export function MapTTLockAPIs() {
  type APIsType = {
    [key in keyof APIParamsType]: (parameters: APIParamsType[key]['ParameterInterface']) => Promise<APIParamsType[key]['ResponseInterface']>
  }

  let APIs = {} as APIsType

  for (const key in APIConfigs) {
    const selectedKey = key as keyof APIsType

    const [ endpoint ] = APIConfigs[selectedKey]
    
    APIs[selectedKey] = (parameters: APIParamsType[typeof selectedKey]['ParameterInterface']) => Fetch(endpoint, parameters)
  }

  return APIs
}

const Fetch = async(endpoint: string, parameters?: any) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: {
        "content-type": 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(parameters as any)
  })

  return await response.json()
}