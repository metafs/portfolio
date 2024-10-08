// app/lighting/add/page.tsx
import Head from 'next/head';

const AddLighting: React.FC = () => {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // 新しい照明作品の追加ロジックをここに実装
    };

    return (
        <>
            <Head>
                <title>Add New Lighting Work</title>
            </Head>
            <h1>Add New Lighting Work</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" required />
                <textarea placeholder="Content" required></textarea>
                <button type="submit">Add</button>
            </form>
        </>
    );
};

export default AddLighting;
