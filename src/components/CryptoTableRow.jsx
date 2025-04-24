// src/features/crypto/CryptoTableRow.js
import React from 'react';

import { formatNumber, formatPercent, formatPrice } from '../utils/helper';




const CryptoTableRow = React.memo(({ asset, index }) => {
    
    const getPercentClass = (value) => {
        if (value === null || value === undefined || value === 0) return 'text-gray-700'; 
         return value > 0 ? 'text-green-600' : 'text-red-600';
    };

    return (
        <tr className="hover:bg-gray-100 border-b border-gray-200">
           
            <td className="px-4 py-3 text-center text-gray-500 text-sm">{index + 1}</td>

          
            <td className="px-4 py-3 min-w-[150px] whitespace-nowrap">
                <div className="flex items-center">
                   <img src={asset.logo} alt={`${asset.name} logo`} className="w-6 h-6 mr-2" />
                    <div>
                       <span className="font-semibold text-gray-800">{asset.name}</span>{' '}
                       <span className="text-gray-500 text-sm">{asset.symbol}</span>
                    </div>
                </div>
            </td>

        
            <td className="px-4 py-3 text-right font-medium text-gray-900">
                {formatPrice(asset.price)}
            </td>

         
            <td className={`px-4 py-3 text-right font-medium ${getPercentClass(asset.percentChange1h)}`}>
                {formatPercent(asset.percentChange1h)}
            </td>

          
            <td className={`px-4 py-3 text-right font-medium ${getPercentClass(asset.percentChange24h)}`}>
                {formatPercent(asset.percentChange24h)}
            </td>

          
            <td className={`px-4 py-3 text-right font-medium hidden md:table-cell ${getPercentClass(asset.percentChange7d)}`}>
                {formatPercent(asset.percentChange7d)}
            </td>

           
            <td className="px-4 py-3 text-right text-gray-700 hidden lg:table-cell">
                ${formatNumber(asset.marketCap, '0,0')}
            </td>

          
            <td className="px-4 py-3 text-right text-gray-700 hidden lg:table-cell">
                ${formatNumber(asset.volume24h, '0,0')}
            </td>
            <td className="px-4 py-3 text-right text-gray-700 hidden xl:table-cell">
                {formatNumber(asset.circulatingSupply, '0,0')} {asset.symbol}
            </td>
            <td className="px-4 py-3 hidden md:table-cell">
                 <div className="w-[100px] h-auto mx-auto"> {/* Container to control chart size/position */}
                    <img src={asset.chart7d} alt="7 day chart" className="block w-full h-auto" />
                 </div>
             </td>
        </tr>
    );
});

CryptoTableRow.displayName = 'CryptoTableRow';

export default CryptoTableRow;