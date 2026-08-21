(() => {
  const raw=sessionStorage.getItem("physicsPrepResult");
  if(!raw){location.href="index.html";return;}
  const r=JSON.parse(raw), accuracy=r.total?Math.round(r.correct/r.total*100):0;
  document.querySelector("#score").textContent=`${r.correct} / ${r.total}`;
  document.querySelector("#accuracy").textContent=`${accuracy}%`;
  document.querySelector("#correct").textContent=r.correct;
  document.querySelector("#wrong").textContent=r.wrong;
  document.querySelector("#skipped").textContent=r.skipped;
  document.querySelector("#scoreBar").style.width=`${accuracy}%`;
  document.querySelector("#resultMessage").textContent=accuracy>=80?"Excellent work — keep the momentum going!":accuracy>=60?"Good attempt — a little more practice can push your score higher.":"Keep practicing. Every question is progress.";
})();