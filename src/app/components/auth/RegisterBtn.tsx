"use client";

import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

import React, { useState } from "react";

const RegisterBtn = () => {
  const [loading, setLoading] = useState(false);

  return (
    <RegisterLink onClick={() => setLoading(true)}>
      <Button disabled={loading}>Login</Button>
    </RegisterLink>
  );
};

export default RegisterBtn;
