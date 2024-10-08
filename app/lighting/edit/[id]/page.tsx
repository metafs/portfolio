// app/lighting/edit/[id]/page.tsx
import Head from 'next/head';
import { useRouter } from 'next/router';
import { lightingWorks } from '../../../dummyData';

const EditLighting: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    // IDに基づいて記事を取得
    const work = lightingWorks.find((w) => w.id === Number(id));

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // 編集した照明作品の保存ロジックをここに実装
    };

    return (
        <>
            <Head>
                <title>Edit Lighting Work</title>
            </Head>
            <h1>Edit Lighting Work</h1>
            {work ? (
                <form onSubmit={handleSubmit}>
                    <input type="text" defaultValue={work.title} required />
                    <textarea defaultValue={work.content} required></textarea>
                    <button type="submit">Save Changes</button>
                </form>
            ) : (
                <p>Lighting work not found.</p>
            )}
        </>
    );
};

export default EditLighting;
