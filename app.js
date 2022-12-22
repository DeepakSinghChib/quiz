const quizpipe = [
    {
        ques: "	Three pipes A, B and C can fill a tank from empty to full in 30 minutes, 20 minutes, and 10 minutes respectively. When the tank is empty, all the three pipes are opened. A, B and C discharge chemical solutions P,Q and R respectively. What is the proportion of the solution R in the liquid in the tank after 3 minutes?",

        a: "5/11",
        b: "6/11",
        c: "7/11",
        d: "8/11",
        ans: "ans2"

    },
    {
        ques: " Two pipes A and B can fill a cistern in 37 minutes and 45 minutes respectively. Both pipes are opened. The cistern will be filled in just half an hour, if the B is turned off after:",

        a: "5 min",
        b: "9 min",
        c: "10 min",
        d: "15 min",
        ans: "ans2"
    },
    {
        ques: "A tank is filled by three pipes with uniform flow. The first two pipes operating simultaneously fill the tank in the same time during which the tank is filled by the third pipe alone. The second pipe fills the tank 5 hours faster than the first pipe and 4 hours slower than the third pipe. The time required by the first pipe is",

        a: "6 hr",
        b: "10 hr",
        c: "15 hr",
        d: "30 hr",
        ans: "ans3"
    },
    {
        ques: "Two pipes can fill a tank in 20 and 24 minutes respectively and a waste pipe can empty 3 gallons per minute. All the three pipes working together can fill the tank in 15 minutes. The capacity of the tank is:",

        a: "60 gallons",
        b: "100 gallons",
        c: "120 gallons",
        d: "180 gallons",
        ans: "ans3"
    },
    {
        ques: "A tank is filled in 5 hours by three pipes A, B and C. The pipe C is twice as fast as B and B is twice as fast as A. How much time will pipe A alone take to fill the tank?",

        a: "20 hr",
        b: "25 hr",
        c: "30hr",
        d: "35hr",
        ans: "ans4"
    },
    {
        ques: "Two pipes A and B together can fill a cistern in 4 hours. Had they been opened separately, then B would have taken 6 hours more than A to fill the cistern. How much time will be taken by A to fill the cistern separately?",

        a: "6 hr",
        b: "1 hr",
        c: "5 hr",
        d: "8 hr",
        ans: "ans1"
    },
    {
        ques: "Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both the pipes are used together, then how long will it take to fill the tank?",

        a: "12 min",
        b: "25 min",
        c: "15 min",
        d: "50 min",
        ans: "ans1"
    },
    {
        ques: "One pipe can fill a tank three times as fast as another pipe. If together the two pipes can fill the tank in 36 minutes, then the slower pipe alone will be able to fill the tank in?",

        a: "81 min",
        b: "108 min",
        c: "144 min",
        d: "192 min",
        ans: "ans3"
    },
    {
        ques: "A large tanker can be filled by two pipes A and B in 60 minutes and 40 minutes respectively. How many minutes will it take to fill the tanker from empty state if B is used for half the time and A and B fill it together for the other half?",

        a: "20 min",
        b: "25 min",
        c: "30 min",
        d: "35 min",
        ans: "ans3"
    },
    {
        ques: "Three pipes A, B and C can fill a tank in 6 hours. After working at it together for 2 hours, C is closed and A and B can fill the remaining part in 7 hours. The number of hours taken by C alone to fill the tank is?",

        a: "10 hr",
        b: "12 hr",
        c: "14 hr",
        d: "16 hr",
        ans: "ans3"
    }
];

const quesbox= document.getElementById("quesbox");
 const option1= document.getElementById("option1");
 const option2= document.getElementById("option2");
 const option3= document.getElementById("option3");
 const option4= document.getElementById("option4");
 const answer= document.querySelectorAll(".anwser");

 let questionCount=0;
 let score=0;

 const loadQuestion = () => {
    const questionList = quizpipe[questionCount];
    quesbox.innerText=questionList.ques;
    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;
 }
 loadQuestion();

 const getCheckAnswer = () =>
 {
    let answer;
    answer.forEach( (curAnsElem) => 
    {if(curAnsElem.checked)
        { answer=curAnsElem.id;}
    });
    return answer;
 }

 const deselectAll = () =>{
    answer.forEach( (curAnsElem) => curAnsElem.checked=false);
 }

function nextQuestion()
 {
const checkedAnswer = getCheckAnswer();
if(checkedAnswer==quizpipe[questionCount].ans)
{score++;};

questionCount++;
deselectAll();
 
if( questionCount<quizpipe.length)
{
    loadQuestion();
}

 }