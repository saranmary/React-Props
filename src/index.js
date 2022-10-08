import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Books = [

  { 
    id:1,
    img:" https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg",
    title:"Ikigai",
    author:"by Héctor García",
  },
  {
    id:2,
    img:"https://m.media-amazon.com/images/I/51W-r3VQlAL._SX320_BO1,204,203,200_.jpg",
    title:"It Starts With Us",
    author:"by Colleen Hoover",
  },
  {
    id:3,
    img:"https://m.media-amazon.com/images/I/51g1+ePgYCL._SX430_BO1,204,203,200_.jpg",
    title:"SPARKS OF PHOENIX", 
    author:"by Najwa Zebian" 

  },
  { 
    id:4,
    img:"https://m.media-amazon.com/images/I/51tiopcLhuS._SX198_BO1,204,203,200_QL40_FMwebp_.jpg",
    title:"As a Man Thinketh", 
    author:"by James Allen" 

  },
  {
    id:5,
    img:"https://m.media-amazon.com/images/I/41QPBtd5VIS._SX460_BO1,204,203,200_.jpg",
    title:"Siddhartha",
    author:"by Hermann Hesse",
  },
  {
    id:6,
    img:"https://m.media-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg",
    title:"The Alchemist",
    author:"by Paulo Coelho",
  },

]

function BookList (){
  return(
    <section className="booklist">
      {Books.map((book)=>{
        return <Book book={book} key={book.id}></Book>;
      })}
    </section>
  )
}

const Book = (props) =>{
  const {img,title,author,type}=props.book;
  return(
    <article className="book">
      <img
      src={img}
      />
      <h2>{title}</h2>
      <h3>{author}</h3>
    </article>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<BookList />)


