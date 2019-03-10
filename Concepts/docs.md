## Hot vs Cold Observables

### Hot
hot means no matter when you subscribe, you might get different data.
So if you subscribe five seconds later, you might miss some click events.

### Cold
Cold means no matter when you subscribe, you will get the same data.

## eager VS lazy
It is slightly different than hot and cold.

Lazy means here we're gonna wait to do any work until subscribe's actually called.

Why use eager?
That's a good question, really, that goes to the heart of why be lazy.
Being lazy give more power to the consumer.

Example: How do you build any stream of array.

```js
static allNumbers() {
    return new Observable(function subscribe(observer){
        for(let num=0; true; num++){
            observer.next(num);
        }

    })
}

// consumer
Observable.allNumbers().take(10)
```
We can build a huge dataset, but the consumer at the very end only need a page of ten.
That's why we want to be lazy.
And that's why we like Observable, the fact that we can be lazy if more flexible.


## Observable complete and you stop listening 
if you unsubscribe from Observable, it does not means the Observable complete.

## Closures
because we can define a function, close over it by using it in a function. and then that variable is gonna live for as long as the function that closed over it.

As long as there is a function that closed over that variable, and someone is holding onto that function, the data in that variable lives.
 
 Almost anything you can do with Object-oriented programming  and state on prototypes using this dot, you could also do with closures.


