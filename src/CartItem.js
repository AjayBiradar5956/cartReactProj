import React from 'react';

class CartItem extends React.Component {
    render() {
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.images} />
                </div>
                <div className='right-block'>
                    <div style={styles.text}>Phone</div>
                    <div style={{ color: '#777' }}>Rs 999</div>
                    <div style={{ color: '#777' }}>QTY: 1</div>
                    <div className='cart-item-actions'>
                        {/* {Buttons} */}
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