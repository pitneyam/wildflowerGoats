import entrance from '../images/farm_entrance.jpg';
import dd from '../images/dd.jpg';
import BB from '../images/BB.JPG';
import style from './Home.css';
import GoatCard from './GoatCard';
import Goat from './Goat.java';




function Home(){
    return(
        <div>
            <header className="App-header">
                <img src={entrance} className="header_pic" alt="farm_entrance" />
            </header>
            <div className="goatcard">
                <img className="goatpics" src={dd} alt="Goat named DD"/>
            </div>
            <div className="goatcard">
                <img className="goatpics" src={BB} alt="Goat named BB"/>
            </div>

        </div>
    );
}

export default Home;