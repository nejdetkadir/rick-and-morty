import { useState, useEffect } from "react";
import { Location as LocationType, ApiResponse, ApiErrorResponse } from "./../../types";
import { getLocations } from "./../../api";
import { AxiosResponse, AxiosError } from "axios";
import Layout from "./../../components/Layout/default";

const Index: React.FC = () => {
  const [locations, setLocations] = useState<Array<LocationType>>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getLocations()
      .then((res: AxiosResponse<ApiResponse<LocationType>>) => {
        setLocations(res.data.results);
      })
      .catch((res: AxiosError<ApiErrorResponse>) => {
        alert(res.response?.data.error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Layout isLoading={isLoading}>
      <h1 className="text-3xl font-bold underline">
        <pre>
          {JSON.stringify(locations, null, 2)}
        </pre>
      </h1>
    </Layout>
  );
}

export default Index;
