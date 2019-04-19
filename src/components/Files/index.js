import React, { Component }from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
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
    }

    handleShow(){
        console.log("clicked");
        const { flag } = this.state;

        if(flag)
            return <FormToPDF />;
        else
            return <Fab variant="extended" aria-label="Delete" onClick={() =>  this.setState({flag:true})}>
                        <NavigationIcon />
                        Formato
                    </Fab>;
    }

    render(){
        return(
            <div>
                <NavBar />
                <Grid>
                    <Row>
                        <Col xs={12} >
                            <Row center="xs" className="centerResponsive">
                                <Col xs={12}>
                                { this.handleShow()}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Files;