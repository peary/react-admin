/**
 * Created by hao.cheng on 2017/4/25.
 */
import React, { Component } from 'react';
import { Row, Card, Tabs, Radio } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
const TabPane = Tabs.TabPane;

class AllReport extends Component {
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        const panes = [
            { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
            { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
        ];
        this.state = {
            activeKey: panes[0].key,
            panes,
            mode: 'top'
        };
    }
    callback = (key) => {
        console.log(key);
    };
    handleModeChange = (e) => {
        const mode = e.target.value;
        this.setState({ mode });
    };
    onChange = (activeKey) => {
        this.setState({ activeKey });
    };
    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };
    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
        this.setState({ panes, activeKey });
    };
    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
    };
    render() {
        const { mode } = this.state;
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom first="UI" second="标签页" />
                <Row gutter={16}>

                    <div className="gutter-box">
                        <Card title="带滚动" bordered={false}>
                            <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
                                <Radio.Button value="top">Horizontal</Radio.Button>
                                <Radio.Button value="left">Vertical</Radio.Button>
                            </Radio.Group>
                            <Tabs
                                defaultActiveKey="1"
                                tabPosition={mode}
                                style={{height: 150}}
                            >
                                <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
                                <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
                                <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
                                <TabPane tab="Tab 4" key="4">Content of tab 4</TabPane>
                                <TabPane tab="Tab 5" key="5">Content of tab 5</TabPane>
                                <TabPane tab="Tab 6" key="6">Content of tab 6</TabPane>
                                <TabPane tab="Tab 7" key="7">Content of tab 7</TabPane>
                                <TabPane tab="Tab 8" key="8">Content of tab 8</TabPane>
                                <TabPane tab="Tab 9" key="9">Content of tab 9</TabPane>
                            </Tabs>
                        </Card>
                    </div>

                </Row>
            </div>
        )
    }
}

export default AllReport;