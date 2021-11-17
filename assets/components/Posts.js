import React, {Component} from 'react';
//import axios from 'axios';
import '../css/app.css';
import magic from '../../public/images/magic-photo.png';


class Posts extends Component {

    render() {
        return (
            <section>
            <div className="jumbotron-img jumbotron jumbotron-fluid">

                    <div className="container">
                        <h1 className="display-4"><a href="/users">Tableau Information Utilisateurs</a>
                        </h1>
                        <p className="lead">And even answers for those questions you didn't think to ask!</p>
                    </div>

            </div>
                <div className="container">
                    <div className="row mb-3">
                        <div className="col">
                            <a href="">
                                <button className="btn btn-question">
                                    Ask a Question
                                </button>
                            </a>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div>
                                <div className="q-container p-4">
                                    <div className="row">
                                        <div className="col-2 text-center">
                                    <img src={tisha} width="100" height="100"/>
                                        </div>

                                    </div>

                                </div>

                            </div>


                        </div>

                    </div>


                </div>

            </section>


        )
    }
}

export default Posts;