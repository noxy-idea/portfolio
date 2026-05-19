import Image from 'next/image';

export default function ProfilePage() {
  return (
    // justify-center items-center で画面中央に配置
    <div className="w-full flex justify-center items-center">
      
      {/* 変更点: max-w-xl にサイズダウン (半分の画面に合わせて最適化) */}
      <div className="w-full max-w-xl bg-white rounded-[2rem] shadow-2xl overflow-hidden">
        
        {/* 上半分: 画像エリア */}
        <div className="relative h-56 bg-gray-100 flex justify-center items-end">
          <div className="relative w-48 h-48 mb-[-0rem] z-10">
            <Image
              src="/profile.png"
              alt="Character Image"
              fill
              className="object-contain drop-shadow-lg"
              priority
            />
          </div>
        </div>

        {/* 下半分: 情報エリア */}
        <div className="pt-12 pb-10 px-8 text-left bg-white">
          <div className="mb-6">
            <h1 className="text-4xl font-extrabold text-black mb-1 tracking-tight">
              Kousei
            </h1>
            <p className="text-base font-medium text-gray-500">
              20y/o | Web Developer | Frontend Engineer
            </p>
          </div>

        
        {/* GitHub & X Links (リンク先は後で設定) */}
        <div className="flex gap-5 mb-8">
          <a href="https://github.com/noxy-idea" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-500 transition" aria-label="GitHub">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
          </a>
          
        </div>


          <div className="text-gray-700 leading-relaxed space-y-4 mb-8 text-sm md:text-base">
            <p>
           滋賀生まれ、現役の理系の大学生です。
            大学では情報工学、数学を専攻し、Web開発を現在独学で学んでいる、よわよわエンジニアです。
          
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-bold text-black mb-4 flex items-center">
              <span className="inline-block w-1 h-5 bg-black mr-2 rounded-full"></span>
              Tech
            </h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Frontend</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Backend & Tools</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>Node.js</li>
                  <li>Git / GitHub</li>
                  <li>Docker</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold text-black mb-4 flex items-center">
              <span className="inline-block w-1 h-5 bg-black mr-2 rounded-full"></span>
              Likes
            </h2>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>design</li>
              <li>keyboard</li>
              <li>ski</li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
}
