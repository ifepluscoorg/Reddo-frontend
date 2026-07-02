"use client";

import { useEffect, useTransition } from "react";

export default function BookingsError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    console.error("Something Went Wrong");
  }, [error]);

  const handleRetry = () => {
    startTransition(() => {
      unstable_retry();
    });
  };

  return (
    <div className="flex-1 flex items-center justify-center bg-white px-6">
      <div className="max-w-md text-center">
        <p className="text-xs font-semibold tracking-widest text-sky-500 mb-3">
          SOMETHING WENT WRONG
        </p>
        <h1 className="text-3xl font-light text-gray-900 tracking-wide mb-3">
          We couldn&apos;t load this page
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          {error.message || "An unexpected error occurred. Please try again."}
        </p>
        <button
          onClick={handleRetry}
          disabled={isPending}
          className="px-6 py-2.5 rounded-full text-sm font-semibold bg-accent text-d-accent cursor-pointer hover:bg-accent/80 transition-colors shadow-[5px_4px_0px_#2AABE226] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isPending ? "Retrying..." : "Try again"}
        </button>
      </div>
    </div>
  );
}
