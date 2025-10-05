class SignupPage {

    automationExerciseLogoElement = "div[class='logo pull-left'] a img";
    newUserSignupHeaderTextElement = 'div[class="signup-form"] h2';
    loginToYourAccountEmailField = '//input[@placeholder="Email Address" and @data-qa="login-email"]';
    loginToYourAccPasswordField = '//input[@placeholder="Password" and @data-qa="login-password"]';
    loginToYourAccLoginButton = '//button[@type="submit" and @data-qa="login-button"]';
    loginToUserAccHeaderTextElement = 'div[class="login-form"] h2';
    loginToYourAccErrorMessageElement = '//p[text()="Your email or password is incorrect!"]';
    signupNameField = "input[placeholder='Name']";
    signupEmailAddressField = '//input[@placeholder="Email Address" and @data-qa="signup-email"]';
    signupButton = "button[type='submit'][data-qa='signup-button']";
    signupErrorMessageElement = '//p[text()="Email Address already exist!"]';
    enterAccInfoHeaderTextElement = '//b[text()="Enter Account Information"]';
    mrRadioButton = "(//form[@action='/signup']/div/div/label)[1]/div";
    mrsRadioButton = "(//form[@action='/signup']/div/div/label)[2]/div/span";
    accountInfoNameFieldElement = "#name";
    accountInfoEmailFieldElement = "#email";
    accountInfoPasswordField = "#password";
    daysDropdown = "days";
    monthsDropdown = "months";
    yearsDropdown = "years";
    newsletterCheckbox = "#newsletter";
    offersCheckbox = "#optin";

    //Address Information
    firstNameField = "#first_name";
    lastNameField = "#last_name";
    companyField = "#company";

    //Address Information
    addressField1 = "#address1";
    addressField2 = "#address2";
    countryDropdown = "country";
    cityField = "#city";
    stateField = "#state";
    zipCodeField = "#zipcode";
    mobileNumberField = "#mobile_number";
    createAccountButton = "button[data-qa='create-account']";

    //Account Created
    accountCreatedHeaderTextElement = 'h2[data-qa="account-created"] b';
    accountCreatedContinueButton = "a[data-qa='continue-button']";

getField(fieldName) {
    if (this.hasOwnProperty(fieldName)) {
        return this[fieldName];
    }
    console.warn(`Field "${fieldName}" does not exist.`);
    return null
}

}
export default SignupPage;
