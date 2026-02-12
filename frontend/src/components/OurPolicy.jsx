import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mg-5" alt="" />
        <p className="font-semibold">簡単な購入手続き</p>
        <p className="text-gray-400">ご面倒な定期注文もお任せください</p>
      </div>
      <div>
        <img src={assets.quality_icon} className="w-12 m-auto mg-5" alt="" />
        <p className="font-semibold">7日間の返品ポリシー</p>
        <p className="text-gray-400">7日間の無料返品ポリシーを提供しています</p>
      </div>
      <div>
        <img src={assets.support_img} className="w-12 m-auto mg-5" alt="" />
        <p className="font-semibold">最高のカスタマーサポート</p>
        <p className="text-gray-400">
          年中無休のカスタマーサポートを提供しています
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
