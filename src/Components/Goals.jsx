import React from 'react';

function Goals() {
    return (
        <div>
            <div className="Holderpage goals">
                <div className="header-title info">
                    <h1>What can you accompish?</h1>
                </div>
                <div className="summary goals">
                    <div className="goal-holder">
                        <div className='object-holder'>
                            <i class="bi bi-code" style={{
                                background: "linear-gradient(to top, #aeaccad7, #372f85)",fontSize:"30px"
                            }}></i>
                        </div>
                       
                        <div className="holder-goals">
                            <h2>
                                Learn New Languages
                            </h2>
                            <ul>Gain full proficency in C# and Unity by the end of the year.</ul>
                        </div>
                    
                    </div>
                    <div className="goal-holder">
                        
                        <div className='object-holder'>
                            <i class="bi bi-steam" style={{
                                background: "linear-gradient(to top, #aeaccad7, #372f85)",fontSize:"30px"
                            }}></i>
                        </div>
                        <div className="holder-goals">
                            <h2>
                                Pubish a Video Game
                            </h2>
                            <ul>Develop a video game throughout the school year and publish it to Steam.</ul>
                        </div>
                    </div>
                    <div className="goal-holder">
                        <div className='object-holder'>
                            <i class="bi bi-controller" style={{
                                background: "linear-gradient(to top, #aeaccad7, #372f85)",fontSize:"30px"
                            }}></i>
                        </div>
                       
                        <div className="holder-goals">
                            <h2>
                                Compete In Competitions
                            </h2>
                            <ul>Have an opportunity to compete in the Ludum Dare Game Jam!</ul>
                        </div>
                        
                    </div>
                </div >
            </div >
        </div >
    );
}

export default Goals;