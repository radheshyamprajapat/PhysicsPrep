window.QuestionEngine = (() => {
  const data = Array.isArray(window.PHYSICS_QUESTIONS) ? window.PHYSICS_QUESTIONS : [];
  function filter({exam="",subject="",topic="",type=""}={}) {
    return data.filter(q =>
      (!exam || q.exam === exam) &&
      (!subject || q.subject === subject) &&
      (!topic || q.topic === topic) &&
      (!type || q.type === type)
    );
  }
  function unique(field, filters={}) {
    return [...new Set(filter(filters).map(q => q[field]).filter(Boolean))].sort();
  }
  function sample(items, n) {
    const copy = [...items];
    for(let i=copy.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]];}
    return copy.slice(0, Math.min(n, copy.length));
  }
  return {data, filter, unique, sample};
})();