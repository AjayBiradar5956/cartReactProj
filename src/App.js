import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase';
// import Users from './Users';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    }
  }


  componentDidMount() {
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot) => {
    //     console.log(snapshot);

    //     snapshot.docs.map((doc) => {
    //       console.log(doc.data());
    //     })

    //     const products = snapshot.docs.map((doc) => {
    //       const data = doc.data();
    //       data['id'] = doc.id;
    //       return data;
    //     })

    //     this.setState({
    //       products,
    //       loading: false,
    //     })
    //   })

    // Real time updation on the web application without refreshing the page
    firebase
      .firestore()
      .collection('products')
      // .where('price', '>=', 300)
      .orderBy('price', 'desc')
      .onSnapshot((snapshot) => {
        console.log(snapshot);

        snapshot.docs.map((doc) => {
          console.log(doc.data());
        })

        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data['id'] = doc.id;
          return data;
        })

        this.setState({
          products,
          loading: false,
        })
      })
  }


  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    // products[index].qty += 1;

    // this.setState({
    //   products: products,
    // })

    const docRef = firebase.firestore().collection('products').doc(products[index].id);
    docRef.update({
      qty: products[index].qty + 1,
    })
      .then(() => {
        console.log("updated successfully");
      })
      .catch((err) => {
        console.log(err);
      })
  }
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    // if (products[index].qty <= 0) {
    //   return;
    // } else {
    //   products[index].qty -= 1;
    //   this.setState({
    //     products: products,
    //   })
    // }

    const docRef = firebase.firestore().collection('products').doc(products[index].id);
    if ((products[index].qty) == 0) {
      return;
    } else {
      docRef.update({
        qty: products[index].qty - 1,
      })
        .then(() => {
          console.log("updated successfully");
        })
        .catch((err) => {
          console.log(err);
        })
    }

  }
  handleDeleteProduct = (id) => {
    // const { products } = this.state;

    const dataRef = firebase.firestore().collection('products').doc(id);
    dataRef
      .delete()
      .then(() => {
        console.log("deleted successfully");
      })
      .catch((err) => {
        console.log(err);
      })

    // const items = products.filter((item) => item.id !== id);

    // this.setState({
    //   products: items
    // })
  }
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => { count += product.qty })
    return count;
  }
  getCartTotal = () => {
    const { products } = this.state;
    let total = 0;

    products.forEach((product) => {
      total += product.qty * product.price;
    })

    return total;
  }

  addProduct = () => {
    firebase
      .firestore()
      .collection('products')
      .add({
        img: '',
        qty: 3,
        price: 500,
        title: 'Washing Machine',
      })
      .then((doc) => {
        console.log("Product added", doc);
        return
      })
      .catch((err) => {
        console.log(err);
        return;
      })
  }

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App" >
        <Navbar count={this.getCartCount()} />
        {/* <button onClick={this.addProduct} style={{ padding: 20, fontSize: 20 }}>Add a product</button> */}
        {loading && <h1>Loading Products...</h1>}
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onHandleDelete={this.handleDeleteProduct}
        />
        <div>TOTAL: {this.getCartTotal()}</div>
        {/* <Users /> */}
      </div >
    );
  }
}

export default App;
