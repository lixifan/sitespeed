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
        //页面组详情
        await commands.click.byXpathAndWait('/html/body/div[1]/div/div[1]/div/div[2]/div[1]/div/div/div[3]/div[1]/div/ul/a[3]');
        //await commands.click.byXpathAndWait('/html/body/div[2]/div/div/div/div[3]/div/div[2]/header/div[1]/span/span');
        await commands.measure.start('space-page');
        await commands.click.byXpath('/html/body/div[1]/div/div[1]/div/div[2]/div[2]/div[1]/div/div/div/div/div/div/div[3]/div/div[2]/div[1]/div[1]/div[1]/div[1]/span');
        await commands.wait.byTime(5000);
        await commands.measure.stop();

        //用例库详情页
        await commands.click.byXpathAndWait('/html/body/div[2]/div/div/div/div[3]/div/div[2]/header/div[1]/span/span');
        await commands.click.byXpathAndWait('/html/body/div[1]/div/div/div/div[2]/div[1]/div/div[1]/div[3]/div[1]/div/ul/a[5]');
        await commands.click.byXpathAndWait('/html/body/div[1]/div/div/div/div[2]/div[2]/div[1]/header/div[2]/div/div[1]/a[2]/div');
        await commands.measure.start('testlib-detail');
        await commands.click.byXpath('/html/body/div[1]/div/div[1]/div/div[2]/div[2]/div[1]/div/div/div/div/div/div[3]/div/div[1]/div/div/div[1]/div/div[2]');
        await commands.wait.byTime(8000);
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