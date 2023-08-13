import { Dialog, Menu, Transition } from "@headlessui/react";
import React from "react";
import axios from "axios";
import { Fragment, useState } from "react";
import { useEffect } from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AllSurveys() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/surveys")
      .then((res) => setData(res.data))
      .catch((err) =>
      console.log(err));
  }, []);


  return (
    <div>
      <div className="mx-auto max-w-2xl ">
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
        >{data.map((data) => (
          <Link to={`/survey/${data.id}`}>
            <li key={data.id} className="overflow-hidden rounded-xl border shadow-xl border-gray-200">
              
                <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-white p-4">
                  {/* <img
                    src={logo}
                    alt={data.title}
                    className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
                  /> */}
                  <div className="text-sm font-medium leading-6 text-gray-900">
                    {data.title}
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
                          <Link
                            to={`/survey/${data.id}`}
                            className={classNames(
                              active ? "bg-white" : "",
                              "block px-3 py-1 text-sm leading-6 text-gray-900"
                            )}
                          >
                            View
                            <span className="sr-only">, {data.title}</span>
                          </Link>
                        )}
                      </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-white" : "",
                                "block px-3 py-1 text-sm leading-6 text-gray-900"
                              )}
                            >
                              Delete
                              <span className="sr-only">, {data.name}</span>
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
                <dl className="-my-3 divide-y divide-gray-100 bg-white px-6 py-4 text-sm leading-6">
                  <div className="flex justify-between gap-x-4 py-3 bg-white">
                    <dt className="text-gray-500">Description: </dt>
                    <dd className="text-gray-500"> {data.description}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Created: </dt>
                    <dd className="text-gray-700">
                      <time dateTime={data.creation_date}>
                        {data.creation_date}
                      </time>
                    </dd>
                  </div>
                  <div className="flex justify-between gap-x-4 py-3">
                    <dt className="text-gray-500">creator</dt>
                    <dd className="flex items-start gap-x-2">
                      <div className="font-medium text-gray-900">
                        {data.username}
                      </div>
                    </dd>
                  </div>
                </dl>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
