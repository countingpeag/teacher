import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from '@material-ui/core/TextField';

class Fields extends Component {
    render(){
        const { registeredStudents, approvedStudents, failedStudents, studentsScore050, studentsScore5160,
            studentsScore6170, studentsScore7180, studentsScore8190, studentsScore91100, studentsDropOut,
            studentsAbseces} = this.props.data;
        const { handleChange, dataToPDFRequest } = this.props;
        return(
            <Grid>
                <Col xs={12}>
                    <Row center="xs">
                        <Col xs={12}>
                            <h2>{this.props.title}</h2>
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
                                disabled={!dataToPDFRequest}
                                onChange={handleChange}
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
                                disabled={!dataToPDFRequest}
                                onChange={handleChange}
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
                                disabled={!dataToPDFRequest}
                                onChange={handleChange}
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
                                disabled={!dataToPDFRequest}
                                onChange={handleChange}
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
                                disabled={!dataToPDFRequest}
                                onChange={handleChange}
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
                                disabled={!dataToPDFRequest}
                                onChange={handleChange}
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
                                disabled={!dataToPDFRequest}
                                onChange={handleChange}
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
                                disabled={!dataToPDFRequest}
                                onChange={handleChange}
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
                                disabled={!dataToPDFRequest}
                                onChange={handleChange}
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
                                disabled={!dataToPDFRequest}
                                onChange={handleChange}
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
                                disabled={!dataToPDFRequest}
                                onChange={handleChange}
                            />
                        </Col>
                        <Col xs={6} md={3}>
                        </Col>
                    </Row>
                </Col>
            </Grid>
        );
    }
} 

export default Fields;