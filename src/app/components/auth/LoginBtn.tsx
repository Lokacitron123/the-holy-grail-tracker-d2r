"use client";

import { Button } from "@/components/ui/button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

import React, { useState } from "react";

const LoginBtn = () => {
  const [loading, setLoading] = useState(false);

  return (
    <LoginLink onClick={() => setLoading(true)}>
      <Button disabled={loading}>Login</Button>
    </LoginLink>
  );
};

export default LoginBtn;
