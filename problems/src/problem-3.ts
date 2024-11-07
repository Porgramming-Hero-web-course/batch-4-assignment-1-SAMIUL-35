
const countWordOccurrences=(S:string,W:string):number=>{
const lower_S=S.toLowerCase();
const lower_W=W.toLowerCase();

const Words:string[]=lower_S.split(/\W+/);

let cnt=0;

for(const word of Words){
  // console.log(word);
  if (word===lower_W)
  {
    cnt++;
  }
}

return cnt;

};

// console.log(countWordOccurrences("I love typescript", "typescript"));