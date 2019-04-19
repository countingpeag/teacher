import React, { Component } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Button from '@material-ui/core/Button';

class FormToPDF extends Component{

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

    render(){
        return(
            <Button variant="contained" color="secondary" onClick={this.candidatesPDF}>
                Secondary
            </Button>
        );
    }
}

export default FormToPDF;