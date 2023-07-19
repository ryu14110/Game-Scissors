import React, {useState} from 'react';
import './App.css';
import Box from './components/Box';
//1.박스 2개 (타이틀, 사진, 결과)
//2.가위 바위 보 버튼이 있다
//3.버튼을 클릭하면 클릭한 값이 박스에 보임
//4.랜덤하게 아이템 선택이 된다
//5. 3 4의 결과를 가지고 누가 이겼는지 승패를 따진다
//6. 승패 결과에 따라 테두루 색이 바뀐다(win: green, lose:red, tie:black)
const choice = {
  rock: {
    name: "Rock",
    img:"/images/rock.png"
  },
  scissors: {
    name: "Scissors",
    img:'/images/scissors.png'
  },
  paper: {
    name: "Paper",
    img:'/images/paper.png'
  }
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const play=(userChoice)=>{
    // console.log("선택됨",userChoice)
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice],computerChoice));
  };
  const judgement =(user, computer)=>{
    // console.log("user",user,"computer",computer)
    if(user.name === computer.name){
      return "tie";
    }else if(user.name  === "Rock")
    return computer.name === "Scissors" ? "win" : "lose";
    else if(user.name === "Scissors")
    return computer.name === "Paper" ? "win" : "lose";
    else if(user.name === "Paper") 
    return computer === "Rock" ? "win" : "lose";
  }

  const randomChoice=()=>{
    let itemArray = Object.keys(choice);  //객체의 key값만 뽑아서 Array로 만들어 주는 함수
    // console.log('item array', itemArray)
    let randomItem = Math.floor(Math.random()*itemArray.length);
    // console.log('random value',randomItem)
    let final = itemArray[randomItem];
    // console.log('final',final)
    return choice[final]
  }

  return (
    <div className='container'>
     <div className="main">
       <Box title="A-Yun" item={userSelect} result={result}/>
       <Box title="Computer" item={computerSelect} result={result}/>      
     </div>
     <div className='main'>
       <button onClick={()=>play("scissors")}>가위</button>
       <button onClick={()=>play("rock")}>바위</button>
       <button onClick={()=>play("paper")}>보</button>
     </div>
    </div>
  );
}

export default App;
