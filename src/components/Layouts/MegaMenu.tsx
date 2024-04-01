"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MegaMenu: React.FC = () => {
  const currentRoute = usePathname();

  return (
    <>
      <li className="nav-item">
      </li>
    </>
  );
};

export default MegaMenu;
