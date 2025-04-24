import { bnbLogo, btcLogo, ethLogo, solLogo, usdtLogo } from "./constants";
import sparkline from "../assets/sparkline.svg"



export const initialCryptoData = [
    {
      id: 'bitcoin',           
      logo: btcLogo,             
      name: 'Bitcoin',         
      symbol: 'BTC',            
      price: 68500.50,          
      percentChange1h: 0.5,      
      percentChange24h: -1.2,  
      percentChange7d: 3.5,     
      marketCap: 1350000000000,  
      volume24h: 45000000000,    
      circulatingSupply: 19700000,
       
      chart7d: sparkline,        
    },
    {
      id: 'ethereum',
      logo: ethLogo,
      name: 'Ethereum',
      symbol: 'ETH',
      price: 3500.75,
      percentChange1h: -0.2,
      percentChange24h: 0.8,
      percentChange7d: 5.1,
      marketCap: 420000000000,
      volume24h: 20000000000,
      circulatingSupply: 120000000,
   
      chart7d: sparkline,
    },
    {
      id: 'tether',
      logo: usdtLogo,
      name: 'Tether',
      symbol: 'USDT',
      price: 1.00,
      percentChange1h: 0.01,
      percentChange24h: -0.02,
      percentChange7d: 0.05,
      marketCap: 110000000000,
      volume24h: 60000000000,
      circulatingSupply: 110000000000,

      chart7d: sparkline,
    },
    {
      id: 'binancecoin',
      logo: bnbLogo,
      name: 'BNB',
      symbol: 'BNB',
      price: 580.20,
      percentChange1h: 0.8,
      percentChange24h: 2.5,
      percentChange7d: -1.0,
      marketCap: 85000000000,
      volume24h: 1500000000,
      circulatingSupply: 147000000,
     
      chart7d: sparkline,
    },
    {
      id: 'solana',
      logo: solLogo,
      name: 'Solana',
      symbol: 'SOL',
      price: 150.60,
      percentChange1h: -1.1,
      percentChange24h: -3.0,
      percentChange7d: 8.2,
      marketCap: 70000000000,
      volume24h: 2500000000,
      circulatingSupply: 460000000,
     
      chart7d: sparkline,
    },
  ];