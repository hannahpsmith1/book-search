import React from 'react';

function Card() {
    return(
    <div className="card mb-3" 
    style={{ maxWidth: 540}}>
    <div className="row no-gutters">
        <div className="col-md-4">
        <img src="..." className="card-img" alt="..." /> 
        </div>
        <div className="col-md-8">
        <div className="card-body">
            <h5 className="card-title">Book title</h5>
            <p className="card-text">Book summary</p>
        </div>
        </div>
    </div>
    </div>
    );
}

export default Card;