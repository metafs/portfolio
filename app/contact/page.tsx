// app/contact/page.tsx

export default function Contact() {
    // microCMSへの登録
    async function onSubmit(formData: FormData) {
        "use server";
        const title = formData.get("title")
        // URLはAPI設定->基本情報->エンドポイントの内容を記載します
        await fetch("https://dcirs4q6ul.microcms.io/api/v1/contact", {
            headers: {
                "X-MICROCMS-API-KEY": `${process.env.MICROCMS_APIKEY}`,
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({ title })
        });
    }

    // フォーム
    return <form action={onSubmit}>
        <input type="text" name="title" />
        <button type="submit">送信</button>
    </form>
}