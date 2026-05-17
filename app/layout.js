import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vehiql",
  description: "Cars You Can Trust, Deals You'll Love",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${inter.className}`}>
        <body className="min-h-full flex flex-col">
          <Header />
          <main className="min-h-screen">{children}</main>
          <footer className="bg-blue-50 py-12 ">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Copyright &copy; 2024 Vehiql. All rights reserved.</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
