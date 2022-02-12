import React from "react";
import BookBox from "./bookBox";
import '../css/libraryContentList.css';

import data from '../books.json'
const LibraryContentList = () => {

    return (
        <div className="libraryContentList">
            <BookBox pr={data} />
            {/* {list} */}
        </div>


    )

}

export default LibraryContentList; 