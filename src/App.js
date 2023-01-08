import './App.css';
import Footer from './Footer';
import Nav from './Nav';

function App() {
  return (
    <div className="App" >
      <Nav />
      <h1 className='head'>Book From <span className='text'>Sanfrancisco</span> to</h1>
      <div className="container pad" >
        <div className="row">
          <div className="col-sm-2 mt-4">
            <div className="content">
              <p className='Ucontent'>LAS VEGAS</p>
              <p className='Lcontent'>NV(LAS)</p>
            </div>
          </div>
          <div className="col-sm-2 mt-4">
            <div className="content">
              <p className='Ucontent'>LOS ANGELES</p>
              <p className='Lcontent'>NV(LAS)</p>
            </div>
          </div>
          <div className="col-sm-2 mt-4">
            <div className="content">
              <p className='Ucontent'>NEW YORK</p>
              <p className='Lcontent'>CA(LAX)</p>
            </div>
          </div>
          <div className="col-sm-2 mt-4">
            <div className="content">
              <p className='Ucontent'>PALM SPRINGS</p>
              <p className='Lcontent'>NY(NYC)</p>
            </div>
          </div>
          <div className="col-sm-2 mt-4">
            <div className="content">
              <p className='Ucontent'>PORTLAND</p>
              <p className='Lcontent'>CA(PSP)</p></div>
          </div>
          <div className="col-sm-2 mt-4">
            <div className="content">
              <p className='Ucontent'>ALL CITIES</p>
              <p className='Lcontent'>^</p></div>
          </div>
        </div>
      </div>
      <Footer className="footer"/>
    </div>
  );
}

export default App;
