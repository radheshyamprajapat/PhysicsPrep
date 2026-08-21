window.PHYSICS_QUESTIONS = [
  {
    id:"QM-DEMO-001",exam:"CSIR NET",year:2024,subject:"Quantum Mechanics",topic:"1D Potential",type:"PYQ",
    question:"For a particle in an infinite one-dimensional box of width L, which quantity is proportional to n²?",
    options:["The energy of the nth stationary state","The wavelength of the nth state","The probability density at every point","The period of the wavefunction"],
    answer:0,explanation:"For an infinite square well, Eₙ = n²π²ℏ²/(2mL²).",difficulty:"Easy"
  },
  {
    id:"QM-DEMO-002",exam:"GATE Physics",year:2023,subject:"Quantum Mechanics",topic:"1D Potential",type:"PYQ",
    question:"A normalized wavefunction ψ(x) is multiplied by a constant phase factor e^{iφ}. What happens to the probability density?",
    options:["It becomes zero","It doubles","It remains unchanged","It becomes negative"],
    answer:2,explanation:"|e^{iφ}ψ|² = |ψ|² because the phase factor has unit magnitude.",difficulty:"Easy"
  },
  {
    id:"QM-DEMO-003",exam:"JEST",year:2022,subject:"Quantum Mechanics",topic:"Harmonic Oscillator",type:"PYQ",
    question:"The energy levels of the one-dimensional quantum harmonic oscillator are:",
    options:["Eₙ=nℏω","Eₙ=(n+1/2)ℏω","Eₙ=(n+1)ℏω","Eₙ=n²ℏω"],
    answer:1,explanation:"The oscillator has equally spaced levels Eₙ=(n+1/2)ℏω, n=0,1,2,...",difficulty:"Easy"
  },
  {
    id:"QM-DEMO-004",exam:"CSIR NET",year:2021,subject:"Quantum Mechanics",topic:"Angular Momentum",type:"PYQ",
    question:"For an orbital angular momentum quantum number l, the eigenvalues of L² are:",
    options:["ℏl","ℏ²l","ℏ²l(l+1)","ℏl(l+1)"],
    answer:2,explanation:"L²|l,m⟩=ℏ²l(l+1)|l,m⟩.",difficulty:"Easy"
  },
  {
    id:"QM-DEMO-005",exam:"GATE Physics",year:2020,subject:"Quantum Mechanics",topic:"1D Potential",type:"PYQ",
    question:"For a bound state in a one-dimensional finite potential well, the wavefunction outside the well generally:",
    options:["Is exactly zero","Oscillates indefinitely","Decays exponentially","Must be constant"],
    answer:2,explanation:"In the classically forbidden region the bound-state solution is exponentially decaying.",difficulty:"Medium"
  },
  {
    id:"QM-DEMO-006",exam:"JEST",year:2024,subject:"Quantum Mechanics",topic:"Hydrogen Atom",type:"PYQ",
    question:"Ignoring spin and other corrections, the hydrogen atom energy depends primarily on which quantum number?",
    options:["n","l only","m only","Spin projection only"],
    answer:0,explanation:"For the non-relativistic hydrogen atom, the energy depends only on the principal quantum number n.",difficulty:"Easy"
  }
];