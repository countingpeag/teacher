import React, { Component }from 'react';
import NavBar from '../Util/NavBar';
import NavigationIcon from '@material-ui/icons/Navigation';
import Fab from '@material-ui/core/Fab';
import FormToPDF from './FormPFD';
import '../../styles/FilesStyle.css';

class Files extends Component{

    constructor(){
        super();
        this.state = {
            flag:false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleShow(){
        console.log("clicked");
        const { flag } = this.state;

        if(flag)
            return <FormToPDF handleSubmit={this.handleSubmit}/>;
        else
            return <div className="centerResponsive"><Fab variant="extended" aria-label="Delete" onClick={() => this.setState({flag:true})}>
                        <NavigationIcon />
                        Formato
                    </Fab></div>;
    }

    handleSubmit(obj){
        console.log(obj);
    }

    render(){
        return(
            <div>
                <NavBar />
                { this.handleShow() }
            </div>
        );
    }
}

export default Files;