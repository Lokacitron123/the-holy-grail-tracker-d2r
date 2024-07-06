import Image from "next/image";
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

const Sidebar = () => {
  return (
    <div className='flex flex-col lg:w-1/5 gap-5 px-2 sticky left-0 top-0 h-screen text-center'>
      <div className='my-5 flex flex-row gap-3 justify-center items-center'>
        {/* Logged in user area */}
        <div className='cursor-pointer '>
          <Image
            src={"" || "/user-placeholder.png"}
            alt='User avatar image'
            width={44}
            height={44}
          />
        </div>
        <p>Username</p>
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
