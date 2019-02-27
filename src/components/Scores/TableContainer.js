import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableComponent from './TableComponent';


class TableContainer extends Component{
    render(){
        const { studentsScores } = this.props;
        console.log(studentsScores);
        return(
            <TableComponent data={studentsScores}/>
        );
    }
}

const mapStateToProps = state => ({
    studentsScores: state.studentsScores
});

export default connect(mapStateToProps, null)(TableContainer);