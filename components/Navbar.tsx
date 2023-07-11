import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface NavbarLinkProps {
  children: ReactNode;
  className?: string;
  href: string;
  active?: boolean;
}

function NavbarLink(props: NavbarLinkProps) {
  return (
    <Link
      href={props.href}
      className={twMerge(
        "inline-block p-2 px-4 rounded-md hover:bg-slate-500",
        props.className || "",
        props.active ? "bg-slate-400 dark:bg-slate-700" : ""
      )}
    >
      {props.children}
    </Link>
  );
}

export function Navbar() {
  const pathnamme = usePathname();

  return (
    <nav className="bg-slate-300 dark:bg-slate-900">
      <div className="md:container px-4 py-4 flex justify-start mx-auto items-center">
        <div id="navbar-logo" className="mr-auto">
          <span className="text-xl">Repositorium</span>
        </div>
        <div className="ml-auto flex justify-between gap-2">
          <NavbarLink href="/" active={pathnamme === "/"}>
            <span className="bi-house mr-2"></span>
            Home
          </NavbarLink>
          <NavbarLink href="/">
            <span className="bi-file-earmark mr-2"></span>
            Documents
          </NavbarLink>
          <NavbarLink href="/">
            <span className="bi-chat-square-dots mr-2"></span>
            AI Chat
          </NavbarLink>
        </div>
      </div>
    </nav>
  );
}
