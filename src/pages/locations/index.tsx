import { useState, useEffect } from "react";
import { Location as LocationType, ApiResponse, ApiErrorResponse } from "./../../types";
import { getLocations } from "./../../api";
import { AxiosResponse, AxiosError } from "axios";
import Layout from "./../../components/Layout/default";
import List from "./../../components/List";
import Location from "./../../components/Location";

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
      <List>
        {
          locations.map((location: LocationType, index: number) => {
            return <Location key={index} location={location} />
          })
        }
      </List>
    </Layout>
  );
}

export default Index;
