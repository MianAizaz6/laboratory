import TopSection from './Components/TopSection';
import Header from './Components/Header/Header';
import Team from './Components/Team';
import Services from './Components/Services';
import LabComponent from './Components/LabComponent';
import FooterComponent from './Components/FooterComponent';
import IframeSection from './Components/Iframes/IframeSection';
import InfoSection from './Components/InfoSection/InfoSection';
import Slider from './Components/Slider'
function App() {
  return (
    <>
       <TopSection />
       <Header />
       <Slider />
        <Team />
        <Services/>
        <LabComponent/>
        <IframeSection/>
        <InfoSection/>
        <FooterComponent />
    </>
        
  );
}

export default App;
