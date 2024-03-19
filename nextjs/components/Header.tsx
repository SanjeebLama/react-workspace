import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="flex-center fixed top-0 bg-blue-200 w-full border-b-2 border-black-200 py-7 text-white">
      <div className="flex-between mx-auto w-full max-w-2xl bg-blue-400 px-6 xs:px-8 sm:px-16">
        <Link href={"/"}>
          <Image src="/json.log-svg" width="400" />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
