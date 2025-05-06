import React from 'react';


const CartItems = ({ book, cartItemId, onRemove, onBuy }) => {
  
  const imageSrc = book.bookImage
  ? (book.bookImage.startsWith('data:image')
      ? book.bookImage
      : `data:image/jpeg;base64,${book.bookImage}`)
  : 'https://via.placeholder.com/350x200?text=No+Image';

  return (
    <div className="w-[1000px] h-auto bg-white mx-auto mt-[50px] pt-[30px] pl-[30px] flex">
      <img className="h-[300px]" src={imageSrc} alt="Book Cover" />
      <div className="h-auto w-[700px] ml-[30px] font-serif">
        <p className="text-3xl font-bold text-center">{book.bookName}</p>
        <p className="font-bold text-xl mt-5">Description</p>
        <p className="text-base mt-2 break-words">{book.description}</p>
        <div className="mt-6 flex justify-between">
          <span className="font-black text-lg text-red-900">₹{book.price}</span>
          <button className="bg-red-900 w-[180px] h-[40px] text-white font-black text-lg rounded-full"
          onClick={() => onRemove(cartItemId)}>
            Remove</button>
          <button className="bg-red-900 w-[180px] h-[40px] text-white font-black text-lg rounded-full"
            onClick={() => onBuy(cartItemId)}>
              Buy</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
