import React, { Component }from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import NavBar from '../Util/NavBar';
import NavigationIcon from '@material-ui/icons/Navigation';
import Fab from '@material-ui/core/Fab';
import FormToPDF from './FormPFD';
import '../../styles/FilesStyle.css';

class Files extends Component{

    handleClick(){
        console.log("clicked");
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
                                <Fab variant="extended" aria-label="Delete" onClick={this.handleClick}>
                                    <NavigationIcon />
                                    Formato
                                </Fab>
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