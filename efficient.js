function* permute(permutation) {
    var length = permutation.length,
        c = Array(length).fill(0),
        i = 1, k, p;
  
    yield permutation.slice();
    while (i < length) {
      if (c[i] < i) {
        k = i % 2 && c[i];
        p = permutation[i];
        permutation[i] = permutation[k];
        permutation[k] = p;
        ++c[i];
        i = 1;
        yield permutation.slice();
      } else {
        c[i] = 0;
        ++i;
      }
    }
  }
  
  // Memory efficient iteration through permutations:
 // for (var permutation of permute([1, 2, 3,5,6,7,8,9,10,11,12,13])){};
  
  // Simple array conversion:
  var permutations = [...permute([1, 2, 3,5,6,7,8,9,10,11,12])];

// console.log(permutations)

