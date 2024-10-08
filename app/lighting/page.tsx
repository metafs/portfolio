// app/lighting/page.tsx
import Head from 'next/head';
import { lightingWorks } from '../dummyData';
import Link from 'next/link';

const Lighting: React.FC = () => {
  return (
    <>
      <Head>
        <title>Lighting</title>
        <meta name="description" content="Lighting works" />
      </Head>
      <h1>Lighting</h1>
      <Link href="/lighting/add">Add New Lighting Work</Link>
      <h2>Lighting Works List</h2>
      <ul>
        {lightingWorks.map((work) => (
          <li key={work.id}>
            {work.title} - {work.content}
            <Link href={`/lighting/edit/${work.id}`}> Edit</Link>
            <button onClick={() => handleDelete(work.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

// デリート機能の実装（後で詳しく）
const handleDelete = (id: number) => {
  // 実際の削除ロジックをここに実装
};

export default Lighting;
