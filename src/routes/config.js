
export default {
    menus: [    // 菜单相关路由
        {
            key: '/app/dashboard', title: '首页', icon: 'home', component: 'Dashboard'
        },
        {
            key: '/app/report', title: '归一报告', icon: 'database',
            subs: [
                { key: '/app/report/all', title: '整体概览', component: 'AllReport'},
                { key: '/app/report/core', title: '重点概览', component: 'Icons'},
                { key: '/app/report/hospital', title: '医院报告', component: 'AllReportTable'},
            ]
        },
        {
            key: '/app/ui', title: '实时查询', icon: 'cloud',
            subs: [
                { key: '/app/ui/buttons', title: '归一接口', component: 'Buttons'},
                { key: '/app/ui/icons', title: '归一case', component: 'Icons'},
                { key: '/app/ui/spins', title: '数据查询', component: 'AsynchronousTable'},
            ],
        },
        {
            key: '/app/animation', title: '标注任务', icon: 'rocket',
            subs: [
                { key: '/app/table/advancedTable', title: '高级表格', component: 'AdvancedTable'},
                { key: '/app/table/searchTable', title: '搜索表格', component: 'SearchTable'},
                { key: '/app/table/SortTable', title: '排序表格', component: 'SortTable'},
            ]
        },
        {
            key: '/app/table', title: '公共服务', icon: 'copy',
            subs: [
                { key: '/app/table/basicTable', title: 'PP', component: 'BasicTable'},
                { key: '/app/table/advancedTable', title: '文件共享', component: 'AdvancedTable'},
                { key: '/app/table/searchTable', title: '异步表格', component: 'SearchTable'},
            ],
        },
        {
            key: '/app/auth', title: '权限管理', icon: 'safety',
            subs: [
                { key: '/app/auth/basic', title: '基础演示', component: 'AuthBasic' },
                { key: '/app/auth/routerEnter', title: '路由拦截', component: 'RouterEnter', auth: 'auth/testPage' },
            ],
        },
    ],
    others: []  // 非菜单相关路由
}