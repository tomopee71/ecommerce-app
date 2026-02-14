import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';
import Title from '../components/Title';

function Contact() {
  return (
    <div>
      <div className="text-2xl text-center pt-10 border-t">
        <Title text1={'お問い合わせ'} text2={'先'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-10 justify-center mb-28">
        <img
          src={assets.contact_img}
          alt=""
          className="w-full md:max-w-[480px]"
        />
        <div className="flex flex-col justify-center gap-6  items-start">
          <p className="text-gray-500">山梨県甲府市後屋町４５２番地</p>
          <p className="text-gray-500">株式会社クスリのサンロード シルバーデリバリー担当</p>
          <p className="text-gray-500">
            Tel: 055-234-1550
            <br />
            Email: contact@ourstore.com
          </p>
          <p className="text-gray-500">
            ホームページ:{' '}
            <a
              href="https://inavi.heteml.net/sunroad/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://inavi.heteml.net/sunroad/
            </a>
          </p>

          <a
            href="https://kusurinosunroad.net/jobfind-pc/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500"
          >
            求人情報はこちら
          </a>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
}

export default Contact;
