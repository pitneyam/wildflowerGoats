import entrance from '../images/farm_entrance.jpg';

function Home(){
    return(
        <header className="App-header">
            <img src={entrance} className="header_pic" alt="farm_entrance" />
        </header>
    );
}

export default Home;