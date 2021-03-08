import React, { Component } from 'react'
import "./child1-ul.css";
import Button from "./common/Button"

export class Child1UL extends Component {
    
    state = {
        toggleInput: "",
    };
    handleToggleOnChange = (event) => {
        this.setState({
            toggleInput: event.target.value,
        });
    };
    handleToggleButton = (id, itemWish) => {
        this.setState({
            toggleInput: itemWish,
        });

        this.props.handleEditToggle(id);

        this.props.handleEditUpdateWish(id, this.state.toggleInput)
    };

    render() {
        return (
            <ul>
                {this.props.wishList.map((item) => {
                    let strikeThroughClass = `${
                        item.isDone ? "strike-through-isDone" : ""
                    }`;

                    return (
                        <React.Fragment key={item.id}>
                            {item.isEditToggle ? (
                                <input
                                    value={this.state.toggleInput}
                                    style={{marginRight: 10}}
                                    onChange={this.handleToggleOnChange}
                                    name="toggleInput"
                                />
                            ) : (
                                <li className={strikeThroughClass}>{item.wish}</li>
                            )}
                            <Button
                                propsClassName={"btn btn-secondary button-style"}
                                propsOnClick={() => this.handleToggleButton(item.id, item.wish)}
                                propsName={item.isEditToggle ? "Submit" : "Edit"}
                                propsButtonToggle={item.isButtonToggle}
                            />
                            <Button
                                propsClassName={"btn btn-warning button-style"}
                                propsOnClick={() => this.props.handleIsDone(item.id)}
                                propsName={"Done"}
                                propsButtonToggle={item.isEditToggle ? true : false}
                            />
                            <Button
                                propsClassName={"btn btn-danger button-style"}
                                propsOnClick={() => this.props.handleDeleteById(item.id)}
                                propsName={"Delete"}
                                propsButtonToggle={item.isEditToggle ? true : false}
                            />
                            <br/>
                        </React.Fragment>    
                    );
                })}
            </ul>
        );
    }
}

export default Child1UL
