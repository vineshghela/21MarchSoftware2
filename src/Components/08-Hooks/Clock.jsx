import { useEffect, useState } from "react";

const Clock = ()=>{

    //
    const [time , setTime ]= useState(new Date().toLocaleTimeString());
    const [click, setClick] = useState(false);


    useEffect(()=>{
        // setTimeout(tick,1000);
        tick()
        // setClick(c=>!c)
        // document.title = `You clicked ${click} times`;
        console.log("im running");
    },[click])
    // Empty it SHOULD  keep firing 
    // [] - will run ONLY ONCE
    // [<with a value>] will run every time there is a chance to that value

    const tick=()=>{
        setTime(new Date().toLocaleTimeString())
    }

    return(
        <>
        <h1>{time}</h1>
        <h1>{click?<h1>true</h1>:<h1>false</h1>}</h1>
        <button onClick={()=>setClick(c=>!c)}>Click me</button>
        </>
    )

}

export default Clock;