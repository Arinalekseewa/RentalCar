import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchCarById } from '../../redux/cars/operations';
import CarDetails from '../../components/CarDetails/CarDetails';
import { selectCarById } from '../../redux/cars/selectors';

export default function CarPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const car = useSelector(state => selectCarById(state, id));
  const isLoading = useSelector(state => state.cars.isLoading);
  const error = useSelector(state => state.cars.error);

  useEffect(() => {
    if (!id) return;
    dispatch(fetchCarById(id));
  }, [dispatch, id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!car) return <div>Car not found</div>;

  return <CarDetails {...car} />;
}
