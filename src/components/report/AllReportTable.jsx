/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Table, Button, Row, Col, Card } from 'antd';
import { getPros, axiosPost, axiosGET, axiosRequest, axiosStar } from '../../axios';
import BreadcrumbCustom from '../BreadcrumbCustom';

class AllReportTable extends React.Component {
    state = {
        loading: false,
        data: [],
        columns: [{
            title: '项目名',
            dataIndex: 'username',
            width: 100,
            render: (text, record) => <a href={record.url} target="_blank">{text}</a>
        }, {
            title: '语言',
            dataIndex: 'lang',
            width: 80
        }, {
            title: 'star',
            dataIndex: 'starCount',
            width: 80
        }, {
            title: '描述',
            dataIndex: 'description',
            width: 200
        }],
        uri: 'http://api.xitu.io/resources/github',
        method: 'POST',
        payload: {
            category: "trending",
            period: "day",
            lang: "javascript",
            offset: 0,
            limit: 30
        },

        uri_star: 'http://star.dev.yiducloud.cn/api/pp/list',
        method_star: 'GET',
        payload_star: {
        }
    };
    componentDidMount() {
        this.start();
    }
    start = () => {
        this.setState({ loading: true });
        // axiosRequest(this.state.uri, this.state.method, this.state.payload).then(res => {
        //     this.setState({
        //         data: [...res.data.map(val => {
        //             val.key = val.id;
        //             return val;
        //         })],
        //         loading: false
        //     });
        // });
        axiosStar(this.state.uri_star, this.state.method_star, this.state.payload_star).then(res => {
            this.setState({
                data: res.data,
                columns: res.columns,
                loading: false
            });
        });
    };
    render() {
        return (
            <div className="gutter-example">
                <Table columns={this.state.columns} dataSource={this.state.data}/>
            </div>
        );
    }
}

export default AllReportTable;