// app/photography-video/edit/[id]/page.tsx
import Head from 'next/head';
import { useRouter } from 'next/router';
import { photographyVideos } from '../../../dummyData';

const EditPhotographyVideo: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    // IDに基づいて記事を取得
    const video = photographyVideos.find((v) => v.id === Number(id));

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // 編集した写真・映像の保存ロジックをここに実装
    };

    return (
        <>
            <Head>
                <title>Edit Photography/Video</title>
            </Head>
            <h1>Edit Photography/Video</h1>
            {video ? (
                <form onSubmit={handleSubmit}>
                    <input type="text" defaultValue={video.title} required />
                    <textarea defaultValue={video.content} required></textarea>
                    <button type="submit">Save Changes</button>
                </form>
            ) : (
                <p>Photography/Video not found.</p>
            )}
        </>
    );
};

export default EditPhotographyVideo;
