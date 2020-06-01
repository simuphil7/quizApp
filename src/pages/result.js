import React from 'react'
import '../styles/result.css'
import {useSelector} from 'react-redux'
import Header from '../components/Header'
import {Link} from 'react-router-dom'


const Result = (props) => {
    
    const score = useSelector(state=>state.trueScore)
return (
    <div className="result-page">
    <div className="head">
    <Header />

    </div>
   
    <div className="confetti">
    
    </div>
    <div className="confetti">
    
    </div>
    <div className="confetti">
    
    </div>
    <div className="confetti">
    
    </div>
    <div className="confetti">
    
    </div>
    <div className="confetti">
    
    </div>
    <div className="confetti">
    
    </div>
    <div className="confetti">
    
    </div>
    <div className="confetti">
    
    </div>
    <div className="confetti">
    
    </div>
<div className="score-card">
<h1 className="dispScore">Your Score :  {score}</h1>
<Link to='/'><button className="home">Home</button></Link>
</div>

    </div>
)
}
export default Result