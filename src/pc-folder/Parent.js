import React, {Component} from 'react';
import {v4 as uuidv4} from 'uuid';
import "./Parent.css";
import Child1UL from "./child1-ul";
import Child2Form from "./child2-form";

class Parent extends Component {
    state = {
        wishList: [
            {
                id: uuidv4(),
                wish: "pet the cat",
                isDone: false,
                isEditToggle: false,
                isButtonToggle: false, 
            },
            {
                id: uuidv4(),
                wish: "get some candy",
                isDone: false,
                isEditToggle: false,
                isButtonToggle: false,
            },
        ],
        inputWish: "",
    };
    
    handleSubmitWish = (event) => {
        event.preventDefault();

        let newWishArray = [
            ...this.state.wishList,
            {
                id: uuidv4(),
                wish: this.state.inputWish,
                isDone: false,
                isEditToggle: false
            },
        ];

        this.setState({
            wishList: newWishArray,
            inputWish: "",
        });
    };

    handleOnChange = (event) => {
        this.setState({
            inputWish: event.target.value,
        });
    };

    handleDeleteById = (id) => {
        let filteredWishListArray = this.state.wishList.filter(
            (item) => item.id !== id
        );

        this.setState({
            wishList: filteredWishListArray,
        });
    };
    
    handleIsDone = (id) => {
        let updateWishListArray = this.state.wishList.map(item => {
            if (item.id === id) {
                item.isDone = !item.isDone;
            }
            return item;
        })
        this.setState({
            isDone: updateWishListArray,
        });
    };

    handleEditToggle = (id) => {
        let toggledWishList = this.state.wishList.map((item) => {
            if (item.id === id) {
                item.isEditToggle = !item.isEditToggle;
            }
            if (item.id !== id) {
                item.isButtonToggle = !item.isButtonToggle;
            }
            return item;
        })
        this.setState({
            wishList: toggledWishList
        });
    };

    handleEditUpdateWish = (id, newWishItem) => {
        let updatedWishItem = this.state.wishList.map((item) => {
            if (item.id === id) {
                item.wish = newWishItem;
            }
            return item;
        }
        )
        this.setState({
            wishList: updatedWishItem
        })
    }

    render() {
        return (
            <div className="parent-container">
                <Child2Form
                handleSubmitWish={this.handleSubmitWish}
                handleOnChange={this.handleOnChange}
                inputWish={this.state.inputWish}
                />
                <Child1UL
                wishList={this.state.wishList}
                handleDeleteById={this.handleDeleteById}
                handleIsDone={this.handleIsDone}
                handleEditToggle={this.handleEditToggle}
                handleEditUpdateWish={this.handleEditUpdateWish}
                />
            </div>
        );
    }
}

export default Parent;