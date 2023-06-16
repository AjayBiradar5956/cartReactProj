import React from 'react';

const Navbar = (props) => {
    return (
        <div style={Styles.nav}>
            <div style={Styles.cartIconContainer}>
                <img style={Styles.cartIcon} src="" alt="cart" />
                <span style={Styles.cartCount}>{props.count}</span>
            </div>
        </div>
    )
}

const Styles = {
    cartIcon: {
        height: 32,
        marginRight: 30
    },
    nav: {
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    cartIconContainer: {
        position: 'relative',
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: ' 4px 8px',
        position: 'absolute',
        right: 0,
        top: -9,
    }
}

export default Navbar;