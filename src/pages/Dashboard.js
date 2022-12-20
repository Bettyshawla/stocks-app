import { Link } from "react-router-dom"
import data from "../data"
export default function Dashboard(props) {
  
        return(
            <div className="dashboard">
        
            {data.map((info) => {
                const { name, symbol} = info;
                return(
                    <Link to={`/stocks/${symbol}`}><h2> {name}</h2></Link>
                )
            })}
            </div>
        )

        }

