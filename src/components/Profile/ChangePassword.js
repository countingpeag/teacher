import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import decode from 'jwt-decode';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { changePassword } from './../../actions';
import { connect } from 'react-redux';

class ChangePassword extends React.Component {

    constructor(){
        super();
        this.state={
          oldPassword: '',
          newPassword: '',
          open: false
        }
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleSubmit = () => {
      const { oldPassword, newPassword } = this.state;

      if(this.characterSize(oldPassword, 8, 12) && this.characterSize(newPassword, 8, 12)){
        const adminObj = decode(localStorage.getItem('tokenAuth'));
        const obj = {
          teacherId: adminObj.idTeacher,
          oldTeacherPassword: oldPassword,
          newTeacherPassword: newPassword,
        }
        
        this.props.changePassword(obj);
        this.setState({open:false});
      }
    }

    characterSize = (payload, minSize, maxSize) => {

        if(payload===''){
            alert("Complete los campos vacios");
            return false;
        }
        else if(payload.length<minSize){
            alert(`Debe contener minimo ${minSize} caracteres.`);
            return false;
        }
        else if(payload.length>maxSize){
            alert(`Debe contener maximo ${maxSize} caracteres.`);
            return false;
        }
        else
            return true;
    };

    handleClickOpen = () => {
      this.setState({open:true});
    };

    handleClose = () => {
      this.setState({open:false});
    };

    handleChange = event => {
      const { id, value } = event.target;
      switch(id){
        case 'oldPassword':
          this.setState({oldPassword: value});
          break;
        case 'newPassword':
          this.setState({newPassword: value});
          break;
        default:
          break;
      }
    }

    render() {
      return (
        <div>
          <Button color="primary" onClick={this.handleClickOpen}>Cambiar Contraseña</Button>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Cambiar Contraseña</DialogTitle>
            <DialogContent>
              <Grid fluid>
                <Row>
                  <Col xs={12} md={6}>
                    <TextField
                      id="oldPassword"
                      label="Contraseña"
                      type="password"
                      autoComplete="current-password"
                      margin="normal"
                      onChange={this.handleChange}
                    />
                  </Col>
                  
                  <Col xs={12} md={6}>
                    <TextField 
                      id="newPassword"
                      label="Nueva contraseña"
                      type="password"
                      autoComplete="current-password"
                      margin="normal"
                      onChange={this.handleChange}
                    />
                  </Col>
                </Row>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleSubmit} color="primary">
                Aceptar
              </Button>
              <Button onClick={this.handleClose} color="primary" autoFocus>
                Cancelar
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
}

const dispatchToProps = dispatch => ({
  changePassword: value => dispatch(changePassword(value))
})

export default connect(null, dispatchToProps)(ChangePassword);