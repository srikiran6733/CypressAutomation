class ContactUsPage {

    contactUsLink = '//a[normalize-space()="Contact us"]';
    getInTouchHeaderTextElement = '//h2[text()="Get In Touch"]';
    contactUsPageNameField = '//form[@id="contact-us-form"]//div/input[@name="name"]';
    contactUsPageEmailField = '//form[@id="contact-us-form"]//div/input[@name="email"]';
    contactUsPageSubjectField = '//form[@id="contact-us-form"]//div/input[@name="subject"]';
    contactUsPageMessageField = '//textarea[@name="message"]';
    uploadFileChooseFileButton = '//input[@name="upload_file"]';
    contactUsPageSubmitButton = '//form[@id="contact-us-form"]//div/input[@name="submit"]';
    successMessageElement = 'div[class="status alert alert-success"]';
    homeButtonLink = '//div[@id="form-section"]/a/span';

getField(fieldName) {
    if (this.hasOwnProperty(fieldName)) {
        return this[fieldName];
    }
    console.warn(`Field "${fieldName}" does not exist.`);
    return null
}

}



export default ContactUsPage;
