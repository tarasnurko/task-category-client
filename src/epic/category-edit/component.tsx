import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import React, { useState } from "react";
import { useParams } from "react-router";

import { Button, BUTTON_TYPE } from "../../common/button";
import { ContainerVertical } from "../../common/container-vertical";
import { ErrorText } from "../../common/error-text";
import { Text } from "../../common/text";

import { CategoryEditList } from "../category-edit-list";
import { CategoryInput } from "../category-input";

import {
  CATEGORY_CREATE_RESPONSE,
  CATEGORY_LIST_DATA,
} from "../../data/category/constants";

import {
  createCategoryAction,
  deleteCategoryAction,
  getCategoryListAction,
} from "./actions";

import {
  ICreateCategory,
  ICreateCategoryError,
  IDeleteCategory,
  IDeleteCategoryError,
  IGetCategoryList,
} from "./constatns";

const Component: React.FunctionComponent = () => {
  const [value, setValue] = useState<string>("");

  const { projectId } = useParams<{ projectId: string }>();
  const queryClient = useQueryClient();

  const {
    data,
    isLoading: dataIsLoading,
    isError: dataIsError,
    error: dataError,
  } = useQuery<CATEGORY_LIST_DATA, AxiosError>(
    ["categories"],
    async () => await getCategoryListAction({ projectId })
  );

  const {
    mutate: createCategory,
    isLoading: createIsLoading,
    isError: createIsError,
    error: createError,
  } = useMutation<
    CATEGORY_CREATE_RESPONSE,
    AxiosError<ICreateCategoryError, any>,
    ICreateCategory,
    CATEGORY_CREATE_RESPONSE
  >(createCategoryAction, {
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
      setValue("");
    },
  });

  const {
    mutate: deleteCategory,
    isLoading: deleteIsLoading,
    isError: deleteIsError,
    error: deleteError,
  } = useMutation<
    void,
    AxiosError<IDeleteCategoryError, any>,
    IDeleteCategory,
    void
  >(deleteCategoryAction, {
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
    },
  });

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setValue(e.target.value);

  const handleCreate = () => {
    if (value.trim().length > 0) {
      createCategory({ projectId, data: { text: value } });
    }
  };

  const handleDelete = (categoryId: number) => {
    deleteCategory({ projectId, categoryId: categoryId.toString() });
  };

  const isLoading = dataIsLoading || createIsLoading || deleteIsLoading;

  return (
    <ContainerVertical gap={6}>
      <CategoryInput
        value={value}
        disabled={isLoading}
        onChange={handleValue}
      />
      <Button
        btnType={BUTTON_TYPE.CREATE}
        disabled={isLoading}
        onClick={handleCreate}
      >
        Add Category
      </Button>
      {!dataIsLoading && !dataIsError && data?.list?.length > 0 && (
        <CategoryEditList list={data.list} onDelete={handleDelete} />
      )}

      {!dataIsLoading && !dataIsError && data?.list?.length === 0 && (
        <Text>No categories exist</Text>
      )}

      {dataIsError && <ErrorText>{dataError.message}</ErrorText>}
      {createIsError && (
        <ErrorText>{createError.response?.data?.message}</ErrorText>
      )}
      {deleteIsError && (
        <ErrorText>{deleteError.response?.data?.message}</ErrorText>
      )}
    </ContainerVertical>
  );
};

export default Component;
