import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid, Row, Col } from 'react-flexbox-grid';
import '../../styles/LoginStyle.css';

class Body extends Component{
    
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
        }

        this.clicked = this.clicked.bind(this);
    }
    
    handleChange = event => {
        if(event.target.id==="username")
        this.setState({username: event.target.value});
    else
        this.setState({password: event.target.value});
    }

    clicked(){
        const {username, password} = this.state;
        const admin = {
            adminUsername: username,
            adminPassword: password
        }

        //execute the dispatch to make the request(the request is done inside of index.js in actions folder)
        this.props.login(admin);
    }
    

    render(){
       return(
            <Grid>
                <Row>
                    <Col xs={12} md={12} lg={12}>
                        <TextField
                            id="username"
                            label="Usuario"
                            type="text"
                            autoComplete="current-password"
                            margin="normal"
                            onChange={this.handleChange}
                        />
                    </Col>
                    <Col xs={12} md={12} lg={12}>
                        <TextField
                            id="password"
                            label="Contraseña"
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            onChange={this.handleChange}
                        />
                    </Col>
                    <Col xs={12} md={12} lg={12}>
                        <br/>
                        <br/>                        
                        <Button variant="contained" color="primary" onClick={this.clicked} >
                            Iniciar sesíon
                        </Button>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Body; 