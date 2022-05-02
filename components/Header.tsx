import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const { data } = useSession();
  const router = useRouter();
  return (
    <header className="bg-blue-600 text-white">
      <div className="flex items-center justify-between container mx-auto h-16">
        <nav className="flex space-x-2 items-baseline">
          <Link href="/">
            <a className="font-semibold text-lg tracking-wide">App Header</a>
          </Link>
          <Link href="/test">Test</Link>
        </nav>
        {data && (
          <div className="flex items-center space-x-2">
            <p>{data.user?.email}</p>
            <button
              type="button"
              onClick={() => signOut()}
              className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log Out
            </button>
          </div>
        )}
        {!data && (
          <button
            type="button"
            onClick={() => router.push("/auth")}
            className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Log In
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
