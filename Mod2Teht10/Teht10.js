const candidateCount = Number(prompt('Enter the number of candidates:'));
const candidates = [];

for (let i = 1; i <= candidateCount; i++) {
  const candidateName = prompt(`Name for candidate ${i}`);
  candidates.push({
    name: candidateName,
    votes: 0,
  });
}

const voterCount = Number(prompt('Enter the number of voters:'));

for (let i = 1; i <= voterCount; i++) {
  const vote = prompt(`Voter ${i}, enter the name of the candidate you vote for:`);

  if (vote !== null && vote.trim() !== '') {
    const chosenCandidate = candidates.find(
      (candidate) => candidate.name.toLowerCase() === vote.trim().toLowerCase()
    );

    if (chosenCandidate) {
      chosenCandidate.votes++;
    }
  }
}

candidates.sort((a, b) => b.votes - a.votes);

if (candidates.length > 0) {
  console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes.`);
  console.log('results:');
  for (const candidate of candidates) {
    console.log(`${candidate.name}: ${candidate.votes} votes`);
  }
}