import Sidebar from "./Sidebar";
import prettypic from "../assets/img/restart.png"

// main content of the Services component
const MainServices = function() {
    return (
        <main className='container'>
            <main className="main_content">
                <div className="main_services">
                    <div className='main_services_sub1'>
                        <img src={prettypic} alt="prettypic" className="prettypic"></img>
                        <h3>Knowledge is good</h3>
                        <p>
                            What is this that i am doing self but by the way i am getting this right.
                            What is this that i am doing self but by the way i am getting this right.
                            What is this that i am doing self but by the way i am getting this right.
                        </p>
                    </div>
                    {/* =========== */}
                    <div className='main_services_sub1'>
                        <img src={prettypic} alt="prettypic" className="prettypic"></img>
                        <h3>Knowledge is good</h3>
                        <p>
                            What is this that i am doing self but by the way i am getting this right.
                            What is this that i am doing self but by the way i am getting this right.
                            What is this that i am doing self but by the way i am getting this right.
                        </p>
                    </div>
        {/* ==================================================== */}
                    <div className='main_services_sub1'>
                        <img src={prettypic} alt="prettypic" className="prettypic"></img>
                        <h3>Knowledge is good</h3>
                        <p>
                            What is this that i am doing self but by the way i am getting this right.
                            What is this that i am doing self but by the way i am getting this right.
                            What is this that i am doing self but by the way i am getting this right.
                        </p>
                        <div className="basep">Find the path</div>
                    </div>
                    {/* =========== */}
                    <div className='main_services_sub1'>
                        <img src={prettypic} alt="prettypic" className="prettypic"></img>
                        <h3>Knowledge is good</h3>
                        <p>
                            What is this that i am doing self but by the way i am getting this right.
                            What is this that i am doing self but by the way i am getting this right.
                            What is this that i am doing self but by the way i am getting this right.
                        </p>
                        <div className="basep">Find the path</div>
                    </div>
                </div>
                <Sidebar />
            </main>
        </main>
    );
}

export default MainServices;