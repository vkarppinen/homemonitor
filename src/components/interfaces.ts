
interface PriceDataArray {
  data: Array<PriceData>;
} 

interface PriceData {
  price: string;
  hour: string;
}

export { PriceData, PriceDataArray }
