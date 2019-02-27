import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';   
import { getSpecialities, getSubjects, getGroups } from '../../actions';
import SelectContainer from './SelectContainer';
import TableContainer from './TableContainer';
import NavBar from '../NavBar';
import '../../styles/ScoresStyle.css';

class Scores extends Component{
    render(){ 
        const { getSpecialities, getSubjects, getGroups } = this.props;
        getSpecialities();
        getSubjects();
        getGroups();
        return(
            <div>
                <NavBar />
                <Grid>
                    <Row className="row">
                        <Col xs={12}>
                            <SelectContainer />
                        </Col>
                    </Row>
                        <Col xs={12}>
                            <TableContainer />
                        </Col>
                    <Row>
                    </Row>
                </Grid>
            </div>
        );
    };
}

const mapDispatchToProps = dispatch => ({
    getSpecialities: () => dispatch(getSpecialities()),
    getSubjects: () => dispatch(getSubjects()),
    getGroups: () => dispatch(getGroups()) 
});

export default connect(null, mapDispatchToProps)(Scores);