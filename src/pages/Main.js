import React, { Component } from "react";
import api from "../services/api";
import './style.css'

class Main extends Component {
  state = {
    products: [],
  };
  
  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get("/api");

    this.setState({ products: response.data });
  };
  getProduct = async (event) => {
    event.preventDefault();
    const { target } = event;
    const origin = target.origin.selectedOptions[0].value;
    const destiny = target.destiny.selectedOptions[0].value;
    const plan = target.plans.selectedOptions[0].value;
    const duration = target.duration.value;
  
    
    
    const response = await api.get("/show", {
        params: {
        origin: origin,
        destiny: destiny,
        plan: plan,
        duration: duration,
      }
    });
    this.props.history.push("/show", response.data)
  };
  
  
  render() {
    const { products } = this.state;
    return (
      <div className="product-list">
        <form onSubmit={this.getProduct}>
          <table className="styled-table">
            <thead>
              <tr>
                <th>Origem</th>
                <th>Destino</th>
                <th>Plano</th>
                <th>Duração/min</th>
              
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <select id="origin">
                    
                    {products.map((product) => (
                      <option value={product.origin}>{product.origin}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <select id="destiny">
                    {products.map((product) => (
                      <option value={product.destiny}>{product.destiny}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <select id="plans">
                    <option value="?">Selecione um plano</option>
                    <option value="30">Fale Mais 30</option>
                    <option value="60">Fale Mais 60</option>
                    <option value="120">Fale Mais 120</option>
                  </select>
                </td>
                <td>
                  <input
                    size="4"
                    id="duration"
                    maxLength="5"
                    placeholder="duration"
                  />
                </td>

              </tr>
            </tbody>
          </table>
          <button className="button">Calcular</button>
        </form>
      </div>
    );
  }
}

export default Main;