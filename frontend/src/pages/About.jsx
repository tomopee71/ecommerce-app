import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            dicta, aspernatur dolores cumque excepturi commodi minus neque amet
            reprehenderit laborum ex suscipit ipsum? Ullam inventore ducimus
            magnam! Qui, dolorum earum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            dicta, aspernatur dolores cumque excepturi commodi minus neque amet
            reprehenderit laborum ex suscipit ipsum? Ullam inventore ducimus
            magnam! Qui, dolorum earum.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            facere, deleniti sapiente labore error ad delectus, asperiores et
            repellat, dolorum fugiat eligendi reprehenderit eum amet esse
            recusandae beatae quae! Perspiciatis.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We prioritize quality in all our products, ensuring that our
            customers receive items that meet high standards of durability and
            performance.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ad
            eius error facilis, exercitationem corrupti id pariatur vero
            inventore esse impedit nihil earum saepe sed deleniti soluta ratione
            doloremque harum!
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            aspernatur delectus asperiores maxime temporibus dolores? Et facere
            odio laborum iste, a alias tempore inventore. Odio ut repellendus
            magni optio dolores!
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
