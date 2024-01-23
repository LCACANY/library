let addButton = document.querySelector('.addbutton');
let titleInput = document.querySelector('.title');
let authorInput = document.querySelector('.author');
let pagesInput = document.querySelector('.pages');
let submitButton = document.querySelector('.submitbutton');
let checkInput = document.querySelector('.checkbox');
let bookContainer = document.querySelector('.bookcontainer');
let popup = document.querySelector('.popup-container');
let closeButton = document.querySelector('.closebutton');
let input = document.querySelectorAll('input');
let note = document.querySelector('.note');

document.addEventListener('DOMContentLoaded', function () {


    addButton.addEventListener('click', function () {
        popup.style.display = 'flex';
    });

    closeButton.addEventListener('click', function () {
        popup.style.display = 'none';
        note.textContent = "";
    });


});

const myLibrary = [];


function book (title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = ()=>{
        return `the book called ${this.title} by ${this.author},contain ${this.pages} pages,${this.read}`}
};

function addBookToLibrary() {

    let i=myLibrary.length;
    if(i<=10){    
    const newBook = new book(titleInput.value,authorInput.value,pagesInput.value,checkInput.checked);
    console.log(newBook);
    myLibrary.push(newBook);
    console.log(myLibrary);
    let bookCard = document.createElement('div');
    bookCard.className = 'bookcard';
    bookCard.innerHTML = '<h2>Title : '+ titleInput.value + '</h2><h4>Author : ' + authorInput.value + '</h4><h4>Pages : ' + pagesInput.value + '</h4><div class="btndiv"><button class="readbutton">Read</button><button class="deletebutton">Delete</button></div>'
    bookContainer.appendChild(bookCard);
    bookCard.style.display = 'block';
    popup.style.display = 'none';


    let readButton = bookCard.querySelector('.readbutton')
    if(checkInput.checked == false){
        readButton.textContent = 'not read yet'
        readButton.style.backgroundColor = '#D4D433'
    }



    
    readButton.addEventListener('click',()=>{
        if(readButton.textContent == 'Read'){
            readButton.textContent = 'Not read yet'
            readButton.style.backgroundColor = '#D4D433'
            newBook.read = !newBook.read
        }else{
            readButton.textContent = 'Read'
            readButton.style.backgroundColor = 'rgb(48, 199, 2)'
            newBook.read = !newBook.read
        }
    });

    let deleteButton = bookCard.querySelector('.deletebutton')
    deleteButton.addEventListener('click',()=>{
        let indexToRemove = myLibrary.findIndex(book => book.title === newBook.title);

        // Remove the corresponding book from myLibrary
        myLibrary.splice(indexToRemove, 1);

        // Remove the book card from the bookContainer
        bookCard.remove();
        console.log(myLibrary)
    });

    }else{//alert('full library')
    note.textContent = "max books acheived"}//to be worked on later

    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    checkInput.checked = false;

}



submitButton.addEventListener('click',addBookToLibrary)
