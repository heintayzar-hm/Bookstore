import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const categories = [
  {
    id: 1,
    name: 'Action',
  },
  {
    id: 2,
    name: 'Fiction',
  },
  {
    id: 3,
    name: 'Adventure',
  },
  {
    id: 4,
    name: 'Romance',
  },
  {
    id: 5,
    name: 'Mystery',
  },
  {
    id: 6,
    name: 'Science fiction',
  },
  {
    id: 7,
    name: 'Thriller',
  },
  {
    id: 8,
    name: 'Fantasy',
  },
  {
    id: 9,
    name: 'Horror',
  },
  {
    id: 10,
    name: 'Self-help',
  },
  {
    id: 11,
    name: 'Business',
  },
  {
    id: 12,
    name: 'Cooking',
  },
  {
    id: 13,
    name: 'Travel',
  },
  {
    id: 14,
    name: 'Health',
  },
  {
    id: 15,
    name: 'Biography',
  },
  {
    id: 16,
    name: 'Memoir',
  },
  {
    id: 17,
    name: 'History',
  },
  {
    id: 18,
    name: 'Reference',
  },
  {
    id: 19,
    name: 'Textbook',
  },
  {
    id: 20,
    name: 'Poetry',
  },
  {
    id: 21,
    name: 'Religion',
  },
  {
    id: 22,
    name: 'Philosophy',
  },
  {
    id: 23,
    name: 'Parenting',
  },
  {
    id: 24,
    name: 'Crafts',
  },
  {
    id: 25,
    name: 'Art',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [selected, setSelected] = useState(categories[0]);
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative h-full">
            <Listbox.Button className="relative w-full h-full cursor-default rounded-md border border-gray-300 bg-white dark:bg-black py-2 pl-3 pr-10 text-left shadow-sm focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue sm:text-sm">
              <span className="flex items-center">
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute top-auto bottom-0 z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {categories.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) => classNames(
                      active ? 'text-white bg-blue' : 'text-gray-900 dark:text-white dark:bg-black',
                      'relative cursor-default select-none py-2 pl-3 pr-9',
                    )}
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-blue',
                              'absolute inset-y-0 right-0 flex items-center pr-4',
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
