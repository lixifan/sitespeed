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