window.QuestionEngine = (() => {

  const data = [

    // Quantum Mechanics — 1D Potential
    ...(Array.isArray(window.PHYSICS_QUESTIONS_1D_POTENTIAL)
      ? window.PHYSICS_QUESTIONS_1D_POTENTIAL
      : []),

    // Nuclear Physics
    ...(Array.isArray(window.PHYSICS_QUESTIONS_NUCLEAR)
      ? window.PHYSICS_QUESTIONS_NUCLEAR
      : []),

    // Atomic & Molecular Physics
    ...(Array.isArray(window.PHYSICS_QUESTIONS_ATOMIC_MOLECULAR)
      ? window.PHYSICS_QUESTIONS_ATOMIC_MOLECULAR
      : []),

     ...(Array.isArray(window.PHYSICS_QUESTIONS_THERMAL)
      ? window.PHYSICS_QUESTIONS_THERMAL
      : [])

  ];


  function filter({
    exam = "",
    subject = "",
    topic = "",
    type = ""
  } = {}) {

    return data.filter(q =>
      (!exam || q.exam === exam) &&
      (!subject || q.subject === subject) &&
      (!topic || q.topic === topic) &&
      (!type || q.type === type)
    );

  }


  function unique(field, filters = {}) {

    return [
      ...new Set(
        filter(filters)
          .map(q => q[field])
          .filter(Boolean)
      )
    ].sort();

  }


  function sample(items, n) {

    const copy = [...items];

    for (
      let i = copy.length - 1;
      i > 0;
      i--
    ) {

      const j =
        Math.floor(Math.random() * (i + 1));

      [copy[i], copy[j]] =
        [copy[j], copy[i]];

    }

    return copy.slice(
      0,
      Math.min(n, copy.length)
    );

  }


  return {
    data,
    filter,
    unique,
    sample
  };

})();
