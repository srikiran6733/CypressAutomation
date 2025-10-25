class ProductsPage {


    allProductsHeaderTextElement = '//h2[text()="All Products"]';
    allProductsListElement = '//div[@class="features_items"]/div';
    viewProductButton = '(//a[text()="View Product"])[1]';
    productDetailsSection = '//div[@class="product-details"]/div[2]/div';
    productCategoryElement = '//div[@class="product-information"]/p[1]';
    productPriceElement = '//div[@class="product-information"]/span/span';
    productAvailabilityElement = '//div[@class="product-information"]/p[2]';
    productConditionElement = '//div[@class="product-information"]/p[3]';
    productBrandElement = '//div[@class="product-information"]/p[4]';
    productQuantityElement = '//label[text()="Quantity:"]';
    productsPageSearchField = 'input[id="search_product"][placeholder="Search Product"]';
    productsPageSearchButton = 'button[id="submit_search"][type="button"]';
    productsPageSearchedItemsTextElement = '//div[@class="features_items"]//div[@class="col-sm-4"]';
    ProductsPageAllSearchedRelatedTextElement = '//div[@class="productinfo text-center"]//p';
    subscriptionTextElement = '//h2[text()="Subscription"]';
    subscriptionEmailAddressField = 'input[id="subscribe_email"][placeholder="Your email address"]';
    subscriptionArrowButton = 'button[id="subscribe"]';
    subscriptionSuccMsgElement = 'div[id="success-subscribe"] div';
    firstProductCartItemElement = '(//div[@class="product-overlay"])[1]';
    firstProductAddToCartButton = '(//div[@class="product-overlay"])[1]//a[text()="Add to cart"]';
    ContinueShoppingButton = '//button[text()="Continue Shopping"]';
    secondProductCartItemElement = '(//div[@class="product-overlay"])[2]';
    secondProductAddToCartButton = '(//a[@data-product-id="2" and text()="Add to cart"])[2]';
    viewCartButton = '//u[text()="View Cart"]';
    quantityIncreaseButton = '#quantity';
    addToCartButtonAfterIncreasingQuantity = '//button[normalize-space()="Add to cart"]';
    productsList='//div[@class="product-image-wrapper"]';

    getField(fieldName) {
        if (this.hasOwnProperty(fieldName)) {
            return this[fieldName];
        }
        console.warn(`Field "${fieldName}" does not exist.`);
        return null
    }
}
export default ProductsPage;
