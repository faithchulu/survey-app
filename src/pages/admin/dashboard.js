import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import SideNav from "../../assets/components/SideNav";
import GetStrated from "../../assets/components/getstarted";
import UsersTable from "../../assets/components/usersTable";
import BarChart from "../../assets/components/barchart";
import PieChart from "../../assets/components/piechart";
import Statscards from "../../assets/components/statscards";
import LineChart from "../../assets/components/linechart";
import {
 EllipsisHorizontalIcon,
} from "@heroicons/react/20/solid";

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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export default function Dashboard(){
return(
  <div>

<SideNav>
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
            <div> <GetStrated /> </div>
          </div>
</SideNav>

  </div>
)



}
