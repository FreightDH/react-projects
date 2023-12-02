import PostService from './api/PostService';

import CustomButton from './components/CustomButton/CustomButton';
import CustomInput from './components/CustomInput/CustomInput';
import CustomLink from './components/CustomLink/CustomLink';
import Dropdown from './components/Dropdown/Dropdown';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import LoaderCircle from './components/Loaders/LoaderCircle';
import LoaderDots from './components/Loaders/LoaderDots';

import { getArrayFromRange, getSearchPath, getTotalPages, isEmpty } from './lib/helpers';

import useCurrentPage from './lib/hooks/useCurrentPage';
import useFetching from './lib/hooks/useFetching';
import useParamsObject from './lib/hooks/useParamsObject';
import useScrollBlock from './lib/hooks/useScrollBlock';

export {
  PostService,
  CustomButton,
  CustomInput,
  CustomLink,
  Dropdown,
  ErrorBoundary,
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
