import React from 'react';
import '../Styles/SubPages.css'
function Questions() {

    return (
        <>
            <div className="join-holder questions">
                <div className='email-holder'>
                    <div className="join-holder title questions">
                        <h1>
                            Any Questions?&#160;
                        </h1>
                        <span >{"Contact us!"}</span>
                    </div>
                    {/* <h6>Email: mvgamedevelopmentclub@gmail.com</h6> */}
                </div>

                
                    <button>
                        <a href="mailto: mvgamedevelopmentclub@gmail.com">Contact</a>
                    </button>
                {/* </a> */}
            </div>
        </>
    );
}

export default Questions;