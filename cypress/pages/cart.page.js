class CartPage {

  productsInCartTableElement = 'div[class="table-responsive cart_info"] table tbody tr td h4';
  productsPriceInCartTableElement = '//div[@class="table-responsive cart_info"]/table/tbody/tr/td[3]/p';
  productsQuantityInCartTableElement = '//div[@class="table-responsive cart_info"]/table/tbody/tr/td[4]/button';
  productsTotalPriceInCartTableElement = '//td[@class="cart_total"]';
  homeBreadCrumbLink = '//a[text()="Home"]';
  shoppingCartBreadCrumbLink = '//li[text()="Shopping Cart"]';
  proceedToCheckoutButton = '//a[text()="Proceed To Checkout"]';
  cartPageProductDeleteLink = '//td[@class="cart_delete"]';
  cartPageEmptyCartMessageElement = '//b[text()="Cart is empty!"]';
  productQuantityInCartPageElement = '//table[@id ="cart_info_table"]/tbody/tr/td/button'
  firstProductQuantityElement = '(//table[@id ="cart_info_table"]/tbody/tr/td/button)[1]';
  secondProductQuantityElement = '(//table[@id ="cart_info_table"]/tbody/tr/td/button)[2]';
  registerLoginLink = "//u[text()='Register / Login']";
  checkoutBreadCrumbLink = '//li[text()="Checkout"]';
  addressDetailsTextElement = '//h2[text()="Address Details"]';
  yourDeliveryDetailsSectionElement = '//ul[@id="address_delivery"]';
  yourBillingDetailsSectionElement = '#address_invoice';
  reviewYourOrderSectionElement = '//h2[text()="Review Your Order"]';
  commentTextAreaField = 'textarea[name="message"]';
  placeOrderButton = '//a[text()="Place Order"]';
  paymentBreadCrumbLink = '//div[@class="breadcrumbs"]/ol/li[2][text()="Payment"]';
  paymentHeaderTextElement = '//h2[text()="Payment"]';
  nameOnCardField = 'input[name="name_on_card"]';
  cardNumberField = 'input[name="card_number"]';
  cvcField = 'input[name="cvc"]';
  expiryMonthField = 'input[name="expiry_month"]';
  expiryYearField = 'input[name="expiry_year"]';
  payAndConfirmOrderButton = '#submit';
  orderPlacedSuccessHeaderTextElement = '//p[text()="Congratulations! Your order has been confirmed!"]';
  continueButton = '//a[text()="Continue"]';
  totalPrice ='//p[@class="cart_total_price"]'
  


getField(fieldName) {
    if (this.hasOwnProperty(fieldName)) {
        return this[fieldName];
    }
    console.warn(`Field "${fieldName}" does not exist.`);
    return null;
}


}
export default CartPage;
