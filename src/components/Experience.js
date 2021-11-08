import React from 'react'

const Experience = () => {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
            <h1>experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="market"></div>
                    <div className="timeline-content">
                        <h3>2018 - 2020</h3>
                        <p>Start working as a website performance testing intern at NextCube.In the first year I practiced using Katalon Studio and Selenium for test website
                            bangkoknoi model.The following year was assigned to manage the database and practice web writing.
                             </p>
                    </div>
                </div>
                {/*  */}
                <div className="timeline-block timeline-block-left">
                    <div className="market"></div>
                    <div className="timeline-content">
                        <h3>2020 - 2021</h3>
                        <p>Work at Doozy Digilab.Assigned the duty of Admin to manage technical problems of The Digital Delicious. Later became a UE Game developer.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
