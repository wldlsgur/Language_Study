import { useQuery } from "react-query";
import { getTestData } from "../../services/axiosManager";
import Item from "./item";
import { ItemsTitleDiv, Title, ItemsDiv } from "./style";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loding from "../common/Loding";

interface props {}

export default function Items(): JSX.Element {
  const { data, error } = useQuery("testData", getTestData);

  return (
    <ItemsTitleDiv>
      <Title>베스트 상품</Title>
      <ErrorBoundary fallback={<div>err...</div>}>
        <Suspense fallback={<Loding></Loding>}>
          <ItemsDiv>
            {data.map((value: any): JSX.Element => {
              return <Item key={value.id} data={value}></Item>;
            })}
          </ItemsDiv>
        </Suspense>
      </ErrorBoundary>
    </ItemsTitleDiv>
  );
}
