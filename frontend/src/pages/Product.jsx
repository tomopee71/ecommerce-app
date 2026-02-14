import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext.jsx';
import { assets } from '../assets/assets.js';
import RelatedProducts from '../components/RelatedProducts.jsx';

function Product() {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.images[0]);
      setSize(''); // サイズ選択をリセット
    }
  };

  useEffect(() => {
    fetchProductData();
    window.scrollTo(0, 0); // ページ上部にスクロール
  }, [productId, products]);

  console.log(productId);
  console.log(productData);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data*/}
      <div className="flex gap-12 sm:gap-13 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.images.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="" className="w-full h-auto" />
          </div>
        </div>
        {/* Product Details */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_dull_icon} alt="" className="w-3" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>ご希望のサイズを選択して下さい。</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border border-gray-100 py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            カートに追加
          </button>
          <hr className="border border-gray-300 mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% オリジナル商品。</p>
            <p>この商品は代金引換が可能です。</p>
            <p>7日以内の簡単な返品・交換ポリシー</p>
          </div>
        </div>
      </div>
      {/* Description & Review Section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border border-gray-300 px-5 py-3 text-sm">商品</b>
          <p className="border border-gray-300 px-5 py-3 text-sm">
            レビュー (122)
          </p>
        </div>
        <div className="flex flex-col gap-4 border border-gray-300 px-6 py-6 text-sm text-gray-500">
          <p>
            「夜間も安心して使えます。朝まで漏れることなく、肌もサラサラのまま。吸収力が本当に素晴らしいです。」（評価：★★★★★）
          </p>
          <p>
            「価格と品質のバランスが良いです。毎日使うものなので、この価格帯で高品質なのは助かります。リピート購入しています。」（評価：★★★★★）
          </p>
        </div>
      </div>
      {/* display related products */}

      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
        currentProductId={productData._id}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default Product;
