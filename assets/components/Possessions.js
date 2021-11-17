import React, {Component} from "react";
import axios from 'axios';
import '../css/app.css';


class Possessions extends Component {
    constructor() {
        super();
        this.state = {possessions: [], loading: true};

    }

    componentDidMount() {

    }


    // getPossessionsByUsers(id){
    //     axios.get(`http://localhost:8000/api/user/possessions`+ id
    //     ).then(possessions => {
    //         this.setState({ possessions: possessions.data, loading: false})
    //         console.log(possessions);
    //     });
    //
    // }

    render() {
        return(
            <div>
                <section className="row-section">
                    <div className="container">
                        <div className="row">
                            <h2 className="text-center"><span>List of users possessions</span> Created with
                                 <i className="fa fa-heart"></i> by Zak</h2>
                        </div>
                        <div className='row'>
                            <div className="col-md-12">
                                <div className="panel">
                                    <div className="panel-heading">
                                        <div className="row">
                                            <div className="col col-sm-5 col-xs-12">
                                                <h4 className="title">Data <span>List</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel-body table-responsive">
                                        <table className="table table-hover">
                                            <thead>
                                            <tr className="active">
                                                <th>Id</th>
                                                <th>Nom</th>
                                                <th>Valeur</th>
                                                <th>Type</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            { this.state.possessions.map(possession =>(
                                                <tr>
                                                    <td>{possession.id}</td>
                                                    <td>{possession.nom}</td>
                                                    <td>{possession.valeur}</td>
                                                    <td>{possession.type}</td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

}

export default Possessions;
