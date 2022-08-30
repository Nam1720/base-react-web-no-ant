import { FormInstance } from 'antd/lib/form';
import QueryString from 'qs';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { deleteEmptyPropertiesObj, isEmpty } from 'utils/helpers';
import { ObjAny } from './../store/common/interface';

interface Props<T> {
  params: Partial<T>;
  form: FormInstance;
}

const useCreateSearchParams = <T extends ObjAny>({ params, form }: Props<T>) => {
  const searchParams = useSearchParams();
  useEffect(() => {
    const newParams = { ...params };

    deleteEmptyPropertiesObj(newParams, 'is_active');
    if (isEmpty(newParams)) {
      searchParams[1]({}, { replace: true });
      form.resetFields();
      return;
    } else form.setFieldsValue(newParams);

    const paramsURL = new URLSearchParams(QueryString.stringify(newParams));
    searchParams[1](paramsURL, { replace: true });
  }, [params]);
};

export default useCreateSearchParams;
