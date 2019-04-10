import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import '../../styles/HomeStyle.css';

const styles = theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class Cards extends React.Component {
  render() {

    //data variable is the data which was send by the index.js file when the component is called
    const { data, classes } = this.props;
    return (
      
        <Card className="card">
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                {data.administrator.adminName[0]+data.administrator.adminLastNameFather[0]}
              </Avatar>
            }
            title={data.administrator.adminName+" "+data.administrator.adminLastNameFather+" "+data.administrator.adminLastNameMother}
            subheader={  new Date(data.date).getDate() + "/" + (new Date(data.date).getMonth()+1) +  "/" + new Date(data.date).getFullYear() 
                      + " " + new Date(data.date).getHours() + ":" + new Date(data.date).getMinutes() + ":" + new Date(data.date).getSeconds()}
            
          />

          { data.image.length>0
            ? <CardMedia
              className={classes.media}
              /*image={require("../../images/test1.jpeg")}*/
              image={data.image}
              title="Love"
              />
            :  null
          }

          <CardContent>
              <Typography component="p">
                {data.newContent}
              </Typography>
            </CardContent>
        </Card>
      
    );
  }
}

Cards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cards);