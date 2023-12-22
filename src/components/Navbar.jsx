import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
      <nav className="navbar">
        <h1>Workout Tracker</h1>
        <div className="links">
          <Link className="link-item" to="/">Home</Link>
          <Link className="link-item" to="/create" >New Workout</Link>
        </div>
      </nav>
   );
}
 
export default Navbar;