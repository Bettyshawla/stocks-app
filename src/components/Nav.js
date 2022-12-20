import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="Nav">
         <Link to="/">iStocks</Link>
         &nbsp; ||  &nbsp; 
        <Link to="/stocks"> Stocks</Link>
         &nbsp; ||  &nbsp; 
         <Link to="/about">About</Link>
    </nav>
  );
}
