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
        const { handleChange, dataToPDFRequest, data} = this.props;
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
                                scrollable
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
                        {value === 0 && <Fields handleChange={handleChange} data={data}  title={"Primer Partial"} dataToPDFRequest={dataToPDFRequest}/>}
                        {value === 1 && <Fields handleChange={handleChange} data={data}  title={"Segundo Partial"} dataToPDFRequest={dataToPDFRequest}/>}
                        {value === 2 && <Fields handleChange={handleChange} data={data}  title={"Tercer Partial"} dataToPDFRequest={dataToPDFRequest}/>}
                        {value === 3 && <Fields handleChange={handleChange} data={data}  title={"Final"} dataToPDFRequest={dataToPDFRequest}/>}
                        </Row>
                    </Col>
                </Row>
            </Grid>
        </div>
        );
    }
}

export default FieldsTab;