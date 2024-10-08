// app/dance-performance/edit/[id]/page.tsx
import Head from 'next/head';
import { useRouter } from 'next/router';
import { dancePerformances } from '../../../dummyData';

const EditPerformance: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // IDに基づいて記事を取得（ここではサンプルデータから取得）
  const performance = dancePerformances.find((p) => p.id === Number(id));

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // 編集したパフォーマンスの保存ロジックをここに実装
  };

  return (
    <>
      <Head>
        <title>Edit Performance</title>
      </Head>
      <h1>Edit Performance</h1>
      {performance ? (
        <form onSubmit={handleSubmit}>
          <input type="text" defaultValue={performance.title} required />
          <textarea defaultValue={performance.content} required></textarea>
          <button type="submit">Save Changes</button>
        </form>
      ) : (
        <p>Performance not found.</p>
      )}
    </>
  );
};

export default EditPerformance;
