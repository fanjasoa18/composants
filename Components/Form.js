import React from "react";

function Form (props) {
    const {type,id} = props;

    return(
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input className="form-control" type={type} placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button className="btn btn-primary" id={id} type={type}><i className="fas fa-search"></i></button>
                </div>
        </form>
    )
}