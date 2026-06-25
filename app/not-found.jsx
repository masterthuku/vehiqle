"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button"; // Adjust if you don't use shadcn/ui
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 px-6">
      <div className="max-w-md w-full text-center">
        {/* Large 404 Text */}
        <h1 className="text-8xl font-bold text-gray-900 dark:text-white tracking-tighter mb-4">
          404
        </h1>

        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
          Page not found
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="gap-2">
            <Link href="/">
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link href="#" onClick={() => window.history.back()}>
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </Link>
          </Button>
        </div>

        {/* Optional Help Text */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-12">
          If you believe this is a mistake, please contact support.
        </p>
      </div>
    </div>
  );
}