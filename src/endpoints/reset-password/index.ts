export const endpoint = '/v3/user/resetPassword'

export default interface ResetPassword {
    ParameterInterface: {
        clientId: string;
        clientSecret: string;
        username: string;
        password: string;
        date: string;
    };
    ResponseInterface: {
        errcode: number;
        errmsg: string;
        description: string;
    }
}