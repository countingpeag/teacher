import React, {Component} from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

class SelectComponent extends Component{
    constructor(){
        super();
        this.state = {
            value:''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const { value } = event.target;
        this.setState({value});
    }

    render(){
        const { value } = this.state;
        const {name, options} = this.props;
        let keyValue = 0;
        return (
            <FormControl className="formComtrol">
                <InputLabel>{name}</InputLabel>
                <Select value={value} onChange={this.handleChange}>
                    <MenuItem value=''>
                        <em>None</em>
                    </MenuItem>
                    {
                        options.map( option => {
                            keyValue+=10;
                            return <MenuItem key={keyValue} value={keyValue}>{option}</MenuItem>;
                        })
                    }
                </Select>
            </FormControl>
        );
    }
}

export default SelectComponent;