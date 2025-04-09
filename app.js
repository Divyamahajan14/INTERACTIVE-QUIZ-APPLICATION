// app.js
const questions=[{
      'que':'Which is the longest river in the world?',
      'a':' Amazon',
      'b':'Nile',
      'c':'Yangtze',
      'd':'Mississppi',
      'Ans':'b'
   },
   {
      'que': 'Which animal is known as the "King of the Jungle?' ,
      'a':'Elephant ',
      'b':'Tiger',
      'c':'Lion',
      'd': 'Giraffe',
      'Ans': 'b'

   },
   {
      'que':'What is the chemical symbol for water?',
       'a': 'H₂O',
       'b': 'CO₂',
       'c':' O₂' ,
       'd':' N₂',
       'Ans':'a'
   },
   {
       'que':'Which is the largest ocean on Earth?',
       'a': 'Atlantic Ocean',
       'b': 'Indian Ocean',
       'c': 'Arctic Ocean',
       'd': 'Pacific Ocean',
       'Ans':'d'

   },
   {
       'que':' Which planet is closest to the sun?',
       'a':'Earth',
       'b': 'Mars',
       'c': 'Mercury',
       'd': 'Venus',
       'Ans':'c' ,
    }
]

let index=0;
let total=questions.length;
let right=0;
let wrong=0;
const quesBox=document.getElementById("quesBox")
const optionInputs=document.querySelectorAll('.options')
const loadQuestion =()=>{
    if(index==total){
        return endQuiz()
    }
    reset()
    const data=questions[index]
    quesBox.innerText=`${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;

}
const submitQuiz=()=>{
    const data=questions[index];
    const ans=getAnswer()
    if(ans == data.Ans){
        right++;

    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;

}
const getAnswer=()=>{
    let answer;
    optionInputs.forEach(
        (input)=> {
            if(input.checked){
                answer=input.value;
            }        
        }
    )
    return answer;
}
const reset = () =>{
    optionInputs.forEach(
        (input)=>{
            input.checked=false
        }
    )
}
const endQuiz = ()=>{
    document.getElementById("box").innerHTML=`
    <div style ="text-align:center">
       <h3> Thank You For Playing the Quiz..</h3>
       <h2> ${right} / ${total} are Correct</h2>
    </div>
    `
}
//initial call
loadQuestion();