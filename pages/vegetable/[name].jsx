import Link from "next/link";
import { useRouter } from "next/router";

// 동적 페이지 정의
const name = () => {
  const router = useRouter();
  console.log(router); // query.name 에 수신받은 URL 값이 추가됨
  return (
    <div>
      <h2>Hello!</h2>
      <Link href="/">Move to '/'</Link>
    </div>
  );
};

export default name;
