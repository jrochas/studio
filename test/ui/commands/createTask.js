exports.command = function () {

    this
        .waitForElementVisible('#task-menu')
        .click('#task-menu')
        .waitForElementVisible('#Javascript')
        .moveToElement('#Javascript', 5, 5)
        .mouseButtonDown(0)
        .moveToElement('#workflow-designer', 100, 100)
        .mouseButtonUp(0)

    return this;
};
