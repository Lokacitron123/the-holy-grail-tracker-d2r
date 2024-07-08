import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import React from "react";

const SIDEBAR_LINKS = [
  {
    icon: "",
    label: "Home",
    href: "/",
  },
  {
    icon: "",
    label: "My Grail",
    href: "/my-grail",
  },
];

// Hello

const Sidebar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className='flex flex-col pr-5 gap-5 px-2 sticky left-0 top-0 h-screen text-center'>
      <div className='my-5 flex flex-row gap-3 justify-center items-center'>
        {/* Logged in user area */}
        <Avatar className='cursor-pointer rounded-full'>
          <AvatarImage
            src={user?.picture || "/user-placeholder.png"}
            alt='User avatar image'
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p>{user?.email}</p>
      </div>

      {/* Navlinks */}
      <nav className='flex flex-col gap-3'>
        {SIDEBAR_LINKS.map((link, i) => (
          <Link href={link.href} key={i}>
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
