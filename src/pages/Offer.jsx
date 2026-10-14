import React from "react";
import { Link } from "react-router-dom";
import { offersList } from "../data/packages"; // ডেটা ফাইল থেকে ইমপোর্ট করা হলো

export default function Offer() {
  return (
    <div className="py-16 bg-gray-50 min-h-[75vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Special Internet Offers & Packages
          </h1>
          <p className="text-gray-600">
            আপনার প্রয়োজন অনুযায়ী সাশ্রয়ী মূল্যে সেরা স্পিড প্যাকেজটি বেছে নিন।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offersList.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col justify-between hover:shadow-xl transition"
            >
              <div>
                <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full uppercase">
                  {item.tag}
                </span>
                <h3 className="text-3xl font-extrabold text-green-600 mt-4">
                  {item.speed}
                </h3>
                <p className="text-2xl font-bold text-gray-900 my-4">
                  ৳ {item.price}{" "}
                  <span className="text-sm font-normal text-gray-500">
                    / month
                  </span>
                </p>
                <ul className="space-y-2.5 text-sm text-gray-600 border-t pt-4">
                  {item.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-600 font-bold">✓</span> {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <Link
                  to="/connection"
                  className="block text-center bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-xl transition shadow"
                >
                  Order Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
