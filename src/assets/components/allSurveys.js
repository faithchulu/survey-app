
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
                  {/* <dd className="text-gray-500"> {data.description}</dd> */}
                </div>
                <div>
                  <dt className="text-gray-500">Created: </dt>
                  <dd className="text-gray-700">
                    <time dateTime={data.creationDate}>
                      {data.creationDate}
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
          ))}
        </ul>
      </div>
    </div>
  );
}