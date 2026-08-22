window.PHYSICS_MOCK_TESTS = [
  {
    id: "barc-full-01",
    title: "BARC Physics — Full Length Mock 01",
    description: "Mixed Physics mock using the current question bank",
    exam: "BARC",
    questions: 100,
    duration: 120 * 60,

    // Use questions from the entire current bank
    subject: "",
    topic: "",

    // Currently available PYQs
    allowedTypes: ["PYQ"],

    // Easy + Moderate only
    allowedDifficulty: ["Easy", "Moderate"]
  }
];
