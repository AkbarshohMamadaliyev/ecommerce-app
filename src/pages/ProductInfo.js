import {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addItem, delItem} from "../store/action";
import {CircleLoader} from "react-spinners";


function ProductInfo() {

    const [cartBtn, setCartBtn] = useState("Add to Cart");

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await res.json());
            setLoading(false);
        }
        getProduct();
    }, [])

    const Loading = () => {
        return (
            <div className="d-flex justify-content-center mt-5">
                <CircleLoader/>
            </div>
        )
    }

    const dispatch = useDispatch();

    const handleCart = (product) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(product))
            setCartBtn("Remove from Cart")
        } else {
            dispatch(delItem(product))
            setCartBtn("Add to Cart")
        }
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6 product">
                    <img src={product.image} alt={product.title} height="400px" width="400px"/>
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star"/>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        ${product.price}
                    </h3>
                    <p className="lead">{product.description}</p>
                    <button className="btn btn-outline-dark px-4 py-2"
                            onClick={() => handleCart(product)}>{cartBtn}</button>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading/> : <ShowProduct/>}
                </div>
            </div>
        </div>
    );
}

export default ProductInfo;