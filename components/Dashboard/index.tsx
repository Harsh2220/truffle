import React from "react";
import Calendar from "./Calendar/Calendar";
import Card, { CardProps } from "./Card/Card";
import CryptoBalance from "./Card/svgs/CryptoBalance";
import FiatBalance from "./Card/svgs/FiatBalance";
import Payable from "./Card/svgs/Payable";
import Recievable from "./Card/svgs/Recievable";

const Balance: CardProps[] = [
  {
    icon: <FiatBalance />,
    name: "Fiat Balance",
    amount: "00,000",
  },
  {
    icon: <CryptoBalance />,
    name: "Crypto Balance",
    amount: "00,000",
  },
];

const Transaction: CardProps[] = [
  {
    icon: <Recievable />,
    name: "Receivable",
    amount: "00,000",
  },
  {
    icon: <Payable />,
    name: "Payables",
    amount: "00,000",
  },
];

export default function Dashboard() {
  return (
    <div className="px-6 py-4">
      <div className="py-4 px-5 flex items-center justify-between bg-[#8553FB] rounded-xl text-white">
        <div className="flex items-center gap-4">
          <img src="information.svg" />
          <div>
            <h6 className="text-xs font-medium">Plese complete the KYC</h6>
            <p className="text-[10px] leading-4">
              Please follow the instructions in the email to complete account
              verification. Make sure to check your promotions/spam as well.
            </p>
          </div>
        </div>
        <img src="close.svg" />
      </div>
      <div className="flex">
        <div>
          <div className="flex gap-5 mt-8">
            {Balance.map((item, index) => (
              <Card
                key={index}
                name={item.name}
                icon={item.icon}
                amount={item.amount}
              />
            ))}
          </div>
          <div className="flex gap-5 mt-5">
            {Transaction.map((item, index) => (
              <Card
                key={index}
                name={item.name}
                icon={item.icon}
                amount={item.amount}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
