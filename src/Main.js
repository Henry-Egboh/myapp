// ===== MAIN COMPONENT OF THE HOME COMPONENT ======================================
import Sidebar from './Sidebar';
import shana from "./img/shana.jpg";
import { useState } from 'react';

function Main() {
    const [response, setResponse] = useState("");
    const handleClick = () => {
        // alert('Agree to our terms and sign in!');
        setResponse("Thank you for signing in");
    }

    return (
        <main className='container'>
            <main className="main_content">
                <section className='sec'>
                    <img src={shana} className="shana" alt="shana"></img>
                    <div className='main_txt'>
                        <div className="main_sub">
                            <h3>Find a Way</h3>
                            <p>
                                its a good thing to have this lesson and what i thought is this cool thing.
                                its a good thing to have this lesson and what i thought is this cool thing.
                                its a good thing to have this lesson and what i thought is this cool thing.
                                its a good thing to have this lesson and what i thought is this cool thing.
                                its a good thing to have this lesson and what i thought is this cool thing.
                                its a good thing to have this lesson and what i thought is this cool thing.
                                its a good thing to have this lesson and what i thought is this cool thing.
                            </p>
                        </div>
                        <div className="main_sub">
                            <div className='main_sub1'>
                                <h3>Knowledge is good</h3>
                                <p>
                                    What is this that i am doing self but by the way i am getting this right.
                                    What is this that i am doing self but by the way i am getting this right.
                                    What is this that i am doing self but by the way i am getting this right.
                                </p>
                            </div>
                            <div className='main_sub2'>
                                <p>Made up your mind yet?</p>
                                <form>
                                    <p className='response'>{response}</p>
                                    <input type={"email"} name={"email"} placeholder={"milamuch@example.com"}></input>
                                    <button onClick={handleClick} className='signup'>Sign up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <Sidebar />
            </main>
        </main>
    );
}

export default Main;