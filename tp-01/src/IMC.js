import React, {Component} from 'react'

class IMC extends Component {


    constructor(props) {

        super(props);

        this.state = {
            peso: '',
            altura: '',
            resultado: 0,
            pesomin: 0,
            pesomax: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {

        if (this.state.altura !== '' && this.state.peso !== '') {

            console.log(this.state);

            let a = parseFloat(this.state.peso);
            let b = parseFloat(this.state.altura);

            console.log(a);
            console.log(b ^ 2);

            let resultado = a / Math.pow(b, 2);

            let pesomin = 18.5 *  Math.pow(b, 2);
            let pesomax = 24.9 *  Math.pow(b, 2);

            this.setState({
                resultado: resultado,
                pesomin: pesomin,
                pesomax: pesomax
            })
        }

    }

    handleChange(event) {

        this.setState({
            [event.target.name]: event.target.value
        });


    }


    render() {
        return (
            <div className='container'>
                <table className="table table-hover mt-4">
                    <thead>
                    <h6>Tabela de IMC</h6>
                    <tr>
                        <th scope="col">Resultado</th>
                        <th scope="col">Situação</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Entre 18,5 e 24,99</td>
                        <td> Peso normal</td>
                    </tr>
                    <tr>
                        <td>Entre 25 e 29,99</td>
                        <td>Acima do peso</td>
                    </tr>
                    <tr>
                        <td>Entre 30 e 34,99</td>
                        <td>Obesidade I</td>
                    </tr>
                    <tr>
                        <td>Entre 35 e 39,99</td>
                        <td>Obesidade II (severa)</td>
                    </tr>
                    </tbody>
                </table>


                <h6 className="mt-4">Calculadora de IMC</h6>


                <div className='row'>
                    <div className='col align-self-center '>
                        <div className="form-group">
                            <input type="number" step="0.1" className="form-control my-2" name='peso' placeholder="Peso (Kg)"
                                   onChange={this.handleChange}/>

                            <input type="number" step="0.1" className="form-control my-2" name='altura' placeholder="Altura (cm)"
                                   onChange={this.handleChange}/>

                            <button className="btn btn-dark w-100" onClick={this.handleSubmit}>Enviar</button>
                        </div>
                    </div>

                    <div className='col align-self-center'>
                        <h1>
                            IMC:  {this.state.resultado}
                        </h1>
                        <h2>Peso: {this.state.pesomin} até {this.state.pesomax}</h2>

                    </div>

                </div>


            </div>
        );
    }
}

export default IMC