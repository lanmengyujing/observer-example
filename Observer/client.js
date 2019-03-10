import Observable from './Observable';

/*
  const button = document.getElementById("button");
  
  const clicks = Observable.fromEvent(button, "click");
  debugger;
  clicks.
    map(ev => ev.offsetX).
    filter(offsetX => offsetX > 10).
    subscribe({
      next(ev) {
        console.log(ev);
      },
      complete() {
        console.log("done");
      }
    });
  
  */

  /*
  const timeout = Observable.timeout(500).share()
  
  timeout.subscribe({
    next(v) {
      console.log(v);
    },
    complete() {
      console.log("done")
    }
  });
  
  timeout.subscribe({
    next(v) {
      console.log(v);
    },
    complete() {
      console.log("done")
    }
  });
  */
  
 Observable.of(5).
 observeOn(action => setTimeout(action,5000)).
 subscribe({
   next(v) {
     console.log(v);
   },
   complete() {
     console.log("done");
   }
 });