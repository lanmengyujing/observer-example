import Observable from './Observable';

export default class Subject extends Observable {
    constructor() {
        super(function subscribe(observer) {
            const self = this;
            self.observers.add(observer);

            return {
                unsubscribe() {
                    self.observers.delete(observer);
                }
            }
        });

        this.observers = new Set();
    }

    next(v) {
        for (let observer of [...this.observers]) {
            observer.next(v);
        }
    }

    error(v) {
        for (let observer of [...this.observers]) {
            observer.error(v);
        }
    }

    complete(v) {
        for (let observer of [...this.observers]) {
            observer.complete();
        }
    }
}