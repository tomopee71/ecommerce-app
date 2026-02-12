import { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [jan, setJan] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Unisex");
  const [subCategory, setSubCategory] = useState("Pants");
  const [price, setPrice] = useState("");
  const [sizes, setSizes] = useState([]);
  const [bestseller, setBestseller] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);
      formData.append("jan", jan);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("price", price);
      formData.append("sizes", JSON.stringify(sizes));
      formData.append("bestseller", bestseller);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } },
      );

      // console.log("Response from add product: ", response.data);

      if (response.data.success) {
        toast.success(response.data.message);
        setJan("");
        setName("");
        setDescription("");
        setPrice("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setSizes([]);
        setBestseller(false);
      } else {
        toast.error(response.data.message);
      }
      console.log(response.data);
    } catch (error) {
      console.log("Error in adding product: ", error);
      toast.error(error.message);
    }
  };

  return (
    <>
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col w-full items-start gap-3"
      >
        <div>
          <p className="mb-2">アップロード画像</p>

          <div className="flex gap-2">
            <label htmlFor="image1">
              <img
                className="w-20"
                src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
                alt="upload"
              />
              <input
                onChange={(e) => setImage1(e.target.files[0])}
                type="file"
                id="image1"
                hidden
              />
            </label>
            <label htmlFor="image2">
              <img
                className="w-20"
                src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
                alt="upload"
              />
              <input
                onChange={(e) => setImage2(e.target.files[0])}
                type="file"
                id="image2"
                hidden
              />
            </label>
            <label htmlFor="image3">
              <img
                className="w-20"
                src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
                alt="upload"
              />
              <input
                onChange={(e) => setImage3(e.target.files[0])}
                type="file"
                id="image3"
                hidden
              />
            </label>
            <label htmlFor="image4">
              <img
                className="w-20"
                src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
                alt="upload"
              />
              <input
                onChange={(e) => setImage4(e.target.files[0])}
                type="file"
                id="image4"
                hidden
              />
            </label>
          </div>
        </div>

        <div className="w-full">
          <p className="mb-2">JANコード</p>
          <input
            onChange={(e) => setJan(e.target.value)}
            value={jan}
            className="w-full max-w-[500px] px-3 py-2"
            type="number"
            placeholder="Type Janコード"
            required
          />
        </div>

        <div className="w-full">
          <p className="mb-2">商品名</p>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="w-full max-w-[500px] px-3 py-2"
            type="text"
            placeholder="Type here"
            required
          />
        </div>

        <div className="w-full">
          <p className="mb-2">商品説明</p>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="w-full max-w-[500px] px-3 py-2"
            type="text"
            placeholder="Write content here"
            required
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
          <div>
            <p className="mb-2">対象（男女兼用、男性、女性）</p>
            <select
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              className="w-full px-3 py-2"
            >
              <option value="Unisex">男女兼用</option>
              <option value="Men">男性</option>
              <option value="Women">女性</option>
            </select>
          </div>

          <div>
            <p className="mb-2">商品タイプ</p>
            <select
              onChange={(e) => setSubCategory(e.target.value)}
              value={subCategory}
              className="w-full px-3 py-2"
            >
              <option value="Pants">パンツタイプ</option>
              <option value="Tape">テープタイプ</option>
              <option value="Pat">パット</option>
            </select>
          </div>

          <div>
            <p className="mb-2">税込み価格</p>
            <input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              className="w-full px-3 py-2 sm:w-[120px]"
              type="number"
              placeholder="2000"
            />
          </div>
        </div>

        <div>
          <p className="mb-2">商品サイズ</p>
          <div className="flex gap-3">
            <div
              onClick={() =>
                setSizes((prev) =>
                  prev.includes("F")
                    ? prev.filter((item) => item !== "F")
                    : [...prev, "F"],
                )
              }
            >
              <p
                className={`${sizes.includes("F") ? "bg-black text-white" : "bg-slate-200"} px-3 py-1 cursor-pointer`}
              >
                F
              </p>
            </div>

            <div
              onClick={() =>
                setSizes((prev) =>
                  prev.includes("S")
                    ? prev.filter((item) => item !== "S")
                    : [...prev, "S"],
                )
              }
            >
              <p
                className={`${sizes.includes("S") ? "bg-black text-white" : "bg-slate-200"} px-3 py-1 cursor-pointer`}
              >
                S
              </p>
            </div>

            <div
              onClick={() =>
                setSizes((prev) =>
                  prev.includes("M")
                    ? prev.filter((item) => item !== "M")
                    : [...prev, "M"],
                )
              }
            >
              <p
                className={`${sizes.includes("M") ? "bg-black text-white" : "bg-slate-200"} px-3 py-1 cursor-pointer`}
              >
                M
              </p>
            </div>

            <div
              onClick={() =>
                setSizes((prev) =>
                  prev.includes("L")
                    ? prev.filter((item) => item !== "L")
                    : [...prev, "L"],
                )
              }
            >
              <p
                className={`${sizes.includes("L") ? "bg-black text-white" : "bg-slate-200"} px-3 py-1 cursor-pointer`}
              >
                L
              </p>
            </div>

            <div
              onClick={() =>
                setSizes((prev) =>
                  prev.includes("LL")
                    ? prev.filter((item) => item !== "LL")
                    : [...prev, "LL"],
                )
              }
            >
              <p
                className={`${sizes.includes("LL") ? "bg-black text-white" : "bg-slate-200"} px-3 py-1 cursor-pointer`}
              >
                LL
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mt-2">
          <input
            onChange={() => setBestseller((prev) => !prev)}
            checked={bestseller}
            type="checkbox"
            id="bestseller"
          />
          <label className="cursor-pointer ml-2" htmlFor="bestseller">
            ベストセラー商品としてマークする
          </label>
        </div>

        <button type="submit" className="w-48 py-3 mt-4 bg-black text-white">
          商品を追加する
        </button>
      </form>
    </>
  );
};

export default Add;
