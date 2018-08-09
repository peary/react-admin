/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Table, Card, Form, Input, Tooltip, Icon, Cascader, Select, Radio, Checkbox, Button } from 'antd';
import { axiosRequest, axiosStar } from '../../axios/index';
import BreadcrumbCustom from '../BreadcrumbCustom';
import HospitalSelect from '../select/HospitalSelect'

const Option = Select.Option;
const RadioGroup = Radio.Group;
const FormItem = Form.Item;


class PPCreateForm extends React.Component {
    state = {
        loading: false,
        data: [],
        uri: '/api/pp/list',
        method: 'GET',
        payload: {
        },
        columns: [
            { dataIndex: 'pp_id', key: 'pp_id', title: 'ID', width: 80 },
            { dataIndex: 'pp_name', key: 'pp_name', title: 'pp版本', width: 180  },
            { dataIndex: 'hospital_name', key: 'hospital_name', title: '医院名称', width: 140 },
            { dataIndex: 'schema_name', key: 'schema_name', title: 'schema版本', width: 180 },
            { dataIndex: 'pp_owner', key: 'pp_owner', title: '创建人', width: 80 },
            { dataIndex: 'pp_status', key: 'pp_status', title: 'PP状态', width: 80 },
            { dataIndex: 'pp_tag', key: 'pp_tag', title: 'pp标签', width: 100 },
            { dataIndex: 'is_release', key: 'is_release', title: '是否发布', width: 60 },
            { dataIndex: 'is_latest', key: 'is_latest', title: '是否现场', width: 60 },
            { dataIndex: 'call_time', key: 'call_time', title: '开始时间', width: 150 },
            { dataIndex: 'result_time', key: 'result_time', title: '结束时间', width: 150 },
            { dataIndex: 'pp_costtime', key: 'pp_costtime', title: 'PP耗时', width: 80 },
            { dataIndex: 'deming_status', key: 'deming_status', title: '戴明状态', width: 80 },
            { dataIndex: 'deming_costtime', key: 'deming_costtime', title: '戴明耗时', width: 80 },
            { dataIndex: 'norm_code', key: 'norm_code', title: '归一版本', width: 150 },
            { dataIndex: 'struct_code', key: 'struct_code', title: '结构化版本', width: 150 }
        ],
        sortedInfo: null,
        filtersInfo: null,
        paginationInfo: null
    };
    componentDidMount() {
        this.start();
    }
    start() {
        this.setState({ loading: true });
        axiosStar(this.state.uri, this.state.method, this.state.payload).then(res => {
            this.setState({
                data: res.data.body,
                loading: false
            });
        });
    };
    handleSubmit() {

    };
    render() {

        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="公共服务" second="PP" />
                <Card>
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem>
                            <label className="ant-col-1" htmlFor="hospitalSelect">医院名称：</label>
                            <div className="ant-col-12">
                                <HospitalSelect />
                            </div>
                        </FormItem>

                        <FormItem>
                            <label className="ant-col-1" htmlFor="certNo1">版本信息：</label>
                            <div className="ant-col-18">
                                <div className="ant-input-group">
                                    <div className="ant-col-3">
                                        <Input placeholder="norm_code" />
                                    </div>
                                    <div className="ant-col-3">
                                        <Input placeholder="norm_dict" />
                                    </div>
                                    <div className="ant-col-3">
                                        <Input placeholder="struct_code" />
                                    </div>
                                    <div className="ant-col-3">
                                        <Input placeholder="struct_dict" />
                                    </div>
                                    <div className="ant-col-3">
                                        <Input placeholder="pp_code" />
                                    </div>
                                    <div className="ant-col-3">
                                        <Input placeholder="common_code" />
                                    </div>
                                </div>
                            </div>
                        </FormItem>
                        <FormItem>
                            <label className="ant-col-1" htmlFor="certNo1">schema列表：</label>
                            <Input
                                placeholder="schema列表，一行一个"
                                type={'textarea'}
                                autosize={{
                                    'minRows': 5,
                                    'maxRows': 20
                                }}
                            />
                            <div className="ant-col-12">

                            </div>
                        </FormItem>
                        <FormItem>
                            <input type="submit" className="ant-btn ant-btn-primary" value="登 录" />
                        </FormItem>
                    </Form>
                </Card>
                <Table
                    columns={this.state.columns}
                    dataSource={this.state.data}
                    scroll={{ x: 1800 }}
                    bordered={true}
                    pagination={{
                        pageSize: 10,
                        showSizeChanger: true,
                        pageSizeOptions: ['10', '30', '100']
                    }}
                />
            </div>
        );
    }
}

export default PPCreateForm;
