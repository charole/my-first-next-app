import Link from 'next/link';

export default function StaticPropsTest({ time }) {
  return (
    <div>
      <span>현재 시간: {time}(3초 단위 갱신)</span>
      <div>
        <Link href="/">
          <a>move to root.</a>
        </Link>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  return { props: { time: new Date().toISOString() }, revalidate: 3 };
};
