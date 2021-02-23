import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'


const Calc = props => {
    const { FaleMais, noPlan } =
    (props.location && props.location.state) || {};
    console.log(FaleMais)
    const plans = {
        30: 'Plano FaleMais30',
        60: 'Plano FaleMais60',
        120: 'Plano FaleMais120'
      }
      const plan = plans[FaleMais.plan] || 'valor default'
      
      console.log(plan)

    return (
       <div className="display-all">
           <div className="display-text">
                <h2>Aqui estão as melhores opções para você!</h2>
                <p>Você selecionou o {plan} com {FaleMais.duration} minutos. <br/>
                    As ligações serão feita do DDD ({FaleMais.origin}) para DDD ({FaleMais.destiny}).
                </p>
            </div>
           <table className="styled-table">
            <thead>
              <tr>
                <th>Origem</th>
                <th>Destino</th>
                <th>Plano</th>
                <th>Duração/min</th>
                <th>Preço</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{FaleMais.origin}</td>
                <td>
                  {FaleMais.destiny}
                </td>
                <td>
                  {plan}
                </td>
                <td>
                  {FaleMais.duration}
                </td>
                <td>
                  {FaleMais.cost}
                </td>

              </tr>
            </tbody>
          </table>
           <table className="styled-table">
            <thead>
              <tr>
                <th>Origem</th>
                <th>Destino</th>
                <th>Plano</th>
                <th>Duração/min</th>
                <th>Preço</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{noPlan.origin}</td>
                <td>
                  {noPlan.destiny}
                </td>
                <td>
                  Sem Plano 
                </td>
                <td>
                  {noPlan.duration}
                </td>
                <td>
                  {noPlan.cost}
                </td>

              </tr>
            </tbody>
          </table>
          <Link className="button" to='/'>Voltar</Link>
       </div>
    )
};

export default Calc;