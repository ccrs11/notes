function twoAlternatingChars(s) {
    let maxLen = 0;
    for (let i = 0; i < s.length; i++) {
      for (let j = i + 1; j < s.length; j++) {
        let c1 = s.charAt(i);
        let c2 = s.charAt(j);
        let curLen = 0;
        let lastChar = ""; //This is null or ""
        let alternating = true;
        for (let k = 0; k < s.length; k++) {
          if (s.charAt(k) === c1 || s.charAt(k) === c2) {
            if (lastChar === s.charAt(k)) {
              alternating = false;
              break;
            } else {
              lastChar = s.charAt(k);
              curLen++;
            }
          }
        }
        if (alternating && curLen > maxLen) {
          maxLen = curLen;
        }
      }
    }
    return maxLen;
  }
sss="eabeefeab";
console.log(twoAlternatingChars(sss));
