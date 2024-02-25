import './App.css';
import Links from './Header/Links';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Header/Navbar';
import Ad from './Ad/Ad';
import Products from './Product/Products';
import Createuser from './Login/Createuser';
import Login from './Login/Login';
//import SelectCategory from './Ad/SelectCategory';
import SingleProduct from './Product/SingleProduct';
import MyAds from './UserProfile/MyAds';
import EditProfile from './UserProfile/EditProfile';
import ComputerLaptops from './Category/ComputerLaptops';
import Scooter from './Category/Scooter';
import Mobile from './Category/Mobile';
import { useState} from 'react';
import Search from './Search/Search';
function App() {
  const [search, setSearch] = useState('')
  const getSearchItem=(value)=>{
    setSearch(value)
    // console.log(`your search word is ${search}`)
  }
  // useEffect(() => {
  //   console.log(`Your search word is ${search}`);
  // }, [search]);
  return (
<div className="App">
  <Navbar sendSearchInput={getSearchItem} />
  <Links/>
  <Routes>
    <Route path='/search' element={<Search searchedWord={search} />}/>
    <Route path='/' element={<Home/>} />
    <Route path='/ad' element={<Ad/>} />
    <Route path='/allproducts' element={<Products/>}/>
    <Route path='/createuser' element={<Createuser/>}/>
    <Route path='/login' element={<Login/>} />
    <Route path='/product/:id' element={<SingleProduct/>} />
    <Route path='/myads' element={<MyAds/>} />
    <Route path='/editprofile' element={<EditProfile/>} />
    <Route path='/computer&laptop' element={<ComputerLaptops/>} />
    <Route path='/scooter' element={<Scooter/>} />
    <Route path='/mobile' element={<Mobile/>}/>
    {/* <Route path='/select' element={<SelectCategory onCatClick={bringCategory} />}/> */}
  </Routes>
  <Footer/>

  

</div>
);
}

export default App;
