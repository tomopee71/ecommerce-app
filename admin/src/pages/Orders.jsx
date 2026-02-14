import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }

    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } },
      );
      console.log(response.data);
      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong while fetching orders");
      console.log(error);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: event.target.value },
        { headers: { token } },
      );
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error("Error while updating order status");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div>
      <h3>注文一覧</h3>
      <div>
        {orders.map((order, index) => (
          <div
            className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1.5fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-5 text-xs sm:text-sm text-gray-700"
            key={index}
          >
            <img className="w-12" src={assets.parcel_icon} alt="" />
            <div>
              <p className="font-medium">
                注文者: {order.userName || "ユーザー"}
              </p>
              <p>購入品目数: {order.items.length}</p>
              {order.items.map((item, index) => {
                if (index === order.items.length - 1) {
                  return (
                    <p className="py-0.5" key={index}>
                      {item.jan} {item.name} x{" "}
                      <span className="font-medium">{item.quantity}個</span>{" "}
                      <span className="font-medium">
                        {"サイズ: " + item.size}
                      </span>
                    </p>
                  );
                } else {
                  return (
                    <p className="py-0.5" key={index}>
                      {item.jan} {item.name} x{" "}
                      <span className="font-medium">{item.quantity}個</span>{" "}
                      <span className="font-medium">
                        {"サイズ: " + item.size}
                      </span>
                    </p>
                  );
                }
              })}
            </div>
            <div>
              <p className="mt-3 mb-2 font-medium">注文者情報</p>
              <p>
                {"氏名: " +
                  order.address.lastName +
                  " " +
                  order.address.firstName}
              </p>

              <p>
                {"〒" +
                  order.address.zipcode +
                  " " +
                  order.address.state +
                  order.address.city +
                  order.address.street}
              </p>
              <p>{"Email:  " + order.address.email}</p>
              <p>{"Tel:  " + order.address.phone}</p>
            </div>

            <div>
              <p className="font-medium">
                お支払金額: {currency}
                {order.amount}円
              </p>
              <p>支払い方法: {order.paymentMethod}</p>
              <p>支払い状況: {order.payment ? "完了" : "保留中"}</p>
              <p>日付: {new Date(order.date).toLocaleDateString()}</p>
            </div>

            <select
              onChange={(event) => statusHandler(event, order._id)}
              value={order.status}
              className="p-2 font-semibold"
            >
              <option value="Order Placed">注文確認待ち</option>
              <option value="Packing">発送準備中</option>
              <option value="Shipped">出荷済み</option>
              <option value="Out for delivery">配送中</option>
              <option value="Delivered">配達完了</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
