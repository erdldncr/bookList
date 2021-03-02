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
        const books=Store.getBooks()
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
    static clearFields(){
    document.getElementById('title').value=''
    document.getElementById('author').value=''
    document.getElementById('isbn').value=''
    }
    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove()
        }
    }
    static showAlert(message,className){
     const div=document.createElement('div')
     div.className=`alert alert-${className}`
     div.appendChild(document.createTextNode(message))
     const container=document.querySelector('.container')
     const form=document.querySelector('#book-form')
     ////containerdan sonra formdan once div ekle
     container.insertBefore(div,form) 
     //// vanish in 3 seconds
     setTimeout(()=>{document.querySelector('.alert').remove()},3000)
    }

}
//store class handle storage
class Store{
    static getBooks(){
        let books;
        if(localStorage.getItem('books')===null){
            books=[]
        }else{
            books=JSON.parse(localStorage.getItem('books'))
        }
        return books

    }
    static addBook(book){
        const books=Store.getBooks()
        books.push(book)
        localStorage.setItem('books',JSON.stringify(books))
        

    }
    static removeBook(isbn){
        const books=Store.getBooks()
        books.forEach((book,index)=>{
            if(book.isbn==isbn){
                books.splice(index,1)
            }
        })
        localStorage.setItem('books',JSON.stringify(books))
    }
}
//event: Display Books

    document.addEventListener('DOMContentLoaded',UI.displayBooks)


//event add a book
document.querySelector('#book-form').addEventListener('submit',(e)=>{
     ///prevent actual submit
     e.preventDefault()
     //get form values
     const title=document.getElementById('title').value
     const author=document.getElementById('author').value
     const isbn=document.getElementById('isbn').value
    ////validate
     if(title===''||author===''||isbn===''){
       UI.showAlert('please, fill all the forms',"danger")
     }else{
        const book= new Book(title,author,isbn)
        console.log(book)
        /// add book to UI Class
        UI.addBookList(book)
        /// add book to store
        Store.addBook(book)
        ///show success message
        UI.showAlert('The book has been added','success')
        ///clean the form
        UI.clearFields();
     }

} )

//event remove a book
document.querySelector('#book-list').addEventListener('click',(e)=>{
    UI.deleteBook(e.target)
  
    Store.removeBook(e.target.parentElement.previousElementSibling)
    
    ///show delete message
    UI.showAlert('The book deleted','success')
})