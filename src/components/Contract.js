import React from "react"
import emailjs from "emailjs-com";

const Contract = () => {
    function senEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_128negg',
        'template_fvl562q',
        e.target,
        'user_PgwMoHGcoi5qLmLARvAJC'
        ).then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
    }
    return (
        <div id="contacts"className="contacts">
            <div className="text-center"><h1>contract me</h1>

                <p>Please fill out the form and describe you needs and I'll contact you as soon as possible</p>
                </div>
                <div className="container">
                    <div className="row" >
                        <div className="col-md-6 col-xs-12">
                        {/* name input */}
                     
                        <input
                            
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Name"
                            // name="name"
                        />
                        {/* email input */}
                        <input
                           
                            type="email"
                            name="user_email"
                            className="form-control"
                            placeholder="Email."
                            // email="email"
                        />
                        {/* sub input */}
                        <input
                            type="text"
                            name="sub"
                            className="form-control"
                            placeholder="Subject."
                            // subject="subject"
                        />
                    </div>
                <div className="col-md-6 col-xs-12">
                      {/* Discretion */}
                      <textarea
                    
                        type="text"
                        name="message"
                            className="form-control"
                            placeholder="Discretion."
                            // email="email"
                        > 
                        </textarea>
                        <button className="btn-main-offer contract-btn" type="submit" onSubmit={senEmail}>contract</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Contract
