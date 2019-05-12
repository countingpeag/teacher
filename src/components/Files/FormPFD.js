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
            approvedStudentsP1: '', 
            failedStudentsP1: '', 
            studentsScore050P1: '',
            studentsScore5160P1: '',
            studentsScore6170P1: '',
            studentsScore7180P1: '',
            studentsScore8190P1: '', 
            studentsScore91100P1: '', 
            studentsDropOutP1: '',
            studentsAbsecesP1: '',

            approvedStudentsP2: '', 
            failedStudentsP2: '', 
            studentsScore050P2: '',
            studentsScore5160P2: '',
            studentsScore6170P2: '',
            studentsScore7180P2: '',
            studentsScore8190P2: '', 
            studentsScore91100P2: '', 
            studentsDropOutP2: '',
            studentsAbsecesP2: '',

            approvedStudentsP3: '', 
            failedStudentsP3: '', 
            studentsScore050P3: '',
            studentsScore5160P3: '',
            studentsScore6170P3: '',
            studentsScore7180P3: '',
            studentsScore8190P3: '', 
            studentsScore91100P3: '', 
            studentsDropOutP3: '',
            studentsAbsecesP3: '',

            approvedStudentsFL: '', 
            failedStudentsFL: '', 
            studentsScore050FL: '',
            studentsScore5160FL: '',
            studentsScore6170FL: '',
            studentsScore7180FL: '',
            studentsScore8190FL: '', 
            studentsScore91100FL: '', 
            studentsDropOutFL: '',
            studentsAbsecesFL: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.candidatesPDF = this.candidatesPDF.bind(this);
    }

    handleChange(event){
        const { name, value } = event.target;
        if(name==="studentsAmountP1")
            this.setState({registeredStudents:value});
        else if(name==="studentsSuccessP1")
            this.setState({approvedStudentsP1:value});
        else if(name==="studentsFailureP1")
            this.setState({failedStudentsP1:value});
        else if(name==="score(0-50)P1")
            this.setState({studentsScore050P1:value});
        else if(name==="score(51-60)P1")
            this.setState({studentsScore5160P1:value});
        else if(name==="score(61-70)P1")
            this.setState({studentsScore6170P1:value});
        else if(name==="score(71-80)P1")
            this.setState({studentsScore7180P1:value});
        else if(name==="score(81-90)P1")
            this.setState({studentsScore8190P1:value});
        else if(name==="score(91-100)P1")
            this.setState({studentsScore91100P1:value});
        else if(name==="studentsAbsencesP1")
            this.setState({studentsAbsecesP1:value});
        else if(name==="studentsDropoutP1")
            this.setState({studentsDropOutP1:value});
        
        else if(name==="studentsSuccessP2")
            this.setState({approvedStudentsP2:value});
        else if(name==="studentsFailureP2")
            this.setState({failedStudentsP2:value});
        else if(name==="score(0-50)P2")
            this.setState({studentsScore050P2:value});
        else if(name==="score(51-60)P2")
            this.setState({studentsScore5160P2:value});
        else if(name==="score(61-70)P2")
            this.setState({studentsScore6170P2:value});
        else if(name==="score(71-80)P2")
            this.setState({studentsScore7180P2:value});
        else if(name==="score(81-90)P2")
            this.setState({studentsScore8190P2:value});
        else if(name==="score(91-100)P2")
            this.setState({studentsScore91100P2:value});
        else if(name==="studentsAbsencesP2")
            this.setState({studentsAbsecesP2:value});
        else if(name==="studentsDropoutP2")
            this.setState({studentsDropOutP2:value});

        else if(name==="studentsSuccessP3")
            this.setState({approvedStudentsP3:value});
        else if(name==="studentsFailureP3")
            this.setState({failedStudentsP3:value});
        else if(name==="score(0-50)P3")
            this.setState({studentsScore050P3:value});
        else if(name==="score(51-60)P3")
            this.setState({studentsScore5160P3:value});
        else if(name==="score(61-70)P3")
            this.setState({studentsScore6170P3:value});
        else if(name==="score(71-80)P3")
            this.setState({studentsScore7180P3:value});
        else if(name==="score(81-90)P3")
            this.setState({studentsScore8190P3:value});
        else if(name==="score(91-100)P3")
            this.setState({studentsScore91100P3:value});
        else if(name==="studentsAbsencesP3")
            this.setState({studentsAbsecesP3:value});
        else if(name==="studentsDropoutP3")
            this.setState({studentsDropOutP3:value});

        else if(name==="studentsSuccessFL")
            this.setState({approvedStudentsFL:value});
        else if(name==="studentsFailureFL")
            this.setState({failedStudentsFL:value});
        else if(name==="score(0-50)FL")
            this.setState({studentsScore050FL:value});
        else if(name==="score(51-60)FL")
            this.setState({studentsScore5160FL:value});
        else if(name==="score(61-70)FL")
            this.setState({studentsScore6170FL:value});
        else if(name==="score(71-80)FL")
            this.setState({studentsScore7180FL:value});
        else if(name==="score(81-90)FL")
            this.setState({studentsScore8190FL:value});
        else if(name==="score(91-100)FL")
            this.setState({studentsScore91100FL:value});
        else if(name==="studentsAbsencesFL")
            this.setState({studentsAbsecesFL:value});
        else if(name==="studentsDropoutFL")
            this.setState({studentsDropOutFL:value});
    }

    candidatesPDF(){
        const { registeredStudents, approvedStudentsP1, failedStudentsP1, studentsScore050P1, studentsScore5160P1,
            studentsScore6170P1, studentsScore7180P1, studentsScore8190P1, studentsScore91100P1, studentsDropOutP1,
            studentsAbsecesP1, approvedStudentsP2, failedStudentsP2, studentsScore050P2, studentsScore5160P2,
            studentsScore6170P2, studentsScore7180P2, studentsScore8190P2, studentsScore91100P2, studentsDropOutP2,
            studentsAbsecesP2, approvedStudentsP3, failedStudentsP3, studentsScore050P3, studentsScore5160P3,
            studentsScore6170P3, studentsScore7180P3, studentsScore8190P3, studentsScore91100P3, studentsDropOutP3,
            studentsAbsecesP3, approvedStudentsFL, failedStudentsFL, studentsScore050FL, studentsScore5160FL,
            studentsScore6170FL, studentsScore7180FL, studentsScore8190FL, studentsScore91100FL, studentsDropOutFL,
            studentsAbsecesFL } = this.state;

        const columns = [
            {title: "Indicador", dataKey: "indicator"},
            {title: "Parcial 1", dataKey: "partial1"},
            {title: "Parcial 2", dataKey: "partial2"},
            {title: "Parcial 3", dataKey: "partial3"},
            {title: "Final", dataKey: "final"}
        ];

        const rows = [
            {"indicator": "Alumnos Inscritos", "partial1":registeredStudents, "partial2":registeredStudents, "partial3":registeredStudents, "final":registeredStudents},
            {"indicator": "Alumnos Aprobados", "partial1":approvedStudentsP1, "partial2":approvedStudentsP2, "partial3":approvedStudentsP3, "final":approvedStudentsFL},
            {"indicator": "Alumnos Reprobados", "partial1":failedStudentsP1, "partial2":failedStudentsP2, "partial3":failedStudentsP3, "final":failedStudentsFL},
            {"indicator": "Alumnos con Calificaion (0-50)", "partial1":studentsScore050P1, "partial2":studentsScore050P2, "partial3":studentsScore050P3, "final":studentsScore050FL},
            {"indicator": "Alumnos con Calificaion (51-60)", "partial1":studentsScore5160P1, "partial2":studentsScore5160P2, "partial3":studentsScore5160P3, "final":studentsScore5160FL},
            {"indicator": "Alumnos con Calificaion (61-70)", "partial1":studentsScore6170P1, "partial2":studentsScore6170P2, "partial3":studentsScore6170P3, "final":studentsScore6170FL},
            {"indicator": "Alumnos con Calificaion (71-80)", "partial1":studentsScore7180P1, "partial2":studentsScore7180P2, "partial3":studentsScore7180P3, "final":studentsScore7180FL},
            {"indicator": "Alumnos con Calificaion (81-90)", "partial1":studentsScore8190P1, "partial2":studentsScore8190P2, "partial3":studentsScore8190P3, "final":studentsScore8190FL},
            {"indicator": "Alumnos con Calificaion (91-100)", "partial1":studentsScore91100P1, "partial2":studentsScore91100P2, "partial3":studentsScore91100P3, "final":studentsScore91100FL},
            {"indicator": "Total de Faltas acomuladas", "partial1":studentsAbsecesP1, "partial2":studentsAbsecesP2, "partial3":studentsAbsecesP3, "final":studentsAbsecesFL},
            {"indicator": "Alumnos Desertores", "partial1":studentsDropOutP1, "partial2":studentsDropOutP2, "partial3":studentsDropOutP3, "final":studentsDropOutFL},
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