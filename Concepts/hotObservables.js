/*
Now we have got erase, unless we subscribe before timeout fires, we are gonna miss it,
now we are hot observable.
Such as click events, touch events.
*/

class Observable {
    constructor(subscribe) {
        this._subscribe = subscribe;
    }
    subscribe(observer) {
        return this._subscribe(observer);
    }
    
    static hotTimeout(time) {
        let obs = null;
        const handle = setTimeout(function () {
            if(!obs) return;
            obs.next();
            obs.complete();
        }, time);

        return new Observable(function subscribe(observer) {
            if (fired === true) {
                observer.next();
                observer.complete();
            } else {
                obs = observer;
            }
            return {
                unsubscribe() {
                    clearTimeout(handle);
                }
            };
        });
    }

    static coldTimeout(time) {
        let fired = false;
        let obs = null;
        const handle = setTimeout(function () {
            fired = true;
            obs.next();
            obs.complete();
        }, time);

        return new Observable(function subscribe(observer) {
            if (fired === true) {
                observer.next();
                observer.complete();
            } else {
                obs = observer;
            }
            return {
                unsubscribe() {
                    clearTimeout(handle);
                }
            };
        });
    }

    static timeout(time) {
        return new Observable(function subscribe(observer) {
            const handle = setTimeout(function () {
                observer.next();
                observer.complete();
            }, time);

            return {
                unsubscribe() {
                    clearTimeout(handle);
                }
            };
        });
    }
}