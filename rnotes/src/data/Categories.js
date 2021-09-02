export default class Categories {
    constructor(){
        this.categories = []
        this._subscribers = []
    }

    subscr(func){
        this._subscribers.push(func)
    }

    unsubscr(func){
        this._subscribers = this._subscribers.filter(f => f !== func)
    }

    notify(){
        this._subscribers.forEach(func => {
            func(this.categories)
        })
    }

    addCategory(newCategory) {
        this.categories.push(newCategory)
        this.notify()
    }
}