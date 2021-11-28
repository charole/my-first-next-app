import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import axios from 'axios';
import Profile from '../../components/Profile';
import css from 'styled-jsx/css';
import formatDistance from 'date-fns/formatDistance';
import Repositories from '../../components/Repositories';

const style = css`
  .user-contents-wrapper {
    display: flex;
    padding: 20px;
  }
`;

const Name = ({ user, repos }) => {
  if (!user) {
    return null;
  }
  return (
    <>
      <div className="user-contents-wrapper">
        <Profile user={user} />
        <Repositories user={user} repos={repos} />
      </div>
      <style jsx>{style}</style>
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  const { name, page } = query;
  try {
    let user;
    let repos;

    const userRes = await axios
      .get(`httips://api.github.com/users/${name}`)
      .then((res) => {
        user = res.data;
      })
      .catch((err) => err);
    const repoRes = await axios
      .get(
        `https://api.github.com/users/${name}/repos?sort=updated&page=${page}&per_page=10`
      )
      .then((res) => {
        repos = res.data;
      })
      .catch((err) => err);
    return { props: { user, repos } };
  } catch (err) {
    console.log(err);
    return { props: {} };
  }
};

export default Name;
