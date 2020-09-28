import React, { Component } from 'react';
import DISHES from '../../data/dishes';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail';

class Menu extends Component {

    state = {
        dishes: DISHES,
        dishDescription: null
    }

    onDishSelect = (item) => {
        this.setState({
            dishDescription: item
        })
    }
    render() {
        const menu = this.state.dishes.map((item) => {
            return (
                <MenuItem dish={item} key={item.id} DishSelect={() => this.onDishSelect(item)} />
            )
        })
        let dishDesc = null
        if (this.state.dishDescription != null) {
            dishDesc = <DishDetail dish={this.state.dishDescription} />
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {menu}
                    </div>
                    <div className="col-6">
                        {dishDesc}
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;