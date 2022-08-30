// import { FormProps } from 'antd/lib/form';
// import { TablePaginationConfig } from 'antd/lib/table';

import { paginationModel } from './interface';

export const KEY_API_FAIL = 'Error';
export const KEY = {
  SAVE: 'save',
  CLOSE: 'close',
  EDIT: 'edit',
  ADD: 'add',
  DETAIL: 'detail',
  DELETE: 'delete',
  SUCCESS: 'Success',
  ERROR: 'error',
  FAILED: 'failed',
  VI: 'vi',
  EN: 'en',
};

export enum ACTION_CRUD {
  ADD,
  EDIT,
  VIEW,
  NONE,
  IMPORT,
  DELETE,
}

const typeTemplate = '${label} không đúng định dạng';

export const validateMessagesForm = {
  required: '${label} không được để trống',
  types: {
    string: typeTemplate,
    method: typeTemplate,
    array: typeTemplate,
    object: typeTemplate,
    number: typeTemplate,
    date: typeTemplate,
    boolean: typeTemplate,
    integer: typeTemplate,
    float: typeTemplate,
    regexp: typeTemplate,
    email: typeTemplate,
    url: typeTemplate,
    hex: typeTemplate,
  },
  string: {
    len: '${name} must be exactly ${len} characters',
    min: '${label} không đợc nhỏ hơn ${min} kí tự',
    max: '${label} vượt quá độ dài cho phép',
    range: "'${name}' must be between ${min} and ${max} characters",
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}",
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length",
  },
  pattern: {
    mismatch: '${label} không đúng định dạng',
  },
};

// export const formDefaultLayout: FormProps = {
//   colon: false,
//   layout: 'vertical',
//   wrapperCol: { span: 24 },
//   validateMessages: validateMessagesForm,
//   className: 'font-weight-bold',
// };

// export const initActionModal = { id: -1, type: ACTION_CRUD.NONE, index: -1 };

// export const paginationDefaultProps: TablePaginationConfig = {
//   pageSizeOptions: ['10', '20', '30', '40'],
//   position: ['bottomRight'],
//   showSizeChanger: true,
//   showQuickJumper: true,
// };

// REGEX

export const regexPhone = /^(\+?84[1-9]|03|05|07|08|09|01[2|6|8|9])+([0-9]{8})$/;

export const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const regexPositiveNumberWithoutDecimalZero = /^(0|[1-9]\d*)$/;

export const DEFAULT_PAGINATION = {
  per_page: 10,
  page: 1,
};

export const dateFormat = { dateMonthYear: 'DD/MM/YYYY' };

export const initPagination: paginationModel = {
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

export const THEME_DARk = 'dark';
export const THEME_LIGHT = 'light';
