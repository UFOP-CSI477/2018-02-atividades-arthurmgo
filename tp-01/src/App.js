import React, {Component} from 'react';
import './stylesheet.css'

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            time: '',
            players: [],
            responseMode: false,
            response: []

        };

        this.addPlayer = this.addPlayer.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearPlayers = this.clearPlayers.bind(this);

        this.clearFields = this.clearFields.bind(this);

    };


    addPlayer() {

        const player = {
            name: this.state.name,
            time: this.state.time,
            start: this.state.players.length
        };

        if (player.name !== '' && player.time !== '') {
            if (this.state.players.length < 6) {
                this.setState({
                    players: [...this.state.players, player]
                });
            } else {
                alert('Numero máximo de competidores')
            }
        } else {
            alert('Campo em branco')
        }

        this.clearFields();
    }

    handleChange(event) {

        this.setState({
            [event.target.name]: event.target.value
        });

    }

    handleSubmit() {

        let players = this.state.players.slice();

        players.sort((a, b) => {
            if (parseFloat(a.time) > parseFloat(b.time)) {
                return 1;
            } else {
                return 0;
            }
        });

        let position = 1;

        for (let i = 0; i < players.length; i++) {
            if (i > 0 && players[i].time !== players[i - 1].time) {
                position = i + 1;
            }

            players[i]['position'] = position;
        }

        players.forEach((player) => {
            if (player.position === 1) {
                player['status'] = 'Venceu!'
            } else {
                player['status'] = ''
            }
        });

        console.log(players);

        this.setState(
            {
                response: players,
                responseMode: true,
            }
        )

    }

    clearPlayers() {
        this.setState({
            players: []
        })
    }

    clearFields() {
        this.setState({
            name: '',
            time: ''
        })
    }


    render() {

        const rows = this.state.players.map((player, index) => {
            return (
                <tr key={index}>
                    <th scope="col">{index}</th>
                    <th scope="col">{player.name}</th>
                    <th scope="col">{player.time}</th>
                </tr>
            );
        });

        const responseRows = this.state.response.map((player, index) => {
            return (
                <tr key={index}>
                    <th scope="col">{player.position}</th>
                    <th scope="col">{player.start}</th>
                    <th scope="col">{player.name}</th>
                    <th scope="col">{player.time}</th>
                    <th scope="col">{player.status}</th>
                </tr>
            );
        });


        const formTableResponse = () => {
            return (
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">Posição</th>
                            <th scope="col">Largada</th>
                            <th scope="col">Competidor(a)</th>
                            <th scope="col">Tempo(s)</th>
                            <th scope="col">Resultado</th>
                        </tr>
                        </thead>
                        <tbody>
                        {responseRows}
                        </tbody>

                    </table>

                    <div className="d-flex justify-content-center mb-4">
                        <button className="mx-4 my-auto btn btn-dark btn-lg btn-block"
                                onClick={() => this.setState({responseMode: false})}>Voltar
                        </button>
                    </div>
                </div>
            );
        };


        const formTable = () => {
            return (

                <div>

                    <div className="mb-4 mt-4">

                        <label>
                            Jogador #{this.state.players.length}
                        </label>
                        <div className="row">
                            <div className="col-5">
                                <input type="text" name="name" className="form-control" placeholder="Nome"
                                       onChange={this.handleChange} value={this.state.name}/>
                            </div>
                            <div className="col-5">
                                <input type="number" name="time" className="form-control" placeholder="Tempo"
                                       onChange={this.handleChange} value={this.state.time}/>
                            </div>
                            <div className="col-2">
                                <button className="btn btn-dark" onClick={() => this.addPlayer()}>Inserir</button>
                            </div>
                        </div>

                    </div>

                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th scope="col">Largada</th>
                                <th scope="col">Competidor(a)</th>
                                <th scope="col">Tempo(s)</th>
                            </tr>
                            </thead>
                            <tbody>
                            {rows}
                            </tbody>

                        </table>

                        <div className="d-flex justify-content-center mb-4">
                            <button className="mx-4 my-auto btn btn-light btn-lg btn-block"
                                    onClick={() => this.clearPlayers()}>Limpar
                            </button>
                            <button className="mx-4 my-auto btn btn-dark btn-lg btn-block"
                                    onClick={() => this.handleSubmit()}>Submeter
                            </button>
                        </div>
                    </div>
                </div>
            );
        };

        return (
            <div className="container">


                {this.state.responseMode ? formTableResponse() : formTable()}


            </div>
        );
    }
}

export default App;
