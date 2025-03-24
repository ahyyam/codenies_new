import Link from "next/link";
import { createClient } from "../../supabase/server";
import { Button } from "./ui/button";
import { User, UserCircle, Menu } from "lucide-react";
import UserProfile from "./user-profile";
import LanguageSwitcher from "./language-switcher";

export default async function Navbar() {
  const supabase = createClient();

  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  return (
    <nav className="w-full border-b border-gray-200 bg-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" prefetch className="text-xl font-bold">
          Codenies
        </Link>

        <div className="hidden md:flex gap-6 items-center">
          <Link
            href="/#services"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            About
          </Link>
          <Link
            href="/portfolio"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Portfolio
          </Link>
          <Link
            href="/#contact"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Contact
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          <LanguageSwitcher />

          {user ? (
            <>
              <Link
                href="/dashboard"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                <Button>Dashboard</Button>
              </Link>
              <UserProfile />
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hidden md:inline-block"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 hidden md:inline-block"
              >
                Sign Up
              </Link>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
