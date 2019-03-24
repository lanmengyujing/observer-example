// iterators
function createFunction(array){
    let index = 0;
    function inner(){
        const element = array[index];
        index = index+1;
        return { value: element };
    }
    return {
        next: inner
    }
}

const func = createFunction([4,5,6])
const element1 = func.next();
const element2 = func.next();


function doWhenDataReceived (value){
    returnNextElement.next(value)
  }
  function* createFlow(){
    const data = yield fetch('http://twitter.com/will/tweets/1')
    console.log(data)
  }
  const returnNextElement = createFlow()
  const futureData = returnNextElement.next()
  futureData.then(doWhenDataReceived)
  
//   Async/await simplifies all this and finally fixes the inversion of control problem of callbacks
async function createFlow(){
  console.log("Me first")
  const data = await fetch('https://twitter.com/will/tweets/1')
  console.log(data)
}
createFlow()
console.log("Me second")


function* createFlowFunction() {
  console.log("Me first")
  const data = yield fetch('https://twitter.com/SkySportsPL/tweets/1')
  console.log(data)
}

let nextEle = createFlowFunction();
let fetchedData = nextEle.next();
fetchedData.value.then((data)=>{
  // this next take back into create values execution context at the position it left out,
  // it exited with a yield statement
  // and the thing we pass to it is the evaluated result.
  nextEle.next(data);
});
