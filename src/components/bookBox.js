import React from 'react';
import ButtonBorrow from './buttonBorrow';


import '../css/listBookPreview.css'

const BookBox = (props) => {

    console.log(props.pr)
    return (
        <>
            {props.pr.map((item) => {
                return <div className='listBookBlock' key={item.id}>

                    <img className="bookCover" src={item.imageURL} alt="book" />
                    <div className="bookInfo">
                        <h2 className="bookTitle">
                            {item.title}
                        </h2>
                        <h4 className="autorTitle">
                            {item.author}
                        </h4>
                    </div>
                    <div className="borrowInfo">
                        DATUM POSUDBE: <span className="borrowDate">11.01.2022.</span>
                    </div>
                    <ButtonBorrow borrow={item.borrowed}/>
                </div>
            })}


        </>

    )


}

export default BookBox;