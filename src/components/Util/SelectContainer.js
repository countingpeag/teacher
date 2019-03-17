import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSpecialities, getSubjects, getGroups } from '../../actions';   
import Selects from './Selects';

class SelectContainer extends Component{

    render(){
        const { getSpecialities, getSubjects, getGroups, submitAction } = this.props;
        getSpecialities();
        getSubjects();
        getGroups();
        return(
            <Selects submitAction={submitAction}/>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getSpecialities: () => dispatch(getSpecialities()),
    getSubjects: () => dispatch(getSubjects()),
    getGroups: () => dispatch(getGroups())
});

export default connect(null, mapDispatchToProps)(SelectContainer);