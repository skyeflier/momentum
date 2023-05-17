import './App.css';

import TopBar from './components/TopBar/Index';
import TitleBox from './components/TitleBox/Index';
import HowItWorks from './components/HowItWorks/Index';
import PaymentPlan from './components/PaymentPlan/Index';
// import Register from './components/Register/Index';


function App() {
  return (
    <>
      <TopBar />
      <TitleBox />
      <HowItWorks />
      <PaymentPlan />
      {/* <Register /> */}
    </>
  );
}

export default App;
