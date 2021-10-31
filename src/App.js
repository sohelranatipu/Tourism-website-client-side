// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from  '../src/Components/Home/Home' ;
import Header from './Components/Header/Header';
import Packages from './Components/Packages/Packages';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import Booking from './Components/Booking/Booking';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import MyPackages from './Components/MyPackages/MyPackages';
import ManagePackages from './Components/ManagePackages/ManagePackages';
import AddNewPackage from './Components/AddNewPackage/AddNewPackage';

function App() {
  return (
    <div className="App">
      
    <AuthProvider>
    <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/packages">
            <Packages></Packages>
          </Route>
          <Route path="/myPackages">
            <MyPackages></MyPackages>
          </Route>
          <Route path="/managePackages">
            <ManagePackages></ManagePackages>
          </Route>
          <Route path="/addNewPackage">
           <AddNewPackage></AddNewPackage>
          </Route>
          <PrivateRoute path="/booking/:packageId">
            <Booking></Booking>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
      
    </div>
  );
}

export default App;
