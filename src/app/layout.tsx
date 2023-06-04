import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Next.js Todo App",
    description: "A todo list web app made with Next.js, TypeScript and Prisma",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-slate-900 text-slate-50`}>
                <div className="container mx-auto p-4">{children}</div>
            </body>
        </html>
    );
}
