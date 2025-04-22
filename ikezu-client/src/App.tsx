import React, { useState } from "react";

const App: React.FC = () => {
  const [sourceLang, setSourceLang] = useState<string>("いけず");
  const [targetLang, setTargetLang] = useState<string>("標準語");
  const [text, setText] = useState<string>("");
  const [textList, setTextList] = useState<string[]>([]);

  // 入れ替えるボタンが押された時の処理
  // いけずと標準語を入れ替える
  const handleClick = () => {
    const tempLang = sourceLang;
    setSourceLang(targetLang);
    setTargetLang(tempLang);
  }

  // form が submit された際の処理
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();  // ページのリロード防止
    if (!text.trim()) return;
    setTextList([...textList, text]);
    setText("");
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
      {textList.map((prevtext, index) => (
        <p key={index}>{prevtext}</p>
      ))}
    </>
  )
}

export default App
