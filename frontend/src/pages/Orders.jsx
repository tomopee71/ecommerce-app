import { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { useEffect } from 'react';
import axios from 'axios';

function Orders() {
  const { backendUrl, token, currency } = useContext(ShopContext);

  const [orderData, setOrderData] = useState([]);

  const formatJapaneseEraDate = (dateValue) => {
    if (!dateValue) return '';
    const date = new Date(dateValue);
    if (Number.isNaN(date.getTime())) return '';
    return new Intl.DateTimeFormat('ja-JP-u-ca-japanese', {
      era: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  const formatAddress = (address) => {
    if (!address) return '';
    const name = [address.lastName, address.firstName]
      .filter(Boolean)
      .join(' ');
    const line1 = [address.zipcode, address.state, address.city]
      .filter(Boolean)
      .join(' ');
    const line2 = [address.street, address.country].filter(Boolean).join(' ');
    const phone = address.phone ? `TEL: ${address.phone}` : '';
    return [name, line1, line2, phone].filter(Boolean).join(' / ');
  };

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(
        backendUrl + '/api/order/userorders',
        {},
        { headers: { token } }
      );
      console.log(response.data);
      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status;
            item['payment'] = order.payment;
            item['paymentMethod'] = order.paymentMethod;
            item['date'] = order.date;
            item['address'] = order.address;
            item['userName'] = response.data.userName || '';
            allOrdersItem.push(item);
          });
        });
        // console.log(allOrdersItem);
        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={'注文'} text2={'履歴'} />
      </div>

      <div>
        {orderData.map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b border-gray-300 text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img
                src={item.images && item.images[0] ? item.images[0] : ''}
                alt={item.name}
                className="w-16 h-20 object-cover sm:w-20"
              />
              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p className="text-lg">
                    {currency}
                    {item.price}
                  </p>
                  <p>数量: {item.quantity}</p>
                  <p>サイズ: {item.size}</p>
                </div>
                <p className="mt-2">
                  日付:{' '}
                  <span className="text-gray-400">
                    {formatJapaneseEraDate(item.date)}
                  </span>
                </p>
                <p className="mt-2">
                  支払い方法:{' '}
                  <span className="text-gray-400">{item.paymentMethod}</span>
                </p>
                <p className="mt-2">
                  お届け先:{' '}
                  <span className="text-gray-400">
                    {formatAddress(item.address)}
                  </span>
                </p>
                <p className="mt-2">
                  注文者:{' '}
                  <span className="text-gray-400">
                    {item.userName || 'ユーザー'}
                  </span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">
                  {item.status === 'Order Placed'
                    ? '注文確認待ち'
                    : item.status === 'Packing'
                      ? '発送準備中'
                      : item.status === 'Shipped'
                        ? '出荷済み'
                        : item.status === 'Out for delivery'
                          ? '配送中'
                          : item.status === 'Delivered'
                            ? '配達完了'
                            : '不明'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => loadOrderData()}
                className="border border-gray-300 px-4 py-2 text-sm font-medium rounded-sm"
              >
                注文を追跡する
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
