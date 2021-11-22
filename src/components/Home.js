
import Footer from './Footer'
import Nav  from './Nav';
import Info from './Info/Info';

import LogIn from './LogIn/LogIn';
import Carousel from './Carousel'
import Nazarat from './Nazarat'
import Baner from './Baner';

import How from './How'



function Home() {
  return (
  
    
    <div >
   
   
      <LogIn/>
      <Nav/>
      <Baner/>
      <Info/>
      <Carousel/>
     <How/>
      <Nazarat/>
      <Footer/>
    
     
     
     
    </div>
  );
}

export default Home;