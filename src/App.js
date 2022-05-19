import './App.scss';
import Header from './Header';
import Swiper from './Swiper';
import Card from './component/Card';
import Button from '@mui/material/Button';
import { Home, TheaterComedy, Theaters,Mic } from '@mui/icons-material';

function App() {

  return (
    <div className="App">
      <Header />
      <div className="body">
        <div className="body-left">
          <div className="menu">
            <Button className='menu-list'>
              <Home sx={{ fontSize: 40 }} color="primary" />
              <span className='home'> Home</span>
            </Button>
            <Button className='menu-list'>
              <TheaterComedy sx={{ fontSize: 40, color: "#FFBF00" }} />
              <span className='Comedy'> Come </span>
            </Button>
            <Button className='menu-list'>
              <Theaters sx={{ fontSize: 40, color: "#5daf34" }} />
              <span className='Theaters'> Thea</span>
            </Button>
            <Button className='menu-list'>
              <Mic sx={{ fontSize: 40, color: "#5ff134" }} />
              <span className='Theaters'> Micc </span>
            </Button>
          </div>
        </div>
        <section className="body-center">
          <Swiper />
          <div className="cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
        <div className="body-right"></div>
      </div>
    </div>
  );
}

export default App;
