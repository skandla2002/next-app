import Link from "next/link";

function Child() {
  return <div>Child</div>;
}

function App() {
  return (
    <div>
      <h2>Link to 'tomato'</h2>
      <Link href="/tomato">
        {/* a tag가 있어야 클릭도 되고 history 저정되어 백스페이스바로 선택 가능함 */}
        {/* <a>Move to '/tomato'</a> */}
        {/* 컴포넌트가 내부에 있는 경우는 동작하지 않음  */}
        {/* <Child />  */}
        {/* 일반 태그는 동작함 */}
        <div>tag</div>
      </Link>
    </div>
  );
}

export default App;
