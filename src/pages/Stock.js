import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../data";

export default function Stock(props) {

    const [info, setInfo] = useState(null)
    const { name } = useParams();


    useEffect(() => {
        const getInfo = async () => {
            try {
                const stock = data.find(info => info.name === name);
                setInfo(stock);
            } catch (error) {
                console.error(error);
            }
        }

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
    return  <h2>loading ...</h2>
}
 


}