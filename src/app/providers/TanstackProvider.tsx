'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React,{  ReactNode } from 'react';

interface TanstackProviderProps {
    children: ReactNode;
}

const queryClient = new QueryClient();

export const TanstackProvider = ({children}: TanstackProviderProps) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}