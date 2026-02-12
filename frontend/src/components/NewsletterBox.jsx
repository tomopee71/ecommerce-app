const NewsletterBox = () => {
  const onSubmitHandeler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        今すぐ購入で5%OFFキャンペーンから始めましょう！
      </p>
      <p className="text-gray-400 mt-3">
        最新のオファーや製品情報を受け取るためにニュースレターに登録しましょう。
      </p>
      <form
        onSubmit={onSubmitHandeler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          type="email"
          placeholder="メールアドレスを入力してください"
          className="w-full sm:flex-1 outline-none"
          required
        />
        <button type="submit" className="bg-black text-white text-s px-10 py-2">
          登録する
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
