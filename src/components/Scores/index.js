import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';   
import { getSpecialities } from '../../actions';
import SelectContainer from './SelectContainer';
import TableComponent from './TableComponent';
import NavBar from '../NavBar';
import '../../styles/ScoresStyle.css';

class Scores extends Component{
    render(){ 
        const {getSpecialities} = this.props;
        getSpecialities();
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
                            <TableComponent />
                        </Col>
                    <Row>
                    </Row>
                </Grid>
            </div>
        );
    };
}

const mapDispatchToProps = dispatch => ({
    getSpecialities: () => dispatch(getSpecialities())
});

export default connect(null, mapDispatchToProps)(Scores);