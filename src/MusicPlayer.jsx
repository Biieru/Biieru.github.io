
import { useEffect, useRef, useState } from "react";
import "./MusicPlayer.css";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(() => {
    const saved = localStorage.getItem("rpg-volume");
    return saved === null ? 12 : Math.min(100, Math.max(0, Number(saved) || 0));
  });
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
    localStorage.setItem("rpg-volume", String(volume));
  }, [volume]);

  async function toggleMusic() {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  }

  return (
    <aside className="rpg-music">
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}audio/tema.mp3`}
        loop
        preload="none"
        onEnded={() => setPlaying(false)}
        onPause={() => setPlaying(false)}
      />

      <div className="rpg-music-header">
        <span>♫ BGM PLAYER</span>
        <button
          onClick={() => setExpanded(!expanded)}
          aria-label={expanded ? "Recolher player" : "Expandir player"}
          aria-expanded={expanded}
        >
          {expanded ? "−" : "+"}
        </button>
      </div>

      <div className="rpg-music-controls">
        <button onClick={toggleMusic}>
          {playing ? "Ⅱ PAUSE" : "▶ PLAY"}
        </button>
        <span>{playing ? "♪ TOCANDO" : "♪ PAUSADO"}</span>
      </div>

      {expanded && (
        <div className="rpg-music-volume">
          <label htmlFor="bgm-volume">VOLUME</label>
          <input
            id="bgm-volume"
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
          />
          <span>{volume}%</span>
        </div>
      )}
    </aside>
  );
}
