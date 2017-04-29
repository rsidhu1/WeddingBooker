import { categoryList, vendorListProfile } from "../../config/data";

//This function separates the popular and unpopular Vendors
export const getPopularAndUnpopularVendorCategories = completion => {
  popular = [];
  unPopular = [];

  for (let category of categoryList) {
    if (category.isPopular == true) {
      popular.push(category);
    } else {
      unPopular.push(category);
    }
  }
  completion(popular, unPopular);
};
