import useMountedState from 'hooks/useMountedState';
import { useCallback, useEffect, useState } from 'react';
import { paginationModel } from 'store/common/interface';
import { BaseApi } from 'utils/baseApi';

interface useFetchByParamsModel<R> {
  apiServices: BaseApi;
  params: R;
}

const initPagination: paginationModel = {
  links: {
    first: '',
    last: '',
    prev: null,
    next: null,
  },
  meta: {
    current_page: 1,
    from: 1,
    last_page: 0,
    links: [],
    path: '',
    per_page: 10,
    to: 1,
    total: 10,
  },
};

const useFetchByParams = <T, R>({ apiServices, params }: useFetchByParamsModel<R>) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [paginateInfo, setPaginateInfo] = useState<paginationModel>(initPagination);

  const isMounted = useMountedState();

  const fetchByParams = useCallback(async () => {
    setLoading(true);
    const res = await apiServices.getByParams(params);
    if (res?.data) setData(res.data);
    if (res?.links && res?.meta) setPaginateInfo({ links: res.links, meta: res.meta });
    setLoading(false);
  }, [apiServices, params]);

  useEffect(() => {
    if (isMounted()) fetchByParams();
    return () => {
      setData([]);
    };
  }, [isMounted, params, fetchByParams]);

  return { data, setData, loading, paginateInfo, fetchByParams };
};

export default useFetchByParams;
