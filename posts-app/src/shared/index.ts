import PostService from './api/PostService';

import CustomButton from './components/CustomButton/CustomButton';
import CustomInput from './components/CustomInput/CustomInput';
import CustomLink from './components/CustomLink/CustomLink';
import Dropdown from './components/Dropdown/Dropdown';
import LoaderCircle from './components/Loaders/LoaderCircle';
import LoaderDots from './components/Loaders/LoaderDots';

import { getArrayFromRange, getSearchPath, getTotalPages, isEmpty } from './functions';

import useCurrentPage from './hooks/useCurrentPage';
import useFetching from './hooks/useFetching';
import useParamsObject from './hooks/useParamsObject';
import useScrollBlock from './hooks/useScrollBlock';

export {
  PostService,
  CustomButton,
  CustomInput,
  CustomLink,
  Dropdown,
  LoaderCircle,
  LoaderDots,
  getArrayFromRange,
  getSearchPath,
  getTotalPages,
  isEmpty,
  useCurrentPage,
  useFetching,
  useParamsObject,
  useScrollBlock,
};
