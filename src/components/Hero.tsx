import Link from 'next/link';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative w-full h-screen flex items-center justify-center text-white"
    >
      <div className="relative z-20 text-center p-4">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-4">
          Kousei
        </h1>
        <p className="text-xl md:text-2xl font-light mb-10">
          Web Developer | Only frontend engineer
        </p>

        <nav className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 mt-10">
          {/* プロフィールボタン */}
          <Link
            href="/profile" 
            className="px-6 py-3 font-semibold rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:-rotate-3 border-2 border-transparent bg-white text-black hover:bg-transparent hover:text-white hover:border-white"
          >
            profile
          </Link>
          
          {/* 作品ボタン */}
          <Link
            href="/works"
            className="px-6 py-3 font-semibold rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:rotate-3 border-2 border-transparent bg-white text-black hover:bg-transparent hover:text-white hover:border-white"
          >
           Works
          </Link>
          
          {/* お問い合わせボタン */}
          <Link
            href="/contact"
            className="px-6 py-3 font-semibold rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:-rotate-3 border-2 border-transparent bg-white text-black hover:bg-transparent hover:text-white hover:border-white"
          >
            文句があれば
          </Link>
        </nav>
      </div>
    </section>
  );
};

export default Hero;