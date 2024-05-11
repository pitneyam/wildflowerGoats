import dd from '../images/dd.jpg';
import BB from '../images/BB.JPG';
import bucky from '../images/Bucky.JPG';
import buttercup from '../images/Buttercup.JPG';
import Mocha from '../images/Mocha.JPG';
import Oreo from '../images/Oreo.JPG';
import Snickers from '../images/Snickers.JPG';
import herd from '../images/Herd.JPG';
import SnickNMoch from '../images/MochaNSnickers.jpg';
import ButtBabies from '../images/Buttercupsbabies.jpg';
import BBnDD from '../images/BBnDD.jpg';
import style from './Home.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';



function Animals() {
  return (
    <div>
        <img src={herd}  className= "herd" alt="Picture of the Herd" />
        <h1>Meet the parents!</h1>

        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className="goatcard">
                        <img className="goatpics" src={dd} alt="Goat named DD"/>
                        <p>Name: DD</p>
                        <p>Birthday: 2/5/23</p>
                        <p>Origin: Swampy Acres</p>
                        <p>More info: Had 3 kids on 4/28/24</p>
                    </div>
                </div>
                <div className='col'>
                    <div className="goatcard">
                        <img className="goatpics" src={BB} alt="Goat named BB"/>
                        <p>Name: BB</p>
                        <p> Birthday: 2/5/23</p>
                        <p>Origin: Swampy Acres</p>
                        <p>More info: Had 2 kids on 4/28/24</p>
                    </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <div className="goatcard">
                        <img className="goatpics" src={bucky} alt="Goat named Bucky"/>
                        <p>Name: Hua Koati</p>
                        <p>Birthday: 2/20/22</p>
                        <p>Origin: Swampy Acres</p>
                        <p>More info: Registration Number N22M0285HSR9 </p>
                    </div>
                </div>
                <div className='col'>
                    <div className="goatcard">
                        <img className="goatpics" src={buttercup} alt="Goat named Buttercup"/>
                        <p>Name: Buttercup</p>
                        <p>Birthday: 2/6/23</p>
                        <p>Origin: Swampy Acres</p>
                        <p> More Info: Had 3 Kids on 5/1/24</p>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <div className="goatcard">
                        <img className="goatpics" src={Mocha} alt="Goat named Mocha"/>
                        <p> Name: Mocha</p>
                        <p>Birthday: 2/25/23</p>
                        <p>Origin: Swampy Acres</p>
                        <p> More Info: Had two kids on 4/25/24</p>
                    </div>
                </div>
                <div className='col'>
                    <div className="goatcard">
                        <img className="goatpics" src={Oreo} alt="Goat named Oreo"/>
                        <p> Name: Oreo</p>
                        <p>Birthday: 2/5/23</p>
                        <p> Origin: Swampy Acres</p>
                        <p> More Info: No kids this year</p>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <div className="goatcard">
                        <img className="goatpics" src={Snickers} alt="Goat named Snickers"/>
                        <p> Name: Snickers</p>
                        <p>Birthday: 2/25/23</p>
                        <p> Origin: Swampy Acres</p>
                        <p> More Info: Had 2 kids on 4/20/24</p>
                    </div>
                </div>
            </div>
            <h1>Meet the Kids!</h1>
            <div className='row'>
                <div className='col'>
                    <img src={SnickNMoch} className='babypics' alt="Picture of Snicikers and Mocha with their babies" />
                </div>
                <div className ='col'>
                    <img src={ButtBabies}  className='babypics' alt="Picture of Buttercups babies" />
                </div>
                <div className='col'>
                    <img src={BBnDD}  className='babypics' alt="Picture of BB and DD's kids" />
                </div>

            </div>
        </div>  
        </div>         

    </div>
  );
}

export default Animals;