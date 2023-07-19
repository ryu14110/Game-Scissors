import React from 'react';
// import './App.css';
function Box(props) {
  // console.log("props",props)
  let result;
  if( 
    props.title === 'Computer' && 
    props.result !== "tie" && 
    props.result !== ""){
      result = props.result === 'win' ? 'lose' : 'win';
      // console.log(props.result)
    }else{
      result = props.result;
    }
  
  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <h2>{props.item && props.item.name}</h2>
      <img className='item-img' src={props.item && props.item.img} alt=''/>
      {/* <h1>{props.result}</h1> */}
      <h1>{result}</h1>
    </div>);
  
}

export default Box;
