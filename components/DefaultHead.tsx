import React, { FC } from 'react';
import Head from 'next/head';

const DefaultHead: FC<{title: string}> = ({ title }) => {
    return(
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

export { DefaultHead };
