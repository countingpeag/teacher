import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import jsPDF from 'jspdf';
import SelectContainer from '../Util/SelectContainer';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import 'jspdf-autotable';

class FormToPDF extends Component{

    constructor(){
        super();

        this.state = {
            registeredStudents: '', 
            approvedStudents: '', 
            failedStudents: '', 
            studentsScore050: '',
            studentsScore5160: '',
            studentsScore6170: '',
            studentsScore7180: '',
            studentsScore8190: '', 
            studentsScore91100: '', 
            studentsDropOut: '',
            studentsAbseces: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const { name, value } = event.target;
        if(name==="studentsAmount")
            this.setState({registeredStudents:value});
        else if(name==="studentsSuccess")
            this.setState({approvedStudents:value});
        else if(name==="studentsFailure")
            this.setState({failedStudents:value});
        else if(name==="score(0-50)")
            this.setState({studentsScore050:value});
        else if(name==="score(51-60)")
            this.setState({studentsScore5160:value});
        else if(name==="score(61-70)")
            this.setState({studentsScore6170:value});
        else if(name==="score(71-80)")
            this.setState({studentsScore7180:value});
        else if(name==="score(81-90)")
            this.setState({studentsScore8190:value});
        else if(name==="score(91-100)")
            this.setState({studentsScore91100:value});
        else if(name==="studentsAbsences")
            this.setState({studentsAbseces:value});
        else if(name==="studentsDropout")
            this.setState({studentsDropOut:value});
    }

    candidatesPDF(){
        const columns = [
            {title: "ID", dataKey: "idCandidate"},
            {title: "Nombre", dataKey: "candidateName"},
            {title: "Apellidos", dataKey: "candidateLastNameFather"},
            {title: "Edad", dataKey: "candidateAge"},
            {title: "Calificacion", dataKey: "candidateScore"},
            {title: "Telefono", dataKey: "candidatePersonalPhone"}
            ];

        const rows = [
            {},
            {},
            {},
            {}
        ];

        var doc = new jsPDF('p', 'pt');
        doc.autoTable(columns, rows, {
            styles: {fillColor: [164, 164, 164]},
                columnStyles: {
                id: {fillColor: 255}
            },
            margin: {top: 60},
            addPageContent: function(data) {
                doc.text("Aspirantes", 40, 30);
            }
        });
        doc.save('test.pdf');
    }

    componentWillReceiveProps(props){
        this.setState(props.data);
    }

    render(){
        const { registeredStudents, approvedStudents, failedStudents, studentsScore050, studentsScore5160,
                studentsScore6170, studentsScore7180, studentsScore8190, studentsScore91100, studentsDropOut,
                studentsAbseces } = this.state;
        const {} = this.props;
        return(
            <Grid className="square">
                <Col xs={12}>
                    <Row center="xs">
                        <Col>
                            <SelectContainer submitAction={this.props.handleSubmit}/>
                        </Col>
                    </Row>
                    <Row center="xs">
                        <Col xs={6} md={3}>
                            <TextField
                                id="studentsAmount"
                                label="Alumnos Inscritos"
                                type="studentsAmount"
                                name="studentsAmount"
                                autoComplete="studentsAmount"
                                margin="normal"
                                variant="outlined"
                                value={registeredStudents}
                                disabled={!this.props.dataToPDFRequest}
                                onChange={this.handleChange}
                            />
                        </Col>
                        <Col xs={6} md={3}>
                            <TextField
                                id="studentsSuccess"
                                label="Alumnos Aprobados"
                                type="studentsSuccess"
                                name="studentsSuccess"
                                autoComplete="studentsSuccess"
                                margin="normal"
                                variant="outlined"
                                value={approvedStudents}
                                disabled={!this.props.dataToPDFRequest}
                                onChange={this.handleChange}
                            />
                        </Col>
                        <Col xs={6} md={3}>
                            <TextField
                                id="studentsFailure"
                                label="Alumnos Reprobados"
                                type="studentsFailure"
                                name="studentsFailure"
                                autoComplete="studentsFailure"
                                margin="normal"
                                variant="outlined"
                                value={failedStudents}
                                disabled={!this.props.dataToPDFRequest}
                                onChange={this.handleChange}
                            />
                        </Col>
                        <Col xs={6} md={3}>
                            <TextField
                                id="score(0-50)"
                                label="Alumnos calificacion (0-50)"
                                type="score(0-50)"
                                name="score(0-50)"
                                autoComplete="score(0-50)"
                                margin="normal"
                                variant="outlined"
                                value={studentsScore050}
                                disabled={!this.props.dataToPDFRequest}
                                onChange={this.handleChange}
                            />
                        </Col>
                    </Row>
                    <Row center="xs">
                        <Col xs={6} md={3}>
                            <TextField
                                id="score(51-60)"
                                label="Alumnos calificacion (51-60)"
                                type="score(51-60)"
                                name="score(51-60)"
                                autoComplete="score(51-60)"
                                margin="normal"
                                variant="outlined"
                                value={studentsScore5160}
                                disabled={!this.props.dataToPDFRequest}
                                onChange={this.handleChange}
                            />
                        </Col>
                        <Col xs={6} md={3}>
                            <TextField
                                id="score(61-70)"
                                label="Alumnos calificacion (61-70)"
                                type="score(61-70)"
                                name="score(61-70)"
                                autoComplete="score(61-70)"
                                margin="normal"
                                variant="outlined"
                                value={studentsScore6170}
                                disabled={!this.props.dataToPDFRequest}
                                onChange={this.handleChange}
                            />
                        </Col>
                        <Col xs={6} md={3}>
                            <TextField
                                id="score(71-80)"
                                label="Alumnos calificacion (71-80)"
                                type="score(71-80)"
                                name="score(71-80)"
                                autoComplete="score(71-80)"
                                margin="normal"
                                variant="outlined"
                                value={studentsScore7180}
                                disabled={!this.props.dataToPDFRequest}
                                onChange={this.handleChange}
                            />
                        </Col>
                        <Col xs={6} md={3}>
                            <TextField
                                id="score(81-90)"
                                label="Alumnos calificacion (81-90)"
                                type="score(81-90)"
                                name="score(81-90)"
                                autoComplete="score(81-90)"
                                margin="normal"
                                variant="outlined"
                                value={studentsScore8190}
                                disabled={!this.props.dataToPDFRequest}
                                onChange={this.handleChange}
                            />
                        </Col>
                    </Row>
                    <Row center="xs">
                        <Col xs={6} md={3}>
                            <TextField
                                id="score(91-100)"
                                label="Alumnos calificacion (91-100)"
                                type="score(91-100)"
                                name="score(91-100)"
                                autoComplete="score(91-100)"
                                margin="normal"
                                variant="outlined"
                                value={studentsScore91100}
                                disabled={!this.props.dataToPDFRequest}
                                onChange={this.handleChange}
                            />
                        </Col>
                        <Col xs={6} md={3}>
                            <TextField
                                id="studentsAbsences"
                                label="Faltas de alumnos"
                                type="studentsAbsences"
                                name="studentsAbsences"
                                autoComplete="studentsAbsences"
                                margin="normal"
                                variant="outlined"
                                value={studentsAbseces}
                                disabled={!this.props.dataToPDFRequest}
                                onChange={this.handleChange}
                            />
                        </Col>
                        <Col xs={6} md={3}>
                            <TextField
                                id="studentsDropout"
                                label="Alumnos que desertaron"
                                type="studentsDropout"
                                name="studentsDropout"
                                autoComplete="studentsDropout"
                                margin="normal"
                                variant="outlined"
                                value={studentsDropOut}
                                disabled={!this.props.dataToPDFRequest}
                                onChange={this.handleChange}
                            />
                        </Col>
                        <Col xs={6} md={3}>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Button variant="contained" color="secondary" onClick={this.candidatesPDF}>
                                Secondary
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Grid>
        );
    }
}

export default FormToPDF;