import { FaCcVisa, FaCcMastercard, FaCcAmex } from "react-icons/fa";
import ComparisonTable from "./ComparisonTable";
import PremiumPlans from "./PremiumPlans";

const Premium = () => {
  const methods = [
    { id: 1, icon: <FaCcVisa className="text-[#A50064]" />, name: "Momo" },
    { id: 2, icon: <FaCcVisa className="text-[#1A1F71]" />, name: "Visa" },
    {
      id: 3,
      icon: <FaCcMastercard className="text-[#EB001B]" />,
      name: "Mastercard",
    },
    { id: 4, icon: <FaCcAmex className="text-[#0077A6]" />, name: "Amex" },
  ];
  return (
    <>
      <section className="h-[380px] flex flex-col items-center justify-center text-white text-center bg-gradient-to-r from-[#A0126E] to-[#1F3980] rounded">
        <h1 className="text-4xl max-w-2xl font-extrabold mb-4 drop-shadow-lg">
          Listen without limits. Try 2 months of Premium Individual for ₫65,000.
        </h1>
        <p className="text-lg max-w-xl text-purple-100 mb-8">
          Only ₫65,000/month after. Cancel anytime.
        </p>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:scale-110 transition">
            Try 2 months for ₫65,000
          </button>
          <button className="px-6 py-3 text-purple-50 border border-white font-semibold rounded-full hover:scale-110 transition">
            View all plans
          </button>
        </div>
        <p className="text-sm font-normal max-w-3xl text-purple-100 mt-10">
          ₫65,000 for 2 months, then ₫65,000 per month after. Offer only
          available if you haven&apos;t tried Premium before. Terms apply.
        </p>
      </section>
      <div className="h-screen flex flex-col items-center justify-start text-white text-center">
        <p className="mt-12 mb-4 text-4xl font-bold max-w-3xl text-white">
          Affordable plans for any situation
        </p>
        <p className="text-lg max-w-3xl font-medium text-purple-100 mb-8">
          Choose a Premium plan and listen to ad-free music without limits on
          your phone, speaker, and other devices. Pay in various ways. Cancel
          anytime.
        </p>
        <div className="flex items-center gap-3">
          {methods.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg p-3 w-12 h-12 flex items-center justify-center shadow-sm hover:scale-105 transition-transform"
            >
              <span className="text-4xl">{item.icon}</span>
            </div>
          ))}
        </div>

        <p className="text-white mt-2 text-sm underline underline-offset-2 cursor-pointer hover:text-gray-300 transition">
          +2 more
        </p>
        <div className="flex gap-5 max-w-3xl mt-10 items-center">
          <p className="text-4xl font-bold max-w-3xl text-white mb-8 text-center">
            All Premium plans include
          </p>
          <ul className="text-white text-lg font-medium space-y-1 text-left mb-10">
            <li className="before:content-['✓'] before:text-white before:mr-2">
              Ad-free music listening
            </li>
            <li className="before:content-['✓'] before:text-white before:mr-2">
              Download to listen offline
            </li>
            <li className="before:content-['✓'] before:text-white before:mr-2">
              Play songs in any order
            </li>
            <li className="before:content-['✓'] before:text-white before:mr-2">
              High audio quality
            </li>
            <li className="before:content-['✓'] before:text-white before:mr-2">
              Listen with friends in real time
            </li>
            <li className="before:content-['✓'] before:text-white before:mr-2">
              Organize listening queue
            </li>
          </ul>
        </div>
        <PremiumPlans />
        <ComparisonTable />
      </div>
    </>
  );
};

export default Premium;
