import React from 'react'

const Experience = () => {
    return (
        <div className="experience">
            <div className="d-flex justify-content-center my-5">
            <h1>experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="market"></div>
                    <div className="timeline-content">
                        <h3>2018 - 2020</h3>
                        <p>Officia dolore pariatur deserunt anim sit irure est officia occaecat fugiat velit dolore.
                             Voluptate eiusmod enim id aute magna anim. Nostrud proident esse et dolor minim adipisicing
                              id minim ullamco.</p>
                    </div>
                </div>
                {/*  */}
                <div className="timeline-block timeline-block-left">
                    <div className="market"></div>
                    <div className="timeline-content">
                        <h3>2020 - 2021</h3>
                        <p>Officia dolore pariatur deserunt anim sit irure est officia occaecat fugiat velit dolore.
                             Voluptate eiusmod enim id aute magna anim. Nostrud proident esse et dolor minim adipisicing
                              id minim ullamco.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
