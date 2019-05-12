import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Fields from './PartialFields';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class FieldsTab extends Component {
    
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;
        const {handleChange, dataToPDFRequest, data} = this.props;
        const { registeredStudents, approvedStudentsP1, failedStudentsP1, studentsScore050P1, studentsScore5160P1,
            studentsScore6170P1, studentsScore7180P1, studentsScore8190P1, studentsScore91100P1, studentsDropOutP1,
            studentsAbsecesP1, approvedStudentsP2, failedStudentsP2, studentsScore050P2, studentsScore5160P2,
            studentsScore6170P2, studentsScore7180P2, studentsScore8190P2, studentsScore91100P2, studentsDropOutP2,
            studentsAbsecesP2, approvedStudentsP3, failedStudentsP3, studentsScore050P3, studentsScore5160P3,
            studentsScore6170P3, studentsScore7180P3, studentsScore8190P3, studentsScore91100P3, studentsDropOutP3,
            studentsAbsecesP3, approvedStudentsFL, failedStudentsFL, studentsScore050FL, studentsScore5160FL,
            studentsScore6170FL, studentsScore7180FL, studentsScore8190FL, studentsScore91100FL, studentsDropOutFL,
            studentsAbsecesFL } = data;
        
        const partial1 = { registeredStudents, approvedStudents:approvedStudentsP1, failedStudents:failedStudentsP1, 
                        studentsScore050:studentsScore050P1, studentsScore5160:studentsScore5160P1, studentsScore6170:studentsScore6170P1, 
                        studentsScore7180:studentsScore7180P1, studentsScore8190:studentsScore8190P1, studentsScore91100:studentsScore91100P1, 
                        studentsDropOut:studentsDropOutP1, studentsAbseces:studentsAbsecesP1 };

        const partial2 = { registeredStudents, approvedStudents:approvedStudentsP2, failedStudents:failedStudentsP2, 
                        studentsScore050:studentsScore050P2, studentsScore5160:studentsScore5160P2, studentsScore6170:studentsScore6170P2, 
                        studentsScore7180:studentsScore7180P2, studentsScore8190:studentsScore8190P2, studentsScore91100:studentsScore91100P2, 
                        studentsDropOut:studentsDropOutP2, studentsAbseces:studentsAbsecesP2 };
                    
        const partial3 = { registeredStudents, approvedStudents:approvedStudentsP3, failedStudents:failedStudentsP3, 
                        studentsScore050:studentsScore050P3, studentsScore5160:studentsScore5160P3, studentsScore6170:studentsScore6170P3, 
                        studentsScore7180:studentsScore7180P3, studentsScore8190:studentsScore8190P3, studentsScore91100:studentsScore91100P3, 
                        studentsDropOut:studentsDropOutP3, studentsAbseces:studentsAbsecesP3 };
                        
        const final= { registeredStudents, approvedStudents:approvedStudentsFL, failedStudents:failedStudentsFL, 
                        studentsScore050:studentsScore050FL, studentsScore5160:studentsScore5160FL, studentsScore6170:studentsScore6170FL, 
                        studentsScore7180:studentsScore7180FL, studentsScore8190:studentsScore8190FL, studentsScore91100:studentsScore91100FL, 
                        studentsDropOut:studentsDropOutFL, studentsAbseces:studentsAbsecesFL };                
        return (
        <div>
            <Grid id="CandidatesTab">
                <Row>
                    <Col xs={12}> 
                        <Row center="xs">
                        <AppBar position="static" color="default">
                            <Tabs
                                value={value}
                                onChange={this.handleChange}
                                scrollButtons="on"
                                indicatorColor="primary"
                                textColor="primary"
                            >
                                <Tab label="Primer Pacial" />
                                <Tab label="Segundo Pacial" />
                                <Tab label="Tercer Pacial" />
                                <Tab label="Final" />
                            </Tabs>
                        </AppBar>
                        {value === 0 && <Fields handleChange={handleChange} data={partial1}  title={"Primer Partial"} dataToPDFRequest={dataToPDFRequest} name={"P1"}/>}
                        {value === 1 && <Fields handleChange={handleChange} data={partial2}  title={"Segundo Partial"} dataToPDFRequest={dataToPDFRequest} name={"P2"}/>}
                        {value === 2 && <Fields handleChange={handleChange} data={partial3}  title={"Tercer Partial"} dataToPDFRequest={dataToPDFRequest} name={"P3"}/>}
                        {value === 3 && <Fields handleChange={handleChange} data={final}  title={"Final"} dataToPDFRequest={dataToPDFRequest} name={"FL"}/>}
                        </Row>
                    </Col>
                </Row>
            </Grid>
        </div>
        );
    }
}

export default FieldsTab;