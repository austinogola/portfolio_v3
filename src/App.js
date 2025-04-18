import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//       <Route path="/" element={<Home />}></Route>
//         {/* <Route path="/" element={<Layout />}> */}
//           {/* <Route index element={<Home />} /> */}
         
//         {/* </Route> */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

function App() {
  return (
    <div>
      <Home/>

    </div>
  );
}

export default App;
