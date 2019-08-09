// when there is no parent child relation, we uplift the state up
// meaning we get same parent for two components so that the data can be passed

//we convert it into a stateless component

//we can destructer our object by just getting the properties we want

import React, { Component } from "react";

const Navbar = ({ totalCounters }) => {
  console.log("Navbar-rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;

// class Navbar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar{" "}
//           <span className="badge badge-pill badge-secondary">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

// export default Navbar;
