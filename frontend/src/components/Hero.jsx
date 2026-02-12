import { assets } from '../assets/assets';

function Hero() {
  return (
    <>
      <div className="flex flex-col sm:flex-row border border-gray-400">
        {/* Hero Left Side  */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
          <div className="text-[#414141]">
            <div className="flex items-center gap-2">
              <p className="w-8 mg:w-11 h-[2px] bg-[#414141]"></p>
              <p className="font-medium sm:text-1xl text-sm md:text-base">
                クスリのサンロード
              </p>
            </div>
            <h1 className="text-1xl sm:py-3 lg:text-3xl leading-relaxed">
              ライフリーシリーズご注文ページ
            </h1>
            <div className="flex items-center gap-2">
              <p className="font-semibold sm:text-1xl text-sm md:text-base">セール期間情報</p>
              <p className="w-8 mg:w-11 h-[1px] bg-[#414141]"></p>
            </div>
          </div>
        </div>
        {/* Hero Right Side  */}
        <img
          src={assets.hero_img}
          alt="Hero Image"
          className="w-full sm:w-1/2"
        />
      </div>
    </>
  );
}

export default Hero;
