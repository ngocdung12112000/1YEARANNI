import React, { ReactNode } from 'react';
import Header from './header';

interface LayoutProps {
    children: ReactNode;
}

export default function GlobalLayout({ children }: LayoutProps): JSX.Element {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
}