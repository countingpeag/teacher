import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { getN } from '../../actions';
import Cards from './Card';
import NavBar from '../Util/NavBar';

import '../../styles/HomeStyle.css';

class News extends Component {
    constructor(){
        super();

        this.state={
            news:[],
            count:0,
        }    
    } 

    componentDidMount(){
        this.props.getNews(true);
    }   
      
    componentWillReceiveProps(props){
        this.setState({news:props.News});
    }

    render() {
        this.state.news.sort((a,b)=>a.priority-b.priority);
        return (
            <div>
                <NavBar />
                <Grid>
                    <Row start="xs" className="newsContent" >
                        {
                        this.state.news.map(item => (
                            <Col xs={12} lg={6} key={item.idNew}>
                                <Row center="xs">
                                    <Col>
                                        <Cards data={item}/>
                                    </Col>
                                </Row>
                            </Col>
                        ))
                        }
                    </Row>
                </Grid>

            </div>
        );
    }
}

const mapDispatchToProps = dispatch => (
    {
        getNews: value => dispatch(getN(value))
    }
);

const mapStateToProps = state => (
    {
        News: state.getNews,
        addedNews: state.saveNews
    }
);
    
export default connect(mapStateToProps, mapDispatchToProps)(News);