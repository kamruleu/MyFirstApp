import React, { Component } from 'react';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail';
import { Modal, CardColumns, ModalBody, ModalFooter, Button, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { addComment, fetchDishes, fetchComments } from '../../redux/actionCreators';
import Loading from './loading';

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (dishId, author, rating, comment) => dispatch(addComment(dishId, author, rating, comment)),
        fetchDishes: () => dispatch(fetchDishes()),
        fetchComments: () => dispatch(fetchComments())
    }
}

class Menu extends Component {

    state = {
        dishDescription: null,
        modalOpen: false
    }

    onDishSelect = (item) => {
        this.setState({
            dishDescription: item,
            modalOpen: !this.state.modalOpen
        })
    }

    modalToggle = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }
    componentDidMount(){
        this.props.fetchDishes();
        this.props.fetchComments();
    }
    render() {
        document.title = "Menu";
        if(this.props.dishes.isLoading){
            return(<Loading />)
        }else if(this.props.dishes.errMessage){
            return(
            <Alert color="danger">{this.props.dishes.errMessage}</Alert>
            )
        }else{
            const menu = this.props.dishes.dishes.map((item) => {
                return (
                    <MenuItem 
                    dish={item} 
                    key={item.id} 
                    DishSelect={() => this.onDishSelect(item)} />
                )
            })
            let dishDesc = null
            if (this.state.dishDescription != null) {
                const comments = this.props.comments.comments.filter(comment => {
                    return comment.dishId === this.state.dishDescription.id;
                })
                dishDesc = <DishDetail 
                dish={this.state.dishDescription} 
                comments={comments}
                addComment={this.props.addComment}
                commentsIsLoading={this.props.comments.isLoading} />
            }
            return (
                <div className="container">
                    <div className="row">
                        <CardColumns>
                            {menu}
                        </CardColumns>
                        <Modal isOpen={this.state.modalOpen} >
                            <ModalBody>
                                {dishDesc}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.modalToggle}>
                                    Close
                               </Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
            )
        }
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);