import React from 'react';
import Dell from '../../public/images/dell.webp';

function Product(props) {
    return (
        <div className='card card-width'>
            <img src={Dell} alt=""/>
            <div class="card-body">
             <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

export default Product;