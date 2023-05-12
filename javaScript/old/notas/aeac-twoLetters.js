function alternate(s) {
  // Write your code here
  const chars = Array.from(new Set([...s]));
  const list = new Array();
  const strings = new Array();
  
  let max = 0;
  
  permutations(chars);
  generateStrings(list);
  stringValidator(strings);
  
  
  function permutations(array){
      for(let index = 0; index < array.length; index++){
          for(let jindex = index+1; jindex < array.length; jindex++){
              list.push(chars[index] + chars[jindex])
          }
      }
  }
  
  function generateStrings(list){
      list.forEach(string => {
          const replace = new RegExp('[^'+ string + ']', 'g')
          strings.push( s.replace(replace, ''))
      })
  }
  
  function stringValidator(string){
      for(let index = 0; index < string.length; index++){
          const a =  [ string[index][0],
               string[index][1]];
          let count = 0;
  
         for(let jindex = 0; jindex < string[index].length; jindex++) {
             if(string[index][jindex] == a[jindex % 2] ){
                 count += 1;
             }
  
           if(count == string[index].length && count > max){
               max = count;
           }
         }
      }
  
  }
  return max;
      }

sss="abdcabdabsdab";
console.log(alternate(sss));
