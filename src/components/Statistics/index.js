import React, {Component} from 'react';
import ReactChartkick, { ColumnChart, PieChart } from 'react-chartkick';
import { Grid, Row, Col} from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { getStatisticsData } from '../../actions';
import SelectContainer from '../Util/SelectContainer';
import Chart from 'chart.js'
import NavBar from '../Util/NavBar';
import '../../styles/StatisticsStyle.css';

class Statistics extends Component {
    
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(obj){
        console.log(obj);
        this.props.getStatisticsInfo(obj);
    }

    render(){
        const { approved, notApproved, men, women, firstP, secondP, thirdP } = this.props.statisticsInfo;
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
                                <PieChart width="240px" height="240px" colors={["#097800", "#D10000"]} data={[["Aprobados", approved], ["Reprobados", notApproved]]}/>
                                <PieChart width="240px" height="240px" colors={["#0082D1", "#FF9436"]} data={[["Hombres", men], ["Mujeres", women]]}/>
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row center="md">
                                <ColumnChart max={max} data={[["Aprobados", approved], ["Reprobados", notApproved], ["H Reprobados", men], ["M Reprobados", women]]} width={400}/> 
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={4}>
                            <Row center="md">
                                <h3>Primer Parcial</h3>
                            </Row>
                            <Row center="md">
                                <PieChart width="190px" height="190px" colors={["#097800", "#D10000"]} data={[["Aprobados", firstP.approved], ["Reprobados", firstP.notApproved]]}/>
                                <PieChart width="190px" height="190px" colors={["#0082D1", "#FF9436"]} data={[["Hombres", firstP.man], ["Mujeres", firstP.women]]}/>
                            </Row>
                        </Col>
                        <Col xs={12} md={4}>
                            <Row center="md">
                                <h3>Segundo Parcial</h3>
                            </Row>
                            <Row center="md">
                                <PieChart width="190px" height="190px" colors={["#097800", "#D10000"]} data={[["Aprobados", secondP.approved], ["Reprobados", secondP.notApproved]]}/>
                                <PieChart width="190px" height="190px" colors={["#0082D1", "#FF9436"]} data={[["Hombres", secondP.man], ["Mujeres", secondP.women]]}/>
                            </Row>
                        </Col>
                        <Col xs={12} md={4}>
                            <Row center="md">
                                <h3>Tercer Parcial</h3>
                            </Row>
                            <Row center="md">
                                <PieChart width="190px" height="190px" colors={["#097800", "#D10000"]} data={[["Aprobados", thirdP.approved], ["Reprobados", thirdP.notApproved]]}/>
                                <PieChart width="190px" height="190px" colors={["#0082D1", "#FF9436"]} data={[["Hombres", thirdP.man], ["Mujeres", thirdP.women]]}/>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    getStatisticsInfo: value => dispatch(getStatisticsData(value))
});

const mapStateToProps = state => ({
    statisticsInfo: state.dataStatistics
});

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
ReactChartkick.addAdapter(Chart);