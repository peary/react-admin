
import React from 'react';
import { Table, Button, Row, Col, Card } from 'antd';
import {getPros} from '../../axios';
import axios from "axios/index";


class ReportTable extends React.Component {
    state = {
        selectedRowKeys: [],  // Check here to configure the default column
        loading: false,
        data: [],
        uri: '/',
        method: 'GET',
        payload: {},
        columns: []
    };
    componentDidMount() {
        this.start();
    }
    start = () => {
        this.setState({
            loading: true
        });
        getPros().then(res => {
            this.setState({
                data: [...res.data.map(val => {
                    val.key = val.id;
                    return val;
                })],
                loading: false
            });
        });
        // axiosPost(this.state.uri, this.state.payload).then(res => {
        //     this.setState({
        //         data: [...res.data.map(val => {
        //             val.key = val.id;
        //             return val;
        //         })],
        //         loading: false
        //     });
        // });
    };
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };
    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <Table rowSelection={rowSelection} columns={this.state.columns} dataSource={this.state.data} />
        );
    }
}

export default ReportTable;