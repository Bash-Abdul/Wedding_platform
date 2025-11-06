"use client";

import React from "react";
import { CheckCircle2, Download } from "lucide-react";

/** Stable currency formatter so SSR/client match */
const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
}).format;

/** ----- Data (swap these with API later) ----- */
type StatCard = { label: string; value: number | string; isMoney?: boolean };

const stats: StatCard[] = [
  { label: "Total Amount Received", value: 7850, isMoney: true },
  { label: "Total Number of Gifts", value: 42 },
  { label: "Next Scheduled Payout", value: "Oct 25, 2024" },
];

type ChartBar = { label: string; heightPct: number; highlight?: boolean };
const giftsOverTime: ChartBar[] = [
  { label: "Jul", heightPct: 40 },
  { label: "Aug", heightPct: 60 },
  { label: "Sep", heightPct: 90, highlight: true },
  { label: "Oct", heightPct: 75 },
  { label: "Nov", heightPct: 25 },
];

const rangeOptions = ["Last 30 days", "Last 90 days", "All time"];

type TxRow = {
  displayDate: string; // keep as static string to avoid locale mismatches
  name: string;
  amount: number;
  status: "Paid Out" | "Processing";
};

const transactions: TxRow[] = [
  { displayDate: "Oct 15, 2024", name: "Jane Doe", amount: 250, status: "Paid Out" },
  { displayDate: "Oct 14, 2024", name: "John Smith", amount: 100, status: "Paid Out" },
  { displayDate: "Oct 12, 2024", name: "Aunt Carol", amount: 500, status: "Processing" },
  { displayDate: "Oct 11, 2024", name: "Mark Johnson", amount: 150, status: "Processing" },
];

/** Status pill styling */
const statusClasses: Record<TxRow["status"], string> = {
  "Paid Out": "bg-green-100 text-green-800",
  Processing: "bg-yellow-100 text-yellow-800",
};

export default function PaymentsAndGiftsPage() {
  return (
    <>
      {/* Page Heading */}
      <div className="flex flex-wrap justify-between gap-3 mb-8">
        <div className="flex min-w-72 flex-col gap-2">
          <p className="text-[#181113] text-4xl font-black leading-tight tracking-tight">
            Payments &amp; Gifts
          </p>
          <p className="text-[#886370] text-base leading-normal">
            View received gifts, track your total amount, and manage your payout methods.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col gap-2 rounded-xl p-6 border border-[#e0e0e0] bg-white"
          >
            <p className="text-[#181113] text-base font-medium leading-normal">{s.label}</p>
            <p className="text-[#181113] text-3xl font-bold leading-tight">
              {typeof s.value === "number" && s.isMoney ? currency(s.value) : String(s.value)}
            </p>
          </div>
        ))}
      </div>

      {/* Payout Method & Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Action Panel */}
        <div className="lg:col-span-1">
          <h2 className="text-[#181113] text-xl font-bold leading-tight tracking-tight mb-3">
            Payout Method
          </h2>
          <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-[#e0e0e0] bg-white p-5 h-full">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <p className="text-[#181113] text-base font-bold leading-tight">
                  Connected via Stripe
                </p>
              </div>
              <p className="text-[#886370] text-sm leading-normal">
                Your account is connected and ready to receive payouts.
              </p>
            </div>
            <button
              className="flex min-w-[84px] w-full items-center justify-center overflow-hidden rounded-lg h-10 px-4  bg-[#f7bacf] text-white text-sm font-bold leading-normal hover:opacity-90 transition-colors"
              type="button"
            >
              <span className="truncate">Manage Account</span>
            </button>
          </div>
        </div>

        {/* Simple Chart */}
        <div className="lg:col-span-2">
          <h2 className="text-[#181113] text-xl font-bold leading-tight tracking-tight mb-3">
            Gifts Over Time
          </h2>
          <div className="rounded-xl border border-[#e0e0e0] bg-white p-5 h-full flex items-end justify-around gap-4">
            {giftsOverTime.map((bar) => (
              <div key={bar.label} className="flex flex-col items-center gap-2 h-full">
                <div
                  className="w-8 rounded-full"
                  style={{
                    height: `${bar.heightPct}%`,
                    backgroundColor: bar.highlight ? "#f7bacf" : "rgba(247,186,207,0.4)",
                  }}
                />
                <p
                  className={`text-xs ${
                    bar.highlight ? "text-[#181113] font-bold" : "text-[#886370]"
                  }`}
                >
                  {bar.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transaction History Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#181113] text-xl font-bold leading-tight tracking-tight">
          Transaction History
        </h2>
        <div className="flex items-center gap-4">
          <select
            className="rounded-lg border border-gray-300 bg-white text-sm focus:border-[#f7bacf] focus:ring-[#f7bacf]"
            defaultValue={rangeOptions[0]}
          >
            {rangeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <button
            className="flex min-w-[84px] items-center justify-center gap-2 rounded-lg h-10 px-4 bg-gray-200 text-[#181113] text-sm font-medium hover:bg-gray-300 transition-colors"
            type="button"
          >
            <Download className="w-4 h-4" />
            <span className="truncate">Export</span>
          </button>
        </div>
      </div>

      {/* Transaction Table */}
      <div className="overflow-x-auto rounded-xl border border-[#e0e0e0] bg-white">
        <table className="min-w-full text-sm text-left">
          <thead className="border-b border-[#e0e0e0] text-[#886370]">
            <tr>
              {["Date", "Giver's Name", "Amount", "Status"].map((h) => (
                <th key={h} scope="col" className="px-6 py-3 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, i) => (
              <tr
                key={`${tx.displayDate}-${tx.name}-${i}`}
                className={`border-b border-[#e0e0e0] ${i === transactions.length - 1 ? "last:border-b-0" : ""}`}
              >
                <td className="px-6 py-4 whitespace-nowrap">{tx.displayDate}</td>
                <td className="px-6 py-4 font-semibold text-[#181113]">{tx.name}</td>
                <td className="px-6 py-4 font-semibold text-[#181113]">
                  {currency(tx.amount)}
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusClasses[tx.status]}`}>
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
