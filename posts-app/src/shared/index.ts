import PostService from './api/PostService';

import CustomLink from './components/CustomLink/CustomLink';
import Dropdown from './components/Dropdown/Dropdown';
import FormButton from './components/FormButton/FormButton';
import FormInput from './components/FormInput/FormInput';
import Loader from './components/Loader/Loader';

import { getArrayFromRange, getSearchPath, getTotalPages, isEmpty } from './functions';

import useFetching from './hooks/useFetching';
import usePagination from './hooks/usePagination';
import useParamsObject from './hooks/useParamsObject';

export {
  PostService,
  CustomLink,
  Dropdown,
  FormButton,
  FormInput,
  Loader,
  getArrayFromRange,
  getSearchPath,
  getTotalPages,
  isEmpty,
  useFetching,
  usePagination,
  useParamsObject,
};
