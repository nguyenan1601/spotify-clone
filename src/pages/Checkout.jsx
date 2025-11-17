import React from "react";
import { useState } from "react";
import { FaSpotify, FaCcVisa, FaCcMastercard, FaCcAmex } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvc: "",
  });

  const paymentMethods = [
    {
      id: "momo",
      name: "MoMo wallet",
    },
    {
      id: "card",
      name: "Credit or debit card",
    },
  ];

  const planDetails = {
    name: "Premium Individual",
    accounts: "1 Premium account",
    price: "₫65,000",
    duration: "For 2 months",
    today: "2 months for ₫65,000",
    startDate: "Jan 17, 2026: ₫65,000/month",
  };
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 md:py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <FaSpotify className="w-8 h-8 text-black" />
          <h1 className="text-2xl font-bold text-black">Spotify</h1>
        </div>
        <button className="bg-purple-500 text-black rounded-full w-10 h-10 flex items-center justify-center font-semibold text-sm">
          B
        </button>
      </div>

      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-black">Checkout</h2>
        <a href="#" className="text-blue-600 hover:underline text-sm">
          Change plan
        </a>
      </div>

      <div className="border-b border-gray-200 pb-8 mb-8">
        {/* Plan Details */}
        <div className="flex items-start gap-4">
          <div className="bg-gray-800 rounded-lg p-3">
            <FaSpotify className="w-8 h-8" style={{ color: "#FFD2D7" }} />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-black">
                  {planDetails.name}
                </h3>
                <p className="text-sm text-gray-600">{planDetails.accounts}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-black">
                  {planDetails.price}
                </p>
                <p className="text-sm text-gray-600">{planDetails.duration}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-start gap-2">
                <span className="block w-1 h-1 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></span>
                <p>
                  <span className="font-semibold">Today:</span>{" "}
                  {planDetails.today}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="block w-1 h-1 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></span>
                <p>
                  <span className="font-semibold">
                    Starting {planDetails.startDate}
                  </span>
                </p>
              </div>
              <p className="text-xs text-gray-600 mt-3">
                Cancel anytime online.{" "}
                <a href="#" className="underline">
                  Terms apply
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Method Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-black mb-6">Payment method</h3>

        <div className="space-y-3">
          {paymentMethods.map((method) => (
            <label
              key={method.id}
              className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition"
            >
              <input
                type="radio"
                name="payment-method"
                value={method.id}
                checked={selectedPaymentMethod === method.id}
                onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                className="w-5 h-5 text-gray-400 cursor-pointer"
              />
              <div className="ml-4 flex-1">
                <p className="font-semibold text-black">{method.name}</p>
              </div>
              {method.id === "momo" && (
                <div className="flex items-center gap-1">
                  <FaCcVisa className="text-pink-600" size={24} />
                </div>
              )}
              {method.id === "card" && (
                <div className="flex items-center gap-2">
                  <FaCcVisa className="text-blue-600" size={28} />
                  <FaCcMastercard className="text-orange-600" size={28} />
                  <FaCcAmex className="text-blue-700" size={28} />
                </div>
              )}
            </label>
          ))}
        </div>
      </div>

      {/* Summary Section */}
      <div
        className={`transition-opacity duration-300 ${
          selectedPaymentMethod ? "opacity-100" : "opacity-50"
        }`}
      >
        <h3
          className={`text-2xl font-bold mb-6 ${
            selectedPaymentMethod ? "text-black" : "text-gray-400"
          }`}
        >
          Summary
        </h3>

        <div
          className={`rounded-lg p-6 ${
            selectedPaymentMethod ? "bg-gray-100" : "bg-gray-50"
          }`}
        >
          {/* Items */}
          <div className="mb-6 pb-6 border-b border-gray-300">
            <p className="text-sm font-semibold text-gray-600 mb-4">Items</p>
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-gray-700 rounded p-2 flex-shrink-0">
                <FaSpotify className="w-8 h-8" style={{ color: "#FFD2D7" }} />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-black">{planDetails.name}</p>
              </div>
              <p className="font-semibold text-black">{planDetails.price}</p>
            </div>

            <div className="space-y-2 text-sm text-gray-600 ml-10">
              <p>
                <span className="font-semibold">Today:</span>{" "}
                {planDetails.today}
              </p>
              <p>
                <span className="font-semibold">
                  Starting {planDetails.startDate}
                </span>
              </p>
            </div>
          </div>

          {/* Total */}
          <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-300">
            <p className="font-bold text-black text-lg">Total now</p>
            <p className="font-bold text-black text-lg">{planDetails.price}</p>
          </div>

          {/* Legal Text */}
          <p className="text-sm text-gray-700 mb-6 leading-relaxed">
            You hereby authorise Spotify to charge you automatically every month
            until you cancel your subscription. If you don't cancel your
            subscription before the offer ends (check your account page for
            details), you will automatically be charged the standard price every
            month until you cancel. Full terms and instructions on how to cancel
            are available{" "}
            <a href="#" className="underline text-black font-semibold">
              here
            </a>
            .
          </p>

          {/* Payment Redirect Message */}
          {selectedPaymentMethod && (
            <div className="bg-white rounded-lg p-4 mb-6 text-center border border-gray-200">
              {selectedPaymentMethod === "momo" && (
                <>
                  <div className="flex justify-center mb-3">
                    <FaCcVisa className="text-pink-600" size={32} />
                  </div>
                  <p className="text-sm text-gray-700">
                    You'll be redirected to MoMo Wallet to complete your
                    purchase.
                  </p>
                </>
              )}
              {selectedPaymentMethod === "card" && (
                <div className="space-y-4">
                  <p className="text-sm text-gray-700 font-semibold mb-4">
                    Enter your card details
                  </p>
                  <input
                    type="text"
                    placeholder="Card number"
                    value={cardDetails.cardNumber}
                    onChange={(e) =>
                      setCardDetails({
                        ...cardDetails,
                        cardNumber: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={cardDetails.expiryDate}
                      onChange={(e) =>
                        setCardDetails({
                          ...cardDetails,
                          expiryDate: e.target.value,
                        })
                      }
                      className="px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      value={cardDetails.cvc}
                      onChange={(e) =>
                        setCardDetails({
                          ...cardDetails,
                          cvc: e.target.value,
                        })
                      }
                      className="px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* CTA Button */}
          <button
            disabled={!selectedPaymentMethod}
            className={`w-full py-3 rounded-full font-bold text-lg transition ${
              selectedPaymentMethod
                ? "bg-green-500 hover:bg-green-600 text-black cursor-pointer"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
            onClick={() => navigate("/")}
          >
            {selectedPaymentMethod
              ? "Complete purchase"
              : "Select a payment method"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
