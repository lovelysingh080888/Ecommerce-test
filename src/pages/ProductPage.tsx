import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { fetchCategories, fetchProducts } from "../services/product.service";
import ProductItem from "../components/products/ProductItem";
import {
  categoryListAtom,
  filteredProductsSelector,
  productListAtom,
} from "../recoil/atom";
import Layout from "../components/generics/Layout";
import Filter from "../components/products/Filter";
import { IProduct } from "../utils/IProduct";

const ProductListPage: React.FC = () => {
  const [, setProducts] = useRecoilState(productListAtom);
  const [categories, setCategories] = useRecoilState(categoryListAtom);
  const filteredProducts = useRecoilValue(filteredProductsSelector);

  useEffect(() => {
    fetchProducts().then(setProducts);
    fetchCategories().then(setCategories);
  }, [setProducts]);

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Filter</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Left Side Filter */}
          <div className="md:col-span-0">
            <Filter categories={categories} />
          </div>

          {/* Right Side Product List */}
          <div className="md:col-span-3">
            <h2 className="text-2xl font-bold mb-4">Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredProducts?.length == 0 ? (
                <p>No products found.</p>
              ) : (
                filteredProducts.map((product: IProduct) => (
                  <ProductItem key={product.id} product={product} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductListPage;
