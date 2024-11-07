
const sumArray=(arr:number[]):number=>{

  const sum=arr.reduce((total,current)=>total+current,0);

  return sum;

}

// console.log(sumArray([1, 2, 3, 4, 5]));