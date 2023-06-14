import React from 'react';

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: "",
        }
        // if you dont want to use arrow function or write bind in the function
        // this.increaseQty = this.increaseQty.bind(this);
        // this.testing();
    }
    //below function shows that setState is synchronus when used on non-event handler functions
    // testing() {
    //     const promise = new Promise((res, rej) => {
    //         setTimeout(() => {
    //             resolve('done');
    //         }, 5000);
    //     })
    //     promise.then(() => {
    //         this.setState({ qty: this.state.qty + 1 });
    //         this.setState({ qty: this.state.qty + 1 });
    //         this.setState({ qty: this.state.qty + 1 });
    //     })
    // }

    increaseQty = () => {
        console.log(this.state);
        //set state form 1
        // this.setState({
        //     qty: this.state.qty + 1,
        // })

        //set state form 2 - if prevState required use this form(syntax)
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1,
            }
        }, () => {

        })
    }

    decreaseQty = () => {
        this.setState((prevState) => {
            if (prevState.qty <= 0) {
                return;
            } else {
                return {
                    qty: prevState.qty - 1,
                }
            }

        }, () => {
        })
    }


    render() {
        const { price, qty, title } = this.state;
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.images} />
                </div>
                <div className='right-block'>
                    <div style={styles.text}>{title}</div>
                    <div style={{ color: '#777' }}>{price}</div>
                    <div style={{ color: '#777' }}>QTY: {qty}</div>
                    <div className='cart-item-actions'>
                        <img
                            alt="increase"
                            className='action-icons'
                            src=""
                            onClick={this.increaseQty}
                        />
                        <img
                            alt="decrease"
                            className='action-icons'
                            src=""
                            onClick={this.decreaseQty}
                        />
                        <img
                            alt="delete"
                            className='action-icons'
                            src=""
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    images: {
        height: 110,
        width: 110,
        borderRadius: 4,
        backgroundColor: '#ccc',
    },
    text: {
        fontSize: 25
    }
}

export default CartItem;