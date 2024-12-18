import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Bookmark from './Components/Bookmarks/Bookmarks';
import FreelancersPage from './Components/Freelancers/FreelancersPage';
import ActiveBidRoute from './Components/Manage/ActiveBidRoute';
import CandidateRoute from './Components/Manage/CandidateRoute';
import BidRoute from './Components/Manage/BidRoute';
import Manage from './Components/Manage/Manage';
import PostedTask from './Components/Posts/PostedTask';
import Topost from './Components/ToPost/ToPost';
import Setting from './Components/Settings/Setting';
import Register from './Components/UserPage/Register';
import Login from './Components/UserPage/Login';
import ProfileCompletion from './Components/ProfileCompletion/ProfileCompletion';
import IndividualTaskProfile from './Components/Posts/IndividualTaskProfile';
import { AuthProvider } from './Components/Auth';
import ClientsPage from './Components/Clients/ClientsPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Freelanscersprofile from './Components/IndividualProfile/Freelanscersprofile';
import ClientsProfile from './Components/IndividualProfile/ClientsProfile';
import AcceptFreelanscer from './Components/IndividualProfile/AcceptFreelanscer';
import BiddingPage from './Components/Manage/BiddingPage';


function App() {
  return (
    <AuthProvider>
      <Router>
    <div>
      <Routes>
        <Route path='/' element = {<Dashboard/>} />
        <Route path='/Bookmark' element={<Bookmark/>}/>
        <Route path='/FreelancersPage' element={<FreelancersPage/>}/>
        <Route path='/ClientsPage' element={<ClientsPage/>}/>
        <Route path='/ActiveBids' element={<ActiveBidRoute/>}/>
        <Route path='/CandidateRoute' element={<CandidateRoute/>}/>
        <Route path='/BidRoute' element={<BidRoute/>}/>
        <Route path='/ManageTask' element={<Manage/>}/>
        <Route path='/PostedTask' element={<PostedTask/>}/>
        <Route path='/PostTask' element={<Topost/>}/>
        <Route path='/Settings' element={<Setting/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Profile'element={<ProfileCompletion/>}/>
        <Route path='/IndivialTaskProfile' element={<IndividualTaskProfile/>}/>
        <Route path="/FreelancersProfile" element={<Freelanscersprofile/>}/>
        <Route path='/ClientsProfile' element={<ClientsProfile/>}/>
        <Route path='/AcceptFreelanscer' element={<AcceptFreelanscer/>}/>
        <Route path='/bids' element={<BiddingPage/>}/>
      </Routes>
      <ToastContainer />
    </div>
   </Router>
    </AuthProvider>
   
  );
}

export default App;
