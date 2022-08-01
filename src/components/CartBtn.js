import {Link} from "react-router-dom";
import {useSelector} from "react-redux";


function CartBtn() {

    const state = useSelector((state) => state.addItem)

    return (
        <div>
            <Link to="/cart" className="btn btn-outline-dark ms-2">
                <span className="fa fa-shopping-cart me-1"/> Cart ({state.length})
            </Link>
        </div>
    );
}

export default CartBtn;