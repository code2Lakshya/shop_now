import { useState } from "react";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";
import './Newsletter.css';
import { toast } from "react-hot-toast";

const Newsletter = () => {
    const [email, setEmail] = useState('');
    function changeHandler(e) {
        setEmail(e.target.value);
    }
    function clickHandler(){
        if(email){
        setEmail('');
        toast.success('Subscribed');
        }
    }
    return (<div className="newsletter-container">
        <p>Newsletter</p>
        <p>Sign up for latest updates and offers</p>
        <div className='email-form'>
            <input type='email' placeholder="EMAIL ADDRESS" value={email} onChange={changeHandler} required/>
            <button onClick={clickHandler}>Subscribe</button>
        </div>
        <p>Will be used in accordance with our Privacy Policy</p>
        <div className="social-icons">
            <span><TiSocialLinkedinCircular /></span>
            <span> <BiLogoFacebookCircle /></span>
            <span><AiFillTwitterCircle /></span>
            <span><AiOutlineInstagram /></span>
        </div>
    </div>);
}

export default Newsletter;