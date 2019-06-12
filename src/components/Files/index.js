import React, { Component }from 'react';
import NavBar from '../Util/NavBar';
import { connect } from 'react-redux';
import { getDataToFile } from '../../actions';
import FolderOpen from '@material-ui/icons/FolderOpen';
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
        this.handleShow = this.handleShow.bind(this);
    }

    handleShow(){
        const { flag } = this.state;

        if(flag)
            return <FormToPDF handleSubmit={this.handleSubmit} data={this.props.dataToPDF} dataToPDFRequest={this.props.dataToPDFRequest}/>;
        else
            return <div className="centerResponsive"><Fab variant="extended" aria-label="Delete" onClick={() => this.setState({flag:true})}>
                        <FolderOpen style={{fontSize: 30}} />
                        Formato
                    </Fab></div>;
    }

    handleSubmit(obj){
        this.props.getDataToFile(obj);
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

const mapDispatchToProps = dispatch => ({
    getDataToFile: value => dispatch(getDataToFile(value))
});

const mapStateToProps = state => ({
    dataToPDF: state.dataToPDF,
    dataToPDFRequest: state.dataToPDFRequest
});

export default connect(mapStateToProps, mapDispatchToProps)(Files);