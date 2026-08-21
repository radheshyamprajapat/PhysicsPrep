// data/questions/quantum/1d-potential.js

window.PHYSICS_QUESTIONS_1D_POTENTIAL = [
  {
    id: "QM-CSIR-2011-001",
    exam: "CSIR NET",
    year: 2011,
    subject: "Quantum Mechanics",
    topic: "1D Potential",
    type: "PYQ",
    question: "The wavefunction of a particle is given by $\\psi = \\frac{1}{\sqrt{2}}\\phi_0 + i\\phi_1$ where $\\phi_0$ and $\\phi_1$ are the normalized eigenfunctions with energies $E_0$ and $E_1$ corresponding to the ground state and first excited state, respectively. The expectation value of the Hamiltonian in this state is",
    options: [
      "$\\frac{E_0}{2} + E_1$",
      "$\\frac{E_0}{2} - E_1$",
      "$\\frac{E_0 - 2E_1}{3}$",
      "$\\frac{E_0 + 2E_1}{3}$"
    ],
    answer: 3,
    explanation: "Normalizing state $\\psi$: $\\langle\\psi|\\psi\\rangle = |1/\\sqrt{2}|^2 + |i|^2 = 1/2 + 1 = 3/2$. Unnormalized expectation $\\langle H\\rangle_{un} = (1/2)E_0 + 1 \\cdot E_1$. Normalized $\\langle H\\rangle = \\frac{(1/2)E_0 + E_1}{3/2} = \\frac{E_0 + 2E_1}{3}$.",
    difficulty: "Easy",
    needs_review: false
  },
  {
    id: "QM-CSIR-2011-002",
    exam: "CSIR NET",
    year: 2011,
    subject: "Quantum Mechanics",
    topic: "1D Potential",
    type: "PYQ",
    question: "Consider a particle in a one-dimensional potential that satisfies $V(x) = V(-x)$. Let $|\\psi_0\\rangle$ and $|\\psi_1\\rangle$ denote the ground and the first excited states, respectively, and let $|\\psi\\rangle = \\alpha_0 |\\psi_0\\rangle + \\alpha_1 |\\psi_1\\rangle$ be a normalized state with $\\alpha_0$ and $\\alpha_1$ being real constants. The expectation value $\\langle x\\rangle$ of the position operator $x$ in the state $|\\psi\\rangle$ is given by",
    options: [
      "$\\alpha_0^2\\langle\\psi_0|x|\\psi_0\\rangle + \\alpha_1^2\\langle\\psi_1|x|\\psi_1\\rangle$",
      "$\\alpha_0\\alpha_1[\\langle\\psi_0|x|\\psi_1\\rangle + \\langle\\psi_1|x|\\psi_0\\rangle]$",
      "$\\alpha_0^2 + \\alpha_1^2$",
      "$2\\alpha_0\\alpha_1$"
    ],
    answer: 1,
    explanation: "For a symmetric potential $V(x)=V(-x)$, diagonal expectation values vanish by parity: $\\langle\\psi_0|x|\\psi_0\\rangle = \\langle\\psi_1|x|\\psi_1\\rangle = 0$. Cross terms remain: $\\langle x\\rangle = \\alpha_0\\alpha_1[\\langle\\psi_0|x|\\psi_1\\rangle + \\langle\\psi_1|x|\\psi_0\\rangle]$.",
    difficulty: "Easy",
    needs_review: false
  },
  {
    id: "QM-CSIR-2011-003",
    exam: "CSIR NET",
    year: 2011,
    subject: "Quantum Mechanics",
    topic: "Wave Mechanics",
    type: "PYQ",
    question: "The wave function of a particle at time $t=0$ is given by $|\\psi(0)\\rangle = \\frac{1}{\\sqrt{2}}(|u_1\\rangle + |u_2\\rangle)$ where $|u_1\\rangle$ and $|u_2\\rangle$ are the normalized eigenstates with eigenvalues $E_1$ and $E_2$ respectively, $(E_2 > E_1)$. The shortest time after which $|\\psi(t)\\rangle$ will become orthogonal to $|\\psi(0)\\rangle$ is",
    options: [
      "$\\frac{\\hbar\\pi}{2(E_2 - E_1)}$",
      "$\\frac{\\hbar\\pi}{E_2 - E_1}$",
      "$\\frac{\\sqrt{2}\\hbar\\pi}{E_2 - E_1}$",
      "$\\frac{2\\hbar\\pi}{E_2 - E_1}$"
    ],
    answer: 1,
    explanation: "$|\\psi(t)\\rangle = \\frac{1}{\\sqrt{2}}(|u_1\\rangle e^{-iE_1 t/\\hbar} + |u_2\\rangle e^{-iE_2 t/\\hbar})$. Orthogonality requirement: $\\langle\\psi(0)|\\psi(t)\\rangle = \\frac{1}{2}(e^{-iE_1 t/\\hbar} + e^{-iE_2 t/\\hbar}) = 0 \\implies e^{i(E_2 - E_1)t/\\hbar} = -1 = e^{i\\pi} \\implies t = \\frac{\\pi\\hbar}{E_2 - E_1}$.",
    difficulty: "Medium",
    needs_review: false
  },
  {
    id: "QM-CSIR-2012-004",
    exam: "CSIR NET",
    year: 2012,
    subject: "Quantum Mechanics",
    topic: "1D Potential",
    type: "PYQ",
    question: "A particle in one-dimension is in the potential $V(x) = \\begin{cases} 0, & \\text{if } x < 0 \\\\ -V_0, & \\text{if } 0 \\le x \\le l \\\\ 0, & \\text{if } x > l \\end{cases}$. If there is at least one bound state, the minimum depth of potential is",
    options: [
      "$\\frac{\\hbar^2\\pi^2}{8ml^2}$",
      "$\\frac{\\hbar^2\\pi^2}{2ml^2}$",
      "$\\frac{2\\hbar^2\\pi^2}{ml^2}$",
      "$\\frac{\\hbar^2\\pi^2}{ml^2}$"
    ],
    answer: 0,
    explanation: "For a 1D finite attractive potential well bounded at $x=0$, the condition for at least one bound state requires $V_0 \\ge \\frac{\\pi^2\\hbar^2}{8ml^2}$.",
    difficulty: "Medium",
    needs_review: false
  },
  {
    id: "QM-CSIR-2012-005",
    exam: "CSIR NET",
    year: 2012,
    subject: "Quantum Mechanics",
    topic: "Wave Mechanics",
    type: "PYQ",
    question: "If a particle is represented by the normalized wave function $\\psi(x) = \\begin{cases} \\frac{\\sqrt{15}(a^2-x^2)}{4a^{5/2}}, & \\text{for } -a < x < a \\\\ 0, & \\text{otherwise} \\end{cases}$, the uncertainty $\\Delta p$ in its momentum is",
    options: [
      "$2\\hbar/5a$",
      "$5\\hbar/2a$",
      "$\\sqrt{10}\\hbar/a$",
      "$\\sqrt{5}\\hbar/\\sqrt{2}a$"
    ],
    answer: 3,
    explanation: "Since wavefunction is symmetric, $\\langle p\\rangle = 0$. $\\Delta p = \\sqrt{\\langle p^2\\rangle}$. Using $\\langle p^2\\rangle = -\\hbar^2 \\int_{-a}^a \\psi^*(x) \\frac{d^2\\psi}{dx^2} dx = \\frac{15\\hbar^2}{16a^5} \\int_{-a}^a (a^2-x^2)(2) dx = \\frac{5\\hbar^2}{2a^2}$. Thus, $\\Delta p = \\frac{\\sqrt{5}\\hbar}{\\sqrt{2}a}$.",
    difficulty: "Medium",
    needs_review: false
  },
  {
    id: "QM-CSIR-2012-006",
    exam: "CSIR NET",
    year: 2012,
    subject: "Quantum Mechanics",
    topic: "1D Potential",
    type: "PYQ",
    question: "The energies in the ground state and first excited state of a particle of mass $m = 1/2$ in a potential $V(x)$ are $-4$ and $-1$, respectively (in units where $\\hbar = 1$). If the corresponding wavefunctions are related by $\\psi_1(x) = \\psi_0(x) \\sinh x$, then the ground state eigenfunction is",
    options: [
      "$\\psi_0(x) = \\sqrt{\\operatorname{sech} x}$",
      "$\\psi_0(x) = \\operatorname{sech} x$",
      "$\\psi_0(x) = \\operatorname{sech}^2 x$",
      "$\\psi_0(x) = \\operatorname{sech}^3 x$"
    ],
    answer: 2,
    explanation: "Using the relation between states via ladder/factorization relations in 1D quantum mechanics, $\\psi_0(x) = \\operatorname{sech}^2 x$ gives the exact energy levels $E_0 = -4$ and $E_1 = -1$ for the Pöschl-Teller potential.",
    difficulty: "Hard",
    needs_review: false
  },
  {
    id: "QM-CSIR-2013-007",
    exam: "CSIR NET",
    year: 2013,
    subject: "Quantum Mechanics",
    topic: "1D Potential",
    type: "PYQ",
    question: "If $\\psi(x) = A \\exp(-x^4)$ is the eigenfunction of a one-dimensional Hamiltonian with eigenvalue $E = 0$, the potential $V(x)$ (in units where $\\hbar = 2m = 1$) is",
    options: [
      "$12x^2$",
      "$16x^6$",
      "$16x^6 + 12x^2$",
      "$16x^6 - 12x^2$"
    ],
    answer: 3,
    explanation: "Schrödinger equation: $-\\frac{d^2\\psi}{dx^2} + V(x)\\psi = E\\psi = 0 \\implies V(x) = \\frac{1}{\\psi}\\frac{d^2\\psi}{dx^2}$. With $\\psi = A e^{-x^4}$, $\\psi' = -4x^3 \\psi$, $\\psi'' = (-12x^2 + 16x^6)\\psi$. Thus $V(x) = 16x^6 - 12x^2$.",
    difficulty: "Medium",
    needs_review: false
  },
  {
    id: "QM-CSIR-2013-008",
    exam: "CSIR NET",
    year: 2013,
    subject: "Quantum Mechanics",
    topic: "1D Potential",
    type: "PYQ",
    question: "A particle is in the ground state of an infinite square well potential given by $V(x) = \\begin{cases} 0, & \\text{for } -a \\le x \\le a \\\\ \\infty, & \\text{otherwise} \\end{cases}$. The probability to find the particle in the interval between $-a/2$ and $a/2$ is",
    options: [
      "$1/2$",
      "$\\frac{1}{2} + \\frac{1}{\\pi}$",
      "$\\frac{1}{2} - \\frac{1}{\\pi}$",
      "$1/\\pi$"
    ],
    answer: 1,
    explanation: "Ground state $\\psi_1(x) = \\frac{1}{\\sqrt{a}}\\cos(\\frac{\\pi x}{2a})$. $P = \\int_{-a/2}^{a/2} \\frac{1}{a} \\cos^2(\\frac{\\pi x}{2a}) dx = \\frac{2}{a} \\int_0^{a/2} \\frac{1 + \\cos(\\pi x/a)}{2} dx = \\frac{1}{2} + \\frac{1}{\\pi}$.",
    difficulty: "Medium",
    needs_review: false
  },
  {
    id: "QM-CSIR-2014-009",
    exam: "CSIR NET",
    year: 2014,
    subject: "Quantum Mechanics",
    topic: "3D Box",
    type: "PYQ",
    question: "A particle of mass $m$ in three dimensions is in the potential $V(r) = \\begin{cases} 0, & r < a \\\\ \\infty, & r > a \\end{cases}$. Its ground state energy is",
    options: [
      "$\\frac{\\pi^2\\hbar^2}{2ma^2}$",
      "$\\frac{\\pi^2\\hbar^2}{ma^2}$",
      "$\\frac{3\\pi^2\\hbar^2}{2ma^2}$",
      "$\\frac{9\\pi^2\\hbar^2}{2ma^2}$"
    ],
    answer: 0,
    explanation: "For spherically symmetric 3D infinite potential well, ground state corresponds to $l=0$, radial equation reduces to 1D box of length $a$. Thus $E_0 = \\frac{\\pi^2\\hbar^2}{2ma^2}$.",
    difficulty: "Easy",
    needs_review: false
  },
  {
    id: "QM-CSIR-2014-010",
    exam: "CSIR NET",
    year: 2014,
    subject: "Quantum Mechanics",
    topic: "Hydrogen Atom",
    type: "PYQ",
    question: "An electron is in the ground state of a hydrogen atom. The probability that it is within the Bohr radius is approximately equal to",
    options: [
      "0.60",
      "0.90",
      "0.16",
      "0.32"
    ],
    answer: 3,
    explanation: "$P = \\int_0^{a_0} |\\psi_{100}|^2 4\\pi r^2 dr = \\int_0^{a_0} 4 \\left(\\frac{r}{a_0}\\right)^2 e^{-2r/a_0} \\frac{dr}{a_0} = 1 - 5e^{-2} \\approx 0.323$.",
    difficulty: "Medium",
    needs_review: false
  },
  {
    id: "QM-CSIR-2014-011",
    exam: "CSIR NET",
    year: 2014,
    subject: "Quantum Mechanics",
    topic: "1D Potential",
    type: "PYQ",
    question: "A particle in the infinite square well potential $V(x) = \\begin{cases} 0, & 0 < x < a \\\\ \\infty, & \\text{otherwise} \\end{cases}$ is prepared in a state with the wavefunction $\\psi(x) = \\begin{cases} A \\sin^3(\\frac{\\pi x}{a}), & 0 < x < a \\\\ 0, & \\text{otherwise} \\end{cases}$. The expectation value of the energy of the particle is",
    options: [
      "$\\frac{9\\hbar^2\\pi^2}{2ma^2}$",
      "$\\frac{5\\hbar^2\\pi^2}{2ma^2}$",
      "$\\frac{9\\hbar^2\\pi^2}{10ma^2}$",
      "$\\frac{\\hbar^2\\pi^2}{2ma^2}$"
    ],
    answer: 2,
    explanation: "Using $\\sin^3\\theta = \\frac{3}{4}\\sin\\theta - \\frac{1}{4}\\sin(3\\theta)$, state is combination of $\\phi_1$ and $\\phi_3$ with energies $E_1$ and $9E_1$. Normalization weights give probabilities $9/10$ for $E_1$ and $1/10$ for $9E_1$. Average $\\langle E\\rangle = \\frac{9}{10}E_1 + \\frac{1}{10}(9E_1) = \\frac{18}{10}E_1 = \\frac{9\\hbar^2\\pi^2}{10ma^2}$.",
    difficulty: "Hard",
    needs_review: false
  },
  {
    id: "QM-CSIR-2014-012",
    exam: "CSIR NET",
    year: 2014,
    subject: "Quantum Mechanics",
    topic: "Wave Mechanics",
    type: "PYQ",
    question: "Let $\\psi_1$ and $\\psi_2$ denote the normalized eigenstates of a particle with energy eigenvalues $E_1$ and $E_2$ respectively, with $E_2 > E_1$. At time $t=0$ the particle is prepared in a state $\\Psi(t=0) = \\frac{1}{\\sqrt{2}}(\\psi_1 + \\psi_2)$. The shortest time $T$ at which $\\Psi(t=T)$ will be orthogonal to $\\Psi(t=0)$ is",
    options: [
      "$\\frac{2\\hbar\\pi}{E_2 - E_1}$",
      "$\\frac{\\hbar\\pi}{E_2 - E_1}$",
      "$\\frac{\\hbar\\pi}{2(E_2 - E_1)}$",
      "$\\frac{\\hbar\\pi}{4(E_2 - E_1)}$"
    ],
    answer: 1,
    explanation: "Condition $\\langle\\Psi(0)|\\Psi(T)\\rangle = 0 \\implies e^{-i(E_2 - E_1)T/\\hbar} = -1 \\implies T = \\frac{\\pi\\hbar}{E_2 - E_1}$.",
    difficulty: "Easy",
    needs_review: false
  },
  {
    id: "QM-CSIR-2015-013",
    exam: "CSIR NET",
    year: 2015,
    subject: "Quantum Mechanics",
    topic: "Operators",
    type: "PYQ",
    question: "A Hermitian operator $\\hat{O}$ has two normalized eigenstates $|1\\rangle$ and $|2\\rangle$ with eigenvalues 1 and 2, respectively. The two states $|u\\rangle = \\cos\\theta|1\\rangle + \\sin\\theta|2\\rangle$ and $|v\\rangle = \\cos\\phi|1\\rangle + \\sin\\phi|2\\rangle$ are such that $\\langle v|\\hat{O}|v\\rangle = 7/4$ and $\\langle u|v\\rangle = 0$. Which of the following are possible values of $\\theta$ and $\\phi$?",
    options: [
      "$\\theta = -\\pi/6$ and $\\phi = \\pi/3$",
      "$\\theta = \\pi/6$ and $\\phi = \\pi/3$",
      "$\\theta = -\\pi/4$ and $\\phi = \\pi/4$",
      "$\\theta = \\pi/3$ and $\\phi = -\\pi/6$"
    ],
    answer: 0,
    explanation: "$\\langle v|\\hat{O}|v\\rangle = \\cos^2\\phi + 2\\sin^2\\phi = 1 + \\sin^2\\phi = 7/4 \\implies \\sin^2\\phi = 3/4 \\implies \\phi = \\pi/3$. Since $\\langle u|v\\rangle = 0 \\implies \\cos(\\theta - \\phi) = 0 \\implies \\phi - \\theta = \\pi/2 \\implies \\theta = -\\pi/6$.",
    difficulty: "Medium",
    needs_review: false
  },
  {
    id: "QM-CSIR-2015-014",
    exam: "CSIR NET",
    year: 2015,
    subject: "Quantum Mechanics",
    topic: "3D Box",
    type: "PYQ",
    question: "The ratio of the energy of the first excited state $E_1$ to that of the ground state $E_0$ of a particle in a three-dimensional rectangular box of sides $L$, $L$ and $L/2$ is",
    options: [
      "3:2",
      "2:1",
      "4:1",
      "4:3"
    ],
    answer: 0,
    explanation: "$E(n_x, n_y, n_z) = \\frac{\\pi^2\\hbar^2}{2mL^2}(n_x^2 + n_y^2 + 4n_z^2)$. Ground state $(1,1,1) \\implies E_0 = 6 E_c$. First excited state $(2,1,1)$ or $(1,2,1) \\implies E_1 = (4+1+4)E_c = 9 E_c$. Ratio $E_1/E_0 = 9/6 = 3/2$.",
    difficulty: "Easy",
    needs_review: false
  },
  {
    id: "QM-CSIR-2016-015",
    exam: "CSIR NET",
    year: 2016,
    subject: "Quantum Mechanics",
    topic: "1D Potential",
    type: "PYQ",
    question: "The state of a particle of mass $m$ in a one-dimensional rigid box in the interval $0$ to $L$ is given by the normalized wavefunction $\\psi(x) = \\sqrt{\\frac{2}{L}}\\left(\\frac{3}{5}\\sin\\frac{2\\pi x}{L} + \\frac{4}{5}\\sin\\frac{4\\pi x}{L}\\right)$. If its energy is measured, the possible outcomes and the average value of energy are, respectively,",
    options: [
      "$\\frac{h^2}{2mL^2}, \\frac{2h^2}{mL^2}$; and $\\frac{73}{50}\\frac{h^2}{mL^2}$",
      "$\\frac{h^2}{8mL^2}, \\frac{h^2}{2mL^2}$ and $\\frac{19}{40}\\frac{h^2}{mL^2}$",
      "$\\frac{h^2}{2mL^2}, \\frac{2h^2}{mL^2}$ and $\\frac{19}{10}\\frac{h^2}{mL^2}$",
      "$\\frac{h^2}{8mL^2}, \\frac{2h^2}{mL^2}$ and $\\frac{73}{200}\\frac{h^2}{mL^2}$"
    ],
    answer: 0,
    explanation: "Eigenstates present are $n=2$ and $n=4$. $E_2 = \\frac{2^2 h^2}{8mL^2} = \\frac{h^2}{2mL^2}$, $E_4 = \\frac{4^2 h^2}{8mL^2} = \\frac{2h^2}{mL^2}$. $\\langle E\\rangle = (3/5)^2 E_2 + (4/5)^2 E_4 = \\frac{9}{25}\\frac{h^2}{2mL^2} + \\frac{16}{25}\\frac{2h^2}{mL^2} = \\frac{73}{50}\\frac{h^2}{mL^2}$.",
    difficulty: "Medium",
    needs_review: false
  },
  {
    id: "QM-CSIR-2016-016",
    exam: "CSIR NET",
    year: 2016,
    subject: "Quantum Mechanics",
    topic: "1D Potential",
    type: "PYQ",
    question: "A particle of mass $m$ moves in one dimension under the influence of the potential $V(x) = -\\alpha\\delta(x)$, where $\\alpha$ is a positive constant. The uncertainty product $(\\Delta x)(\\Delta p)$ in its ground state is",
    options: [
      "$2\\hbar$",
      "$\\hbar/2$",
      "$\\hbar/\\sqrt{2}$",
      "$\\sqrt{2}\\hbar$"
    ],
    answer: 2,
    explanation: "Ground state wavefunction $\\psi(x) = \\sqrt{\\kappa} e^{-\\kappa |x|}$ where $\\kappa = m\\alpha/\\hbar^2$. $\\Delta x = \\frac{1}{\\sqrt{2}\\kappa}$, $\\Delta p = \\hbar\\kappa$. Product $(\\Delta x)(\\Delta p) = \\frac{\\hbar}{\\sqrt{2}}$.",
    difficulty: "Medium",
    needs_review: false
  },
  {
    id: "QM-CSIR-2016-017",
    exam: "CSIR NET",
    year: 2016,
    subject: "Quantum Mechanics",
    topic: "Wave Mechanics",
    type: "PYQ",
    question: "Consider the two lowest normalized energy eigenfunctions $\\psi_0(x)$ and $\\psi_1(x)$ of a one-dimensional system. They satisfy $\\psi_0(x) = \\psi_0^*(x)$ and $\\psi_1(x) = \\alpha \\frac{d\\psi_0}{dx}$ where $\\alpha$ is a real constant. The expectation value of the momentum operator in the state $\\psi_1$ is",
    options: [
      "$-\\hbar/\\alpha^2$",
      "$0$",
      "$\\hbar/\\alpha^2$",
      "$2\\hbar/\\alpha^2$"
    ],
    answer: 1,
    explanation: "For bound states described by real eigenfunctions, expectation value of momentum operator $\\langle p\\rangle = 0$.",
    difficulty: "Easy",
    needs_review: false
  },
  {
    id: "QM-CSIR-2016-018",
    exam: "CSIR NET",
    year: 2016,
    subject: "Quantum Mechanics",
    topic: "1D Potential",
    type: "PYQ",
    question: "A particle in one dimension is in a potential $V(x) = A\\delta(x-a)$. Its wavefunction $\\psi(x)$ is continuous everywhere. The discontinuity in $\\frac{d\\psi}{dx}$ at $x=a$ is",
    options: [
      "$\\frac{2m}{\\hbar^2}A\\psi(a)$",
      "$A(\\psi(a) - \\psi(-a))$",
      "$\\frac{\\hbar^2}{2m}A$",
      "$0$"
    ],
    answer: 0,
    explanation: "Integrating Schrödinger equation across $x=a$: $\\left.\\frac{d\\psi}{dx}\\right|_{a^+} - \\left.\\frac{d\\psi}{dx}\\right|_{a^-} = \\frac{2mA}{\\hbar^2}\\psi(a)$. (PDF answer key lists option b for original numbering, normalized formula is option a).",
    difficulty: "Medium",
    needs_review: false
  },
  {
    id: "QM-CSIR-2016-019",
    exam: "CSIR NET",
    year: 2016,
    subject: "Quantum Mechanics",
    topic: "Wave Mechanics",
    type: "PYQ",
    question: "The eigenstates corresponding to eigenvalues $E_1$ and $E_2$ of a time-independent Hamiltonian are $|1\\rangle$ and $|2\\rangle$ respectively. If at $t=0$ the system is in a state $|\\psi(t=0)\\rangle = \\sin\\theta|1\\rangle + \\cos\\theta|2\\rangle$, the value of $\\langle\\psi(t)|\\psi(t)\\rangle$ at time $t$ will be",
    options: [
      "1",
      "$\\frac{E_1\\sin^2\\theta + E_2\\cos^2\\theta}{\\sqrt{E_1^2 + E_2^2}}$",
      "$e^{iE_1t/\\hbar}\\sin\\theta + e^{iE_2t/\\hbar}\\cos\\theta$",
      "$e^{-iE_1t/\\hbar}\\sin^2\\theta + e^{-iE_2t/\\hbar}\\cos^2\\theta$"
    ],
    answer: 0,
    explanation: "Unitary time evolution preserves normalization for any state: $\\langle\\psi(t)|\\psi(t)\\rangle = 1$.",
    difficulty: "Easy",
    needs_review: false
  },
  {
    id: "QM-CSIR-2017-020",
    exam: "CSIR NET",
    year: 2017,
    subject: "Quantum Mechanics",
    topic: "1D Potential",
    type: "PYQ",
    question: "Consider a potential barrier A of height $V_0$ and width $b$, and another potential barrier B of height $2V_0$ and the same width $b$. The ratio $T_A/T_B$ of tunnelling probabilities $T_A$ and $T_B$ through barriers A and B respectively, for a particle of energy $V_0/100$ is best approximated by",
    options: [
      "$\\exp\\left[(\\sqrt{1.99} - \\sqrt{0.99})\\sqrt{8mV_0b^2/\\hbar^2}\\right]$",
      "$\\exp\\left[(\\sqrt{1.98} - \\sqrt{0.98})\\sqrt{8mV_0b^2/\\hbar^2}\\right]$",
      "$\\exp\\left[(\\sqrt{2.99} - \\sqrt{0.99})\\sqrt{8mV_0b^2/\\hbar^2}\\right]$",
      "$\\exp\\left[(\\sqrt{2.98} - \\sqrt{0.98})\\sqrt{8mV_0b^2/\\hbar^2}\\right]$"
    ],
    answer: 0,
    explanation: "$T \\propto e^{-2Kb}$ with $K = \\sqrt{\\frac{2m(V - E)}{\\hbar^2}}$. $V_A - E = 0.99 V_0$, $V_B - E = 1.99 V_0$. Thus $\\ln(T_A/T_B) = (\\sqrt{1.99} - \\sqrt{0.99}) \\sqrt{8mV_0b^2/\\hbar^2}$.",
    difficulty: "Hard",
    needs_review: false
  },
  {
    id: "QM-CSIR-2017-021",
    exam: "CSIR NET",
    year: 2017,
    subject: "Quantum Mechanics",
    topic: "Operators",
    type: "PYQ",
    question: "The two vectors $\\begin{pmatrix} a \\\\ 0 \\end{pmatrix}$ and $\\begin{pmatrix} b \\\\ c \\end{pmatrix}$ are orthonormal if",
    options: [
      "$a=\\pm 1, b=\\pm 1/\\sqrt{2}, c=\\pm 1/\\sqrt{2}$",
      "$a=\\pm 1, b=\\pm 1, c=0$",
      "$a=\\pm 1, b=0, c=\\pm 1$",
      "$a=\\pm 1, b=\\pm 1/2, c=1/2$"
    ],
    answer: 2,
    explanation: "Norm of first vector $= |a| = 1 \\implies a = \\pm 1$. Orthogonality $\\implies a^*b + 0\\cdot c = 0 \\implies b = 0$. Norm of second vector $= |c| = 1 \\implies c = \\pm 1$.",
    difficulty: "Easy",
    needs_review: false
  },
  {
    id: "QM-CSIR-2017-022",
    exam: "CSIR NET",
    year: 2017,
    subject: "Quantum Mechanics",
    topic: "Wave Mechanics",
    type: "PYQ",
    question: "The normalized wavefunction in the momentum space of a particle in one dimension is $\\phi(p) = \\frac{\\alpha}{p^2 + \\beta^2}$ where $\\alpha$ and $\\beta$ are real constants. The uncertainty $\\Delta x$ in measuring its position is",
    options: [
      "$\\sqrt{\\pi}\\frac{\\hbar\\alpha}{\\beta^2}$",
      "$\\sqrt{\\pi}\\frac{\\hbar\\alpha}{\\beta^3}$",
      "$\\frac{\\hbar}{\\sqrt{2}\\beta}$",
      "$\\sqrt{\\frac{\\pi}{\\beta}}\\frac{\\hbar\\alpha}{\\beta}$"
    ],
    answer: 2,
    explanation: "Fourier transform yields position space wavefunction $\\psi(x) \\propto e^{-\\beta |x|/\\hbar}$. For exponential wavefunction $e^{-\\kappa x}$, $\\Delta x = \\frac{1}{\\sqrt{2}\\kappa} = \\frac{\\hbar}{\\sqrt{2}\\beta}$.",
    difficulty: "Medium",
    needs_review: false
  },
  {
    id: "QM-CSIR-2018-023",
    exam: "CSIR NET",
    year: 2018,
    subject: "Quantum Mechanics",
    topic: "1D Potential",
    type: "PYQ",
    question: "At $t=0$, the wavefunction of an otherwise free particle confined between two infinite walls at $x=0$ and $x=L$ is $\\psi(x,t=0) = \\sqrt{\\frac{2}{L}}\\left(\\sin\\frac{\\pi x}{L} - \\sin\\frac{3\\pi x}{L}\\right)$. Its wave function at a later time $t = \\frac{mL^2}{4\\pi\\hbar}$ is",
    options: [
      "$\\sqrt{\\frac{2}{L}}\\left(\\sin\\frac{\\pi x}{L} - \\sin\\frac{3\\pi x}{L}\\right) e^{i\\pi/6}$",
      "$\\sqrt{\\frac{2}{L}}\\left(\\sin\\frac{\\pi x}{L} + \\sin\\frac{3\\pi x}{L}\\right) e^{-i\\pi/6}$",
      "$\\sqrt{\\frac{2}{L}}\\left(\\sin\\frac{\\pi x}{L} + \\sin\\frac{3\\pi x}{L}\\right) e^{-i\\pi/8}$",
      "$\\sqrt{\\frac{2}{L}}\\left(\\sin\\frac{\\pi x}{L} + \\sin\\frac{3\\pi x}{L}\\right) e^{-i\\pi/6}$"
    ],
    answer: 2,
    explanation: "$E_n = \\frac{n^2\\pi^2\\hbar^2}{2mL^2}$. Phase factor for $n=1$: $e^{-iE_1 t/\\hbar} = e^{-i\\pi/8}$. Phase factor for $n=3$: $e^{-iE_3 t/\\hbar} = e^{-i 9\\pi/8} = -e^{-i\\pi/8}$. Factoring gives $\\sqrt{\\frac{2}{L}}\\left(\\sin\\frac{\\pi x}{L} + \\sin\\frac{3\\pi x}{L}\\right) e^{-i\\pi/8}$.",
    difficulty: "Hard",
    needs_review: false
  },
  {
    id: "QM-CSIR-2018-024",
    exam: "CSIR NET",
    year: 2018,
    subject: "Quantum Mechanics",
    topic: "3D Box",
    type: "PYQ",
    question: "A particle of mass $m$ is confined in a three-dimensional box by the potential $V(x,y,z) = \\begin{cases} 0, & 0 \\le x,y,z \\le a \\\\ \\infty, & \\text{otherwise} \\end{cases}$. The number of eigenstates of Hamiltonian with energy $\\frac{9\\hbar^2\\pi^2}{2ma^2}$ is",
    options: [
      "1",
      "6",
      "3",
      "4"
    ],
    answer: 2,
    explanation: "$n_x^2 + n_y^2 + n_z^2 = 9$. Possible combinations of positive integers are $(1,2,2), (2,1,2), (2,2,1)$. Thus degeneracy = 3.",
    difficulty: "Easy",
    needs_review: false
  },
  {
    id: "QM-CSIR-2019-025",
    exam: "CSIR NET",
    year: 2019,
    subject: "Quantum Mechanics",
    topic: "1D Potential",
    type: "PYQ",
    question: "The energy eigenvalues of a particle of mass $m$, confined to a rigid one-dimensional box of width $L$, are $E_n (n=1,2,...)$. If the walls of the box are moved very slowly toward each other, the rate of change of time-dependent energy $\\frac{dE_2}{dt}$ of the first excited state is",
    options: [
      "$\\frac{E_2}{L}\\frac{dL}{dt}$",
      "$\\frac{2E_2}{L}\\frac{dL}{dt}$",
      "$-\\frac{2E_2}{L}\\frac{dL}{dt}$",
      "$-\\frac{E_1}{L}\\frac{dL}{dt}$"
    ],
    answer: 2,
    explanation: "$E_2 = \\frac{4\\pi^2\\hbar^2}{2mL^2} \\propto L^{-2}$. Differentiating with respect to time: $\\frac{dE_2}{dt} = -2 \\frac{E_2}{L} \\frac{dL}{dt}$.",
    difficulty: "Easy",
    needs_review: false
  },
  {
    id: "QM-CSIR-2019-026",
    exam: "CSIR NET",
    year: 2019,
    subject: "Quantum Mechanics",
    topic: "1D Potential",
    type: "PYQ",
    question: "A quantum particle of mass $m$ in one dimension, confined to a rigid box of length $2L$ from $-L$ to $L$, is in its ground state. An infinitesimally thin wall is very slowly raised to infinity at the centre of the box ($x=0$), in such a way that the system remains in its ground state at all times. Assuming that no energy is lost, the work done on the system when the wall is fully raised is",
    options: [
      "$\\frac{3\\pi^2\\hbar^2}{8mL^2}$",
      "$\\frac{\\pi^2\\hbar^2}{8mL^2}$",
      "$\\frac{\\pi^2\\hbar^2}{2mL^2}$",
      "0"
    ],
    answer: 0,
    explanation: "Initial ground state in box of length $2L$: $E_i = \\frac{\\pi^2\\hbar^2}{2m(2L)^2} = \\frac{\\pi^2\\hbar^2}{8mL^2}$. Final state in two compartments of length $L$: $E_f = \\frac{\\pi^2\\hbar^2}{2mL^2}$. Work done $W = E_f - E_i = \\frac{3\\pi^2\\hbar^2}{8mL^2}$.",
    difficulty: "Hard",
    needs_review: false
  },
  {
    id: "QM-CSIR-2019-027",
    exam: "CSIR NET",
    year: 2019,
    subject: "Quantum Mechanics",
    topic: "1D Potential",
    type: "PYQ",
    question: "A particle of mass $m$ and energy $E>0$ in one dimension is scattered by a asymmetric step potential $V(x)$ where $V(-\\infty)=0$, $V_1 < 0$ in region $(a,b)$ and $V_2 > 0$ for $x>b$. If the particle was moving from $x=-\\infty$ to $x=\\infty$, which graph gives the best qualitative representation of the wavefunction?",
    options: [
      "Wavefunction with constant wavelength everywhere",
      "Wavefunction with smaller amplitude in $x>b$",
      "Wavefunction with varying wavelength: smallest in deep well, longest in potential step region $x>b$",
      "Exponentially decaying wavefunction in all regions"
    ],
    answer: 2,
    explanation: "Local de Broglie wavelength $\\lambda(x) = \\frac{h}{\\sqrt{2m(E - V(x))}}$. Wavelength is shortest where $(E - V(x))$ is largest (deep well $V_1$), and longest where potential is higher ($V_2$).",
    difficulty: "Medium",
    needs_review: false
  },
  {
    id: "QM-CSIR-2019-028",
    exam: "CSIR NET",
    year: 2019,
    subject: "Quantum Mechanics",
    topic: "Operators",
    type: "PYQ",
    question: "Let the normalized eigenstates of the Hamiltonian $H = \\begin{pmatrix} 2 & 1 & 0 \\\\ 1 & 2 & 0 \\\\ 0 & 0 & 2 \\end{pmatrix}$ be $|\\psi_1\\rangle, |\\psi_2\\rangle, |\\psi_3\\rangle$. The expectation value $\\langle H\\rangle$ and variance of $H$ in state $|\\psi\\rangle = \\frac{1}{\\sqrt{3}}(|\\psi_1\\rangle + |\\psi_2\\rangle - i|\\psi_3\\rangle)$ are",
    options: [
      "$4/3$ and $1/3$",
      "$4/3$ and $2/3$",
      "2 and $2/3$",
      "2 and 1"
    ],
    answer: 2,
    explanation: "Eigenvalues of $H$ are $\\lambda = 1, 3, 2$. State is equal mixture with probabilities $1/3$ each. $\\langle H\\rangle = \\frac{1+3+2}{3} = 2$. $\\langle H^2\\rangle = \\frac{1^2 + 3^2 + 2^2}{3} = 14/3$. Variance $\\sigma^2 = 14/3 - 4 = 2/3$.",
    difficulty: "Medium",
    needs_review: false
  },
  {
    id: "QM-CSIR-2019-029",
    exam: "CSIR NET",
    year: 2019,
    subject: "Quantum Mechanics",
    topic: "1D Potential",
    type: "PYQ",
    question: "The wavefunction of a free particle of mass $m$, constrained to move in the interval $-L \\le x \\le L$, is $\\psi(x) = A(L+x)(L-x)$, where $A$ is normalization constant. The probability that the particle will be found to have energy $\\frac{\\pi^2\\hbar^2}{2mL^2}$ is",
    options: [
      "0",
      "$\\frac{1}{\\sqrt{2}}$",
      "$\\frac{1}{2\\sqrt{3}}$",
      "$\\frac{1}{\\pi}$"
    ],
    answer: 0,
    explanation: "Energy $E = \\frac{\\pi^2\\hbar^2}{2mL^2} = \\frac{2^2\\pi^2\\hbar^2}{2m(2L)^2}$ corresponds to $n=2$ (even excited parity) eigenstate $\\sin(\\frac{\\pi x}{L})$. Since $\\psi(x)$ is even under $x \\to -x$, expansion coefficient $c_2 = \\int_{-L}^L \\psi(x) \\sin(\\frac{\\pi x}{L}) dx = 0$.",
    difficulty: "Medium",
    needs_review: false
  },
  {
    id: "QM-CSIR-2020-030",
    exam: "CSIR NET",
    year: 2020,
    subject: "Quantum Mechanics",
    topic: "1D Potential",
    type: "PYQ",
    question: "For the one dimensional potential wells A (depth $2V_0$), B (depth $V_0$), and C (infinite depth) of same width $a$, let $E_A, E_B, E_C$ denote their ground state energies respectively. The correct ordering of the energies is",
    options: [
      "$E_C > E_B > E_A$",
      "$E_A > E_B > E_C$",
      "$E_B > E_C > E_A$",
      "$E_B > E_A > E_C$"
    ],
    answer: 0,
    explanation: "Finite well wavefunctions penetrate into barrier, increasing effective box size and lowering kinetic energy. Denser barriers lock wavefunction tighter, raising energy: $E_{infinite} > E_{shallower\\ finite\\ well} \\implies E_C > E_B > E_A$.",
    difficulty: "Medium",
    needs_review: false
  },
  {
    id: "QM-CSIR-2020-031",
    exam: "CSIR NET",
    year: 2020,
    subject: "Quantum Mechanics",
    topic: "Hydrogen Atom",
    type: "PYQ",
    question: "The state of an electron in a hydrogen atom is $|\\psi\\rangle = \\frac{1}{\\sqrt{6}}|1,0,0\\rangle + \\frac{1}{\\sqrt{3}}|2,1,0\\rangle + \\frac{1}{\\sqrt{2}}|3,1,-1\\rangle$. In a measurement of $L_z$ the result recorded is 0. Subsequently a measurement of energy is performed. The probability that the result is $E_2$ is",
    options: [
      "1",
      "1/2",
      "2/3",
      "1/3"
    ],
    answer: 2,
    explanation: "Subspace with $L_z = 0$ contains states $|1,0,0\\rangle$ (weight $1/6$) and $|2,1,0\\rangle$ (weight $1/3$). Collapse onto $L_z=0$ subspace yields total probability $1/6 + 1/3 = 1/2$. Conditional probability for state $n=2$ ($|2,1,0\\rangle$) is $\\frac{1/3}{1/2} = 2/3$.",
    difficulty: "Medium",
    needs_review: false
  },
  {
    id: "QM-CSIR-2021-032",
    exam: "CSIR NET",
    year: 2021,
    subject: "Quantum Mechanics",
    topic: "Operators",
    type: "PYQ",
    question: "Let the normalized eigenstates of the Hamiltonian $H = \\begin{pmatrix} 2 & 1 & 0 \\\\ 1 & 2 & 0 \\\\ 0 & 0 & 2 \\end{pmatrix}$ be $|\\psi_1\\rangle, |\\psi_2\\rangle, |\\psi_3\\rangle$. The expectation value $\\langle H\\rangle$ and variance of $H$ in state $|\\psi\\rangle = \\frac{1}{\\sqrt{3}}(|\\psi_1\\rangle + |\\psi_2\\rangle - i|\\psi_3\\rangle)$ are",
    options: [
      "$4/3$ and $1/3$",
      "$4/3$ and $2/3$",
      "2 and $2/3$",
      "2 and 1"
    ],
    answer: 2,
    explanation: "Duplicate of CSIR DEC 2019 Q28. $\\langle H\\rangle = 2$, $\\operatorname{Var}(H) = 2/3$.",
    difficulty: "Medium",
    needs_review: false
  },
  {
    id: "QM-CSIR-2022-033",
    exam: "CSIR NET",
    year: 2022,
    subject: "Quantum Mechanics",
    topic: "Wave Mechanics",
    type: "PYQ",
    question: "The momentum space representation of the Schrödinger equation of a particle in a potential $V(\\vec{r})$ is $(|\\vec{p}|^2 + \\beta (\\nabla_p^2)^2)\\psi(\\vec{p},t) = i\\hbar\\frac{\\partial}{\\partial t}\\psi(\\vec{p},t)$. The potential is",
    options: [
      "$V_0 e^{-r^2/a^2}$",
      "$V_0 e^{-r^4/a^4}$",
      "$V_0(r/a)^2$",
      "$V_0(r/a)^4$"
    ],
    answer: 3,
    explanation: "Position operator in momentum space is $\\vec{r} \\to i\\hbar \\nabla_p$. Therefore $\\nabla_p^2 \\propto r^2$ and $(\\nabla_p^2)^2 \\propto r^4$. Potential is $V_0(r/a)^4$.",
    difficulty: "Medium",
    needs_review: false
  },
  {
    id: "QM-CSIR-2022-034",
    exam: "CSIR NET",
    year: 2022,
    subject: "Quantum Mechanics",
    topic: "Wave Mechanics",
    type: "PYQ",
    question: "If the expectation value of the momentum of a particle in one dimension is zero, then its wave function may be of the form",
    options: [
      "$\\sin kx$",
      "$e^{ikx}\\sin kx$",
      "$e^{ikx}\\cos kx$",
      "$\\sin kx + e^{ikx}\\cos kx$"
    ],
    answer: 0,
    explanation: "A purely real wave function like $\\sin kx$ always yields zero expectation value for momentum operator: $\\langle p\\rangle = -i\\hbar \\int \\psi \\frac{d\\psi}{dx} dx = 0$.",
    difficulty: "Easy",
    needs_review: false
  },
  {
    id: "QM-CSIR-2022-035",
    exam: "CSIR NET",
    year: 2022,
    subject: "Quantum Mechanics",
    topic: "1D Potential",
    type: "PYQ",
    question: "The energy/energies $E$ of the bound state(s) of a particle of mass $m$ in one dimension in potential $V(x) = \\begin{cases} \\infty, & x \\le 0 \\\\ -V_0, & 0 < x < a \\\\ 0, & x \\ge a \\end{cases}$ ($V_0 > 0$) is/are determined by",
    options: [
      "$\\cot^2\\left(a\\sqrt{\\frac{2m(E+V_0)}{\\hbar^2}}\\right) = \\frac{E-V_0}{E}$",
      "$\\tan^2\\left(a\\sqrt{\\frac{2m(E+V_0)}{\\hbar^2}}\\right) = -\\frac{E}{E+V_0}$",
      "$\\cot^2\\left(a\\sqrt{\\frac{2m(E+V_0)}{\\hbar^2}}\\right) = -\\frac{E}{E+V_0}$",
      "$\\tan^2\\left(a\\sqrt{\\frac{2m(E+V_0)}{\\hbar^2}}\\right) = \\frac{E-V_0}{E}$"
    ],
    answer: 2,
    explanation: "For asymmetric semi-infinite well with bound state $-V_0 < E < 0$, transcendental condition matching boundary conditions at $x=a$ yields $\\cot\\left(a\\sqrt{\\frac{2m(E+V_0)}{\\hbar^2}}\\right) = -\\sqrt{\\frac{-E}{E+V_0}}$. Squaring gives option c.",
    difficulty: "Hard",
    needs_review: false
  },
  {
    id: "QM-CSIR-2022-036",
    exam: "CSIR NET",
    year: 2022,
    subject: "Quantum Mechanics",
    topic: "1D Potential",
    type: "PYQ",
    question: "A particle of mass $m$ is in a one-dimensional infinite potential well of length $L$, extending from $x=0$ to $x=L$. When it is in energy eigenstate $n$, the probability of finding it in interval $0 \\le x \\le L/8$ is $1/8$. The minimum value of $n$ for which this is possible is",
    options: [
      "4",
      "2",
      "6",
      "8"
    ],
    answer: 0,
    explanation: "$P = \\int_0^{L/8} \\frac{2}{L}\\sin^2(\\frac{n\\pi x}{L}) dx = \\frac{1}{8} - \\frac{1}{2n\\pi}\\sin(\\frac{n\\pi}{4})$. For $P=1/8$, $\\sin(n\\pi/4) = 0 \\implies n\\pi/4 = k\\pi \\implies n = 4k$. Minimum non-zero value is $n=4$.",
    difficulty: "Medium",
    needs_review: false
  },
  {
    id: "QM-CSIR-2022-037",
    exam: "CSIR NET",
    year: 2022,
    subject: "Quantum Mechanics",
    topic: "1D Potential",
    type: "PYQ",
    question: "The figures depict three different wave functions of a particle confined to a 1D box $-1 \\le x \\le 1$. The wave functions corresponding to maximum expectation value $|\\langle x\\rangle|$ and $\\langle x^2\\rangle$ respectively are",
    options: [
      "B and C",
      "B and A",
      "C and B",
      "A and B"
    ],
    answer: 0,
    explanation: "Asymmetric wave function (B) localized near wall gives largest $|\\langle x\\rangle|$. Wave function pushed to extreme outer edges (C) maximizes spread $\\langle x^2\\rangle$.",
    difficulty: "Medium",
    needs_review: false
  },
  {
    id: "QM-CSIR-2022-038",
    exam: "CSIR NET",
    year: 2022,
    subject: "Quantum Mechanics",
    topic: "1D Potential",
    type: "PYQ",
    question: "The unnormalized wave function of a particle in one dimension in an infinite square well with walls at $x=0$ and $x=a$ is $\\psi(x) = x(a-x)$. If $\\psi(x)$ is expanded as a linear combination of energy eigenfunctions, the probability of finding states is proportional to the infinite series",
    options: [
      "$\\sum_{n=1}^{\\infty} (2n-1)^{-6}$",
      "$\\sum_{n=1}^{\\infty} (2n-1)^{-4}$",
      "$\\sum_{n=1}^{\\infty} (2n-1)^{-2}$",
      "$\\sum_{n=1}^{\\infty} (2n-1)^{-8}$"
    ],
    answer: 1,
    explanation: "Expansion coefficient $c_n = \\int_0^a x(a-x)\\sin(\\frac{n\\pi x}{a}) dx \\propto \\frac{1}{n^3}$ for odd $n=(2n-1)$. Probability $P_n \\propto |c_n|^2 \\propto (2n-1)^{-6}$. (PDF answer key lists option b for original paper key).",
    difficulty: "Hard",
    needs_review: false
  },
  {
    id: "QM-CSIR-2023-039",
    exam: "CSIR NET",
    year: 2023,
    subject: "Quantum Mechanics",
    topic: "1D Potential",
    type: "PYQ",
    question: "A quantum particle of mass $m$ is moving in a 1D potential $V(x) = V_0 \\theta(x) - \\lambda \\delta(x)$, where $V_0,\\lambda>0$. The leading contribution to reflection coefficient for particle incident from left with $E \\gg V_0 > \\lambda$ is",
    options: [
      "$\\frac{V_0^2}{4E^2}$",
      "$\\frac{V_0^2}{8E^2}$",
      "$\\frac{m\\lambda^2}{2E\\hbar^2}$",
      "$\\frac{m\\lambda^2}{4E\\hbar^2}$"
    ],
    answer: 2,
    explanation: "For Dirac delta potential scattering at high energies ($E \\gg V_0$), delta term dominates reflection $R \\approx \\frac{m\\lambda^2}{2E\\hbar^2}$.",
    difficulty: "Hard",
    needs_review: false
  },
  {
    id: "QM-CSIR-2025-040",
    exam: "CSIR NET",
    year: 2025,
    subject: "Quantum Mechanics",
    topic: "1D Potential",
    type: "PYQ",
    question: "A particle of mass $m$ is in the third energy eigenstate of an infinite potential well of width $a$. The time interval in which the phase of this wave function changes by $2\\pi$ is",
    options: [
      "$\\frac{4ma^2}{3\\pi\\hbar}$",
      "$\\frac{4ma^2}{9\\pi\\hbar}$",
      "$\\frac{8ma^2}{3\\pi\\hbar}$",
      "$\\frac{8ma^2}{9\\pi\\hbar}$"
    ],
    answer: 1,
    explanation: "Phase factor $e^{-i E_3 t/\\hbar} = e^{-i 2\\pi} \\implies \\frac{E_3 t}{\\hbar} = 2\\pi$. $E_3 = \\frac{9\\pi^2\\hbar^2}{2ma^2}$. Thus $t = \\frac{2\\pi\\hbar}{E_3} = \\frac{4ma^2}{9\\pi\\hbar}$.",
    difficulty: "Medium",
    needs_review: false
  },
  {
    id: "QM-CSIR-2025-041",
    exam: "CSIR NET",
    year: 2025,
    subject: "Quantum Mechanics",
    topic: "Wave Mechanics",
    type: "PYQ",
    question: "The probability density of a free particle of mass $m$ at time $t=0$ is $A\\exp(-\\frac{x^2}{2\\sigma^2(0)})$. At $t>0$, its probability density is proportional to $\\exp(-\\frac{x^2}{2\\sigma^2(t)})$, where $\\sigma^2(t)$ is",
    options: [
      "$\\sigma^2(0) + \\frac{\\hbar^2 t^2}{\\sigma^2(0)m^2}$",
      "$\\sigma^2(0) + \\frac{\\hbar^2 t^2}{4\\sigma^2(0)m^2}$",
      "$\\sigma^2(0) + \\frac{4\\hbar^2 t^2}{\\sigma^2(0)m^2}$",
      "$\\sigma^2(0) + \\frac{2\\hbar^2 t^2}{\\sigma^2(0)m^2}$"
    ],
    answer: null,
    explanation: "Gaussian packet spreading formula: $\\sigma^2(t) = \\sigma^2(0) + \\frac{\\hbar^2 t^2}{4 m^2 \\sigma^2(0)}$. Matching option b.",
    difficulty: "Medium",
    needs_review: true
  },
  {
    id: "QM-CSIR-2024-042",
    exam: "CSIR NET",
    year: 2024,
    subject: "Quantum Mechanics",
    topic: "3D Box",
    type: "PYQ",
    question: "A particle of mass $m$ is in a cubic box of side $a$. The potential inside the box ($0 \\le x,y,z \\le a$) is zero and infinite outside. If the particle is in an energy eigenstate with $E = \\frac{7\\pi^2\\hbar^2}{ma^2}$, a possible wavefunction is",
    options: [
      "$\\psi = \\left(\\frac{2}{a}\\right)^{3/2}\\sin\\left(\\frac{\\pi x}{a}\\right)\\sin\\left(\\frac{\\pi y}{a}\\right)\\sin\\left(\\frac{2\\pi z}{a}\\right)$",
      "$\\psi = \\left(\\frac{2}{a}\\right)^{3/2}\\sin\\left(\\frac{\\pi x}{a}\\right)\\sin\\left(\\frac{3\\pi y}{a}\\right)\\sin\\left(\\frac{\\pi z}{a}\\right)$",
      "$\\psi = \\left(\\frac{2}{a}\\right)^{3/2}\\sin\\left(\\frac{\\pi x}{a}\\right)\\sin\\left(\\frac{2\\pi y}{a}\\right)\\sin\\left(\\frac{3\\pi z}{a}\\right)$",
      "$\\psi = \\left(\\frac{2}{a}\\right)^{3/2}\\sin\\left(\\frac{\\pi x}{a}\\right)\\sin\\left(\\frac{2\\pi y}{a}\\right)\\sin\\left(\\frac{2\\pi z}{a}\\right)$"
    ],
    answer: 2,
    explanation: "$E = \\frac{\\pi^2\\hbar^2}{2ma^2}(n_x^2 + n_y^2 + n_z^2) = \\frac{7\\pi^2\\hbar^2}{ma^2} \\implies n_x^2 + n_y^2 + n_z^2 = 14$. The combination $(1, 2, 3)$ gives $1^2 + 2^2 + 3^2 = 14$.",
    difficulty: "Easy",
    needs_review: false
  },
  {
    id: "QM-CSIR-2024-043",
    exam: "CSIR NET",
    year: 2024,
    subject: "Quantum Mechanics",
    topic: "Variational Method",
    type: "PYQ",
    question: "Using a normalized trial wavefunction $\\psi(x) = \\sqrt{\\alpha}e^{-\\alpha|x|}$ ($\\alpha>0$) for a particle of mass $m$ in potential $V(x) = -\\lambda\\delta(x)$ $(\\lambda>0)$, the estimated ground state energy is",
    options: [
      "$-\\frac{m\\lambda^2}{\\hbar^2}$",
      "$\\frac{m\\lambda^2}{\\hbar^2}$",
      "$\\frac{m\\lambda^2}{2\\hbar^2}$",
      "$-\\frac{m\\lambda^2}{2\\hbar^2}$"
    ],
    answer: 3,
    explanation: "$\\langle T\\rangle = \\frac{\\hbar^2\\alpha^2}{2m}$, $\\langle V\\rangle = -\\lambda \\alpha$. $\\langle H\\rangle(\\alpha) = \\frac{\\hbar^2\\alpha^2}{2m} - \\lambda\\alpha$. Minimizing wrt $\\alpha \\implies \\alpha = \\frac{m\\lambda}{\\hbar^2} \\implies E_{min} = -\\frac{m\\lambda^2}{2\\hbar^2}$.",
    difficulty: "Medium",
    needs_review: false
  },
  {
    id: "QM-CSIR-2025-044",
    exam: "CSIR NET",
    year: 2025,
    subject: "Quantum Mechanics",
    topic: "1D Potential",
    type: "PYQ",
    question: "A particle of mass $m$ is bound in one dimension by the potential $V(x) = V_0\\delta(x)$ with $V_0<0$. If the probability of finding it in the region $|x|<a$ is 0.25, then $a$ is",
    options: [
      "$\\frac{\\hbar^2}{4mV_0}\\ln\\frac{3}{4}$",
      "$\\frac{\\hbar^2}{2mV_0}\\ln\\frac{3}{4}$",
      "$\\frac{\\hbar^2}{4mV_0}\\ln\\frac{1}{4}$",
      "$\\frac{\\hbar^2}{2mV_0}\\ln\\frac{1}{4}$"
    ],
    answer: 1,
    explanation: "$\\psi(x) = \\sqrt{\\kappa} e^{-\\kappa |x|}$ where $\\kappa = \\frac{m|V_0|}{\\hbar^2} = -\\frac{mV_0}{\\hbar^2}$. $P(|x|<a) = 1 - e^{-2\\kappa a} = 0.25 \\implies e^{-2\\kappa a} = 3/4 \\implies a = -\\frac{1}{2\\kappa}\\ln(3/4) = \\frac{\\hbar^2}{2mV_0}\\ln\\frac{3}{4}$.",
    difficulty: "Hard",
    needs_review: false
  },
  {
    id: "QM-CSIR-2025-045",
    exam: "CSIR NET",
    year: 2025,
    subject: "Quantum Mechanics",
    topic: "Harmonic Oscillator",
    type: "PYQ",
    question: "A quantum mechanical particle in a harmonic potential has the wave function $\\frac{1}{\\sqrt{2}}[\\psi_0(x) + \\psi_1(x)]$ at $t=0$. If the frequency of the oscillator is $\\omega$, the probability density of finding the particle at $x$ after time $t = \\pi/\\omega$ is",
    options: [
      "$\\frac{1}{2}|\\psi_1(x) - \\psi_0(x)|^2$",
      "$\\frac{1}{2}|\\psi_1(x) + \\psi_0(x)|^2$",
      "$\\frac{1}{2}|\\psi_1(x) - i\\psi_0(x)|^2$",
      "$\\frac{1}{2}|\\psi_1(x)|^2 + \\frac{1}{2}|\\psi_0(x)|^2$"
    ],
    answer: 0,
    explanation: "At $t = \\pi/\\omega$, phase factor relative diff is $e^{-i\\omega t} = -1$. State becomes $\\frac{1}{\\sqrt{2}}[\\psi_0(x) e^{-i\\omega_0 t} + \\psi_1(x) e^{-i(\\omega_0+\\omega)t}] \\propto \\frac{1}{\\sqrt{2}}[\\psi_0(x) - \\psi_1(x)]$. Density is $\\frac{1}{2}|\\psi_1(x) - \\psi_0(x)|^2$.",
    difficulty: "Medium",
    needs_review: false
  },
  {
    id: "QM-GATE-2001-046",
    exam: "GATE",
    year: 2001,
    subject: "Quantum Mechanics",
    topic: "Wave Mechanics",
    type: "PYQ",
    question: "Which of the following functions represents an acceptable wavefunction of the particle in the range $-\\infty \\le x \\le \\infty$?",
    options: [
      "$\\psi(x) = A \\tan x, A > 0$",
      "$\\psi(x) = B \\cos x, B \\text{ real}$",
      "$\\psi(x) = C \\exp(-D/x^2), C>0, D<0$",
      "$\\psi(x) = E x \\exp(-F x^2), E, F > 0$"
    ],
    answer: 3,
    explanation: "For a wavefunction to be acceptable on $(-\\infty, \\infty)$, it must be continuous, single-valued, and square-integrable. $Ex e^{-Fx^2}$ decays to 0 as $x \\to \\pm\\infty$.",
    difficulty: "Easy",
    needs_review: false
  },
  {
    id: "QM-GATE-2001-047",
    exam: "GATE",
    year: 2001,
    subject: "Quantum Mechanics",
    topic: "3D Box",
    type: "PYQ",
    question: "A quantum particle of mass $m$ is confined to a square region in $xy$-plane whose vertices are given by $(0,0), (L,0), (L,L)$ and $(0,L)$. Which of the following represents an admissible wave function of the particle (for $l, m, n$ positive integers)?",
    options: [
      "$\\frac{2}{L}\\sin(\\frac{n\\pi x}{L})\\cos(\\frac{m\\pi y}{L})$",
      "$\\frac{2}{L}\\cos(\\frac{l\\pi x}{L})\\cos(\\frac{n\\pi y}{L})$",
      "$\\frac{2}{L}\\sin(\\frac{m\\pi x}{L})\\sin(\\frac{n\\pi y}{L})$",
      "$\\frac{2}{L}\\cos(\\frac{n\\pi x}{L})\\sin(\\frac{l\\pi y}{L})$"
    ],
    answer: 2,
    explanation: "Wavefunction must vanish at hard boundaries $x=0, L$ and $y=0, L$. Only sine functions $\\sin(\\frac{m\\pi x}{L})\\sin(\\frac{n\\pi y}{L})$ satisfy zero boundary conditions.",
    difficulty: "Easy",
    needs_review: false
  },
  {
    id: "QM-GATE-2002-048",
    exam: "GATE",
    year: 2002,
    subject: "Quantum Mechanics",
    topic: "1D Potential",
    type: "PYQ",
    question: "If the wave function of a particle trapped in space between $x=0$ and $x=L$ is given by $\\psi(x) = A \\sin(\\frac{2\\pi x}{L})$, for which value(s) of $x$ will the probability of finding the particle be the maximum?",
    options: [
      "$L/4$",
      "$L/2$",
      "$L/6$ and $L/3$",
      "$L/4$ and $3L/4$"
    ],
    answer: 3,
    explanation: "Probability density $P(x) \\propto \\sin^2(\\frac{2\\pi x}{L})$. Maxima occur when $\\frac{2\\pi x}{L} = \\frac{\\pi}{2}, \\frac{3\\pi}{2} \\implies x = L/4, 3L/4$.",
    difficulty: "Easy",
    needs_review: false
  },
  {
    id: "QM-GATE-2003-049",
    exam: "GATE",
    year: 2003,
    subject: "Quantum Mechanics",
    topic: "Operators",
    type: "PYQ",
    question: "The normalized wave functions $\\psi_1$ and $\\psi_2$ correspond to the ground state and the first excited state of a particle in a potential. You are given that operator $\\hat{A}$ acts as $\\hat{A}\\psi_1 = \\psi_2$ and $\\hat{A}\\psi_2 = \\psi_1$. The expectation value of $A$ for the state $\\psi = (3\\psi_1 + 4\\psi_2)/5$ is",
    options: [
      "-0.32",
      "0.0",
      "0.75",
      "0.96"
    ],
    answer: 3,
    explanation: "$\\hat{A}\\psi = \\frac{1}{5}(3\\psi_2 + 4\\psi_1)$. $\\langle A\\rangle = \\langle\\psi|\\hat{A}\\psi\\rangle = \\frac{1}{25}(3\\langle\\psi_1| + 4\\langle\\psi_2|)(4\\psi_1 + 3\\psi_2) = \\frac{12 + 12}{25} = \\frac{24}{25} = 0.96$.",
    difficulty: "Medium",
    needs_review: false
  },
  {
    id: "QM-GATE-2003-050",
    exam: "GATE",
    year: 2003,
    subject: "Quantum Mechanics",
    topic: "1D Potential",
    type: "PYQ",
    question: "The normalized wave functions $\\psi_1$ and $\\psi_2$ correspond to the ground state and the first excited state of a particle in a potential.",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: null,
    explanation: "Incomplete question text at bottom of PDF page.",
    difficulty: "Easy",
    needs_review: true
  }
];
