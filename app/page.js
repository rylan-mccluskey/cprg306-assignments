import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="/week-2">Assignment Week-2</Link>
      </p>
      <p>
        <Link href="/week-3">Assignment Week-3</Link>
      </p>
      <p>
        <Link href="/week-4">Assignment Week-4</Link>
      </p>
      <p>
        <Link href="/week-6">Assignment Week-6</Link>
      </p>
    </main>
  );
}