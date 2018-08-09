
import React from 'react';
import { Table, Card, Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
import { axiosRequest, axiosStar } from '../../axios/index';

const Option = Select.Option;

class HospitalSelect extends React.Component {
    state = {
        width: 600,
        children: [],
        selected: '',
        uri: '/api/hospital/list',
        method: 'GET',
        payload: {
        }
    };
    handleChange(value) {
        console.log('selected ' + value);
    }
    componentDidMount() {
        this.start();
    }
    start() {
        this.setState({ loading: true });
        axiosStar(this.state.uri, this.state.method, this.state.payload).then(res => {
            let children = [];
            // children.push(<Option key={''}>{'请选择医院...'}</Option>);
            for (let i=0; i<res.data.length; i++) {
                children.push(<Option key={res.data[i].hospital_code}>{res.data[i].hospital_code}_{res.data[i].hospital_name}</Option>)
            }
            this.setState({
                children: children
            });
        });
    };
    render() {
        return (
            <Select
                mode={'multiple'}
                placeholder={'请选择医院...'}
                style={{width: this.state.width}}
                defaultValue={[]}
                onChange={this.handleChange}>
                {this.state.children}
            </Select>
        );
    }
}

export default HospitalSelect;
