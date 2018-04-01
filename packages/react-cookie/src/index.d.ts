declare module 'react-cookie' {
    import * as React from 'react';
    import { Cookies } from 'universal-cookie';

    export class CookiesProvider extends React.Component<{}, {}>{ }

    export function withCookies<T extends ReactCookieProps>(Component: React.ComponentClass<T>): React.ComponentClass<T>;

    export type ReactCookieProps = {
        cookies?: Cookies
    };
}
