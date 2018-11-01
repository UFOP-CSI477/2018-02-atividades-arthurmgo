import React from 'react'
import Corrida from './Corrida'
import Menu from './Menu'
import IMC from './IMC'
import {Route, Switch} from 'react-router-dom'

export default class Main extends React.Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={Menu}/>
                    <Route exact path="/corrida" component={Corrida}/>
                    <Route exact path="/imc" component={IMC}/>
                </Switch>
            </main>
        );
    }


}