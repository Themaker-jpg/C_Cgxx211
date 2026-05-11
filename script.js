let q=0;

const quiz=[
  {q:"วันนี้เหนื่อยไหม?",a:"ไม่เหนื่อยเลย 😊",b:"เหนื่อยนิดหน่อย 🥺"},
  {q:"ถ้าเเกมองเราเป็นสัตว์ เราเป็นอะไร?",a:"แมว 🐱",b:"หมา 🐶"},
  {q:"คุยกับเราเเล้วแกรู้สึกโอเคไหม?",a:"โอเคนะ 💖",b:"ไม่ค่อย 😅"}
];

function startQuiz(){

  popup.innerText="แป๊บนะ เราทำใจแป๊บ 🥺";
  popup.classList.add("show");

  setTimeout(()=>{
    popup.classList.remove("show");

    page0.classList.remove("active");
    page1.classList.add("active");

    showQ();

  },1200);
}

function showQ(){
  quizBox.innerHTML=`
    <h2>${quiz[q].q}</h2>
    <button onclick="ans('A')">${quiz[q].a}</button>
    <button onclick="ans('B')">${quiz[q].b}</button>
  `;
}

function ans(t){

  let msg="";

  if(q===0){
    msg = t==="A"
    ? "เก่งจังเลยคนเก่งของเค้า 💖"
    : "โอ๋ๆนะ สู้ๆ เค้าเป็นกำลังใจให้แกเสมอนะ 🥺";
  }

  if(q===1){
    msg = t==="A"
    ? "งั้น ให้เราเป็นแมวขี้อ้อนของแกมั้ย 🐱"
    : "งั้น ให้เราเป็นโกลเด้นของแกมั้ย 🐶";
  }

  if(q===2){
    msg = t==="A"
    ? "แกน่ารักจังเลย 💖\nแต่เค้าสัญญาว่าจะทำตัวให้ดีขึ้นแน่นอน"
    : "เค้าหนีไปเสียใจแป๊บเดียว…\nเดี๋ยวกลับมาใหม่ 🥺";
  }

  popup.innerText=msg;
  popup.classList.add("show");

  let time = msg.length > 40 ? 3500 : 2500;

  setTimeout(()=>popup.classList.remove("show"),time);

  q++;

  setTimeout(()=>{
    q>=quiz.length ? goGift() : showQ();
  },800);
}

function goGift(){
  page1.classList.remove("active");
  page2.classList.add("active");
}

function openGift(){
  page2.classList.remove("active");
  page3.classList.add("active");
}

let pass="";
const correct="2004";

function add(n){
  if(pass.length<4){
    pass+=n;
    display.innerText="♡".repeat(pass.length);
  }
}

function back(){
  pass=pass.slice(0,-1);
  display.innerText=pass?"♡".repeat(pass.length):"♡";
}

function check(){
  if(pass===correct){
    page3.classList.remove("active");
    page4.classList.add("active");
  }else{
    popup.innerText="รหัสไม่ถูก 🥺";
    popup.classList.add("show");
    pass="";
    display.innerText="♡";
    setTimeout(()=>popup.classList.remove("show"),1500);
  }
}

const startDate=new Date("2026-02-24T00:00:00");

function updateTimer(){
  const now=new Date();
  const diff=now-startDate;

  const d=Math.floor(diff/86400000);
  const h=Math.floor(diff%86400000/3600000);
  const m=Math.floor(diff%3600000/60000);

  timer.innerHTML=`${d} วัน ${h} ชั่วโมง ${m} นาที`;
}

setInterval(updateTimer,1000);
updateTimer();

function next(){
  page4.classList.remove("active");
  page5.classList.add("active");
}