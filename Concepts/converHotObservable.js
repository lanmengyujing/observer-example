/*
One of the important part of any kind of RX programming, is to find a way to
convert a hot data source such as a DOM events data stream into a hot observable.
*/

class Observable {
    constructor(subscribe) {
        this._subscribe = subscribe;
    }
    subscribe(observer) {
        return this._subscribe(observer);
    }

    // hot observable, because the underline data source is hot. DOM event is infinite data source.
    static fromEvent(dom, eventName) {
        return new Observable(function subscribe(observer) {
            // can not create handler inside event listener because "this" changes
            const handler =  (ev) => {
                observer.next(ev);
            }
            const handler = dom.addEventListener(eventName, handler)

            return {
                unsubscribe(){
                    dom.removeEventListener(handler);
                }
            }
        })
    }
}