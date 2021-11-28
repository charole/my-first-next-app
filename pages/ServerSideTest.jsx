import Link from 'next/link';

function User({ user }) {
  const username = user && user.name;

  return (
    <div>
      <h2>Hello! {username}</h2>
      <Link href={`/`}>
        <a>move to root.</a>
      </Link>
    </div>
  );
}

export const getServerSideProps = async () => {
  try {
    const res = await fetch('https://api.github.com/users/jerrynim');
    if (res.status === 200) {
      const user = await res.json();
      return { props: { user } };
    } else {
      return { props: {} };
    }
  } catch (err) {
    console.log(err);
    return { props: {} };
  }
};

export default User;
