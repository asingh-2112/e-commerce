// import { useState } from "react";
// import {
//   Dialog,
//   DialogBackdrop,
//   DialogPanel,
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuItems,
// } from "@headlessui/react";
// import { XMarkIcon } from "@heroicons/react/24/outline";
// import {
//   ChevronDownIcon,
//   FunnelIcon,
//   MinusIcon,
//   PlusIcon,
//   Squares2X2Icon,
// } from "@heroicons/react/20/solid";
// import ProductCard from "../productCard/ProductCard";
// import { mens_kurta } from "../../../../data/mens_kurta";
// import { filters, singleFilter } from "./FilterData";
// import {
//   FormControl,
//   FormControlLabel,
//   FormLabel,
//   Radio,
//   RadioGroup,
// } from "@mui/material";
// import FilterListIcon from "@mui/icons-material/FilterList";
// import { useLocation, useNavigate } from "react-router-dom";

// const sortOptions = [
//   { name: "Price: Low to High", href: "#", current: false },
//   { name: "Price: High to Low", href: "#", current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Product() {
//   const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleFilter = (value, sectionId) => {
//     const searchParams = new URLSearchParams(location.search);
//     let filterValue = searchParams.getAll(sectionId);

//     if (filterValue.length > 0 && filterValue[0].split(",").includes(value)) {
//       filterValue = filterValue[0].split(",").filter((item) => item !== value);
//       if (filterValue.length === 0) {
//         searchParams.delete(sectionId);
//       }
//     } else {
//       filterValue.push(value);
//     }

//     if (filterValue.length > 0) {
//       searchParams.set(sectionId, filterValue.join(","));
//     }
//     const query = searchParams.toString();
//     navigate({ search: `?${query}` });
//   };

//   const handleRadioFilterChange = (e, sectionId) => {
//     const searchParams = new URLSearchParams(location.search);
//     searchParams.set(sectionId, e.target.value);
//     const query = searchParams.toString();
//     navigate({ search: `?${query}` });
//   };

//   return (
//     <div className="bg-white">
//       <div>
//         {/* Mobile filter dialog */}
//         <Dialog
//           open={mobileFiltersOpen}
//           onClose={setMobileFiltersOpen}
//           className="relative z-50 lg:hidden" // Increased z-index to 50
//         >
//           <DialogBackdrop
//             transition
//             className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
//           />

//           <div className="fixed inset-0 z-40 flex">
//             <DialogPanel
//               transition
//               className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
//             >
//               <div className="flex items-center justify-between px-4">
//                 <h2 className="text-lg font-medium text-gray-900">Filters</h2>
//                 <button
//                   type="button"
//                   onClick={() => setMobileFiltersOpen(false)}
//                   className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
//                 >
//                   <span className="sr-only">Close menu</span>
//                   <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                 </button>
//               </div>

//               {/* Filters */}
//               <form className="mt-4 border-t border-gray-200">
//                 {filters.map((section) => (
//                   <Disclosure
//                     key={section.id}
//                     as="div"
//                     className="border-t border-gray-200 px-4 py-6"
//                   >
//                     <h3 className="-mx-2 -my-3 flow-root">
//                       <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
//                         <span className="font-medium text-gray-900">
//                           {section.name}
//                         </span>
//                         <span className="ml-6 flex items-center">
//                           <PlusIcon
//                             aria-hidden="true"
//                             className="h-5 w-5 group-data-open:hidden"
//                           />
//                           <MinusIcon
//                             aria-hidden="true"
//                             className="h-5 w-5 group-not-data-open:hidden"
//                           />
//                         </span>
//                       </DisclosureButton>
//                     </h3>
//                     <DisclosurePanel className="pt-6">
//                       <div className="space-y-6">
//                         {section.options.map((option, optionIdx) => (
//                           <div key={option.value} className="flex items-center">
//                             {section.type === "radio" ? (
//                               <FormControlLabel
//                                 control={<Radio />}
//                                 label={option.label}
//                                 value={option.value}
//                                 onChange={(e) =>
//                                   handleRadioFilterChange(e, section.id)
//                                 }
//                               />
//                             ) : (
//                               <>
//                                 <input
//                                   id={`filter-mobile-${section.id}-${optionIdx}`}
//                                   name={`${section.id}[]`}
//                                   type="checkbox"
//                                   onChange={() =>
//                                     handleFilter(option.value, section.id)
//                                   }
//                                   className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                                 />
//                                 <label
//                                   htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
//                                   className="ml-3 min-w-0 flex-1 text-gray-500"
//                                 >
//                                   {option.label}
//                                 </label>
//                               </>
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                     </DisclosurePanel>
//                   </Disclosure>
//                 ))}
//                 {singleFilter.map((section) => (
//                   <Disclosure
//                     key={section.id}
//                     as="div"
//                     className="border-t border-gray-200 px-4 py-6"
//                   >
//                     <h3 className="-mx-2 -my-3 flow-root">
//                       <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
//                         <span className="font-medium text-gray-900">
//                           {section.name}
//                         </span>
//                         <span className="ml-6 flex items-center">
//                           <PlusIcon
//                             aria-hidden="true"
//                             className="h-5 w-5 group-data-open:hidden"
//                           />
//                           <MinusIcon
//                             aria-hidden="true"
//                             className="h-5 w-5 group-not-data-open:hidden"
//                           />
//                         </span>
//                       </DisclosureButton>
//                     </h3>
//                     <DisclosurePanel className="pt-6">
//                       <FormControl>
//                         <RadioGroup
//                           aria-labelledby="demo-radio-buttons-group-label"
//                           name="radio-buttons-group"
//                         >
//                           {section.options.map((option) => (
//                             <FormControlLabel
//                               key={option.value}
//                               value={option.value}
//                               control={<Radio />}
//                               label={option.label}
//                               onChange={(e) =>
//                                 handleRadioFilterChange(e, section.id)
//                               }
//                             />
//                           ))}
//                         </RadioGroup>
//                       </FormControl>
//                     </DisclosurePanel>
//                   </Disclosure>
//                 ))}
//               </form>
//             </DialogPanel>
//           </div>
//         </Dialog>

//         <main className="mx-auto px-4 sm:px-6 lg:px-20">
//           <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
//             <h1 className="text-4xl font-bold tracking-tight text-gray-900">
//               New Arrivals
//             </h1>

//             <div className="flex items-center">
//               <Menu as="div" className="relative inline-block text-left">
//                 <div>
//                   <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
//                     Sort
//                     <ChevronDownIcon
//                       aria-hidden="true"
//                       className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
//                     />
//                   </MenuButton>
//                 </div>

//                 <MenuItems
//                   transition
//                   className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
//                 >
//                   <div className="py-1">
//                     {sortOptions.map((option) => (
//                       <MenuItem key={option.name}>
//                         {({ focus }) => (
//                           <a
//                             href={option.href}
//                             className={classNames(
//                               option.current
//                                 ? "font-medium text-gray-900"
//                                 : "text-gray-500",
//                               focus ? "bg-gray-100" : "",
//                               "block px-4 py-2 text-sm"
//                             )}
//                           >
//                             {option.name}
//                           </a>
//                         )}
//                       </MenuItem>
//                     ))}
//                   </div>
//                 </MenuItems>
//               </Menu>

//               <button
//                 type="button"
//                 className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
//               >
//                 <span className="sr-only">View grid</span>
//                 <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setMobileFiltersOpen(true)}
//                 className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
//               >
//                 <span className="sr-only">Filters</span>
//                 <FunnelIcon className="h-5 w-5" aria-hidden="true" />
//               </button>
//             </div>
//           </div>

//           <section aria-labelledby="products-heading" className="pt-6 pb-24">
//             <h2 id="products-heading" className="sr-only">
//               Products
//             </h2>

//             <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
//               {/* Filters - Desktop */}
//               <div className="hidden lg:block">
//                 <div className="py-10 flex justify-between items-center">
//                   <h1 className="text-lg opacity-50 font-bold">Filters</h1>
//                   <FilterListIcon />
//                 </div>
//                 <form>
//                   {filters.map((section) => (
//                     <Disclosure
//                       key={section.id}
//                       as="div"
//                       className="border-b border-gray-200 py-6"
//                     >
//                       <h3 className="-my-3 flow-root">
//                         <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
//                           <span className="font-medium text-gray-900">
//                             {section.name}
//                           </span>
//                           <span className="ml-6 flex items-center">
//                             <PlusIcon
//                               aria-hidden="true"
//                               className="h-5 w-5 group-data-open:hidden"
//                             />
//                             <MinusIcon
//                               aria-hidden="true"
//                               className="h-5 w-5 group-not-data-open:hidden"
//                             />
//                           </span>
//                         </DisclosureButton>
//                       </h3>
//                       <DisclosurePanel className="pt-6">
//                         <div className="space-y-4">
//                           {section.options.map((option, optionIdx) => (
//                             <div
//                               key={option.value}
//                               className="flex items-center"
//                             >
//                               <input
//                                 id={`filter-${section.id}-${optionIdx}`}
//                                 name={`${section.id}[]`}
//                                 type="checkbox"
//                                 onChange={() =>
//                                   handleFilter(option.value, section.id)
//                                 }
//                                 className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                               />
//                               <label
//                                 htmlFor={`filter-${section.id}-${optionIdx}`}
//                                 className="ml-3 text-sm text-gray-600"
//                               >
//                                 {option.label}
//                               </label>
//                             </div>
//                           ))}
//                         </div>
//                       </DisclosurePanel>
//                     </Disclosure>
//                   ))}
//                   {singleFilter.map((section) => (
//                     <Disclosure
//                       key={section.id}
//                       as="div"
//                       className="border-b border-gray-200 py-6"
//                     >
//                       <h3 className="-my-3 flow-root">
//                         <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
//                           <FormLabel
//                             sx={{ color: "black" }}
//                             className="text-gray-900"
//                             id="demo-radio-buttons-group-label"
//                           >
//                             {section.name}
//                           </FormLabel>
//                           <span className="ml-6 flex items-center">
//                             <PlusIcon
//                               aria-hidden="true"
//                               className="h-5 w-5 group-data-open:hidden"
//                             />
//                             <MinusIcon
//                               aria-hidden="true"
//                               className="h-5 w-5 group-not-data-open:hidden"
//                             />
//                           </span>
//                         </DisclosureButton>
//                       </h3>
//                       <DisclosurePanel className="pt-6">
//                         <FormControl>
//                           <RadioGroup
//                             aria-labelledby="demo-radio-buttons-group-label"
//                             name="radio-buttons-group"
//                           >
//                             {section.options.map((option) => (
//                               <FormControlLabel
//                                 key={option.value}
//                                 value={option.value}
//                                 control={<Radio />}
//                                 label={option.label}
//                                 onChange={(e) =>
//                                   handleRadioFilterChange(e, section.id)
//                                 }
//                               />
//                             ))}
//                           </RadioGroup>
//                         </FormControl>
//                       </DisclosurePanel>
//                     </Disclosure>
//                   ))}
//                 </form>
//               </div>

//               {/* Product grid */}
//               <div className="lg:col-span-4 w-full">
//                 <div className="flex flex-wrap justify-center bg-white py-5">
//                   {mens_kurta.map((item) => (
//                     <ProductCard key={item.id} product={item} />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { XMarkIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import ProductCard from "../productCard/ProductCard";
import { mens_kurta } from "../../../../data/mens_kurta";
import { filters, singleFilter } from "./FilterData";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Button,
  Chip,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useLocation, useNavigate } from "react-router-dom";

const sortOptions = [
  { name: "Price: Low to High", value: "price_asc" },
  { name: "Price: High to Low", value: "price_desc" },
];

export default function Product() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  // Initialize active filters from URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const filters = {};

    searchParams.forEach((value, key) => {
      filters[key] = value.includes(",") ? value.split(",") : [value];
    });

    setActiveFilters(filters);
  }, [location.search]);

  const handleFilter = (value, sectionId) => {
    const searchParams = new URLSearchParams(location.search);
    let filterValue = searchParams.getAll(sectionId);

    if (filterValue.length > 0 && filterValue[0].split(",").includes(value)) {
      filterValue = filterValue[0].split(",").filter((item) => item !== value);
      if (filterValue.length === 0) {
        searchParams.delete(sectionId);
      }
    } else {
      filterValue.push(value);
    }

    if (filterValue.length > 0) {
      searchParams.set(sectionId, filterValue.join(","));
    }
    navigate({ search: `?${searchParams.toString()}` });
  };

  const handleRadioFilterChange = (e, sectionId) => {
    const searchParams = new URLSearchParams(location.search);
    const currentValue = searchParams.get(sectionId);

    if (currentValue === e.target.value) {
      searchParams.delete(sectionId);
    } else {
      searchParams.set(sectionId, e.target.value);
    }

    navigate({ search: `?${searchParams.toString()}` });
  };

  const handleSortChange = (value) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("sort", value);
    navigate({ search: `?${searchParams.toString()}` });
  };

  const clearAllFilters = () => {
    navigate({ search: "" });
  };

  const removeFilter = (sectionId, value) => {
    const searchParams = new URLSearchParams(location.search);
    let filterValue = searchParams.getAll(sectionId);

    if (filterValue.length > 0) {
      filterValue = filterValue[0].split(",").filter((item) => item !== value);
      if (filterValue.length === 0) {
        searchParams.delete(sectionId);
      } else {
        searchParams.set(sectionId, filterValue.join(","));
      }
      navigate({ search: `?${searchParams.toString()}` });
    }
  };

  // Check if any filters are active
  const hasActiveFilters = Object.keys(activeFilters).length > 0;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div>
        {/* Mobile filter dialog */}
        <Dialog
          open={mobileFiltersOpen}
          onClose={setMobileFiltersOpen}
          className="relative z-50 lg:hidden"
        >
          <DialogBackdrop className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
          <div className="fixed inset-0 z-40 flex">
            <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white shadow-xl">
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-700"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>

              <form className="p-4 space-y-6">
                {filters.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-b border-gray-200 pb-6"
                  >
                    <DisclosureButton className="flex w-full items-center justify-between py-3 text-gray-700">
                      <span className="font-medium">{section.name}</span>
                      <div className="w-5 h-5 flex items-center justify-center">
                        <PlusIcon className="h-5 w-5 group-data-open:hidden" />
                        <MinusIcon className="h-5 w-5 group-not-data-open:hidden" />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel className="pt-4">
                      <div className="space-y-3">
                        {section.options.map((option) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              id={`mobile-${section.id}-${option.value}`}
                              name={`${section.id}[]`}
                              type="checkbox"
                              checked={
                                activeFilters[section.id]?.includes(
                                  option.value
                                ) || false
                              }
                              onChange={() =>
                                handleFilter(option.value, section.id)
                              }
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`mobile-${section.id}-${option.value}`}
                              className="ml-3 text-sm text-gray-600"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
                {singleFilter.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-b border-gray-200 pb-6"
                  >
                    <DisclosureButton className="flex w-full items-center justify-between py-3 text-gray-700">
                      <span className="font-medium">{section.name}</span>
                      <div className="w-5 h-5 flex items-center justify-center">
                        <PlusIcon className="h-5 w-5 group-data-open:hidden" />
                        <MinusIcon className="h-5 w-5 group-not-data-open:hidden" />
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel className="pt-4">
                      <RadioGroup
                        value={activeFilters[section.id]?.[0] || ""}
                        onChange={(e) => handleRadioFilterChange(e, section.id)}
                      >
                        {section.options.map((option) => (
                          <FormControlLabel
                            key={option.value}
                            value={option.value}
                            control={<Radio />}
                            label={option.label}
                            className="text-sm"
                          />
                        ))}
                      </RadioGroup>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>

              <div className="sticky bottom-0 bg-white border-t p-4">
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  Apply Filters
                </Button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto px-4 sm:px-6 lg:px-20 ">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-8 pb-6">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              New Arrivals
            </h1>

            <div className="flex items-center space-x-4">
              <Menu as="div" className="relative">
                <MenuButton className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400" />
                </MenuButton>
                <MenuItems className="absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.value}>
                        {({ focus }) => (
                          <button
                            onClick={() => handleSortChange(option.value)}
                            className={`block w-full px-4 py-2 text-left text-sm ${
                              focus ? "bg-gray-100" : ""
                            } ${
                              activeFilters.sort === option.value
                                ? "font-medium text-indigo-600"
                                : "text-gray-700"
                            }`}
                          >
                            {option.name}
                          </button>
                        )}
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <FunnelIcon className="h-5 w-5" />
                <span className="sr-only">Filters</span>
              </button>
            </div>
          </div>

          {/* Active filters */}
          {hasActiveFilters && (
            <div className="bg-white p-4 rounded-lg shadow-sm mt-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-gray-700">
                  Filters:
                </span>
                {Object.entries(activeFilters).map(([sectionId, values]) =>
                  values.map((value) => (
                    <Chip
                      key={`${sectionId}-${value}`}
                      label={
                        [...filters, ...singleFilter]
                          .find((s) => s.id === sectionId)
                          ?.options.find((o) => o.value === value)?.label ||
                        value
                      }
                      onDelete={() => removeFilter(sectionId, value)}
                      className="m-1"
                    />
                  ))
                )}
                <Button
                  size="small"
                  startIcon={<ArrowPathIcon className="h-4 w-4" />}
                  onClick={clearAllFilters}
                  className="ml-2"
                >
                  Clear all
                </Button>
              </div>
            </div>
          )}

          <section aria-labelledby="products-heading" className="pt-6 pb-12">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-5">
              {/* Desktop filters */}
              <div className="hidden lg:block">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Filters
                  </h2>
                  {hasActiveFilters && (
                    <button
                      onClick={clearAllFilters}
                      className="text-sm text-indigo-600 hover:text-indigo-500"
                    >
                      Clear all
                    </button>
                  )}
                </div>

                <div className="space-y-6">
                  {filters.map((section) => (
                    <Disclosure
                      key={section.id}
                      as="div"
                      className="border-b border-gray-200 pb-6"
                    >
                      <DisclosureButton className="flex w-full items-center justify-between py-3 text-gray-700">
                        <span className="font-medium">{section.name}</span>
                        <div className="w-5 h-5 flex items-center justify-center">
                          <PlusIcon className="h-5 w-5 group-data-open:hidden" />
                          <MinusIcon className="h-5 w-5 group-not-data-open:hidden" />
                        </div>
                      </DisclosureButton>
                      <DisclosurePanel className="pt-4">
                        <div className="space-y-3">
                          {section.options.map((option) => (
                            <div
                              key={option.value}
                              className="flex items-center"
                            >
                              <input
                                id={`${section.id}-${option.value}`}
                                name={`${section.id}[]`}
                                type="checkbox"
                                checked={
                                  activeFilters[section.id]?.includes(
                                    option.value
                                  ) || false
                                }
                                onChange={() =>
                                  handleFilter(option.value, section.id)
                                }
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={`${section.id}-${option.value}`}
                                className="ml-3 text-sm text-gray-600"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </DisclosurePanel>
                    </Disclosure>
                  ))}
                  {singleFilter.map((section) => (
                    <Disclosure
                      key={section.id}
                      as="div"
                      className="border-b border-gray-200 pb-6"
                    >
                      <DisclosureButton className="flex w-full items-center justify-between py-3 text-gray-700">
                        <span className="font-medium">{section.name}</span>
                        <div className="w-5 h-5 flex items-center justify-center">
                          <PlusIcon className="h-5 w-5 group-data-open:hidden" />
                          <MinusIcon className="h-5 w-5 group-not-data-open:hidden" />
                        </div>
                      </DisclosureButton>
                      <DisclosurePanel className="pt-4">
                        <RadioGroup
                          value={activeFilters[section.id]?.[0] || ""}
                          onChange={(e) =>
                            handleRadioFilterChange(e, section.id)
                          }
                        >
                          {section.options.map((option) => (
                            <FormControlLabel
                              key={option.value}
                              value={option.value}
                              control={<Radio />}
                              label={option.label}
                              className="text-sm"
                            />
                          ))}
                        </RadioGroup>
                      </DisclosurePanel>
                    </Disclosure>
                  ))}
                </div>
              </div>

              {/* Product grid - updated for 2 columns on mobile */}
              {/* Product grid with equal spacing */}
              <div className="lg:col-span-4">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 sm:px-4">
                  {mens_kurta.map((item) => (
                    <div key={item.id} className="flex justify-center">
                      <ProductCard
                        product={item}
                        className="w-full max-w-[160px]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
