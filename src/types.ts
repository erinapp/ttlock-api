export interface ClientType {
    baseUrl: string;
    clientId: string;
    clientSecret: string;
}

export interface UserType {
    GetAccessToken: {
        Parameters: {
            username: string;
            password: string;
        };
        Response: {
            access_token: string;
            uid: number;
            expires_in: number;
            scope: string;
            refresh_token: string;
        }
    };
    RefreshToken: {
        Parameters: {
            grant_type: string;
            refresh_token: string;
        };
        Response: {
            access_token: string;
            expires_in: number;
            scope: string;
            refresh_token: string;
        }
    };
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
            list: {
                userId: string;
                regtime: number;
            }[];
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
    List: {
        Parameters: {
            accessToken: string;
            pageNo: number;
            pageSize: number;
            date: number;
            lockAlias?: string;
            type?: number;
            groupId?: number;
        };
        Response: {
            list: {
                lockId: number;
                date: number;
                lockName: string;
                lockAlias: string;
                lockMac: string;
                electricQuantity: number;
                keyboardPwdVersion: number;
                specialValue: number;
                hasGateway: number;
                lockData: string;
                groupId: number;
                groupName: string;
            }[]
        }
    },
    Detail: {
        Parameters: {
            accessToken: string;
            lockId: number;
            date: number;
        };
        Response: {
            lockId: number;
            lockName: string;
            lockAlias: string;
            lockMac: string;
            lockKey: string;
            lockFlagPos: number;
            adminPwd: string;
            noKeyPwd: string;
            deletePwd: string;
            aesKeyStr: string;
            lockVersion: {
                protocolType: number;
                protocolVersion: number;
                scene: number;
                groupId: number;
                orgId: number;
            };
            keyboardPwdVersion: number;
            electricQuantity: number;
            specialValue: number;
            timezoneRawOffset: number;
            modelNum: string;
            hardwareRevision: string;
            firmwareRevision: string;
            date: number;
        }
    };
    CommonEkeys: {
        Parameters: {
            accessToken: string;
            lockId: number;
            pageNo: number;
            pageSize: number;
            date: number;
        };
        Response: {
            list: {
                keyId: number;
                lockId: number;
                openid: number;
                username: string;
                keyName: string;
                keyStatus: string;
                startDate: number;
                endDate: number;
                keyRight: string;
                senderUsername: string;
                remarks: string;
                date: number;
            }[]
        }
    };
    DeleteAllKey: {
        Parameters: {
            accessToken: string;
            lockId: number;
            date: number;
        };
        Response: {
            errcode: number;
            errmsg: string;
            description: string;
        }
    };
    GetAllCreatedPasscodes: {
        Parameters: {
            accessToken: string;
            lockId: number;
            pageNo: number;
            pageSize: number;
            date: number;
        };
        Response: {
            list: {
                keyboardPwdId: number;
                lockId: number;
                keyboardPwd: string;
                keyboardPwdName: string;
                keyboardPwdVersion: number;
                keyboardPwdType: number;
                startDate: number;
                endDate: number;
                sendDate: number;
                isCustom: number;
                status: number;
                senderUsername: string;
            }[]
        }
    };
    ChangeSuperPasscode: {
        Parameters: {
            accessToken: string;
            lockId: number;
            password: string;
            date: number;
            changeType?: number;
        };
        Response: {
            errcode: number;
            errmsg: string;
            description: string;
        }
    };
    ChangeLockName: {
        Parameters: {
            accessToken: string;
            lockId: number;
            lockAlias: string;
            date: number;
        };
        Response: {
            errcode: number;
            errmsg: string;
            description: string;
        }
    };
    UploadLockBattery: {
        Parameters: {
            accessToken: string;
            lockId: number;
            electricQuantity: number;
            date: number;
        };
        Response: {
            errcode: number;
            errmsg: string;
            description: string;
        }
    };
    Transfer: {
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
    };
    GetElectricQuantity: {
        Parameters: {
            accessToken: string;
            lockId: number;
            date: number;
        };
        Response: {
            electricQuantity: number;
        }
    };
    Delete: {
        Parameters: {
            accessToken: string;
            lockId: number;
            date: number;
        };
        Response: {
            errcode: number;
            errmsg: string;
            description: string;
        }
    };
    SetAutoLockTime: {
        Parameters: {
            accessToken: string;
            lockId: number;
            seconds: number;
            type: number;
            date: number;
        };
        Response: {
            errcode: number;
            errmsg: string;
            description: string;
        }
    };
    ConfigPassageMode: {
        Parameters: {
            accessToken: string;
            lockId: number;
            passageMode: number;
            type: number;
            date: number;
            startDate?: number;
            endDate?: number;
            isAllDay?: number;
            weekDays?: number[];
            autoUnlock?: number;
        };
        Response: {
            errcode: number;
            errmsg: string;
            description: string;
        }
    };
    GetPassageModeConfig: {
        Parameters: {
            accessToken: string;
            lockId: number;
            date: number;
        };
        Response: {
            passageMode: number;
            startDate: number;
            endDate: number;
            isAllDay: number;
            weekDays: number[];
            autoUnlock: number;
        }
    };
    UpdateLockData: {
        Parameters: {
            accessToken: string;
            lockId: number;
            lockData: string;
            date: number;
        };
        Response: {
            errcode: number;
            errmsg: string;
            description: string;
        }
    }
}