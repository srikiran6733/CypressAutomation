class CartPage {

  productsInCartTableElement = 'div[class="table-responsive cart_info"] table tbody tr td h4';
  productsPriceInCartTableElement = '//div[@class="table-responsive cart_info"]/table/tbody/tr/td[3]/p';
  productsQuantityInCartTableElement = '//div[@class="table-responsive cart_info"]/table/tbody/tr/td[4]/button';
  productsTotalPriceInCartTableElement = '//div[@class="table-responsive cart_info"]/table/tbody/tr/td[5]/p';
  homeBreadCrumbLink = '//a[text()="Home"]';
  shoppingCartBreadCrumbLink = '//li[text()="Shopping Cart"]';
  proceedToCheckoutButton = '//a[text()="Proceed To Checkout"]';
  cartPageProductDeleteLink = '//td[@class="cart_delete"]';
  cartPageEmptyCartMessageElement = '//b[text()="Cart is empty!"]';
  productQuantityInCartPageElement = '//table[@id ="cart_info_table"]/tbody/tr/td/button'
  firstProductQuantityElement = '(//table[@id ="cart_info_table"]/tbody/tr/td/button)[1]';
  secondProductQuantityElement = '(//table[@id ="cart_info_table"]/tbody/tr/td/button)[2]';

getField(fieldName) {
    if (this.hasOwnProperty(fieldName)) {
        return this[fieldName];
    }
    console.warn(`Field "${fieldName}" does not exist.`);
    return null;
}


}
export default CartPage;
