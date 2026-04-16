"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: 'profile', href: '/profile' },
  { name: 'work', href: '/works' },
  { name: 'blog', href: '/blog' },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  // メニューが開いているときは背面のスクロールを禁止
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      
      {/* 1. 固定ハンバーガーボタン */}
      {/* 変更点: right-6 を right-8 に変更して少し左に移動 */}
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-13 z-50 w-12 h-12 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
        aria-label="Toggle Menu"
      >
        {/* 上の線 */}
        <span
          className={`
            block h-0.5 w-7 rounded-full transition-all duration-300 ease-in-out
            ${isOpen 
              ? 'rotate-45 translate-y-2 bg-black' // 開いた時: 黒
              : 'bg-black shadow-sm'               // 閉じた時: 白
            }
          `}
        />
        
        {/* 真ん中の線 */}
        <span
          className={`
            block h-0.5 w-7 rounded-full transition-all duration-300 ease-in-out
            ${isOpen 
              ? 'opacity-0 scale-x-0'              // 開いた時: 消える
              : 'bg-black opacity-100 shadow-sm'   // 閉じた時: 白
            }
          `}
        />
        
        {/* 下の線 */}
        <span
          className={`
            block h-0.5 w-7 rounded-full transition-all duration-300 ease-in-out
            ${isOpen 
              ? '-rotate-45 -translate-y-2 bg-black' // 開いた時: 黒
              : 'bg-black shadow-sm'                 // 閉じた時: 白
            }
          `}
        />
      </button>

      {/* 2. モーダル全体 */}
      <div 
        className={`
          fixed inset-0 z-40 flex items-start justify-center transition-all duration-300 overflow-hidden
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
        `}
      >
        
        {/* 背景の黒いフィルター */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
          onClick={() => setIsOpen(false)}
        ></div>

        {/* 3. メニューカード */}
        <div 
          className={`
            bg-white w-[96%] max-w-4xl mt-2 rounded-[2.5rem] shadow-2xl overflow-hidden relative z-10 
            transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) transform origin-top-right
            ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 -translate-y-4'}
          `}
        >
          
          {/* コンテンツエリア */}
          <div className="pt-16 pb-10 px-6 flex flex-col items-center justify-center w-full">
            
            {/* ロゴ */}
            <div className="mb-8 text-center">
              <span className="text-5xl font-extrabold text-black tracking-tighter">
                Kousei
              </span>
            </div>

            {/* ナビゲーション */}
            <nav className="flex flex-row flex-wrap justify-center gap-4 mb-8 w-full">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      px-8 py-3 rounded-full text-lg font-bold transition-all duration-300
                      ${isActive 
                        ? "bg-black text-white shadow-lg" 
                        : "text-black hover:bg-gray-100 border border-transparent hover:border-gray-200"
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

          </div>

          {/* SNSリンクエリア */}
          <div className="bg-gray-50 py-6 flex justify-center gap-12 border-t border-gray-100">
            {/* GitHub */}
            <a href="https://github.com/noxy-idea/" target="_blank" rel="noopener noreferrer" className="text-black hover:scale-110 transition p-1">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}