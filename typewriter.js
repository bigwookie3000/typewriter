const sentence = "hello there from lighthouse labs";
let index = 0
let delay = 0;
for (const char of sentence) {
  
 
  setTimeout(() => { 
    index++
    if (index === sentence.length) {
      console.log(char)
  } else {process.stdout.write(char)}}, delay);
  delay += 100;
}; 
// setTimeout(() => process.stdout.write('\n'), 200);
