import entrance from '../images/farm_entrance.jpg';
import style from './Home.css';
import babyBB from '../images/BabyBB.png';
import couple from '../images/couple.jpg';




function Home(){
    return(
        <div>
            <header className="App-header">
                <img src={entrance} className="header_pic" alt="farm_entrance" />
            </header>
            <div>
                <h1>Welcome to Wildflower Goats!</h1>
                
                
            </div>
            <div className="conatiner">
                <div className="row">
                    <div className='col-6'>
                        <img src={babyBB} className='bbpic' alt="babyBB" />
                    </div>
                    <div className="col-4">
                        <div className="row">
                            <p>Louie and Barb Reindel</p>
                        </div>
                        <div className="row">
                            <img src={couple}  className='couple' alt="Barb and Louie with a tree" />
                        </div>
                        <div className="row">
                            <p>This is our story...</p>
                            <p>Both Louie and I were born and raised in rural northwest Ohio. We are a perfectly matched couple that
                                met and married at an early age. We were joined as one with the intention of continuing to grow as a
                                couple, a family, and as farmers raising field crops while focusing on the production of livestock,
                                specifically swine. As our family grew, so did our faith which lead to an eventual call into ministry.
                                Leaving all, we left farming to serve as only God can direct. More recently, we entered yet another
                                season of life which has allowed us to return to country living. With that, we relocated to southwest Ohio
                                having acquired a small farm with movement towards becoming self-sufficient. Our vision is becoming a
                                more and more of a reality. Part of that reality now includes purebred Kiko goats.</p>

                            <p>Kiko goats are known for hardiness, fast growth rate, and maternal traits. Our first Kiko goats were
                                purchased from a producer with over 25 years of experience and one who breeds for the high quality
                                characteristics of Kikos. Our goats have excellent bloodlines and are registered with the National Kiko
                                Registry. Their doelings and bucklings would make an excellent addition to any homestead or larger
                                established farm.</p>
                        </div>
                        <p>We invite you to contact us for additional information and possible introduction to our family of Kikos!</p>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Home;