"use client";

import { Button } from "@/components/ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

import React, { useState } from "react";

const LogoutBtn = () => {
  const [loading, setLoading] = useState(false);
  return (
    <LogoutLink onClick={() => setLoading(true)}>
      <Button disabled={loading}>Logout</Button>
    </LogoutLink>
  );
};

export default LogoutBtn;
