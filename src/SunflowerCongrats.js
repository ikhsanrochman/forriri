import React, { useState } from "react";
import "./SunflowerCongrats.css";

const sunflowerList = [
  {
    id: 1,
    label: "Sunflower 1",
    message: (
      <>
        <b>You did it! and I already knew it! 🎉</b><br/>
        Selamat ya Riri, eh salah maksudnya Riham Arfiyah, S.Tr.T.<br/>
        Finally hasil kerja kerasmu selama ini dah terbayarkan. Mulai dari tidur cuma beberapa jam, naskah yang ga ke save (sedih), km harus bolak balik ke solo buat brieving aku, harus belajar laravel bener bener dari nol, dan masih banyak lagi perjuangan sm pengorbananmu yang lain. Sampe km nangis bahkan drop gegara semua itu. <br />
        Tapi akhirnya semua bisa kan. Kamu keren Riri. 
      </>
    )
  },
  {
    id: 2,
    label: "Sunflower 2",
    message: (
      <>
        <b>I'm Hoping 🌻</b><br/>
        May your future be as bright as a field of sunflowers.<br/>
        Semoga semua usahamu, pengorbananmu, rasa capekmu, dan pengalaman sama ilmu yang kamu dapet dari semua itu bisa bermanfaat buat kamu selamanya. <br />
        Tetap semangat dan jangan pernah berhenti buat tau atau belajar hal baru juga jangan pernah takut salah.
      </>
    )
  },
  {
    id: 3,
    label: "Sunflower 3",
    message: (
      <>
        <b>Thank you for inspiring me with your spirit and perseverance. 💛</b><br/>
        Thanks mate buat sharing ilmu sama pengalamannya. Sama udah ngasih experience project yang menurutku ini project ter seru, asik, tapi ada juga sisi beratnya intinya campur aduk lah <br />
        Sekali lagi makasih udah mau berjuang bareng bareng walopun aku masih belajar untuk ngajarin kamu.
        Senang bisa kenalan sama kamu, and I hope we stay like this after everything is done
      </>
    )
  }
];

const sunflowerSmall = (
  <span className="sunflower-small" role="img" aria-label="Sunflower">🌻</span>
);

const SunflowerIcon = ({ onClick, label }) => (
  <div className="sunflower-emoji sunflower-emoji-selectable" onClick={onClick} title={label}>
    🌻
  </div>
);

const Confetti = () => (
  <div className="confetti-wrapper">
    {Array.from({ length: 24 }).map((_, i) => (
      <div key={i} className={`confetti confetti-${i % 6}`}></div>
    ))}
  </div>
);

const WhatsAppPopup = ({ open, onClose, onSend }) => {
  const [text, setText] = useState("");
  if (!open) return null;
  return (
    <div className="wa-popup-overlay">
      <div className="wa-popup">
        <h3>Send a message</h3>
        <textarea
          className="wa-popup-input"
          rows={4}
          placeholder="Type your message..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <div className="wa-popup-actions">
          <button className="wa-popup-btn" onClick={onClose}>Cancel</button>
          <button className="wa-popup-btn wa-popup-send" onClick={() => onSend(text)} disabled={!text.trim()}>Send</button>
        </div>
      </div>
    </div>
  );
};

const SunflowerCongrats = () => {
  const [selected, setSelected] = useState(null);
  const [waOpen, setWaOpen] = useState(false);

  const handleSendWA = (msg) => {
    setWaOpen(false);
    const phone = "6285702431769";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  if (selected === null) {
    // Halaman bunga-bunga
    return (
      <div className="sunflower-container">
        <Confetti />
        <h2 style={{ color: "#bfa13a", marginBottom: 24 }}>Pick a Sunflower!</h2>
        <div style={{ display: "flex", gap: 32, justifyContent: "center", margin: "32px 0" }}>
          {sunflowerList.map((bunga, idx) => (
            <SunflowerIcon key={bunga.id} onClick={() => setSelected(idx)} label={bunga.label} />
          ))}
        </div>
        <div style={{ color: "#bfa13a", fontStyle: "italic", fontSize: "1.1rem", textAlign: "center" }}>
          Each sunflower has a special message for you 🌻<br />
          <span style={{ display: 'block', textAlign: 'right', marginTop: 4 }}>from : i</span>
        </div>
      </div>
    );
  }

  // Halaman ucapan untuk bunga yang dipilih
  const bunga = sunflowerList[selected];
  return (
    <div className="sunflower-container">
      <Confetti />
      <WhatsAppPopup open={waOpen} onClose={() => setWaOpen(false)} onSend={handleSendWA} />
      <div className="sunflower-corner sunflower-corner-tl">{sunflowerSmall}</div>
      <div className="sunflower-corner sunflower-corner-tr">{sunflowerSmall}</div>
      <div className="sunflower-corner sunflower-corner-bl">{sunflowerSmall}</div>
      <div className="sunflower-corner sunflower-corner-br">{sunflowerSmall}</div>
      <div className="sunflower-emoji sunflower-emoji-big">🌻</div>
      <h1 style={{ textAlign: 'center' }}>Congratulations, Riri! 🎉</h1>
      <p className="sunflower-message">{bunga.message}</p>
      <div className="sunflower-quote">Like a sunflower, always turn towards the light and keep growing.</div>
      {selected === 2 && (
        <button className="send-love-btn" onClick={() => setWaOpen(true)}>
          Send Love 💛
        </button>
      )}
      <button className="send-love-btn" style={{ marginTop: 16, background: '#fffbe7', color: '#bfa13a', border: '2px solid #ffe066' }} onClick={() => setSelected(null)}>
        Back
      </button>
    </div>
  );
};

export default SunflowerCongrats; 