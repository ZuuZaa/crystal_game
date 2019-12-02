class Todo {
    constructor() {
        this.name = ''
        this.status = true
    }
    
    set_status() {
        if (this.status) {
            this.status = false
        }
    }
}
$( ".new-todo" ).keydown(function( event ) {
    if ( event.which == 13 ) {
    var t = new Todo 
}

class Todoes {
    constructor() {
        this.todoes = []
    }
    add(t) {
        this.todoes.push(t)
    }
    all() {
        return this.todoes 
    }
    active() {
        return this.todoes.filter(function(value){
            return value.status;
        })
    }
    complete() {
        return this.todoes.filter(function(value){
            return !value.status
        })

    }
} 
 
