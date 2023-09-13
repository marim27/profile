 import React from 'react';
 import ProgressBar from "react-bootstrap/ProgressBar";

 
 const Prog = (props) => {
    console.log(props);
    return (
        
        <>
            <ProgressBar className="mb-3" style={{height: '1.5rem'}}>
         <ProgressBar variant={props.variant1} now={props.now1} key={props.key1} label={props.labelskill} />
         <ProgressBar variant={props.variant2} now={props.now2} key={props.key2}/>
       </ProgressBar>
        </>
    );
 }
 
 export default Prog;
 