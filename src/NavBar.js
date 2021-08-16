import React, {Component} from 'react';

// functional React Components
//state-less

function NavBar(){
    return(
    <div>


         <ul className="bg-green-300 p-4 flex justify-between items-center">
             <li><a href="#">Home</a> </li>

             <li><a href="#">Enhanced</a></li>

              <li> <a href="#"> Archive</a></li>

              <li><a href="#">Submit a Site !</a></li>

             <li><a href="#">About</a></li>
             <li><a href="#">Forums</a></li>

             <li><a href="#"> Twitter</a></li>
         </ul>

    </div>
    );
}

export default NavBar;
















//
//
// //
// const NavBar3 = () =>{
//      <div> NavBar</div>
// }
//
//
// // Class-based React Components
// //state-less
//
//
// class NavBar extends Component {
//     render() {
//         return (
//             <div>
//                 Nav Bar
//             </div>
//         );
//     }
// }
//
