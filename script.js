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
                isbn:'343437'
            },
            {
                title:'Ali baba ve yirmi haramiler',
                author:'Bilinmiyor',
                isbn:'1234567'
            }
        ]
        const books=storedBooks
        books.forEach((book)=>UI.addBookList(book))
    }
    static addBookList(book){
        const list=document.querySelector('#book-list')
        const row=document.createElement('tr')
        row.innerHTML=`<td>${book.title}</td>
                       <td>${book.author}</td>
                       <td>${book.isbn}</td>
                       <td><a href='#' class='btn btn-danger btn-sm delete'>X</a></td>`;
        list.appendChild(row)

    }

}
//store class handle storage

//event: Display Books
if (document.readyState !== 'loading'){
    UI.displayBooks()
}
else {document.addEventListener('DOMContentLoaded',UI.displayBooks)}


//event add a book

//event remove a book