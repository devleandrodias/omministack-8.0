import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';

import { addToCartRequest } from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';
import api from '../../service/api';
import { ProductList } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     products: [],
  //   };
  // }

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormater: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  // async componentDidMount() {
  //   const response = await api.get('/products');

  //   const data = response.data.map(product => ({
  //     ...product,
  //     priceFormater: formatPrice(product.price),
  //   }));

  //   this.setState({ products: data });
  // }

  function handleAddProduct(id) {
    // const { addToCartRequest } = this.props;

    dispatch(addToCartRequest(id));
  }

  // const { products } = this.state;
  // const { amount } = this.props;

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormater}</span>

          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color="#fff" />
              {amount[product.id] || 0}
            </div>
            <span>Adicionar ao carrinho</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}

// const mapStateToProps = state => ({
//   amount: state.cart.reduce((amount, product) => {
//     amount[product.id] = product.amount;

//     return amount;
//   }, {}),
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(CartActions, dispatch);

// export default connect(
//   null,
//   mapDispatchToProps
// )(Home);
