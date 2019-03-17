import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';   
import { getStudentsScores } from '../../actions';
import SelectContainer from '../Util/SelectContainer';
import TableContainer from './TableContainer';
import NavBar from '../Util/NavBar';
import '../../styles/ScoresStyle.css';

class Scores extends Component{
    render(){ 
        const { getStudentsScores } = this.props;

        return(
            <div>
                <NavBar />
                <Grid>
                    <Row className="row">
                        <Col xs={12}>
                            <SelectContainer submitAction={getStudentsScores}/>
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
    getStudentsScores: value => dispatch(getStudentsScores(value)) 
});

export default connect(null, mapDispatchToProps)(Scores);