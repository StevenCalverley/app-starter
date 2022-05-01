import { useSession, signOut, signIn } from "next-auth/react";

const Header = () => {
  const { data } = useSession();
  return (
    <header className="bg-blue-600 text-white">
      <div className="flex items-center justify-between container mx-auto h-16">
        <p className="font-semibold text-lg tracking-wide">App Header</p>
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
            onClick={() => signIn("auth0")}
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
