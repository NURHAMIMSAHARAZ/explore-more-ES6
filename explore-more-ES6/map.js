const numbers=[4,5,6,7,8,9];
const doubled =[];
for (const num of numbers){
    const double =num*2;
    doubled.push(double)
}
console.log(doubled)
const numbers1=[4,5,6,7,8,9];
const halves=numbers1.map(num=>num/2);

console.log(halves);