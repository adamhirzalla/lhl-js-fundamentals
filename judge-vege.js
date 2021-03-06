const judgeVegetable = (veggies, char) => {
  let highest = 0;
  let best;
  for (let veggie of veggies) {
    if (veggie[char] > highest) {
      highest = veggie[char];
      best = veggie;
    }
  }
  return best.submitter;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 3,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)