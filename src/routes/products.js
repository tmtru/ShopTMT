import content from '../data/content.json'

export default loadProductById = ({ params }) => {
    console.log("Params", params);
    const product =content?.products?.find((product) => product?.id=== params?.productId)
    return null;
}