export class Book {
    constructor(title, author, isbn) {
        this.title = title
        this.author = author
        this.isbn = isbn
    }
}

export class Ui {
    constructor(data, target){
        this.data = data
        this.target = target
    }
    // Display
    display(){
        for (const book of this.data) {
            if (book != null){
                let card = document.createElement('div')
                card.classList.add('book')
                card.setAttribute('id', book.isbn)
                card.innerHTML = `
                    <h3>${book.title}</h3>
                    <h3>${book.author}</h3>
                    <h3>${book.isbn}</h3>
                    <i class="far fa-trash-alt" id=${book.isbn}></i>
                `
                this.target.appendChild(card)
            }
        }
    }
    // add new
    add(book){
        let card = document.createElement('div')
        card.classList.add('book')
        card.setAttribute('id', book.isbn)
        card.innerHTML = `
            <h3>${book.title}</h3>
            <h3>${book.author}</h3>
            <h3>${book.isbn}</h3>
            <i class="far fa-trash-alt" id=${book.isbn}></i>
        `
        this.target.appendChild(card)
    }
    // delete
    delete(book){
        this.target.removeChild(book)
    }
}

export class Stores {
    // get from
    getStore(){
        return JSON.parse(localStorage.getItem('books'))
    }
    // add to
    addStore(book){
        if (localStorage.getItem('books') && localStorage.getItem('books') != undefined){
            let datas = JSON.parse(localStorage.getItem('books'))
            datas.push(book)
            localStorage.setItem('books', JSON.stringify(datas))
        } else {
            let datas = []
            datas.push(book)
            console.log(datas);
            localStorage.setItem('books', JSON.stringify(datas))
        }
    }
    // delete from
    deleteStore(book){
        let datas = JSON.parse(localStorage.getItem('books'))
        console.log(datas);
        let datasFilter = []
        for (const el of datas) {
            if (el != null){
                if (el.isbn != book){
                    datasFilter.push(el)
                }
            }
        }
        console.log(datasFilter);
        localStorage.setItem('books', JSON.stringify(datasFilter))
    }
}

