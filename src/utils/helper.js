import numeral from "numeral";


export const formatNumber = (num, format = '0,0.00') => {
    if (num === null || num === undefined) return 'N/A';
    if (Math.abs(num) >= 1e12) return numeral(num).format('0.00a').toUpperCase(); 
    if (Math.abs(num) >= 1e9) return numeral(num).format('0.00a').toUpperCase();
    if (Math.abs(num) >= 1e6) return numeral(num).format('0.00a').toUpperCase();
    return numeral(num).format(format);
};


export const formatPrice = (num) => {
   
    if (num === null || num === undefined) return 'N/A';
   if (num >= 1) return numeral(num).format('$0,0.00');
   if (num < 1 && num > 0.0001) return numeral(num).format('$0,0.0000');
   return numeral(num).format('$0,0.00e+0');
}

export const formatPercent = (num) => {
 
   if (num === null || num === undefined) return 'N/A';
   return `${numeral(num).format('0.00')}%`;
};
