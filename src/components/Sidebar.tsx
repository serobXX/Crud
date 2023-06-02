import { Card, Typography, List } from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Sidebar() {
  return (
    <>
      <Card
        color="white"
        className="top-2 hidden md:block h-[calc(100vh-82px)] w-full max-w-[20rem] relative p-4 shadow-xl bg-gray-900 text-white shadow-blue-gray-900/5"
      >
        <div className="mb-2 p-4">
          <Typography variant="h5">Sidebar</Typography>
        </div>
        <List>
          <Link to="#" color="white">
            Dashboard
          </Link>
          <Link to="#">E-Commerce</Link>
          <Link to="#">Inbox</Link>
          <Link to="#">Profile</Link>
          <Link to="#">Settings</Link>
          <Link to="#">Log Out</Link>
        </List>
      </Card>
      <MobileSidebar />
    </>
  );
}
function MobileSidebar() {
  const [mobileOpen, setOpen] = useState(false);

  return (
    <div className="block md:hidden">
      <ArrowRightCircleIcon
        style={mobileOpen ? { display: "none" } : { display: "block" }}
        onClick={() => setOpen(true)}
        height="24px"
      />

      <Card
        color="white"
        className="top-2  h-[calc(100vh-82px)] w-[calc(100vw-82px)] relative p-4 shadow-xl bg-gray-900 text-white shadow-blue-gray-900/5"
        style={mobileOpen ? { display: "block" } : { display: "none" }}
      >
        <ArrowLeftCircleIcon
          onClick={() => setOpen(false)}
          height="24px"
          className="absolute bottom-0 top-5 right-[-10px]"
        />
        <div className="mb-2 p-4">
          <Typography variant="h5">Sidebar</Typography>
        </div>
        <List>
          <Link to="#" color="white">
            Dashboard
          </Link>
          <Link to="#">E-Commerce</Link>
          <Link to="#">Inbox</Link>
          <Link to="#">Profile</Link>
          <Link to="#">Settings</Link>
          <Link to="#">Log Out</Link>
        </List>
      </Card>
    </div>
  );
}
