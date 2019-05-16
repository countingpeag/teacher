import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSpecialities, getSubjects, getGroups } from '../../actions';   
import FileSelects from './FileSelects';

class FileSelectsContainer extends Component{

    render(){
        const { getSpecialities, getSubjects, getGroups, submitAction, setSubject } = this.props;
        getSpecialities();
        getSubjects();
        getGroups();
        return(
            <FileSelects submitAction={submitAction} setSubject={setSubject}/>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getSpecialities: () => dispatch(getSpecialities()),
    getSubjects: () => dispatch(getSubjects()),
    getGroups: () => dispatch(getGroups())
});

export default connect(null, mapDispatchToProps)(FileSelectsContainer);