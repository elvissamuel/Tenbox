import ContinueToDashboard from "./components/ContinueToDashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Verify from "./components/Verify";
import SideNav from "./components/BusinessDashboard/SideNav";
import BusinessDashboard from "./components/BusinessDashboard/BusinessDashboard";


function App() {
  return (
    <div className="font-lato">
      {/* <BusinessDashboard /> */}
      <Signup />
      <Login />
      <ContinueToDashboard />
      <Verify />
    </div>
  );
}

export default App;
