// app/photography-video/page.tsx
import Head from 'next/head';
import { photographyVideos } from '../dummyData';
import Link from 'next/link';

const PhotographyVideo: React.FC = () => {
    return (
        <>
            <Head>
                <title>Photography / Video</title>
                <meta name="description" content="Photography and video works" />
            </Head>
            <h1>Photography / Video</h1>
            <Link href="/photography-video/add">Add New Photography/Video</Link>
            <h2>Photography/Video List</h2>
            <ul>
                {photographyVideos.map((video) => (
                    <li key={video.id}>
                        {video.title} - {video.content}
                        <Link href={`/photography-video/edit/${video.id}`}> Edit</Link>
                        <button onClick={() => handleDelete(video.id)}>Delete</button>
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

export default PhotographyVideo;
