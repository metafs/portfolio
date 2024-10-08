// app/dance-performance/page.tsx
import Head from 'next/head';
import { dancePerformances } from '../dummyData';
import Link from 'next/link';

const DancePerformance: React.FC = () => {
    return (
        <>
            <Head>
                <title>Dance / Performance</title>
                <meta name="description" content="Dance and performance works" />
            </Head>
            <h1>Dance / Performance</h1>
            <Link href="/dance-performance/add">Add New Performance</Link>
            <h2>Performance List</h2>
            <ul>
                {dancePerformances.map((performance) => (
                    <li key={performance.id}>
                        {performance.title} - {performance.content}
                        <Link href={`/dance-performance/edit/${performance.id}`}> Edit</Link>
                        <button onClick={() => handleDelete(performance.id)}>Delete</button>
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

export default DancePerformance;
