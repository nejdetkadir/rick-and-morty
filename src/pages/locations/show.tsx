import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Location as LocationType, ApiErrorResponse } from "./../../types";
import { getLocation } from "./../../api";
import { AxiosResponse, AxiosError } from "axios";
import Layout from "./../../components/Layout/default";

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
      <h1 className="text-3xl font-bold underline">
        {location && JSON.stringify(location, null, 2)}
      </h1>
    </Layout>
  );
}

export default Show;
