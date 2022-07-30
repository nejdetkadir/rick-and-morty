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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    getLocations(currentPage)
      .then((res: AxiosResponse<ApiResponse<LocationType>>) => {
        setLocations([...locations, ...res.data.results]);
        setTotalPages(res.data.info.pages);
      })
      .catch((res: AxiosError<ApiErrorResponse>) => {
        alert(res.response?.data.error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentPage]);

  return (
    <Layout isLoading={isLoading}>
      <List currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages}>
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
