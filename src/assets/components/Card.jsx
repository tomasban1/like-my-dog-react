import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { GiSharpSmile } from "react-icons/gi";


export function Card(){
    const [heart, setHeart] = useState(false);
    const [count, setCount] = useState(0);

    function handleClick(){
        if(!heart){
            setHeart(true);
            setCount(count + 1);
        }else{
            setHeart(false);
            setCount(count - 1);
        }
    }
    
    return (
        <div className="card">
            <span>Likes: {count}</span>
            
            <div className="card card-header" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <div style={{display:"flex", alignItems:"center", gap: 20}}>
                    <GiSharpSmile />
                    <p style={{marginTop: 15}}>Please like my dog</p> 
                </div>
                
                <img onDoubleClick={handleClick} style={{width:250, height:230}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Labrador_Retriever_portrait.jpg/1280px-Labrador_Retriever_portrait.jpg" alt="dog" />
            </div>
            <div style={{alignItems:"center"}} className="card footer">
                {heart ? <FaHeart style={{fontSize:50, color:"red"}} onClick={handleClick} /> : <FaHeart style={{fontSize:50}} onClick={handleClick} />}
            </div>
        </div>
    );
}