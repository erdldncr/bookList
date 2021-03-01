/// book class represent a book 
class Book{
    constructor(title,author,isbn){
        this.title=title
        this.author=author
        this.isbn=isbn
    }
}
//UI class: handle ui tasks
class UI{
    static displayBooks(){
        const storedBooks=[
            {
                title:'Ali baba ve kirk haramiler',
                author:'Bilinmiyor',
                id:'343437'
            },
            {
                title:'Ali baba ve yirmi haramiler',
                author:'Bilinmiyor',
                id:'1234567'
            }
        ]
        const books=storedBooks
        books.forEach((book)=>UI.addBookList(book))
    }
}
//store class handle storage

//event: Display Books

//event add a book

//event remove a book