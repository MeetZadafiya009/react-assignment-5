import { productReducer } from "../../src/redux/reducers/productReducer";
import { productActons } from "../../src/redux/constants/actionType";
describe('reducer test', () => {
    const initialState = {
        product:[],
        single:{}
    };
    it("reducer with initial state",()=>{
        const state=productReducer(initialState,{type:'',payload:''});
        expect(state).to.eq(initialState);
    })
    it('should handle set product', () => {
        let data=[
            {
                id: 1,
                title: "iPhone 9",
                description: "An apple mobile which is nothing like apple",
                price: 549,
                discountPercentage: 12.96,
                rating: 4.69,
                stock: 94,
                brand: "Apple",
                category: "smartphones",
                thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
                images: [
                "https://i.dummyjson.com/data/products/1/1.jpg",
                "https://i.dummyjson.com/data/products/1/2.jpg",
                "https://i.dummyjson.com/data/products/1/3.jpg",
                "https://i.dummyjson.com/data/products/1/4.jpg",
                "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                ]
                },
                {
                id: 2,
                title: "iPhone X",
                description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
                price: 899,
                discountPercentage: 17.94,
                rating: 4.44,
                stock: 34,
                brand: "Apple",
                category: "smartphones",
                thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
                images: [
                "https://i.dummyjson.com/data/products/2/1.jpg",
                "https://i.dummyjson.com/data/products/2/2.jpg",
                "https://i.dummyjson.com/data/products/2/3.jpg",
                "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
                ]
                }
        ]
      const state = productReducer(initialState, { type: productActons.SET_PRODUCT,payload:data});
      expect(state.product.length).to.eq(2);
      expect(Object.keys(state.single).length).to.eq(0);
    });
    it("should handle select product",()=>{
        const state=productReducer(initialState,{type:productActons.SELECT_PRODUCT,payload:{id:1,name:"nvienver"}})
        expect(Object.keys(state.single).length).to.not.eq(0);
    })
  
  });
  