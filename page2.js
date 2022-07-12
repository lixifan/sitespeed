async function setUp(context,commands){
    await commands.navigate(
        'https://our.ones.pro/project/#/auth/login'
    );
    //await commands.addText.bySelector('lixifan@ones.ai','input[placeholder = "请输入你的邮箱"]');
    await commands.addText.bySelector('lixifan@ones.ai','#login > div.login-form-input-container > input');
    //await commands.addText.bySelector('Zxcvb54213','input[placeholder = "请输入你的密码"]');
    await commands.addText.bySelector('Zxcvb54213','#login > div.login-form-input-container > div.new-password-input > input');
    await commands.click.bySelectorAndWait('button[type = "submit"]');
};

async function perfTest(context,commands){
    try {
        //项目概览
        await commands.click.byXpathAndWait('/html/body/div[1]/div/div/div/div[2]/div[1]/div/div/div[3]/div[1]/div/ul/a[2]');
        await commands.measure.start('project_dashboard');
        //await commands.click.byJs('document.querySelectorAll(".project-name-cell-content")[3]');
        await commands.js.run(`const elements = document.querySelectorAll(".project-name-cell-content");
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].innerHTML.includes('性能优化')) {
                return elements[i].click();
            }
        }
        elements[0].click();`);
        await commands.wait.byTime(8000);
        await commands.measure.stop();
        
        //工作项
        await commands.measure.start('issuetype');
        await commands.click.byXpath('//a[@class="url-foldable-tabs-new-link" and @title="Backlog"]');
        await commands.wait.byTime(8000);
        await commands.measure.stop();

        //迭代概览
        await commands.click.byXpathAndWait('//a[@class="url-foldable-tabs-new-link" and @title="迭代"]');
        await commands.measure.start('sprint');
        await commands.click.byXpath('/html/body/div[1]/div/div/div/div[2]/div[2]/div[1]/div/div/div/div/div/div/div/div/div/div[1]/div/div[2]/div[3]/div/div/div[1]/div');
        await commands.wait.byTime(8000);
        await commands.measure.stop();

        //迭代下工作项
        await commands.measure.start('sprint-issuetype');
        await commands.click.byXpath('//div[@class="ones-tabs-item ones-tabs-item--visible" and @title="前端研发任务"]');
        await commands.wait.byTime(8000);
        await commands.measure.stop();

        //敏捷看板
        await commands.measure.start('agilekanban');
        await commands.click.byXpath('//div[@class="ones-tabs-item ones-tabs-item--visible" and @title="敏捷看板"]');
        await commands.wait.byTime(5000);
        await commands.measure.stop();

        //全部工作项
        await commands.click.byXpathAndWait('/html/body/div[1]/div/div/div/div[2]/div[2]/div[1]/div/div/div/div/div/div/div/div/div/div[2]/div/div/div[1]/div[1]/div[3]/div[2]/div/div');
        await commands.measure.start('all-issue');
        await commands.click.byXpath('//a[@class="url-foldable-tabs-new-link" and @title="全部工作项"]');
        await commands.wait.byTime(8000);
        await commands.measure.stop();

        //规划
        await commands.click.byXpathAndWait('/html/body/div[1]/div/div/div/div[2]/div[2]/div[1]/div/div/div/div/div/div/div/div/div/div[2]/div/div/div[1]/div[1]/div[3]/div[2]/div/span');
        await commands.measure.start('plan');
        await commands.click.byXpath('//a[@class="url-foldable-tabs-new-link" and @title="规划"]');
        await commands.wait.byTime(5000);
        await commands.measure.stop();
        
        //文件
        await commands.click.byXpathAndWait('/html/body/div[1]/div/div/div/div[2]/div[2]/div[1]/header/div[2]/div/div[2]/div');
        await commands.measure.start('file');
        await commands.click.byXpath('//a[@class="url-foldable-tabs-new-link" and @title="文件"]');
        await commands.wait.byTime(5000);
        await commands.measure.stop();

        //文档
        await commands.click.byXpathAndWait('/html/body/div[1]/div/div/div/div[2]/div[2]/div[1]/header/div[2]/div/div[2]/div');
        await commands.measure.start('document');
        await commands.click.byXpath('//a[@class="url-foldable-tabs-new-link" and @title="文档"]');
        await commands.wait.byTime(5000);
        await commands.measure.stop();

        //成员
        await commands.click.byXpathAndWait('/html/body/div[1]/div/div/div/div[2]/div[2]/div[1]/header/div[2]/div/div[2]/div');
        await commands.measure.start('role_member');
        await commands.click.byXpath('//a[@class="url-foldable-tabs-new-link" and @title="成员"]');
        await commands.wait.byTime(5000);
        await commands.measure.stop();

        //报表（我创建的）
        await commands.click.byXpathAndWait('/html/body/div[1]/div/div/div/div[2]/div[2]/div[1]/header/div[2]/div/div[2]/div');
        await commands.measure.start('report-createbyme');
        await commands.click.byXpath('//a[@class="url-foldable-tabs-new-link" and @title="报表"]');
        await commands.wait.byTime(5000);
        await commands.measure.stop();

        //报表（所有报表）
        await commands.measure.start('report-all');
        await commands.click.byXpath('/html/body/div[1]/div/div[1]/div/div[2]/div[2]/div[1]/div/div/div/div/div/div/div/div/div/div/div[1]/div/div[2]/div[2]/ul/li[2]/a');
        await commands.wait.byTime(5000);
        await commands.measure.stop();

        //报表详情
        await commands.measure.start('report-detail');
        await commands.click.byXpath('/html/body/div[1]/div/div[1]/div/div[2]/div[2]/div[1]/div/div/div/div/div/div/div/div/div/div/div[2]/div[2]/div/div/div[1]/div/div[2]/div/div/div[6]/div/div/span');
        await commands.wait.byTime(5000);
        await commands.measure.stop();

        //流水线
        await commands.click.byXpathAndWait('/html/body/div[1]/div/div/div/div[2]/div[2]/div[1]/header/div[2]/div/div[2]/div');
        await commands.measure.start('project-pipeline');
        await commands.click.byXpath('//a[@class="url-foldable-tabs-new-link" and @title="流水线"]');
        await commands.wait.byTime(5000);
        await commands.measure.stop();

        //一级导航
        await commands.click.byXpathAndWait('/html/body/div[1]/div/div/div/div[2]/div[2]/div[1]/header/div[2]/div/div[2]/div');
        await commands.measure.start('primary-navigation');
        await commands.click.byXpath('//a[@class="url-foldable-tabs-new-link" and @title="一级导航"]');
        await commands.wait.byTime(5000);
        await commands.measure.stop();

        //项目组件
        await commands.click.byXpathAndWait('/html/body/div[1]/div/div/div/div[2]/div[2]/div[1]/header/div[2]/div/div[2]/div');
        await commands.measure.start('component-designer');
        await commands.click.byXpath('//a[@class="url-foldable-tabs-new-link" and @title="设置"]');
        await commands.wait.byTime(5000);
        await commands.measure.stop();

        //工作项类型
        await commands.measure.start('issuetype-template');
        await commands.click.byXpath('//a[@data-key="template" and @title="工作项类型"]');
        await commands.wait.byTime(5000);
        await commands.measure.stop();

        //共享页详情
        await commands.click.byXpathAndWait('/html/body/div[1]/div/div[1]/div/div[2]/div[1]/div/div/div[3]/div[1]/div/ul/a[3]');
        await commands.click.byXpath('/html/body/div[1]/div/div/div/div[2]/div[2]/div[1]/header/div[2]/div/div[2]');
        await commands.wait.byTime(20000);
        await commands.measure.start('share-page');
        await commands.click.byXpath('/html/body/div[1]/div/div[1]/div/div[2]/div[2]/div[1]/div/div/div/div[3]/div[1]/div[1]/ul/li/span[2]/span/div/span');
        await commands.wait.byTime(10000);
        await commands.measure.stop();

        //页面组详情
        await commands.click.byXpathAndWait('/html/body/div[2]/div/div/div/div[3]/div/div[2]/header/div[1]/span/span');
        await commands.wait.byTime(2000);
        await commands.measure.start('space-page');
        await commands.click.byXpath('/html/body/div[1]/div/div[1]/div/div[2]/div[2]/div[1]/div/div/div/div/div/div/div[3]/div/div[2]/div[1]/div[1]/div[1]/div[1]/span');
        await commands.wait.byTime(5000);
        await commands.measure.stop();

        //编辑页面
        await commands.click.byXpathAndWait('/html/body/div[2]/div/div/div/div[3]/div/div[2]/header/div[1]');
        await commands.wait.byTime(5000);
        await commands.measure.start('edit-page');
        await commands.click.byXpathAndWait('/html/body/div[2]/div/div/div/div[3]/div/div[3]/div[1]/div[2]/div/div[1]/div/div[1]/div[2]/div');
        await commands.measure.stop();

        //用例库详情页
        await commands.click.byXpathAndWait('/html/body/div[2]/div/div/div/div[3]/div/div[2]/header/div[1]/span/span');
        await commands.click.byXpathAndWait('/html/body/div[1]/div/div/div/div[2]/div[1]/div/div[1]/div[3]/div[1]/div/ul/a[5]');
        await commands.click.byXpathAndWait('/html/body/div[1]/div/div/div/div[2]/div[2]/div[1]/header/div[2]/div/div[1]/a[2]/div');
        await commands.measure.start('testlib-detail');
        await commands.click.byXpath('/html/body/div[1]/div/div[1]/div/div[2]/div[2]/div[1]/div/div/div/div/div/div[3]/div/div[1]/div/div/div[1]/div/div[2]');
        await commands.wait.byTime(8000);
        await commands.measure.stop();

        //测试计划详情页
        await commands.click.byXpathAndWait('/html/body/div[1]/div/div[1]/div/div[2]/div[2]/div[1]/header/div[1]/span/span');
        await commands.click.byXpathAndWait('/html/body/div[1]/div/div[1]/div/div[2]/div[2]/div[1]/header/div[2]/div/div[1]/a[3]/div/span');
        await commands.measure.start('testcase-detail');
        await commands.click.byXpath('/html/body/div[1]/div/div[1]/div/div[2]/div[2]/div[1]/div/div/div/div/div[3]/div/div/div[1]/div/div[2]/div[1]/div/div/div[1]/div');
        await commands.wait.byTime(8000);
        await commands.measure.stop();

        //测试报告详情页
        await commands.click.byXpathAndWait('/html/body/div[1]/div/div[1]/div/div[2]/div[2]/div[1]/header/div[1]/span/span');
        await commands.click.byXpathAndWait('/html/body/div[1]/div/div[1]/div/div[2]/div[2]/div[1]/header/div[2]/div/div[1]/a[4]/div/span');
        await commands.measure.start('testreport-detail');
        await commands.click.byXpathAndWait('/html/body/div[1]/div/div[1]/div/div[2]/div[2]/div[1]/div/div/div/div/div[2]/div/div[2]/div/div[1]/div/div/div[1]/div[1]/div/span');
        await commands.measure.stop();

        //编辑测试报告
        await commands.measure.start('edit-testreport');
        await commands.click.byXpathAndWait('/html/body/div[1]/div/div[1]/div/div[2]/div/div[1]/div/div/div/div[1]/div[2]/div/div[1]/span');
        await commands.measure.stop();

        //performance仪表盘详情
        await commands.click.byXpathAndWait('/html/body/div[1]/div/div[1]/div/div[2]/div/div[1]/div/div/div/div[1]/div[2]/button[1]/span');
        await commands.mouse.moveTo.bySelector('.back>svg');
        await commands.wait.byTime(2000);
        await commands.mouse.singleClick.atCursor();
        await commands.wait.byTime(2000);
        await commands.click.byXpathAndWait('/html/body/div[1]/div/div[1]/div/div[2]/div[1]/div/div/div[3]/div[1]/div/ul/a[8]');
        await commands.measure.start('performance-detail');
        await commands.click.byXpath('/html/body/div[1]/div/div[1]/div/div[2]/div[2]/div[1]/div/div/div/div[2]/div[2]/div[2]/div[1]/div/div/div[1]/div[1]/span');
        await commands.wait.byTime(5000);
        return commands.measure.stop();

      } catch(e) {
        // We try/catch so we will catch if the the input fields can't be found
        // We could have an alternative flow ...
        // else we can just let it cascade since it caught later on and reported in
        // the HTML
        throw e;
      }
};

async function tearDown(context,commands){

};

module.exports = {
    setUp:setUp,
    tearDown:tearDown,
    test:perfTest
};