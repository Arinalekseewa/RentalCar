import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function CarPage() {
    const { carId } = useParams();
    const dispatch = useDispatch();
    const {
    currentCar: car,
    } = useSelector((state) => state.cars);
    
    useEffect(() => {
    if (carId) {
      dispatch(fetchRecipeById(carId));
    }

    return () => {
      dispatch(clearCurrentRecipe());
    };
  }, [dispatch, carId]);
}