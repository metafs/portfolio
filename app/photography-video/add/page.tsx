// app/photography-video/add/page.tsx
import Head from 'next/head';

const AddPhotographyVideo: React.FC = () => {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // 新しい写真・映像の追加ロジックをここに実装
    };

    return (
        <>
            <Head>
                <title>Add New Photography/Video</title>
            </Head>
            <h1>Add New Photography/Video</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" required />
                <textarea placeholder="Content" required></textarea>
                <button type="submit">Add</button>
            </form>
        </>
    );
};

export default AddPhotographyVideo;
