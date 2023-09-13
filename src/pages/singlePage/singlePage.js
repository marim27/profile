import React from 'react';
import { useParams } from 'react-router-dom';

const SinglePage = () => {
   let {id}= useParams()
   console.log(id);
    return (
        <div>
             <h1>SinglePage : {id}</h1>
        </div>
    );
}

export default SinglePage;
