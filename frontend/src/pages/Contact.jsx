import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';
import Title from '../components/Title';

function Contact() {
  return (
    <div>
      <div className="text-2xl text-center pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-10 justify-center mb-28">
        <img
          src={assets.contact_img}
          alt=""
          className="w-full md:max-w-[480px]"
        />
        <div className="flex flex-col justify-center gap-6  items-start">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            山梨県甲府市
            <br />
            人形町1丁目３ー２５
          </p>
          <p className="text-gray-500">
            Tel: 055-234-1234
            <br />
            Email: contact@ourstore.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Forever
          </p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic dicta
            delectus
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
}

export default Contact;
