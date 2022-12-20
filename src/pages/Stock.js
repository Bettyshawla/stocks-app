import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../data";

export default function Stock(props) {

    const [info, setInfo] = useState(null)
    const { symbol } = useParams();

     const getInfo = async () => {
            try {
                const stock = data.find(eachStock => eachStock.symbol === symbol);
                setInfo(stock);
            } catch (error) {
                console.error(error);
            }
        }
    useEffect(() => {
        getInfo();
    }, []);

const loaded =() => {
     return (
    <div>
      <h2>Stock name: {info.name} / {info.symbol}</h2>
      <h3>Current Price: {info.lastPrice}</h3>
    </div>
  );
}

const loading = () => {
    return (
        <h1>Loading...</h1>
    )
}

return(
    info ? loaded() : loading()
)

}