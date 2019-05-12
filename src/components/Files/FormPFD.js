import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import jsPDF from 'jspdf';
import FileSelectsContainer from '../Util/FileSelectsContainer';
import Button from '@material-ui/core/Button';
import FieldsTab from './FieldsTab';
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
        this.candidatesPDF = this.candidatesPDF.bind(this);
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
        const { registeredStudents, approvedStudents, failedStudents, studentsScore050, studentsScore5160,
            studentsScore6170, studentsScore7180, studentsScore8190, studentsScore91100, studentsDropOut,
            studentsAbseces } = this.state;

        const columns = [
            {title: "Indicador", dataKey: "indicator"},
            {title: "Parcial 1", dataKey: "partial1"},
            {title: "Parcial 2", dataKey: "partial2"},
            {title: "Parcial 3", dataKey: "partial3"},
            {title: "Final", dataKey: "final"}
        ];

        const rows = [
            {"indicator": "Alumnos Inscritos", "partial1":registeredStudents, "partial2":0, "partial3":0, "final":0},
            {"indicator": "Alumnos Aprobados", "partial1":approvedStudents, "partial2":0, "partial3":0, "final":0},
            {"indicator": "Alumnos Reprobados", "partial1":failedStudents, "partial2":0, "partial3":0, "final":0},
            {"indicator": "Alumnos con Calificaion (0-50)", "partial1":studentsScore050, "partial2":0, "partial3":0, "final":0},
            {"indicator": "Alumnos con Calificaion (51-60)", "partial1":studentsScore5160, "partial2":0, "partial3":0, "final":0},
            {"indicator": "Alumnos con Calificaion (61-70)", "partial1":studentsScore6170, "partial2":0, "partial3":0, "final":0},
            {"indicator": "Alumnos con Calificaion (71-80)", "partial1":studentsScore7180, "partial2":0, "partial3":0, "final":0},
            {"indicator": "Alumnos con Calificaion (81-90)", "partial1":studentsScore8190, "partial2":0, "partial3":0, "final":0},
            {"indicator": "Alumnos con Calificaion (91-100)", "partial1":studentsScore91100, "partial2":0, "partial3":0, "final":0},
            {"indicator": "Total de Faltas acomuladas", "partial1":studentsDropOut, "partial2":0, "partial3":0, "final":0},
            {"indicator": "Alumnos Desertores", "partial1":studentsAbseces, "partial2":0, "partial3":0, "final":0},
        ];

        var doc = new jsPDF();

        doc.setFontSize(20);
        doc.text("Registro de indicadores de logro académico", 36, 30);
        doc.setFontSize(15);
        doc.text("Materia/Asignatura: Español", 14, 50);
        doc.text("Fecha: 10/05/2019", 151, 50);
        doc.text("Nombre del Docente: Erick Omar Palma Nuñez", 14, 60);

        doc.autoTable(columns, rows, {
            styles: {fillColor: [164, 164, 164]},
                columnStyles: {
                id: {fillColor: 255}
            },
            margin: {top: 70}
        });
        

        doc.save('Reporte.pdf');
    }

    componentWillReceiveProps(props){
        this.setState(props.data);
    }

    render(){
        return(
            <Grid className="square">
                <Col xs={12}>
                    <Row center="xs">
                        <Col>
                            <FileSelectsContainer submitAction={this.props.handleSubmit}/>
                        </Col>
                    </Row>
                    <Row center="xs">
                        <Col>
                            <FieldsTab handleChange={this.handleChange} data={this.state} dataToPDFRequest={this.props.dataToPDFRequest}/>
                        </Col>
                    </Row>
                    <Row center="xs">
                        <Col xs={12} md={3}>
                            <Button variant="contained" color="secondary" onClick={this.candidatesPDF}>
                                Reporte PDF
                            </Button>
                        </Col>
                        <Col xs={12} md={3}>
                        </Col>
                        <Col xs={12} md={3}>
                        </Col>
                        <Col xs={12} md={3}>
                        </Col>
                    </Row>
                </Col>
            </Grid>
        );
    }
}

export default FormToPDF;