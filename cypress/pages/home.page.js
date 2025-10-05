class HomePage {

    automationExerciseLogoElement = "div[class='logo pull-left'] a img";
    signupLoginLink = '//a[normalize-space()="Signup / Login"]';

    //After Logged in to account
    loggedInAsUsernameElement = '(//div[@class="shop-menu pull-right"]/ul/li)[10]';
    deleteAccountLink = '(//div[@class="shop-menu pull-right"]/ul/li)[5]/a';
    accountDeletedHeaderTextElement = 'h2[data-qa="account-deleted"] b';
    continueButtonAfterAccountDeleted = '//a[text()="Continue"]';
    logoutLink = '//a[normalize-space()="Logout"]';
    emailAddressAlreadyExistErrorMessageElement = '//p[text()="Email Address already exist!"]';
    productsLink = '//a[text()=" Products"]';
    cartLink = '//a[normalize-space()="Cart"]';
    viewProductButton = '(//*[text()="View Product"])[1]';
    productDetailsSection = 'div[class="product-information"]';
    subscriptionTextElement = '//h2[text()="Subscription"]';
    subscriptionEmailAddressField = '//form[@class="searchform"]/input[@type="email"]';
    subscriptionArrowButton = '//button[@id="subscribe"]';
    subscriptionSuccMsgElement = '//div[@id="success-subscribe"]/div';

    getField(fieldName) {
        if (this.hasOwnProperty(fieldName)) {
            return this[fieldName];
        }
        console.warn(`Field "${fieldName}" does not exist.`);
        return null
    }

}
export default HomePage;
