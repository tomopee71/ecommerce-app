import { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title.jsx';
import ProductItem from './ProductItem.jsx';

const RelatedProducts = ({ category, subCategory, currentProductId }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();

      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter(
        (item) => subCategory === item.subCategory
      );
      productsCopy = productsCopy.filter((item) => item._id !== currentProductId);
      console.log('🔍 関連商品候補:', productsCopy.slice(0, 5));
      setRelated(productsCopy.slice(0, 5));
    }
  }, [products, category, subCategory, currentProductId]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={'関連'} text2={'商品'} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.images}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
