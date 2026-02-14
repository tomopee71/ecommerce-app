import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      // console.log(response,data);
      if (response.data.success) {
        setList(response.data.products);
        // console.log(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error in fetching product list");
      console.log("Error in fetching product list: ", error);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        { headers: { token } },
      );
      if (response.data.success) {
        toast.success("Product removed successfully");
        await fetchList(); // Refresh the list after deletion
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("商品削除中にエラーが発生しました");
      console.log("Error in removing product: ", error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className="mb-2">すべての商品リスト</p>
      <div className="flex flex-col gap-2">
        {/* List Table Title */}
        <div className="hidden md:grid grid-cols-[1fr_1fr_3fr_1fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>画像</b>
          <b>Jan</b>
          <b>商品名</b>
          <b>カテゴリー</b>
          <b>サブカテゴリー</b>
          <b>価格</b>
          <b className="text-center">削除</b>
        </div>

        {/* Product List */}
        {list.map((item, index) => (
          <div
            className="grid grid-cols-[1fr_1fr_3fr_1fr_1fr_1fr_1fr] items-center gap-3 py-1 px-2 border text-sm"
            key={index}
          >
            <img className="w-12" src={item.images?.[0]} alt="" />
            <p>{item.jan}</p>
            <p>{item.name}</p>
            <p>
              {item.category === "Unisex"
                ? "男女兼用"
                : item.category === "Men"
                  ? "男性用"
                  : item.category === "Women"
                    ? "女性用"
                    : "不明"}
            </p>
            <p>
              {item.subCategory === "Pants"
                ? "パンツタイプ"
                : item.subCategory === "Pat"
                  ? "パット"
                  : item.subCategory === "Tape"
                    ? "テープタイプ"
                    : "不明"}
            </p>
            <p>
              {currency}
              {item.price}
            </p>
            <button
              onClick={() => removeProduct(item._id)}
              className="w-12 py-1 bg-black text-white md:text-center cursor-pointer text-sm"
            >
              削除
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
