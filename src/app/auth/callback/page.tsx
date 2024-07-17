"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { authCheck } from "./actions";
import { Loader } from "lucide-react";

const Page = () => {
  const router = useRouter();

  const { data } = useQuery({
    queryKey: ["authCheck"],
    queryFn: async () => await authCheck(),
  });

  useEffect(() => {
    if (data?.status || data?.status === false) {
      router.push("/");
    }
  }, [data, router]);

  return (
    <div className='w-full flex justify-center items-center h-screen'>
      <div className='flex flex-col items-center gap-2'>
        <Loader className='w-10 h-10 animate-spin text-muted-foreground' />
        <h3 className='text-xl font-bold'>Redirecting...</h3>
        <p>Please wait...</p>
      </div>
    </div>
  );
};

export default Page;
