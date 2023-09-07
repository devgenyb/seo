import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SidebarMenu from './components/SidebarMenu';
import Layout from './components/Layout';
import Home from './components/pages/Home';
import Promotions from './components/pages/Promotions';
import About from './components/pages/About';
import { PriceList } from './components/pages/PriceList/PriceList';
import { Rewieves } from './components/pages/Rewieves/Rewieves';
import Animators from './components/pages/Animators';
import Job from './components/pages/Job';
import Contacts from './components/pages/Contacts';
import VipParty from './components/VipParty';
import ChildPartys from './components/pages/ChildPartys';
import TeenageParty from './components/pages/TeenageParty';
import OldParty from './components/pages/oldParty';
import Title from './hocs/Title';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}> 
            <Route index element={<Home />}/>
            {/* <Route index element={<Title conponent={<Home/>} title={"Агенство праздников"} />}/> */}
            <Route path='/about' element={<Title component={<About />} title={"О нас"} />} />
            <Route path='/akczii' element={<Promotions />} />
            <Route path='/price' element={<PriceList />} />
            <Route path='/comments' element={<Rewieves />} />
            <Route path='/animators' element={<Animators />} />
            <Route path='/job' element={<Job />} />
            <Route path='/contacts' element={<Contacts />} />
            {/* <Route path='/vipParty' element={<VipParty />} /> */}
            <Route path='/vipParty' element={<Title component={<VipParty />} title={"vip party"} />} />
            {/* <Route path='/vipParty/childparty' element={<ChildPartys />}/> */}
            <Route path='/vipParty/childparty' element={<Title component={<ChildPartys />} title={"детские вечеринки"} />}/>
            {/* <Route path='/vipParty/teenParty' element={<TeenageParty />}/> */}
            <Route path='/vipParty/teenParty' element={<Title component={<TeenageParty />} title={"вечеринки для школьников"} />}/>
            {/* <Route path='/vipParty/oldparty' element={<OldParty />}/> */}
            <Route path='/vipParty/oldparty' element={<Title component={<OldParty />} title={"Корпоративы"} />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
