import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Body from './Body';
import logoNucleus from '../../images/logoTest.png';
import '../../styles/LoginStyle.css';

class Login extends Component{

    render(){
        return(
            <Grid>
                <Col xs={12}>
                   <Row center="xs">
                        <Col className="body" xs={10} md={3}>
                            <img className="iconLogin" src={logoNucleus} title="nucleus" alt="nucleus"/>
                            <Body />
                        </Col>
                    </Row>
                    <Row center="xs"> 
                        <Col className="footer" xs={10} md={3}>
                            @2018 nucleus Teacher
                        </Col>
                    </Row>
                </Col>
            </Grid>
        );
    }
}

export default Login;