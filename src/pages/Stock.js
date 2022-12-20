import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../data";

export default function Stock(props) {

    const [info, setInfo] = useState(null)
    const { name } = useParams();

     const getInfo = async () => {
            try {
                const stock = data.find(eachInfo => eachInfo.name === name);
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
      <span>{info.name}</span>
      <span>{info.lastPrice}</span>
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