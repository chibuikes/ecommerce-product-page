import './App.css';
import {Fragment} from 'react'
import Wrapper from './UI/Wrapper/Wrapper'
import Images from './Components/Images/Images'
import Sneakers from './Components/Sneakers/Sneakers'
//import Overlay from './Components/Overlay/Overlay';


function App() {

  return (
    <Fragment>
  <Wrapper>
<Images/>
<Sneakers/>
  </Wrapper>
    </Fragment>
  );
}

export default App;
