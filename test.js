const arr = ['Alice', 'Jenner', 'Alberta', 'Lucy', 'Eva', 'Nora', 'Judith']

/**
 * 
 * @param {Array<String>} a 
 */
function mergeWords(a) {
  console.time("loop")
  let longestWord = 1;
  let word = ""
    const len = arr.length;
    for (let i = 0; i < longestWord; i++) {
      word += a.map(item => {
        if (item.length > longestWord) {
          longestWord = item.length
        }
        return item[i] || ""
      }).join("")
      if (longestWord < a.length) {
        longestWord = a.length
      }
    }
  console.timeEnd("loop")
  console.log(word)
}

mergeWords(arr)