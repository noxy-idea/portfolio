"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type BlogPost = {
  id: string;
  date: string;
  title: string;
  content: React.ReactNode;
};

const blogPosts: BlogPost[] = [
  {
    id: "1",
    date: "2024.12.18",
    title: "教習所の予約空きを通知するシステムを作ってみた",
    content: (
      <div className="flex flex-col gap-8">
        <p className="text-lg leading-relaxed text-gray-700">
          教習所の予約の空きをWebスクレイピングによって読み取って、メールで通知する機能を自作しました。
        </p>

        {/* 画像エリア: srcは実際の画像パスに変更してください */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-gray-50">
          <Image 
            src="/driving.png" 
            alt="システムのイメージ" 
            fill 
            className="object-cover" 
          />
        </div>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-5">
            開発の背景と苦労した点
          </h2>
          <p className="leading-loose text-gray-700">
            ログインの処理を自動化する上で、認証情報（メールアドレスやパスワードなど）の流出防止の工夫について少し苦労しました。ただ、教習の予約が取りやすくなっただけでなく、自動化などの知識が増やせたのでとても良い経験になりました。
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-black rounded-full inline-block"></span>
            技術スタックと実装について
          </h3>
          <p className="leading-loose text-gray-700 mb-4">
            教習所のサイトは <code className="bg-gray-100 text-blue-200-600 px-1.5 py-0.5 rounded-md text-sm font-mono">.php</code> で作られていたため、比較的簡単にスクレイピングの処理を実装することができました。
          </p>
          <div>
            多分どの教習所とかでも同じような構造になっていると思うので、スクレイピングの処理は共通化できると思います。
            興味がある人がいそうならそのうちGitHubにコードを公開するかもしれません。
          </div>
        </section>
      </div>
    ),
  },
  
  
  
];

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // スマホの時だけ背景スクロールを止める
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024 && selectedPost) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = ''; 
    };
  }, [selectedPost]);

  return (
    <div className="w-full flex flex-col items-center">
      
      <h1 className="text-5xl font-bold text-white mb-12">Blog</h1>

      <div className="w-full max-w-xl">
        <ul className="flex flex-col">
          {blogPosts.map((post) => {
            const isSelected = selectedPost?.id === post.id;
            return (
              <li key={post.id}>
                <button
                  onClick={() => setSelectedPost(post)}
                  className={`
                    group w-full flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 py-5 border-b text-left transition-all px-4
                    ${isSelected 
                      ? "border-white bg-white/10" 
                      : "border-white/20 hover:bg-white/5"
                    }
                  `}
                >
                  <span className={`font-mono text-sm shrink-0 ${isSelected ? "text-white" : "text-gray-400"}`}>
                    {post.date}
                  </span>
                  <span className={`text-lg font-bold transition-colors ${isSelected ? "text-white" : "text-white group-hover:text-gray-300"}`}>
                    {post.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {selectedPost && (
        <>
          {/* 全画面オーバーレイ（PC・スマホ共通） */}
          <div 
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setSelectedPost(null)}
          ></div>

          {/* 右側からスライドインするドロワー（スマホは全画面） */}
          <div 
            className="fixed top-0 right-0 z-[110] h-full w-full md:w-[600px] lg:w-[768px] bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300 overflow-hidden"
          >
            {/* ヘッダー（透け感のある背景） */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 bg-white/90 backdrop-blur-md sticky top-0 z-20">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Article
              </span>
              <button
                onClick={() => setSelectedPost(null)}
                className="p-2 rounded-full bg-gray-50 hover:bg-gray-200 transition text-gray-500 hover:text-black"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* コンテンツ */}
            <div className="flex-1 overflow-y-auto px-6 py-8 md:px-12 md:py-14 no-scrollbar">
              <article className="max-w-3xl mx-auto">
                {/* 記事タイトル周りの装飾 */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full font-mono text-sm">
                      {selectedPost.date}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
                    {selectedPost.title}
                  </h2>
                </div>
                
                {/* 記事本文 */}
                <div className="text-gray-800 text-base md:text-lg">
                  {selectedPost.content}
                </div>
              </article>
            </div>
          </div>
        </>
      )}
    </div>
  );
}