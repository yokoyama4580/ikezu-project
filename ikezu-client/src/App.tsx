import React, { useState } from "react";

const API_BASE = "http://localhost:3000/api"

const App: React.FC = () => {
  const [sourceLang, setSourceLang] = useState<string>("英語");
  const [targetLang, setTargetLang] = useState<string>("日本語");
  const [text, setText] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  // 入れ替えるボタンが押された時の処理
  // いけずと標準語を入れ替える
  const handleClick = () => {
    const tempLang = sourceLang;
    setSourceLang(targetLang);
    setTargetLang(tempLang);
  }

  // form が submit された際の処理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();  // ページのリロード防止
    if (!text.trim()) return;
    setOutput("");

    try {
      const response = await fetch(`${API_BASE}/translate`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetLang, text })
      });

      if (!response.ok) {
        console.log("Failed translate");
      }
      else {
        const { message, output } = await response.json();
        console.log(message);
        setOutput(output);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setText("");  // 入力フィールドの初期化
    }
  };

  return (
    <>
      <h1>いけず変換サイト</h1>
      <div className="switch-lang">
        {/* span でインライン要素にして改行を防ぐ */}
        <span>{sourceLang}</span>
        <button onClick={handleClick}>入れ替える</button>
        <span>{targetLang}</span>
      </div>
      <div className="form">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">変換</button>
        </form>
      </div>
      <div>
        <p>{output}</p>
      </div>
    </>
  )
}

export default App
