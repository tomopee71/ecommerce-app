import { assets } from '../assets/assets.js';

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm text-gray-600">
        <div>
          <img src={assets.logo} alt="logo" className="mb-5 w-36" />
          <p className="w-full md:w-2/4 text-gray-600">
            高品質な商品と優れたサービスを提供することに専念しています。お客様の満足が私たちの最優先事項です。    
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">会社情報</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>ホーム</li>
            <li>私たちについて</li>
            <li>配達</li>
            <li>プライバシーポリシー</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">お問い合わせ</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>055-243-1550</li>
            <li>お問い合わせ</li>
            <li>山梨県甲府市後屋町４７２ シルバーカスタマー担当</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2023@ tomopee.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
