import Link from 'next/link';

function Page() {
  return (
    <div>
      <h2>Welcome</h2>
      <Link href={'/chat'}>Chat</Link>
    </div>
  );
}

export default Page;
