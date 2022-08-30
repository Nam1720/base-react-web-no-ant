import { ActionCreatorWithoutPayload, ActionCreatorWithPayload } from '@reduxjs/toolkit';
import qs from 'query-string';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import { AnyAction, Dispatch } from 'redux';
import { deleteEmptyPropertiesObj, isEmpty } from 'utils/helpers';
import { DEFAULT_PAGINATION } from './../store/common/constants';

interface Props {
  dispatch: Dispatch<AnyAction>;
  setParamFilter: ActionCreatorWithPayload<any>;
  resetParamsUrl: ActionCreatorWithoutPayload;
}

const useGetParams = ({ dispatch, setParamFilter, resetParamsUrl }: Props) => {
  const location = useLocation();
  const isTouched = useRef(true);

  useEffect(() => {
    if (!isTouched.current) return;
    const paramsUrl = qs.parse(location.search, { parseNumbers: true });
    deleteEmptyPropertiesObj(paramsUrl, 'is_active');
    if (paramsUrl?.page === DEFAULT_PAGINATION.page && paramsUrl?.per_page === DEFAULT_PAGINATION.per_page) {
      delete paramsUrl.page;
      delete paramsUrl.per_page;
    }
    // if (paramsUrl?.per_page && paramsUrl?.per_page === DEFAULT_PAGINATION.per_page) delete paramsUrl.per_page;
    if (isEmpty(paramsUrl)) return;
    dispatch(setParamFilter(paramsUrl));
    isTouched.current = false;
    return () => {
      isTouched.current = true;
      dispatch(resetParamsUrl());
    };
  }, []);
};

export default useGetParams;
