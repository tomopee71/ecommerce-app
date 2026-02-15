import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'サイト'} text2={'について'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full sm:max-w-[100px] md:max-w-[360px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p className="text-gray-800 font-semibold">店舗情報</p>
          <dl className="grid grid-cols-[160px_1fr] gap-x-4 gap-y-2 text-sm leading-relaxed">
            <dt className="font-medium text-gray-800">販売業者</dt>
            <dd>株式会社クスリのサンロード</dd>
            <dt className="font-medium text-gray-800">販売店名</dt>
            <dd>クスリのサンロード デリバリーショップ</dd>
            <dt className="font-medium text-gray-800">担当</dt>
            <dd>シルバー担当</dd>
            <dt className="font-medium text-gray-800">電話番号</dt>
            <dd>055-234-1550</dd>
            <dt className="font-medium text-gray-800">メール</dt>
            <dd>contact@ourstore.com</dd>
            <dt className="font-medium text-gray-800">店舗担当責任者</dt>
            <dd>各店長</dd>
            <dt className="font-medium text-gray-800">セキュリティー責任者</dt>
            <dd>クスリのサンロード 情報センター 東 和宏</dd>
          </dl>

          <b className="text-gray-800">私たちの使命</b>
          <p>
            私たちはお客様に最高の製品とサービスを提供することを使命とし、常にお客様の期待を超えることを目指しています。
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'なぜ'} text2={'私たちを選ぶのか'} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>品質保証:</b>
          <p className="text-gray-600">
            私たちはすべての製品において品質を最優先し、お客様が高い耐久性と性能を備えた商品を受け取ることを保証します。
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>利便性:</b>
          <p className="text-gray-600">
            私たちはお客様に便利で快適なショッピング体験を提供することを目指しており、迅速な配送と簡単な返品手続きを通じてお客様の利便性を最大化します。
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>優れたカスタマーサービス:</b>
          <p className="text-gray-600">
            私たちはお客様に最高のサービスを提供することを目指しており、迅速かつ丁寧な対応でお客様の満足度を最大化します。
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
