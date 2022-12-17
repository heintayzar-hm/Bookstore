import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import categories from './categories';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const DropDown = ({ changeHandler, currentSelectName = 'Adventure' }) => {
  const data = categories.filter((category) => category.name === currentSelectName);
  const [selected, setSelected] = useState(categories[(data[0].id) - 1]);

  const selectHandler = (currentSelected) => {
    setSelected(currentSelected);
    changeHandler(currentSelected);
  };

  return (
    <Listbox value={selected} onChange={selectHandler}>
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
};

DropDown.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  currentSelectName: PropTypes.string.isRequired,
};
export default DropDown;
