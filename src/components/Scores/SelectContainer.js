import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';   
import SelectComponent from './SelectComponent';

class SelectContainer extends Component{

    render(){
        const { specialities } = this.props;
        let options = specialities.map( specialty => specialty.specialityName);
        return(
            <Grid>
                <Row className="row">
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={12} md={3}>
                                <SelectComponent name="Especialidad" options={options}/>
                            </Col>
                            <Col xs={12} md={3}>
                                <SelectComponent name="Materia" options={['qwe','wer','ert']}/>
                            </Col>
                            <Col xs={12} md={3}>
                                <SelectComponent name="Grupo" options={['qwe','wer','ert']}/>
                            </Col>
                            <Col xs={12} md={3}>
                                <SelectComponent name="Turno" options={['qwe','wer','ert']}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    specialities: state.specialities
});


export default connect(mapStateToProps, null)(SelectContainer);