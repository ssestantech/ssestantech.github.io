import Axios from "axios";

//Instruments API
export async function getInstrumentsInfo() {
  const url = 'https://prototype.sbulltech.com/api/v2/instruments';
  try {
    const { data } = await Axios.get(url);    
    return data;
  } catch (e) {
    console.error('getInstrumentsInfo error\n', e);
  }
};

//Quotes API
export async function getQuotesInfo(symbol) {
  const url = `https://prototype.sbulltech.com/api/v2/quotes/${symbol}`;
  try {
    const { data } = await Axios.get(url);    
    return data;
  } catch (e) {
    console.error('getQuotesInfo error\n', e);
  }
};