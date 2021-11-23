import React, { FC } from 'react';
import Head from 'next/head';

const DefaultHead: FC<{title: string}> = ({ title }) => {
    return(
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=M+PLUS+1:wght@400;500;600;700&display=swap" rel="stylesheet" />
        </Head>
    );
};

export { DefaultHead };
