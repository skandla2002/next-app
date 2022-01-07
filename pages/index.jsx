import fetch from "isomorphic-unfetch";

const index = ({ user }) => {
  const username = user && user.name;
  return <div>{username}</div>;
};

export const getSererSideProps = async () => {
  try {
    const res = await fetch("https://api.github.com/users/jerrynim");
    if (res.status === 200) {
      const user = await res.json();
      return { props: { user } };
    }
    return { props: {} };
  } catch (e) {
    console.log(e);
    return { props: {} };
  }
};

export default index;
