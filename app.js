const pronoun = ["the", "our"];
const adj = ["great", "big", "wide"];
const noun = ["jogger", "racoon", "football"];
const com = [".com", ".ar", ".io"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let x = 0; x < com.length; x++) {
        console.log(pronoun[i] + adj[j] + noun[k] + com[x]);
      }
    }
  }
}
