import React from "react";
import { useSelector } from "react-redux";
import { selectAllAssets } from "../utils/cryptoSlice";
import CryptoTableRow from "./CryptoTableRow";

const CryptoTable = () => {
  const assets = useSelector(selectAllAssets);

  return (
    <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200">
      <table className="w-full min-w-[1000px] text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-4 py-3 text-center w-12">
              #
            </th>

            <th scope="col" className="px-4 py-3 min-w-[150px]">
              Name
            </th>

            <th scope="col" className="px-4 py-3 text-right">
              Price
            </th>

            <th scope="col" className="px-4 py-3 text-right">
              1h %
            </th>

            <th scope="col" className="px-4 py-3 text-right">
              24h %
            </th>

            <th
              scope="col"
              className="px-4 py-3 text-right hidden md:table-cell"
            >
              7d %
            </th>

            <th
              scope="col"
              className="px-4 py-3 text-right hidden lg:table-cell"
            >
              Market Cap
            </th>

            <th
              scope="col"
              className="px-4 py-3 text-right hidden lg:table-cell"
            >
              Volume (24h)
            </th>

            <th
              scope="col"
              className="px-4 py-3 text-right hidden xl:table-cell"
            >
              Circulating Supply
            </th>

            <th
              scope="col"
              className="px-4 py-3 text-center hidden md:table-cell w-[120px]"
            >
              Last 7 Days
            </th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <CryptoTableRow key={asset.id} asset={asset} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
