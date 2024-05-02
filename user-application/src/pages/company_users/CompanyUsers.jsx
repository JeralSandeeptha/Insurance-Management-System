import { Fragment, useState, useContext, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../../assets/img/icon/icon-02-primary.png';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import baseURL from '../../api/baseURL';
import axios from 'axios';
import './CompanyUsers.css';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    '',
}
const navigation = [
  { name: 'Dashboard', href: '/company/dashboard', current: false },
  { name: 'Plans Management', href: '/company/dashboard/plans', current: false },
  { name: 'Users Management', href: '/company/dashboard/users', current: true },
]
const userNavigation = [
  { name: 'Sign out', href: '' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CompanyPlans() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [employees, setEmployees] = useState([]);

  const { user } = useContext(AppContext);
  const { company } = user;

  const reset = () => {
    setEmail();
    setName();
    setPassword();
  }

  const registerEmployee = (e) => {
    e.preventDefault();
    try {
      console.log({
        name: name,
        email: email,
        password: password,
        companyId: company
      });
      axios.post(`${baseURL}/employee`, {
        name: name,
        email: email,
        password: password,
        companyId: company
      })
        .then((res) => {
          console.log(res.data.data);
          setEmail('');
          setName('');
          setPassword('');
          getEmployees();
          alert('Employee added');
        })
        .catch((error) => {
          console.log(error);
          alert('Please fill required feiled');
        });
    } catch (error) {
      console.log(error);
    }
  }

  const getEmployees = () => {
    try {
      axios.get(`${baseURL}/employee/getByComanyId/${company}`) 
        .then((res) => {
          console.log(res.data.data);
          setEmployees(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getEmployees();
  });

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src={logo}
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            style={{
                              textDecoration: 'none'
                            }}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src="https://cdn-icons-png.flaticon.com/512/10337/10337609.png" alt="" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <Link
                                    to={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{user.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* dashboard */}
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div style={{display:'grid', gridTemplateColumns:'2fr 1fr'}} className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="left" style={{paddingRight: '20px'}}>
              {
                employees.length < 0 ? (
                  <h5>No Employee Data</h5>
                ) : (
                  employees.map((employee, index) => {
                    return (
                      <li class="employee-card flex justify-between gap-x-6 px-5" key={index}>
                        <div class="flex min-w-0 gap-x-4">
                          <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile.png" alt=""/>
                          <div class="min-w-0 flex-auto">
                            <p class="text-sm font-semibold leading-6 text-gray-900">{employee.name}</p>
                            <p class="mt-1 truncate text-xs leading-5 text-gray-500">{employee.email}</p>
                          </div>
                        </div>
                        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                          <p class="text-sm leading-6 text-gray-900">Employee : {employee._id}</p>
                          <p class="mt-1 text-xs leading-5 text-gray-500">Joined Date : <time datetime="2023-01-23T13:23Z">{employee.createdAt}</time></p>
                        </div>
                      </li>
                    )
                  })
                )
              }
            </div>
            <div className="right">
              <h3 style={{marginBottom: '20px'}}>Add Employee</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                  <div className="mt-2">
                    <input value={name} onChange={(e) => {
                      console.log(e.target.value);
                      setName(e.target.value);
                    }} id="email" name="email" type="text" autocomplete="email" required className="text-field-custom block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                  <div className="mt-2">
                    <input value={email} onChange={(e) => {
                      console.log(e.target.value);
                      setEmail(e.target.value);
                    }} id="email" name="email" type="email" autocomplete="email" required className="text-field-custom block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                  </div>
                  <div className="mt-2">
                    <input value={password} onChange={(e) => {
                      console.log(e.target.value);
                      setPassword(e.target.value);
                    }} id="password" name="password" type="password" autocomplete="current-password" required className="text-field-custom block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div>
                  <button onClick={registerEmployee} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Employee</button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
