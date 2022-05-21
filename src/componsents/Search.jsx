import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";
export const Search = () => {
  return (
    <div className="max-w-[1240px] lg:py-16 py-12 px-4 mx-auto">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 ">
          <div>
            <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
            <p className="py-4">
              Come experience the very pinnacle of luxury Caribbean
              all-inclusive vacations for couples at BEACHES Resorts. Our luxury
              beach resorts, set along the most gorgeous tropical settings and
              exquisite beaches in Saint Lucia, Jamaica, Antigua, The Bahamas,
              Grenada, Barbados and Curaçao, feature unlimited gourmet dining,
              unique bars serving premium liquors and wines, and every land and
              water sport, including complimentary green fees at our golf
              resorts and certified scuba diving at most resorts. If you are
              planning a wedding, BEACHES is the leader in Caribbean destination
              weddings and honeymoon packages.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 py-4">
            <div className="flex flex-col lg:flex-row justify-center items-center text-center lg:text-left">
              <button>
                <RiCustomerService2Fill size={50} />
              </button>
              <div className="px-4 ">
                <h3 className="py-2">LEADING SERVICES</h3>
                <p className="py-1 uppercase font-semibold">
                  all-inclusive company for 20 years in a-row
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center text-center lg:text-left">
              <button>
                <MdOutlineTravelExplore size={50} />
              </button>
              <div className="px-4">
                <h3 className="py-2">Automated bookings</h3>
                <p className="py-1 uppercase font-semibold">
                  all-inclusive company for 20 years in a-row
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border text-center">
            <p className="uppercase pt-2">get an additional 10% off</p>
            <p className="uppercase py-4">12 hours left</p>
            <p className="uppercase bg-gray-800 text-gray-200 py-2">
              book now and save
            </p>
          </div>
          <form className="w-full">
            <div className="my-4 flex flex-col tex-center">
              <label className="text-gray-900 text-xl">Destination</label>
              <select
                name=""
                id=""
                className="border-2 my-2 rounded-sm p-2 focus:outline-none"
              >
                <option value="">maldives</option>
                <option value="">Turkey</option>
                <option value="">Brazil</option>
                <option value="">London</option>
              </select>
              <div className="py-2 flex flex-col">
              <label>Check IN</label>
              <input type="date" name="" id="" className="border-2 p-2 my-2 focus:outline-none"/>
              </div>
              <div className="py-2 flex flex-col">
              <label>Check Out</label>
              <input type="date" name="" id="" className="border-2 p-2 my-2 focus:outline-none"/>
              </div>
                <button className='w-full my-4'>Rates & Availabilities</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
