// app/dance-performance/add/page.tsx
import Head from 'next/head';

const AddPerformance: React.FC = () => {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // 新しいパフォーマンスの追加ロジックをここに実装
    };

    return (
        <>
            <Head>
                <title>Add New Performance</title>
            </Head>
            <h1>Add New Performance</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" required />
                <textarea placeholder="Content" required></textarea>
                <button type="submit">Add</button>
            </form>
        </>
    );
};

export default AddPerformance;
