import { GetServerSidePropsContext } from "next";
import { getCsrfToken } from "next-auth/react";

const VerifyRequest = () => {
  return (
    <div className="min-h-full flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <h4 className="text-center text-4xl">You&apos;ve got mail</h4>
          <p className="text-center pt-10 text-2xl">
            We&apos;ve emailed you a secure login link.
          </p>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
        />
        <div className="absolute inset-0 h-full w-full bg-blue-500 bg-opacity-75 mix-blend-multiply"></div>
      </div>
    </div>
  );
};

export default VerifyRequest;
