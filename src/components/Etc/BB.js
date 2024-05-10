import React, {useState} from 'react'

export default function BB() {
    const [IsListening, SetIsListening] = useState(false)
    const [IsSpeaking, SetIsSpeaking] = useState(false)
    const [BBClassName, SetBBClassName] = useState("ready")
    const [APIResponse, SetAPIResponse] = useState("")

    const BBListenToggle = () =>{
        let _isListening = IsListening;
        SetIsListening(!_isListening); 
        SetIsSpeaking(_isListening);
        SetBBClassName(!_isListening? "listening": "ready");
    }
    const GetBBText = () => {
        if (IsListening){
            return "I'm listening...";
        }
        else return "Hey there! I'm BB.";
    }
    return (
      <div className="pageContent">
        <header className="app-header">
        <a onClick={BBListenToggle}>
          <div id="bb" className={BBClassName}></div>
        </a>
        <p>
        <code>{GetBBText()}</code>
        </p>
        </header>
      </div>
    )
}
