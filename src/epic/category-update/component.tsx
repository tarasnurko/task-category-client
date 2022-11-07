import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import React, { useState } from "react";
import { useParams } from "react-router";

import { Button, BUTTON_TYPE } from "../../common/button";
import { ContainerVertical } from "../../common/container-vertical";
import { ErrorText } from "../../common/error-text";
import { Text } from "../../common/text";

import { CategoryUpdateList } from "../category-update-list";
import { CategoryCreateInput } from "../category-create-input";

import {
  CATEGORY_CREATE_RESPONSE,
  CATEGORY_LIST_DATA,
  CATEGORY_UPDATE_RESPONSE,
} from "../../data/category/constants";

import {
  createCategoryAction,
  deleteCategoryAction,
  getCategoryListAction,
  updateCategoryAction,
} from "./actions";

import {
  IError,
  ICreateCategory,
  IUpdateCategory,
  IDeleteCategory,
} from "./constatns";
import { CategoryUpdateInput } from "../category-update-input";

const Component: React.FunctionComponent = () => {
  const [createCategoryValue, setCreateCategoryValue] = useState<string>("");
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);
  const [updateCategoryValue, setUpdateCategoryValue] = useState<string | null>(
    null
  );

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
    AxiosError<IError, any>,
    ICreateCategory,
    CATEGORY_CREATE_RESPONSE
  >(createCategoryAction, {
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
      setCreateCategoryValue("");
    },
  });

  const {
    mutate: updateCategory,
    isLoading: updateIsLoading,
    isError: updateIsError,
    error: updateError,
  } = useMutation<
    CATEGORY_UPDATE_RESPONSE,
    AxiosError<IError, any>,
    IUpdateCategory,
    CATEGORY_UPDATE_RESPONSE
  >(updateCategoryAction, {
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
      hideActiveCategory();
    },
  });

  const {
    mutate: deleteCategory,
    isLoading: deleteIsLoading,
    isError: deleteIsError,
    error: deleteError,
  } = useMutation<void, AxiosError<IError, any>, IDeleteCategory, void>(
    deleteCategoryAction,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["categories"]);
        hideActiveCategory();
      },
    }
  );

  const handleCreateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateCategoryValue(e.target.value);
    hideActiveCategory();
  };

  const handleCreate = () => {
    if (createCategoryValue.trim().length > 0) {
      hideActiveCategory();
      createCategory({ projectId, data: { text: createCategoryValue } });
    }
  };

  const handleActive = (id: number) => {
    setActiveCategoryId((prevValue) => {
      if (prevValue !== id) {
        const categoryText = data?.list.find((item) => item.id === id)?.text;
        if (categoryText) setUpdateCategoryValue(categoryText);
        return id;
      }
      setUpdateCategoryValue(null);
      return null;
    });
  };

  const handleUpdateValue = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUpdateCategoryValue(e.target.value);

  const handleUpdate = () => {
    if (
      activeCategoryId &&
      updateCategoryValue &&
      updateCategoryValue.length > 0 &&
      updateCategoryValue !==
        data?.list.find((item) => item.id === activeCategoryId)?.text
    ) {
      updateCategory({
        projectId,
        categoryId: activeCategoryId.toString(),
        data: { text: updateCategoryValue },
      });
    }
  };

  const handleDelete = () => {
    if (activeCategoryId) {
      deleteCategory({ projectId, categoryId: activeCategoryId?.toString() });
    }
  };

  const hideActiveCategory = () => {
    setActiveCategoryId(null);
    setUpdateCategoryValue(null);
  };

  const isLoading =
    dataIsLoading || createIsLoading || updateIsLoading || deleteIsLoading;

  return (
    <ContainerVertical gap={6}>
      <ContainerVertical gap={4}>
        <CategoryCreateInput
          value={createCategoryValue}
          disabled={isLoading}
          onChange={handleCreateValue}
        />
        <Button
          btnType={BUTTON_TYPE.CREATE}
          disabled={isLoading}
          onClick={handleCreate}
        >
          Add Category
        </Button>
        {!dataIsLoading && !dataIsError && data?.list?.length > 0 && (
          <CategoryUpdateList
            list={data.list}
            activeCategory={activeCategoryId}
            onActive={handleActive}
          />
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

      {activeCategoryId && updateCategoryValue && (
        <ContainerVertical gap={3}>
          <CategoryUpdateInput
            value={updateCategoryValue}
            onChange={handleUpdateValue}
          />
          <Button btnType={BUTTON_TYPE.UPDATE} onClick={handleUpdate}>
            Update Category
          </Button>
          <Button btnType={BUTTON_TYPE.DELETE} onClick={handleDelete}>
            Delete Category
          </Button>
          {updateIsError && (
            <ErrorText>{updateError.response?.data?.message}</ErrorText>
          )}
        </ContainerVertical>
      )}
    </ContainerVertical>
  );
};

export default Component;
