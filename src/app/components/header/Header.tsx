import React from "react";
import LoginBtn from "../auth/LoginBtn";
import LogoutBtn from "../auth/LogoutBtn";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Logo } from "../Logo";

const Header = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const session = await isAuthenticated();
  console.log(session);

  return (
    <header className='w-full p-10 flex justify-between items-center'>
      <Logo />
      <div>{session === false ? <LoginBtn /> : <LogoutBtn />}</div>
    </header>
  );
};

export default Header;
