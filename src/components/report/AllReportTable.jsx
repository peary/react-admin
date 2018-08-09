/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Table, Card } from 'antd';
import { axiosRequest, axiosStar } from '../../axios';
import HospitalSelect from '../select/HospitalSelect';
import BreadcrumbCustom from '../BreadcrumbCustom';

class AllReportTable extends React.Component {
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
    start = () => {
        this.setState({ loading: true });
        axiosStar(this.state.uri, this.state.method, this.state.payload).then(res => {
            this.setState({
                data: res.data.body,
                loading: false
            });
        });
    };
    render() {
        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="归一报告" second="整体概览" />
                <Card>
                    <div>
                        <HospitalSelect
                            width={600}
                        />
                    </div>
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

export default AllReportTable;
