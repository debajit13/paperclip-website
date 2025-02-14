"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  FaBell,
  FaBox,
  FaClipboardList,
  FaCog,
  FaHome,
  FaShoppingCart,
  FaStore,
  FaUndo,
} from "react-icons/fa";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { paperclipLogoSmall } from "@/utils/assets";
import Image from "next/image";

const data = [
  { month: "Jan", revenue: 1500 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 4500 },
  { month: "Apr", revenue: 1000 },
  { month: "May", revenue: 2000 },
  { month: "Jun", revenue: 5500 },
  { month: "Jul", revenue: 3500 },
  { month: "Aug", revenue: 2800 },
  { month: "Sep", revenue: 3200 },
  { month: "Oct", revenue: 3100 },
  { month: "Nov", revenue: 4000 },
  { month: "Dec", revenue: 5000 },
];

const recentSales = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    price: "£1,999.00",
  },
  { name: "Jackson Lee", email: "jackson.lee@email.com", price: "£39.00" },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    price: "£299.00",
  },
  { name: "William Kim", email: "will@email.com", price: "£99.00" },
  { name: "Sofia Davis", email: "sofia.davis@email.com", price: "£39.00" },
];

export default function DashboardCard() {
  return (
    <CardContainer className="w-full max-w-7xl mx-auto rounded-2xl border border-white/20 shadow-[0px_10px_50px_rgba(0,0,0,0.05)] p-2">
      <div className="flex w-full max-h-[90%]">
        {/* Sidebar */}
        <aside className="w-[20%] bg-white shadow-lg p-6 flex flex-col space-y-6 rounded-l-2xl">
          <div className="flex items-center">
            <Image
              src={paperclipLogoSmall}
              alt="Paperclip Logo"
              width={120}
              height={40}
            />
          </div>
          <nav className="space-y-4">
            <a
              href="#"
              className="flex items-center space-x-3 text-gray-700 font-medium p-2 rounded-lg bg-gray-100 hover:bg-gray-100"
            >
              <FaHome className="text-red-500" /> <span>Dashboard</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 text-gray-700 font-medium p-2 rounded-lg hover:bg-gray-100"
            >
              <FaClipboardList className="text-red-500" />{" "}
              <span>Inventory</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 text-gray-700 font-medium p-2 rounded-lg hover:bg-gray-100"
            >
              <FaStore className="text-red-500" /> <span>POS</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 text-gray-700 font-medium p-2 rounded-lg hover:bg-gray-100"
            >
              <FaBell className="text-red-500" /> <span>Notifications</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 text-gray-700 font-medium p-2 rounded-lg hover:bg-gray-100"
            >
              <FaCog className="text-red-500" /> <span>Settings</span>
            </a>
          </nav>
        </aside>

        {/* Main Dashboard Section */}
        <div className="bg-white shadow-lg rounded-r-2xl p-6 w-full max-w-5xl mx-auto">
          {/* Top Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="text-gray-500 text-sm">Total Revenue</h4>
              <p className="text-xl font-semibold">£45,231.89</p>
              <p className="text-green-500 text-xs">+20.1% from last month</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="text-gray-500 text-sm">Total Inventory</h4>
              <p className="text-xl font-semibold">2,345</p>
              <p className="text-green-500 text-xs">+180 new items this week</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="text-gray-500 text-sm">Active Customers</h4>
              <p className="text-xl font-semibold">+573</p>
              <p className="text-green-500 text-xs">+201 since last week</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="text-gray-500 text-sm">Sales Velocity</h4>
              <p className="text-xl font-semibold">+12.5%</p>
              <p className="text-green-500 text-xs">+2.1% from last month</p>
            </div>
          </div>

          {/* Overview Section */}
          <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-6 mt-6 mr-6">
            {/* Bar Chart */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-lg font-semibold">Overview</h4>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={data}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#A3E635" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Recent Sales */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="text-lg font-semibold">Recent Sales</h4>
              <ul className="mt-2 space-y-2">
                {recentSales.map((sale, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <div>
                      <p className="font-semibold">{sale.name}</p>
                      <p className="text-gray-500 text-sm">{sale.email}</p>
                    </div>
                    <p className="font-medium">{sale.price}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 text-center">
            <button className="flex items-center justify-center p-4 border rounded-lg bg-white/70 shadow-md backdrop-blur-lg hover:bg-gray-100 transition">
              <FaBox className="mr-2 text-red-500" />
              Add New Item
            </button>
            <button className="flex items-center justify-center p-4 border rounded-lg bg-white/70 shadow-md backdrop-blur-lg hover:bg-gray-100 transition">
              <FaShoppingCart className="mr-2 text-red-500" />
              New Sale
            </button>
            <button className="flex items-center justify-center p-4 border rounded-lg bg-white/70 shadow-md backdrop-blur-lg hover:bg-gray-100 transition">
              <FaUndo className="mr-2 text-red-500" />
              Process Return
            </button>
          </div>
        </div>
      </div>
    </CardContainer>
  );
}
