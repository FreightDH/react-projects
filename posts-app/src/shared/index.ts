import PostService from './api/PostService';

import CustomLink from './components/CustomLink/CustomLink';
import Dropdown from './components/Dropdown/Dropdown';
import FormButton from './components/FormButton/FormButton';
import FormInput from './components/FormInput/FormInput';
import LoaderCircle from './components/Loaders/LoaderCircle';
import LoaderDots from './components/Loaders/LoaderDots';

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
  LoaderCircle,
  LoaderDots,
  getArrayFromRange,
  getSearchPath,
  getTotalPages,
  isEmpty,
  useFetching,
  usePagination,
  useParamsObject,
};
