import Image from 'next/image';

type Work = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
};

const works: Work[] = [
  {
    title: "working-time-calculator",
    description: "勤務時間を簡単に計算できるWebアプリ。開始・終了時間を入力して即座に計算。",
    image: "/worktime.png",
    tags: ["javascript", "HTML", "CSS"],
    link: "https://yoidea-uyu.github.io/working-time-calculator/",
    github: "https://github.com/yoidea-uyu/working-time-calculator",
  },
  {
    title: "PDF Tools",
    description: "ブラウザ上でPDFの使えるツール。",
    image: "/pdf_tools.png",
    tags: ["Next.js", "TypeScript"],
    link: "https://pdf-tools-brown.vercel.app/",
    github: "https://github.com/yoidea-uyu/Pdf-tools",
  },
  {
    title: "1st Portfolio",
    description: "現在のこのポートフォリオサイトです。Next.jsをつかって制作しました。",
    image: "/portfolioimage.png", // 仮の画像
    tags: ["Next.js", "Tailwind"],
    link: "https://kousei-idea-portfolio.vercel.app//",
    github: "https://github.com/noxy-idea/portfolio/",
  },
  
];

export default function WorksPage() {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-5xl font-bold text-white mb-16">Works</h1>

      {/* 変更点: 
          max-w-xl -> max-w-2xl (全体を大きく)
          mt-8 (上に余白を追加)
          gap-x-10 gap-y-16 (間隔も少し広げる)
      */}
      <div className="w-full max-w-2xl grid grid-cols-2 gap-x-10 gap-y-16 px-6 pb-32 mt-8">
        
        {works.map((work, index) => (
          <div key={index} className="flex flex-col group">
            
            {/* 1. アイコン風の画像エリア */}
            <a 
              href={work.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative w-full aspect-square bg-white rounded-[2.5rem] shadow-lg overflow-hidden mb-5 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
            >
              <Image 
                src={work.image} 
                alt={work.title} 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </a>

            {/* 2. テキスト情報エリア */}
            <div className="flex flex-col px-1">
              {/* タイトル (少し大きく text-xl) */}
              <a href={work.link} target="_blank" rel="noopener noreferrer">
                <h2 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-gray-300 transition">
                  {work.title}
                </h2>
              </a>
              
              {/* 説明文 (少し大きく text-sm) */}
              <p className="text-sm text-gray-300 mb-4 line-clamp-2 leading-relaxed opacity-90">
                {work.description}
              </p>

              {/* タグとリンク */}
              <div className="flex flex-col gap-3 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {work.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 border border-white/30 text-white text-xs rounded-md backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                {work.github && (
                  <a 
                    href={work.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1.5 text-xs text-white-400 hover:text-white transition mt-1 w-fit"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                    <span>View Code</span>
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}