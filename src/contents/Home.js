import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <ReactTypingEffect className="typingeffect" text={['My name is Douglas W. Thomson','I am a fullStack software developer in-training.']} speed={100} eraseDelay={700}/>
            </div>
            )
        }
    }
    
    export default Home;