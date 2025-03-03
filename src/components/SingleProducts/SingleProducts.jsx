

const SingleProducts = ({ product }) => {
    const { image, name, descriptions, price, category, isFeature }=product;
    console.log(product);
    
    return (
        <div className="border mt-3 p-5 w-76 h-[500px] rounded-md text-center mr-5 shadow-2xl">
        <img src={image} alt="" />  
        <p className="text-2xl font-semibold">{name}</p>
        <p>{descriptions}</p>
        <p>${price}</p>
        <p>{isFeature? 'feature category': 'not category'}</p>
        <button className="bg-yellow-700 px-4 py-2 rounded-md text-lg mt-4 text-white font-semibold">Add To Cart</button>
        </div>
    );
};

export default SingleProducts;