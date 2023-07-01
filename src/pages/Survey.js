import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/images/logo.png";

const navigation = [
  { name: "Home", href: "/home" },
  { name: "New Survey", href: "/createsurvey" },
  { name: "Previous Surveys", href: "/previoussurvey" },
  {
    name: "Data Visualization",
    href: "/visualization",
  },
];

export default function Survey() {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src={logo} alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/logout"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log Out <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="/home"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <form className="mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl mt-8">
            <h2 className="text-base font-semibold leading-7 text-gray-900 mt-8">
              Survey Title
            </h2>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder="  First Name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    placeholder="  Last Name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="  Email Address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="age"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Age
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="age"
                    id="age"
                    autoComplete="age"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Gender
                </label>
                <div className="mt-2">
                  <select
                    id="gender"
                    name="gender"
                    autoComplete="gender"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>I don't wish to say</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Branch
                </label>
                <div className="mt-2">
                  <select
                    id="branch"
                    name="branch"
                    autoComplete="branch-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Cairo</option>
                    <option>Pinacle</option>
                    <option>Lewanika</option>
                    <option>Kalingalinga</option>
                    <option>Manda Hill</option>
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <fieldset className="mt-6">
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    How frequently do you visit our supermarket?
                  </legend>

                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="never"
                        name="never"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="never"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Never
                      </label>
                    </div>

                    <div className="flex items-center gap-x-3">
                      <input
                        id="rarely"
                        name="rarely"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="rarely"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Rarely
                      </label>
                    </div>

                    <div className="flex items-center gap-x-3">
                      <input
                        id="sometimes"
                        name="sometimes"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="sometimes"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Sometimes
                      </label>
                    </div>

                    <div className="flex items-center gap-x-3">
                      <input
                        id="often"
                        name="often"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="often"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Often
                      </label>
                    </div>

                    <div className="flex items-center gap-x-3">
                      <input
                        id="always"
                        name="always"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="always"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Always
                      </label>
                    </div>
                  </div>
                </fieldset>

                <fieldset className="mt-6">
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    How satisfied are you with the overall shopping experience
                    at our supermarket?
                  </legend>

                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="very-satisfied"
                        name="satisifaction"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="very-satisfied"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Very satisfied
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="satisfied"
                        name="satisifaction"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="satisfied"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        satisfied
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="neither"
                        name="satisifaction"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="neither"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Neither satisfied or Dissatisfied
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="dissatisfied"
                        name="satisifaction"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="dissatisfied"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Dissatisfied
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="very-dissatisfied"
                        name="satisifaction"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="very-dissatisfied"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Very Dissatisfied
                      </label>
                    </div>
                  </div>
                </fieldset>
                <fieldset className="mt-6">
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    What factors influence your decision to shop at our
                    supermarket? (Select all that apply)
                  </legend>

                  <div className="mt-6 space-y-6">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="convenient-location"
                          name="convenient-location"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="convenient-location"
                          className="font-medium text-gray-900"
                        >
                          Convenient Location
                        </label>
                      </div>
                    </div>

                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="competitive-prices"
                          name="competitive-prices"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="competitive-prices"
                          className="font-medium text-gray-900"
                        >
                          Competitive Prices
                        </label>
                      </div>
                    </div>

                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="wide-selection-of-products"
                          name="wide-selection-of-products"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="wide-selection-of-products"
                          className="font-medium text-gray-900"
                        >
                          Wide selection of products
                        </label>
                      </div>
                    </div>

                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="quality-of-products"
                          name="quality-of-products"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="quality-of-products"
                          className="font-medium text-gray-900"
                        >
                          Quality of products
                        </label>
                      </div>
                    </div>

                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="friendly-and-helpful-staff"
                          name="friendly-and-helpful-staff"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="friendly-and-helpful-staff"
                          className="font-medium text-gray-900"
                        >
                          Friendly and helpful staff
                        </label>
                      </div>
                    </div>

                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="clean-and-well-maintained-store"
                          name="clean-and-well-maintained-store"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="clean-and-well-maintained-store"
                          className="font-medium text-gray-900"
                        >
                          Clean and well maintained store
                        </label>
                      </div>
                    </div>

                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="promotional-offers-and-discounts"
                          name="promotional-offers-and-discounts"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="promotional-offers-and-discounts"
                          className="font-medium text-gray-900"
                        >
                          Promotional offers and discounts
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>

                <fieldset className="mt-6">
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    How would you rate the cleanliness and organization of our
                    supermarket?
                  </legend>

                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="very-clean"
                        name="very-clean"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="very-clean"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Very clean
                      </label>
                    </div>

                    <div className="flex items-center gap-x-3">
                      <input
                        id="clean"
                        name="clean"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="clean"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Clean
                      </label>
                    </div>

                    <div className="flex items-center gap-x-3">
                      <input
                        id="dirty"
                        name="dirty"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="dirty"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Dirty
                      </label>
                    </div>

                    <div className="flex items-center gap-x-3">
                      <input
                        id="very-dirty"
                        name="very-dirty"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="very-dirty"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Very Dirty
                      </label>
                    </div>
                  </div>
                </fieldset>

                <div class=" mt-6 col-span-full">
                  <label
                    for="specific-products"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Are there any specific products or brands that you would
                    like to see in our supermarket?
                  </label>
                  <div class="mt-2">
                    <textarea
                      id="specific-products"
                      name="specific-products"
                      rows="2"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ></textarea>
                  </div>
                </div>

                <fieldset className="mt-6">
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    How satisfied are you with the availability of fresh produce
                    in our supermarket?
                  </legend>

                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="very-satisfied"
                        name="satisifaction"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="very-satisfied"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Very satisfied
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="satisfied"
                        name="satisifaction"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="satisfied"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        satisfied
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="neither"
                        name="satisifaction"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="neither"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Neither satisfied or Dissatisfied
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="dissatisfied"
                        name="satisifaction"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="dissatisfied"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Dissatisfied
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="very-dissatisfied"
                        name="satisifaction"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="very-dissatisfied"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Very Dissatisfied
                      </label>
                    </div>
                  </div>
                </fieldset>

                <fieldset className="mt-6">
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    Do you find our supermarket's pricing to be competitive
                    compared to other supermarkets in the area?
                  </legend>

                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="yes"
                        name="yes"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="yes"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="no"
                        name="no"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="no"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </fieldset>

                <fieldset className="mt-6">
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    How likely are you to recommend our supermarket to a friend
                    or family member?
                  </legend>

                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="likely"
                        name="likely"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="likely"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Likely
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="not-likely"
                        name="not-likely"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="not-likely"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Not Likely
                      </label>
                    </div>
                  </div>
                </fieldset>

                <fieldset className="mt-6">
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    What is your preferred payment method when shopping at our
                    supermarket?
                  </legend>

                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="cash"
                        name="cash"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="cash"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Cash
                      </label>
                    </div>

                    <div className="flex items-center gap-x-3">
                      <input
                        id="cards"
                        name="cards"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="cards"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Credit/Debit cards
                      </label>
                    </div>

                    <div className="flex items-center gap-x-3">
                      <input
                        id="mobile"
                        name="mobile"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="mobile"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Mobile payment apps
                      </label>
                    </div>
                  </div>
                </fieldset>

                <div class=" mt-6 col-span-full">
                  <label
                    for="improvements"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Are there any improvements or changes you would suggest for
                    our supermarket?
                  </label>
                  <div class="mt-2">
                    <textarea
                      id="improvements"
                      name="improvements"
                      rows="2"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ></textarea>
                  </div>
                </div>

                <fieldset className="mt-6">
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    Would you be interested in participating in a customer
                    loyalty program if one were offered?
                  </legend>

                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="yes"
                        name="yes"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="yes"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="no"
                        name="no"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="no"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </fieldset>

                <fieldset className="mt-6">
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    How would you rate the customer service provided by our
                    supermarket staff?
                  </legend>

                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="excellent"
                        name="excellent"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="excellent"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Excellent
                      </label>
                    </div>

                    <div className="flex items-center gap-x-3">
                      <input
                        id="good"
                        name="good"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="good"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Good
                      </label>
                    </div>

                    <div className="flex items-center gap-x-3">
                      <input
                        id="okay"
                        name="okay"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="okay"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Okay
                      </label>
                    </div>

                    <div className="flex items-center gap-x-3">
                      <input
                        id="bad"
                        name="bad"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="bad"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Bad
                      </label>
                    </div>

                    <div className="flex items-center gap-x-3">
                      <input
                        id="poor"
                        name="poor"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="poor"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Poor
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
