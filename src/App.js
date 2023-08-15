import ContinueToDashboard from "./components/business/ContinueToDashboard";
import Verify from "./components/business/Verify";
// import SideNav from "./components/BusinessDashboard/SideNav";
import BusinessDashboard from "./components/business/BusinessDashboard/BusinessDashboard";
import BusinessSignin from "./components/business/BusinessSignin";
import BusinessSignup from "./components/business/BusinessSignup";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="font-lato">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BusinessSignup />} />
          <Route path="/business/signin" element={<BusinessSignin />} />
          <Route path="/business/verify" element={<Verify />} />
          <Route path="/continuetodashboard" element={<ContinueToDashboard />} />
          <Route path="/business/dashboard" element={<BusinessDashboard />} />
        </Routes>
      </BrowserRouter>
      {/* <BusinessDashboard /> */}
      {/* <BusinessSignin />
      <ContinueToDashboard />
      <Verify /> */}
    </div>
  );
}

export default App;
