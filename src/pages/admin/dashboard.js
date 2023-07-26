
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  EllipsisHorizontalIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import Statscards from "../../assets/components/statscards";
import LineChart from "../../assets/components/linechart";
import PieChart from "../../assets/components/piechart";
import BarChart from "../../assets/components/barchart";
import DescriptionList from "../../assets/components/descriptionlist";
import UsersTable from "../../assets/components/usersTable";
import GetStrated from "../../assets/components/getstarted";

const surveys = [
  {
    id: 1,
    name: "Survey1",
    imageUrl: "https://tailwindui.com/img/logos/48x48/tuple.svg",
    dateCreated: {
      date: "December 13, 2022",
      dateTime: "2022-12-13",
      creator: "Pumulo Selwa",
      status: "Overdue",
    },
  },
];

const navigation = [
  { name: "Home", href: "/dashboard", icon: HomeIcon, current: true,},
  {
    name: "Create Survey",
    href: "/createsurvey",
    icon: UsersIcon,
    current: false,
  },
  { name: "View Past Surveys", href: "/previoussurvey", icon: CalendarIcon, current: false },
  { name: "Reports", href: "/visualization", icon: ChartPieIcon, current: false },
];

const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "/logout" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}



export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("home");
  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
  };

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  Sidebar component, swap this element with another sidebar if
                  you like
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? "bg-gray-800 text-white"
                                      : "text-gray-400 hover:text-white hover:bg-gray-800",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                  )}
                                >
                                  <item.icon
                                    className="h-6 w-6 shrink-0"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="mt-auto">
                          <a
                            href="#"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                          >
                            <Cog6ToothIcon
                              className="h-6 w-6 shrink-0"
                              aria-hidden="true"
                            />
                            Settings
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-800 text-white"
                              : "text-gray-400 hover:text-white hover:bg-gray-800",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                          )}
                        >
                          {/* href="#" className=
                          {`text-gray-600 w-full ${
                            activeNavItem === "home"
                              ? "text-bold"
                              : "text-white"
                          } hover:bg-gray-800 text-white`}
                          onClick={() => handleNavItemClick("home")} */}
                          <item.icon
                            className="h-6 w-6 shrink-0"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                  >
                    <Cog6ToothIcon
                      className="h-6 w-6 shrink-0"
                      aria-hidden="true"
                    />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-black px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div
              className="h-6 w-px bg-gray-900/10 lg:hidden"
              aria-hidden="true"
            />

            <div className="flex flex-row content-end flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button
                  type="button"
                  className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Separator */}
                <div
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
                  aria-hidden="true"
                />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full bg-gray-50"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span
                        className="ml-4 text-sm font-semibold leading-6 text-white"
                        aria-hidden="true"
                      >
                        Welcome user@ProBase.com!
                      </span>
                      <ChevronDownIcon
                        className="ml-2 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? "bg-gray-50" : "",
                                "block px-3 py-1 text-sm leading-6 text-gray-900"
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main className="py-10 bg-slate-100 min-h-screen">
            <div className="relative isolate  pt-4 ">
                
                  <h3 className=" font-bold m-6 tracking-tight text-gray-900 sm:text-3xl">
                    Sumary for the last 30 days
                  </h3>

              {/* Statistics card group */}
              <div>
                {" "}
                <Statscards />
              </div>

              {/* line chart and piechart grid */}
              <div className=" grid grid-cols-2">
                <div className="p-6 m-6 bg-white rounded-xl shadow-xl">
                  <LineChart />
                </div>
                <div className="p-6 m-6 bg-white rounded-xl shadow-xl">
                  <PieChart />
                </div>
              </div>

              {/* Barchart and table group */}
              <div className="grid grid-cols-4 rounded-xl">
                <div className="p-6 m-6 bg-white rounded-xl col-span-3 shadow-xl">
                  <BarChart />
                </div>
                <div className="m-6 col-span-1 shadow-xl">
                  <div className="mx-auto max-w-2xl min-h-full">
                    <ul
                      role="list"
                      className="grid grid-cols-1 gap-x-6 gap-y-8 xl:gap-x-8"
                    >
                      {surveys.map((client) => (
                        <li
                          key={client.id}
                          className="overflow-hidden rounded-xl border border-gray-200"
                        >
                          <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-white p-4">
                            <img
                              src={client.imageUrl}
                              alt={client.name}
                              className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
                            />
                            <div className="text-sm font-medium leading-6 text-gray-900">
                              {client.name}
                            </div>
                            <Menu as="div" className="relative ml-auto">
                              <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Open options</span>
                                <EllipsisHorizontalIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </Menu.Button>
                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                              >
                                <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                  <Menu.Item>
                                    {({ active }) => (
                                      <a
                                        href="#"
                                        className={classNames(
                                          active ? "bg-gray-50" : "",
                                          "block px-3 py-1 text-sm leading-6 text-gray-900"
                                        )}
                                      >
                                        View
                                        <span className="sr-only">
                                          , {client.name}
                                        </span>
                                      </a>
                                    )}
                                  </Menu.Item>

                                  <Menu.Item>
                                    {({ active }) => (
                                      <a
                                        href="#"
                                        className={classNames(
                                          active ? "bg-gray-50" : "",
                                          "block px-3 py-1 text-sm leading-6 text-gray-900"
                                        )}
                                      >
                                        Delete
                                        <span className="sr-only">
                                          , {client.name}
                                        </span>
                                      </a>
                                    )}
                                  </Menu.Item>
                                </Menu.Items>
                              </Transition>
                            </Menu>
                          </div>
                          <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                            <div className="flex justify-between gap-x-4 py-3">
                              <dt className="text-gray-500">Created: </dt>
                              <dd className="text-gray-700">
                                <time dateTime={client.dateCreated.dateTime}>
                                  {client.dateCreated.date}
                                </time>
                              </dd>
                            </div>
                            <div className="flex justify-between gap-x-4 py-3">
                              <dt className="text-gray-500">creator</dt>
                              <dd className="flex items-start gap-x-2">
                                <div className="font-medium text-gray-900">
                                  {client.dateCreated.creator}
                                </div>
                                {/* <div
                              className={classNames(
                                statuses[client.dateCreated.status],
                                "rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset"
                              )}
                            >
                              {client.dateCreated.status}
                            </div> */}
                              </dd>
                            </div>
                          </dl>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              

              {/*dynamic table*/}
              <div className="m-6 rounded-md ">
                <UsersTable /> 
              </div>
              <div> <GetStrated /></div>
            </div> 
          </main>
        </div>
      </div>
    </>
  );
}
