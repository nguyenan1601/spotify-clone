import { FaSpotify } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    id: 1,
    name: "Individual",
    color: "#FFD2D7",
    price: "₫65,000 for 2 months",
    after: "₫65,000 / month after",
    features: [
      "1 Premium account",
      "Cancel anytime",
      "Subscribe or one-time payment",
    ],
  },
  {
    id: 2,
    name: "Student",
    color: "#C4B1D4",
    price: "₫33,000 for 2 months",
    after: "₫33,000 / month after",
    features: [
      "1 verified Premium account",
      "Discount for eligible students",
      "Cancel anytime",
      "Subscribe or one-time payment",
    ],
  },
];

const PremiumPlans = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#121212] text-white flex flex-col px-6">
      <div className="max-w-6xl w-[360px] ">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="bg-[#242424] rounded-xl overflow-hidden shadow-lg flex flex-col justify-between mb-10"
          >
            <div
              className={`text-black font-semibold text-sm px-4 py-2 text-start w-1/2 rounded-br-lg`}
              style={{ backgroundColor: plan.color }}
            >
              {plan.price}
            </div>

            <div className="p-6 flex flex-col gap-4 flex-grow">
              <div className="flex items-center gap-2 text-xl font-bold text-gray-300">
                <FaSpotify className="text-white text-3xl" />
                <span>Premium</span>
              </div>
              <div className="flex items-start flex-col">
                <h2
                  className="text-3xl font-bold bg-clip-text"
                  style={{ color: plan.color }}
                >
                  {plan.name}
                </h2>

                <p className="font-semibold">{plan.price}</p>
                <p className="text-gray-400 text-sm">{plan.after}</p>
              </div>
              <hr className="border-gray-700" />

              <ul className="text-base font-medium space-y-1 text-white">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-white">•</span> {feature}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() =>
                  navigate(
                    plan.id === 1
                      ? "/checkout"
                      : plan.id === 2
                      ? "/verifystudent"
                      : "/"
                  )
                }
                className="text-black font-bold py-3 rounded-full hover:brightness-110 transition-all mt-4"
                style={{ backgroundColor: plan.color }}
              >
                Try 2 months for {plan.price.split(" ")[0]}
              </button>
              <p className="text-xs text-gray-400 mt-2">
                {plan.price}, then {plan.after}. Offer only available if you
                haven’t tried Premium before.{" "}
                <a
                  href="#"
                  className="underline text-gray-300 hover:text-pink-200"
                >
                  Terms apply
                </a>
                .
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumPlans;
