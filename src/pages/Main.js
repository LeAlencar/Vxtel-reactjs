import React, { Component } from "react";
import api from "../services/api";
import { useHistory } from "react-router-dom";

export default class Main extends Component {
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
    //let history = useHistory()
    const { target } = event;
    const origins = target.origins.selectedOptions[0].value;
    const destiny = target.destiny.selectedOptions[0].value;
    const plan = target.plans.selectedOptions[0].value;
    const duration = target.duration.value;
  
    console.log({ origins, destiny, plan, duration });
    const response = await api.get("/show", {
        params: {
        origin: origins,
        destiny: destiny,
        plan: plan,
        duration: duration,
      }
    });
    // history only works on function
    //history.push("/show", response.data)
  };

  render() {
    const { products } = this.state;
    return (
      <div className="product-list">
        <form onSubmit={this.getProduct}>
          <table>
            <thead>
              <tr>
                <th>Origem</th>
                <th>Destino</th>
                <th>Plano?</th>
                <th>Duração / min</th>
                <th>Ação</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <select id="origins">
                    {" "}
                    {products.map((product) => (
                      <option value={product.origin}>{product.origin}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <select id="destiny">
                    {" "}
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
          <button>Calcular</button>
        </form>
      </div>
    );
  }
}
