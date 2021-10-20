var combine = function(a, min) {
    var fn = function(n, src, got, all) {
        if (n == 0) {
            if (got.length > 0) {
                all[all.length] = got;
            }
            return;
        }
        for (var j = 0; j < src.length; j++) {
            fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
        }
        return;
    }
    var all = [];
    for (var i = min; i < a.length; i++) {
        fn(i, a, [], all);
    }
    all.push(a);
    return all;
}

function intersect(a, b) {
  var setA = new Set(a);
  var setB = new Set(b);
  var intersection = new Set([...setA].filter(x => setB.has(x)));
  return Array.from(intersection);
}

allCombinations = combine([1, 2, 3, 4], 1)
console.log(allCombinations)
usedValues = []
candidateArray = []
results = []

for (const [aIndex, aValue] of allCombinations.entries()){
  if (intersect(aValue, usedValues).length == 0){
    candidateArray.push(aValue)
    for (const [bIndex, bValue] of aValue.entries()){
      usedValues.push(bValue)
    }
  }
  console.log("trying to add:")
  console.log(aValue)
  console.log("candidate:")
  console.log(candidateArray)
  console.log(`used: ${usedValues}\n`)
  if (usedValues.length == 4){
    usedValues = []
    results.push(candidateArray)
    candidateArray = []
  }
}

// console.log(allCombinations)