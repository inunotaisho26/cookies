declare module 'universal-cookie' {

    export type Cookie = string;

    export class Cookies {
        get: (key: string, options?: UniversalCookieGetOptions) => Cookie | undefined;
        getAll: (options?: UniversalCookieGetAllOptions) => Cookie[];
        set(name: string, value: string, options?: UniversalCookieSetOptions): void;
        remove(name: string, options?: UniversalCookieRemoveOptions): void;
    }

    export interface UniversalCookieGetOptions {
        doNotParse?: boolean;
    }

    export interface UniversalCookieGetAllOptions {
        doNotParse?: boolean;
    }

    export interface UniversalCookieSetOptions {
        path?: string;
        expires?: Date;
        maxAge?: number;
        domain?: string;
        secure?: boolean;
        httpOnly?: boolean;
    }

    export interface UniversalCookieRemoveOptions {
        path?: string;
        expires?: Date;
        maxAge?: number;
        domain?: string;
        secure?: boolean;
        httpOnly?: boolean;
    }

}
