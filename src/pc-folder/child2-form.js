import React from 'react'

export default function Child2Form(props) {
    return (
        <form onSubmit={props.handleSubmitWish}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput" className="form-label">
                    Enter Wish
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Wish"
                    name="inputWish"
                    onChange={props.handleOnChange}
                    value={props.inputWish}
                />
            </div>
            <button className="btn btn-primary mb-3" type="submit">
                Submit
            </button>
        </form>
    );
}
