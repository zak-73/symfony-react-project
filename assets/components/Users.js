import React, {Component} from 'react';
import axios from 'axios';
import '../css/app.css';



class Users extends Component {

    constructor() {
        super();
        this.state = {users: [], loading: true};

    }

    componentDidMount() {
        this.showUsers();
    }


    showUsers() {
        axios.get(`http://localhost:8000/api/show/users`).then(users => {
            this.setState({ users: users.data, loading: false})
        })

    }

     deleteUser(id) {
            axios.delete(`http://localhost:8000/api/delete/user/`+ id
            ).then(response => {
                this.setState({
                    users: response.data

                });

            });

    }

    getPossessionsByUsers(id){
        axios.get(`http://localhost:8000/api/user/possessions/`+ id
        ).then(response => {
         console.log(response.data);

        });

    }



    render() {
        return(
            <div>
                <section className="row-section">
                    <div className="container">
                        <div className="row">
                            <h2 className="text-center"><span>List of users </span>Created with
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
                                                        <th>Prénom</th>
                                                        <th>Adresse</th>
                                                        <th>Email</th>
                                                        <th>Tel</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                { this.state.users.map(user =>(
                                                    <tr key={user.id}>
                                                        <td>{user.id}</td>
                                                        <td><a onClick={() => this.getPossessionsByUsers(user.id)}>{user.nom}</a></td>
                                                        <td>{user.prenom}</td>
                                                        <td><span className="label label-success">{user.email}</span></td>
                                                        <td>{user.adresse}</td>
                                                        <td>{user.tel}</td>
                                                        <td><button className="btn btn-default" onClick={() => this.deleteUser(user.id)} >X</button></td>
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
export default Users;
