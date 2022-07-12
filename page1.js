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
        //testcase概览
        await commands.measure.start('testindex');
        await commands.click.byXpath('/html/body/div[1]/div/div/div/div[2]/div[1]/div/div[1]/div[3]/div[1]/div/ul/a[5]');
        await commands.wait.byTime(10000);
        await commands.measure.stop();
        
        //testcase用例库
        await commands.measure.start('testlib');
        await commands.click.byXpath('/html/body/div[1]/div/div/div/div[2]/div[2]/div[1]/header/div[2]/div/div[1]/a[2]/div');
        await commands.wait.byTime(5000);
        await commands.measure.stop();

        //testcase测试计划
        await commands.measure.start('testcase');
        await commands.click.byXpath('/html/body/div[1]/div/div/div/div[2]/div[2]/div[1]/header/div[2]/div/div[1]/a[3]/div');
        await commands.wait.byTime(10000);
        await commands.measure.stop();

        //testcase测试报告
        await commands.measure.start('testreport');
        await commands.click.byXpath('/html/body/div[1]/div/div/div/div[2]/div[2]/div[1]/header/div[2]/div/div[1]/a[4]/div');
        await commands.wait.byTime(10000);
        await commands.measure.stop();

        //Desk工单概览
        await commands.measure.start('deskcommon');
        await commands.click.byXpath('/html/body/div[1]/div/div/div/div[2]/div[1]/div/div[1]/div[3]/div[1]/div/ul/a[7]');
        await commands.wait.byTime(10000);
        await commands.measure.stop();

        //performance仪表盘
        await commands.measure.start('performance');
        await commands.click.byXpath('/html/body/div[1]/div/div/div/div[2]/div[1]/div/div[1]/div[3]/div[1]/div/ul/a[8]');
        await commands.wait.byTime(10000);
        await commands.measure.stop();

        //pipeline
        await commands.measure.start('pipeline');
        await commands.click.byXpath('/html/body/div[1]/div/div/div/div[2]/div[1]/div/div[1]/div[3]/div[1]/div/ul/a[6]');
        await commands.wait.byTime(10000);
        await commands.measure.stop();

        //plan项目集
        await commands.measure.start('planprogram');
        await commands.click.byXpath('/html/body/div[1]/div/div/div/div[2]/div[1]/div/div[1]/div[3]/div[1]/div/ul/a[4]');
        await commands.wait.byTime(10000);
        await commands.measure.stop();

        //plan甘特图
        await commands.measure.start('plangantt');
        await commands.click.byXpath('/html/body/div[1]/div/div/div/div[2]/div[2]/div[1]/header/div[2]/div/div[1]/a[2]/div');
        await commands.wait.byTime(10000);
        await commands.measure.stop();

         //project项目列表
         await commands.measure.start('project');
         await commands.click.byXpath('/html/body/div[1]/div/div/div/div[2]/div[1]/div/div[1]/div[3]/div[1]/div/ul/a[2]');
         await commands.wait.byTime(10000);
         await commands.measure.stop();

         //wiki页面组
         await commands.measure.start('wikipage');
         await commands.click.byXpath('/html/body/div[1]/div/div/div/div[2]/div[1]/div/div[1]/div[3]/div[1]/div/ul/a[3]');
         await commands.wait.byTime(10000);
         await commands.measure.stop();

         //wiki与我共享
         await commands.measure.start('wikishare');
         await commands.click.byXpath('/html/body/div[1]/div/div/div/div[2]/div[2]/div[1]/header/div[2]/div/div[2]');
         await commands.wait.byTime(15000);
         await commands.measure.stop();

         //我的工作台 - 筛选器
         await commands.click.byXpathAndWait('/html/body/div[1]/div/div/div/div[2]/div[1]/div/div[1]/div[3]/div[1]/div/ul/a[1]');
         await commands.measure.start('myfilter');
         await commands.click.byXpath('/html/body/div[1]/div/div/div/div[2]/div[2]/div[1]/header/div[2]/div/div[3]');
         await commands.wait.byTime(15000);
         await commands.measure.stop();

         //我的工作台 - 工时
         await commands.measure.start('myhour');
         await commands.click.byXpath('/html/body/div[1]/div/div/div/div[2]/div[2]/div[1]/header/div[2]/div/div[4]');
         await commands.wait.byTime(10000);
         await commands.measure.stop();

         //我的工作台 - 仪表盘
         await commands.measure.start('mycommon');
         await commands.click.byXpath('/html/body/div[1]/div/div/div/div[2]/div[2]/div[1]/header/div[2]/div/div[2]');
         await commands.wait.byTime(10000);
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