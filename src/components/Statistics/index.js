import React, {Component} from 'react';
import ReactChartkick, { ColumnChart, PieChart } from 'react-chartkick';
import { Grid, Row, Col} from 'react-flexbox-grid';
import SelectContainer from '../Util/SelectContainer';
import Chart from 'chart.js'
import NavBar from '../Util/NavBar';
import '../../styles/StatisticsStyle.css';

class Statistics extends Component {
    

    handleSubmit(obj){
        console.log(obj);
    }

    render(){
        let max = 0;
        return(
            <div>
                <NavBar />
                <Grid className="square">
                    <Row>
                        <SelectContainer submitAction={this.handleSubmit}/>
                    </Row>
                    <Row className="charts">
                        <Col xs={12} md={6}>
                            <Row center="md">
                                <PieChart width="240px" height="240px" colors={["#097800", "#D10000"]} data={[["Aprobados", 10], ["Reprobados", 10]]}/>
                                <PieChart width="240px" height="240px" colors={["#0082D1", "#FF9436"]} data={[["Hombres", 10], ["Mujeres", 10]]}/>
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row center="md">
                                <ColumnChart max={max} data={[["Aprobados", 10], ["Reprobados", 10], ["H Reprobados", 10], ["M Reprobados", 10]]} width={400}/> 
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={4}>
                            <Row center="md">
                                <h3>Primer Parcial</h3>
                            </Row>
                            <Row center="md">
                                <PieChart width="190px" height="190px" colors={["#097800", "#D10000"]} data={[["Aprobados", 10], ["Reprobados", 10]]}/>
                                <PieChart width="190px" height="190px" colors={["#0082D1", "#FF9436"]} data={[["Hombres", 10], ["Mujeres", 10]]}/>
                            </Row>
                        </Col>
                        <Col xs={12} md={4}>
                            <Row center="md">
                                <h3>Segundo Parcial</h3>
                            </Row>
                            <Row center="md">
                                <PieChart width="190px" height="190px" colors={["#097800", "#D10000"]} data={[["Aprobados", 10], ["Reprobados", 10]]}/>
                                <PieChart width="190px" height="190px" colors={["#0082D1", "#FF9436"]} data={[["Hombres", 10], ["Mujeres", 10]]}/>
                            </Row>
                        </Col>
                        <Col xs={12} md={4}>
                            <Row center="md">
                                <h3>Tercer Parcial</h3>
                            </Row>
                            <Row center="md">
                                <PieChart width="190px" height="190px" colors={["#097800", "#D10000"]} data={[["Aprobados", 10], ["Reprobados", 10]]}/>
                                <PieChart width="190px" height="190px" colors={["#0082D1", "#FF9436"]} data={[["Hombres", 10], ["Mujeres", 10]]}/>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Statistics;
ReactChartkick.addAdapter(Chart);