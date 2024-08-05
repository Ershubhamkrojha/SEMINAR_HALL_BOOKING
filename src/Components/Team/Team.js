// import React from 'react'
import React, { useState } from 'react'
import "./team.css"
import Team_array from './Team_array'
const Team = () => {
    const [teamData, setTeamData] = useState(Team_array)
    return (
        <>
            {/*         
        <div className="about-section">
                <h2>About Us Page</h2>
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>  */}
            {/* <div className="about-section">
                <h2>Our Team</h2>
                <p>Some text about who we are and what we do.</p>
            </div> */}
            {/* <h2 className="team-title" >Our Team</h2> */}
            {/* <div className="team-row ">
                {
                    teamData.map((data) => {
                        const { img, name, email, details, title } = data
                        return (
                            <>
                             <div className="column1">
                                    <div className="card">
                                        <img className="team-pic" src={img} alt="Jane" />
                                        <div className="line">
                                            <h2>{name}</h2>
                                            <h4 className="title">{title}</h4>
                                            <p>{email}</p>
                                            <p>{details}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
               </div> */}
               <>
            <div className='container-main'>
                <h1 className='pop-heading'> OUR TEAM</h1>
                <hr />
                <div className=' d-flex container-sub'>
                    {
                        teamData.map((data) => {
                            const {id,img,email}=data
                            return (
                                <>
                                    <div className='container-content' key={id} >
                                        <div className='container-imgg' >
                                        <a href={email}> <img src={img} alt='0' /></a>
                                        </div>
                                        {/* <div className='popcat-about'>
                                            {item.about}
                                        </div> */}
                                    </div>
                                </>
                            )
                        })}
                </div>
            </div>
        </>
        </>


    )
}

export default Team