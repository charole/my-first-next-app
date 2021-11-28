import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

export default function DynamicStaticPropsTest({ user, time }) {
  const username = user && user.name;

  return (
    <div>
      <span>현재 시간은 : {time} 입니다.</span>
      <span>조회한 static username : {username}</span>
      <div>
        <Link href={`/`}>
          <a>move to root</a>
        </Link>
      </div>
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  const { name } = params;
  try {
    const res = await fetch(`https://api.github.com/users/${name}`);
    if (res.status === 200) {
      const user = await res.json();
      return { props: { time: new Date().toISOString(), user } };
    }
    return { props: { time: new Date().toISOString() } };
  } catch (err) {
    console.log(err);
    return { props: { time: new Date().toISOString() } };
  }
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { name: 'jerry' } }],
    fallback: true,
  };
};
