// 빌드시에 데이터를 불러와 결과를 json으로 저장하여 사용

const staticPage = ({ time }) => <div>{time}</div>;

export const getStaticPorps = async () => ({
  props: { time: new Date().toISOString() },
  revalidate: 3, // 정해진 시간 마다 요청이 들어올때 데이터 갱신
});

export default staticPage;
