(() => {
  const raw = sessionStorage.getItem("physicsPrepSession");
  if (!raw) { location.href = "practice.html"; return; }
  const session = JSON.parse(raw);
  const questions = session.questions || [];
  if (!questions.length) { location.href = "practice.html"; return; }

  let index = 0;
  let answers = Array(questions.length).fill(null);
  let seconds = Number(session.duration) || questions.length * 90;
  let finished = false;

  const $ = id => document.getElementById(id);
  function render() {
    const q = questions[index];
    $("progress").textContent = `Question ${index+1} / ${questions.length}`;
    $("questionNumber").textContent = `Question ${index+1}`;
    $("questionMeta").textContent = `${q.exam} • ${q.year} • ${q.difficulty}`;
    $("questionText").textContent = q.question;
    $("options").innerHTML = q.options.map((o,i) => `
      <button class="option ${answers[index]===i?"selected":""}" data-index="${i}" aria-pressed="${answers[index]===i}">
        <span class="option-key">${String.fromCharCode(65+i)}.</span><span>${escapeHTML(o)}</span>
      </button>`).join("");
    $("options").querySelectorAll(".option").forEach(btn => btn.addEventListener("click", () => {
      answers[index] = Number(btn.dataset.index); render();
    }));
    $("prevBtn").disabled = index === 0;
    $("nextBtn").classList.toggle("hidden", index === questions.length-1);
    $("finishBtn").classList.toggle("hidden", index !== questions.length-1);
  }
  function tick() {
    if (finished) return;
    const m = Math.floor(seconds/60), s = seconds%60;
    $("timer").textContent = `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
    if (seconds <= 0) finish();
    else seconds--;
  }
  function finish() {
    if (finished) return;
    finished = true;
    let correct=0, skipped=0;
    questions.forEach((q,i)=>{ if(answers[i]===null) skipped++; else if(answers[i]===q.answer) correct++; });
    const wrong = questions.length - correct - skipped;
    sessionStorage.setItem("physicsPrepResult", JSON.stringify({
      total:questions.length, correct, wrong, skipped, answers, questions,
      score:correct
    }));
    location.href="result.html";
  }
  $("prevBtn").addEventListener("click",()=>{if(index>0){index--;render();}});
  $("nextBtn").addEventListener("click",()=>{if(index<questions.length-1){index++;render();}});
  $("finishBtn").addEventListener("click",finish);
  document.addEventListener("keydown",e=>{if(["1","2","3","4"].includes(e.key)){answers[index]=Number(e.key)-1;render();} if(e.key==="ArrowRight"&&index<questions.length-1){index++;render();} if(e.key==="ArrowLeft"&&index>0){index--;render();}});
  render(); tick(); setInterval(tick,1000);
  function escapeHTML(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]))}
})();