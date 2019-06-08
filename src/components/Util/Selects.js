import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import ProgressComponent from './CircularProgress';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

class SelectContainer extends Component{

    constructor(){
        super();
        this.state = {
            specialty:'',
            subject:'',
            group:'',
            shift:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateState = this.validateState.bind(this);
    }

    handleChange({target}){
        const { value, name } = target;
        if(name==="specialty")
            this.setState({specialty:value});
        else if(name==="subject")
            this.setState({subject:value});
        else if(name==="group")
            this.setState({group:value});
        else if(name==="shift")
            this.setState({shift:value});
    }

    handleSubmit(){
        const { specialty, subject, group, shift } = this.state;
        let obj = {
            specialty,
            subject,
            group,
            shift
        }
        this.props.submitAction(obj);
    }

    validateState(){
        const { specialty, subject, group, shift } = this.state;
        
        if(specialty==='' || subject==='' || group==='' || shift==='')
            return true;
        else
            return false;

    }

    render(){
        const { specialty, subject, group, shift } = this.state;
        const { specialities, subjects, groups, studentsRequest } = this.props;
        let options1 = specialities;
        let options2 =  subjects;
        let options3 = groups;
        return(
            <Grid>
                <Row className="row">
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={12} md={3}>
                                <FormControl className="formComtrol">
                                    <InputLabel>Especialidad</InputLabel>
                                    <Select value={specialty} onChange={this.handleChange} name="specialty">
                                        <MenuItem value=''>
                                            <em>None</em>
                                        </MenuItem>
                                        {
                                            options1.map( option => {
                                                return <MenuItem key={option.specialityKeycode} value={option}>{option.specialityName}</MenuItem>;
                                            })
                                        }
                                    </Select>
                                </FormControl>
                            </Col>
                            <Col xs={12} md={3}>
                                <FormControl className="formComtrol">
                                    <InputLabel>Materia</InputLabel>
                                    <Select value={subject} onChange={this.handleChange} name="subject">
                                        <MenuItem value=''>
                                            <em>None</em>
                                        </MenuItem>
                                        {
                                            options2.map( option => {
                                                return <MenuItem key={option.subjectKeyCode} value={option}>{option.subjectName}</MenuItem>;
                                            })
                                        }
                                    </Select>
                                </FormControl>
                            </Col>
                            <Col xs={12} md={2}>
                                <FormControl className="formComtrol">
                                    <InputLabel>Grupo</InputLabel>
                                    <Select value={group} onChange={this.handleChange} name="group">
                                        <MenuItem value=''>
                                            <em>None</em>
                                        </MenuItem>
                                        {
                                            options3.map( option => {
                                                return <MenuItem key={option.idGroup} value={option}>{option.groupName}</MenuItem>;
                                            })
                                        }
                                    </Select>
                                </FormControl>
                            </Col>
                            <Col xs={12} md={2}>
                                <FormControl className="formComtrol">
                                    <InputLabel>Turno</InputLabel>
                                    <Select value={shift} onChange={this.handleChange} name="shift">
                                        <MenuItem value=''>
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'matutino'}>Matutino</MenuItem>
                                        <MenuItem value={'vespertino'}>Vespertino</MenuItem>
                                    </Select>
                                </FormControl>
                            </Col>
                            <Col xs={12} md={2}>
                                <div className="topSpacing">
                                    <Button variant="contained" color="primary" onClick={this.handleSubmit} disabled={studentsRequest || this.validateState()}>
                                        Buscar
                                    </Button>
                                    {
                                        studentsRequest && <ProgressComponent size={24}/>
                                    }
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    specialities: state.specialities,
    subjects: state.subjects,
    groups: state.groups,
    studentsRequest: state.studentsRequest
});

export default connect(mapStateToProps, null)(SelectContainer);