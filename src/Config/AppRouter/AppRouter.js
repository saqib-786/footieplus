import React from 'react';
import { Routes,Route} from 'react-router-dom';
import Slider from '../../Components/Slider/Slider';
import Home from '../../Screens/Home';
function AppRouter() {
    return ( 
        <React.Fragment>  
            <Routes>
                
                <Route  path='/' element={<Home/>} />
                <Route  path='/Slider' element={<Slider/>} />
                
            </Routes>
            
            

        </React.Fragment>
     );
}

export default AppRouter;