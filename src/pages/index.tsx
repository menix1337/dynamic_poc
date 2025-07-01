import Head from "next/head";
import { DynamicWidget, useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useEffect, useState } from "react";
import { useIsLoggedIn } from "@dynamic-labs/sdk-react-core";

const Home = () => {
  const isLoggedIn = useIsLoggedIn();
  const { user, handleLogOut, primaryWallet } = useDynamicContext();

  const primaryWalletAddress = primaryWallet?.address || "No wallet connected";

  if (isLoggedIn) {
    return (
      <>
        <Head>
          <title>test</title>
          <meta name="description" content="test" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="min-h-screen w-full bg-white py-12">
          <div className="mx-auto max-w-4xl px-4">
            <h1 className="mb-10 text-center text-4xl font-bold text-black">
              Hello
            </h1>

            <div className="user-details mb-10 overflow-auto rounded-lg border border-gray-200 bg-white p-8 shadow-md">
              <h2 className="mb-6 border-b border-gray-100 pb-4 text-2xl font-semibold">
                User Information
              </h2>

              <h2>Primary Wallet: {primaryWalletAddress}</h2>
            </div>

            <div className="flex flex-col items-center space-y-4">
              {<DynamicWidget />}
              <button
                onClick={handleLogOut}
                className="mt-4 rounded-md bg-red-600 px-6 py-2 text-white transition hover:bg-red-700"
              >
                Log Out
              </button>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>test</title>
        <meta name="description" content="test" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-screen w-full flex-col items-center justify-center bg-white px-4">
        <h1 className="mb-8 text-4xl font-bold text-black">Hello</h1>
        {<DynamicWidget />}
      </main>
    </>
  );
};

export default Home;
