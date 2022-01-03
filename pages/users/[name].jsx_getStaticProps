import fetch from "isomorphic-unfetch";

const name = ({ user }) => {
  const username = user && user.name;
  return <div>{username}</div>;
};

export const getSererSideProps = async ({ query }) => {
  console.log(query);
  const { name } = query;
  try {
    const res = await fetch(`https://api.github.com/users/${name}`);
    if (res.status === 200) {
      console.log(res);
      const user = await res.json();
      return { props: { user } };
    }
    return { props: {} };
  } catch (e) {
    console.log(e);
    return { props: {} };
  }
};

export default name;
