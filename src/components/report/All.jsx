/**
 * Created by hao.cheng on 2017/4/25.
 */
import React, { Component } from 'react';
import { Row, Card, Tabs, Radio } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import AsynchronousTable from '../tables/AsynchronousTable'
import FixedTable from '../tables/FixedTable'
const TabPane = Tabs.TabPane;

class AllReport extends Component {
    constructor(props) {
        super(props);
        const panes = [
        ];
        this.state = {
            panes,
            mode: 'top'
        };
    }
    callback = (key) => {
        console.log(key);
    };
    onChange = (activeKey) => {
        this.setState({ activeKey });
        alert(activeKey);
    };
    render() {
        const { mode } = this.state;
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom first="归一报告" second="整体概览" />

                <Tabs
                    defaultActiveKey="all"
                    tabPosition={mode}
                    style={{height: 150}}
                    onChange={this.onChange}
                >
                    <TabPane tab="总计" key="all"><FixedTable></FixedTable></TabPane>
                    <TabPane tab="诊断ICD10" key="diag_record2icd10"><FixedTable></FixedTable></TabPane>
                    <TabPane tab="药品名称" key="drug_name">Content of tab 2</TabPane>
                    <TabPane tab="物理检查" key="exam_item">Content of tab 3</TabPane>
                    <TabPane tab="实验室检验" key="lab_item">Content of tab 4</TabPane>
                    <TabPane tab="手术名称" key="operation_name">Content of tab 5</TabPane>
                    <TabPane tab="诊断MESH" key="diag_record2mesh">Content of tab 6</TabPane>
                    <TabPane tab="给药途径" key="drug_use_route">Content of tab 7</TabPane>
                    <TabPane tab="用药频率" key="drug_use_freq">Content of tab 8</TabPane>
                </Tabs>
            </div>
        )
    }
}

export default AllReport;