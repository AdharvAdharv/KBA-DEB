import React from "react";

const books = [
  {
    id: 1,
    title: "Walk Into the Shadows",
    author: "Abhishek Kothari",
    price: "$1500",
    image: "Assets/book3.jpeg",
    description:
      "A poignant tale of love, loss, and self-discovery, exploring the depths of human emotions and relationships.",
  },
  {
    id: 2,
    title: "The Journey",
    author: "Brandon Bays",
    price: "$2000",
    image: "Assets/book4.jpeg",
    description:
      "A transformative guide to emotional healing and self-discovery, offering tools to release past traumas and uncover inner freedom.",
  },
  {
    id: 3,
    title: "So You Want to Be a Wizard",
    author: "Diane Duane",
    price: "$3499",
    image: "Assets/book5.jpeg",
    description:
      "Follows young Nita Callahan as she discovers magic, teams up with fellow wizard Kit, and battles cosmic forces to protect the universe.",
  },
  {
    id: 4,
    title: "Walk Into the Shadows",
    author: "Abhishek Kothari",
    price: "$4599",
    image: "Assets/book6.jpeg",
    description:
      "A poignant tale of love, loss, and self-discovery, exploring the depths of human emotions and relationships.",
  },
];

const BookCard = ({ book }) => {
  return (
    <div className="bg-white h-[500px] w-[400px] pt-6 font-serif p-4 rounded ring ring-black">
      <img className="mx-auto h-[200px] rounded" src={book.image} alt={book.title} />
      <div className="flex mt-4 justify-between">
        <p className="font-black text-xl text-red-900 ml-6">{book.price}</p>
        <button className="bg-red-900 w-[100px] h-[40px] rounded-xl mr-6">
          <a className="font-black text-white" href="#">
            Add to Cart
          </a>
        </button>
      </div>
      <p className="text-xl font-bold mt-5 mb-3">Description</p>
      <p className="text-lg">{book.description}</p>
    </div>
  );
};

const BookList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-8">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
