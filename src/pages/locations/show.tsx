import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Location as LocationType, ApiErrorResponse } from "./../../types";
import { getLocation } from "./../../api";
import { AxiosResponse, AxiosError } from "axios";
import Layout from "./../../components/Layout/default";
import Property from "./../../components/Property";
import { Link } from "react-router-dom";

const Show: React.FC = () => {
  const [location, setLocation] = useState<LocationType>();
  const [isLoading, setLoading] = useState<boolean>(true);

  const { locationId } = useParams();

  useEffect(() => {
    getLocation(Number(locationId))
      .then((res: AxiosResponse<LocationType>) => {
        setLocation(res.data);
      })
      .catch((err: AxiosError<ApiErrorResponse>) => {
        alert(err.response?.data.error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [locationId]);

  return (
    <Layout isLoading={isLoading}>
      <div className="container mt-5">
        <Link to={'/locations'}>
          <button className="rounded bg-teal-500 hover:bg-teal-600 text-white p-1 px-2">Go Back</button>
        </Link>
        <h1 className="text-4xl text-center font-bold p-3">{location?.name}</h1>
        <div className="flex justify-center p-2">
          <p><b>Dimension:</b> {location?.dimension}</p>
        </div>
        <div className="flex justify-center mt-4 gap-5">
          <Property color="bg-indigo-500" text={`${location?.residents.length} Residents`} customClass="px-5 py-2 shadow-lg" />
          <Property color="bg-gray-500" text={`${location?.type}`} customClass="px-5 py-2 shadow-lg" />
        </div>
      </div>
    </Layout>
  );
}

export default Show;
