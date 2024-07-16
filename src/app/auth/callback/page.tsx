'use client'

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { authCheck } from './actions';

const Page = () => {

    const router = useRouter();

    const { data } = useQuery({
        queryKey: ['authCheck'],
        queryFn: async() => await authCheck()

    });

    useEffect(() => {
        if(data.success || data.success === false) {
            router.push('/')
        }
    }, [data])



  return (
    <div>page</div>
  )
}

export default Page