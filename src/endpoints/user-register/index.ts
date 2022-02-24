export const endpoint = '/v3/user/register'

export default interface UserRegister {
    ParameterInterface: {
        clientId: string;
        clientSecret: string;
        username: string;
        password: string;
        date: string;
    };
    ResponseInterface: {
        username: string;
    }
}