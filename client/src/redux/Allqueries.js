export const productDetails = `query($id : String!){
  product(id: $id){
    id
    name
    inStock
    gallery
    description
    prices{ currency { label symbol } amount }
    attributes{ id name type items { displayValue id value } }
    brand
    
    
  }
  
}`;

export const currencyInfo = `query {
  currencies{label symbol}
}

`;

export const category = `query{categories {name }}`;

export const singleCategory = `query($id: String!){
  category(input : {title : $id}) {
    name
     products {
    id
    name
    inStock
    gallery
    category
    prices 
        { 
          currency { label symbol }
          amount
        }
    attributes{ id name type items { displayValue id value } }
    brand
  }
  }
  
}`;
