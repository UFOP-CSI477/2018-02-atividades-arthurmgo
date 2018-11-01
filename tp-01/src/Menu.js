import React, {Component} from 'react'
import imc from './Assets/imc.jpg'
import corrida from './Assets/corrida.jpg'
import {Link} from 'react-router-dom'

class Menu extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row mt-4">
                        <div className="col">
                            <div className='card'>
                                <Link to='/imc'>
                                    <div className="card-header"><b>IMC</b></div>
                                    <img className="card-img-top" src={imc} alt="IMC"/>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className='card'>
                                <Link to='/corrida'>
                                    <div className="card-header"><b>Corrida</b></div>
                                    <img className="card-img-top" src={corrida} alt="Corrida"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu