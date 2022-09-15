class AppUrl{
    static  BaseURL = "http://ecomlaravel.test/api/";
    static  PostContact = this.BaseURL + "PostContact";
    static  AllSiteInfo = this.BaseURL + "allSiteInfo";
    static  AllCategories= this.BaseURL + "allCategories";
    static  AllSliders = this.BaseURL + "allSliders";
    static  ProductsByRemark = this.BaseURL + "productsByRemark";
    static  ProductsBySubCategory = this.BaseURL + "productsBySubCategory";
    static  ProductsByCategory = this.BaseURL + "productsByCategory";
    static  ProductsDetail = (id) => { return this.BaseURL + "productsDetail/" + id;}
    static  Login = this.BaseURL + "login"
    static  UserData = this.BaseURL + "userData"
    static  Register = this.BaseURL + "register"
    static  ForgetPassword = this.BaseURL + "forgetPassword"
    static  ResetPassword = this.BaseURL + "resetPassword"
    static  Checkout = this.BaseURL + "checkout"
    static  OrderListByUser= this.BaseURL + "orderListByUser"

}
export default AppUrl