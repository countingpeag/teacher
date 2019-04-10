import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../actions';
import Progress from '../Util/ProgressComponent';
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
        const teacher = {
            teacherUsername: username,
            teacherPassword: password
        }
        
        this.props.login(teacher);
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
                    <Progress status={this.props.loginStatus} />
                    {
                        this.props.loginSuccess && <Redirect to={'/home'}/> 
                    }
                </Row>
            </Grid>
        );
    }
}

const mapDispatchToProps = dispatch => (
    {
        login: value => dispatch(login(value))
    }
); 

const mapStateToProps = state => (
    {
        loginSuccess: state.loginSuccess,
        loginStatus: state.login
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Body); 