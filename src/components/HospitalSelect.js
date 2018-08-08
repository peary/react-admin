
import React from 'react';
import { Table, Card, Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
import { axiosRequest, axiosStar } from '../axios';
import BreadcrumbCustom from './BreadcrumbCustom';

const Option = Select.Option;

class HospitalSelect extends React.Component {
    state = {
        children: [],
        uri: '/api/hospital/list',
        method: 'GET',
        payload: {
        }
    };
    componentDidMount() {
        this.start();
    }
    start() {
        this.setState({ loading: true });
        axiosStar(this.state.uri, this.state.method, this.state.payload).then(res => {
            let children = [];
            for (let i=0; i<res.length; i++) {
                children.push(<Option key={res[i].hospital_code}>{res[i].hospital_name}</Option>)
            }
            this.setState({
                children: children
            });
        });
    };
    handleChange() {
        console.log('selected ' );
    }
    render() {
        return (
            <Select multiple
                    style={{width: 400}}
                    defaultValue={['123', '234']} onChange={this.handleChange}>
                {this.state.children}
            </Select>
        );
    }
}

export default HospitalSelect;
