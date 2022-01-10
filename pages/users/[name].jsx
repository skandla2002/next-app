import fetch from "isomorphic-unfetch";
import css from 'styled-jsx/css';

// nested는 지원 하지 않음
const style = css`
  h2{
    margin-left: 20px;
  }
  .user-bio {
    margin-top: 12px;
    font-style: italic;
  }
`;

const username = ({ user }) => (
  <>
    {user ? (
      <div>
        <h2>{user.name}</h2>
        <p className="user-bio">{user.bio}</p>
      </div>
    ) : (
      <div>유저정보가 없습니다.</div>
    )}
    <style jsx>{style}</style>
  </>
);

// const name = ({ user }) => {
//   const username = user && user.name;
//   return <div>{username}</div>;
// };

// name.getInitialProps = async ({ query }) => {
//   console.log(query);
//   const { name } = query;
//   try {
//     const res = await fetch(`https://api.github.com/users/${name}`);
//     if (res.status === 200) {
//       const user = await res.json();
//       return { props: { user } };
//     }
//     return { props: {} };
//   } catch (e) {
//     console.log(e);
//     return { props: {} };
//   }
// };

export default name;
