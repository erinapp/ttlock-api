export interface ClientType {
    baseUrl: string;
    clientId: string;
    clientSecret: string;
}

export interface UserType {
    Register: {
        Parameters: {
            date: string;
            password: string;
            username: string;
        };
        Response: {
            username: string;
        }
    },
    ResetPassword: {
        Parameters: {
            date: string;
            password: string;
            username: string;
        };
        Response: {
            errcode: number;
            errmsg: string;
            description: string;
        }
    },
    GetUserList: {
        Parameters: {
            startDate: number;
            endDate: number;
            pageNo: number;
            pageSize: number;
            date: number;
        };
        Response: {
            list: any;
            pageNo: number;
            pageSize: number;
            pages: number;
            total: number;
        }
    };
    DeleteUser: {
        Parameters: {
            username: string;
            date: number;
        };
        Response: {
            errcode: number;
            errmsg: string;
            description: string;
        }
    }
}

export interface LockType {
    Init: {
        Parameters: {
            accessToken: string;
            date: number;
            lockData: string;
            lockAlias?: string;
            nbInitSuccess?: number;
        };
        Response: {
            lockId: number;
            keyId: number;
        }
    };
    TransferLock: {
        Parameters: {
            accessToken: string;
            receiverUsername: string;
            lockIdList: string;
            date: number;
        };
        Response: {
            errcode: number;
            errmsg: string;
            description: string;
        }
    }
}