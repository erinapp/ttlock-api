import fetch from 'node-fetch'

import BASE_URL from "../../constants/base-url"

import { ParameterInterface, ResponseInterface } from "./interfaces"

const endpoint = '/v3/user/register'

const userRegister = async(parameters: ParameterInterface) => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
            "content-type": 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(parameters as any)
    })

    const responseJSON = await response.json()
    
    return responseJSON as ResponseInterface
}

export default userRegister