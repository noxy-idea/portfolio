import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import SidebarNav from "@/components/SidebarNav";
import MobileNav from "@/components/MobileNav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kousei's Portfolio",
  description: "Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-white overflow-hidden`}> 
        
        {/* 背景画像 */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gray-900" />
          <Image
            src="/monotone.jpg"
            alt="Background"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>

        {/* スマホ用ハンバーガーメニュー */}
        <MobileNav />

        {/* メインレイアウト */}
        <div className="flex flex-col lg:flex-row h-screen w-full">
          
          {/* 1. 左側: メインコンテンツ */}
          {/* 変更点: 
              lg:justify-center を削除 (これが余白を消していた原因)
              lg:pt-0 -> lg:pt-32 (PCでも常に上に余白を作る)
          */}
          <main className="w-full lg:w-1/2 h-full overflow-y-auto relative no-scrollbar px-8 pt-24 pb-20 lg:px-24 lg:pt-32">
            {children}
          </main>

          {/* 2. 右側: 固定サイドバー (PCのみ) */}
          <header className="hidden lg:flex w-full lg:w-1/2 h-full flex-col justify-center items-center p-8">
            <div className="text-center mb-10">
              <h1 className="text-7xl font-extrabold tracking-tight mb-4 drop-shadow-md text-white">
                kousei
              </h1>
              <p className="text-xl text-gray-200 font-light tracking-widest uppercase">
                Web Developer
              </p>
            </div>
            <SidebarNav />
            <div className="flex gap-8 mt-12">
               <a href="https://github.com/noxy-idea/" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition">
                 <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
               </a>
               
            </div>
            <div className="mt-16 text-sm text-gray-200 opacity-70">
              &copy; 2024 Kousei
            </div>
          </header>
        </div>
      </body>
    </html>
  );
}