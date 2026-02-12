import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  // 画像URLの検証と取得
  let imageUrl = '';

  if (!image) {
    console.error('❌ 画像データが未定義:', { id, name, image });
  } else if (!Array.isArray(image)) {
    console.error('❌ 画像データが配列ではありません:', {
      id,
      name,
      imageType: typeof image,
      image,
    });
  } else if (image.length === 0) {
    console.warn('⚠️ 画像配列が空です:', { id, name });
  } else if (!image[0]) {
    console.warn('⚠️ 最初の画像URLが空です:', { id, name, image });
  } else {
    imageUrl = image[0];
    console.log('✓ 画像URL取得成功:', { id, name, imageUrl });
  }

  // フォールバック画像URL（画像がない場合のプレースホルダー）
  const placeholderUrl =
    'https://via.placeholder.com/400x500/e5e7eb/9ca3af?text=No+Image';
  const finalImageUrl = imageUrl || placeholderUrl;

  return (
    <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer">
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in out"
          src={finalImageUrl}
          alt={name || 'Product'}
          onError={(e) => {
            console.error('❌ 画像読み込みエラー:', {
              id,
              name,
              originalImageUrl: imageUrl,
              finalImageUrl,
              fullImageArray: image,
              errorTarget: e.target.src,
            });
            // エラー時はプレースホルダーに置き換え
            e.target.src = placeholderUrl;
            e.target.style.backgroundColor = '#f3f4f6';
          }}
          onLoad={() => {
            if (imageUrl) {
              console.log('✓ 画像読み込み成功:', { id, name, imageUrl });
            }
          }}
        />
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="font-medium">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
