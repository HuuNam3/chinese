window.HSK1_COMMON = (() => {
  const lessons = window.HSK1_DATA.lessons;
  const STORAGE_PREFIX = "hsk1_web_bo_tro";

  function $(selector, root = document) {
    return root.querySelector(selector);
  }

  function normalize(text) {
    return (text || "").toLowerCase().replace(/[，。！？,.!?]/g, "").trim();
  }

  function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function getLesson(id) {
    return lessons.find((lesson) => lesson.id === Number(id)) || lessons[0];
  }

  function key(type, lessonId) {
    return `${STORAGE_PREFIX}:${type}:lesson-${String(lessonId).padStart(2, "0")}`;
  }

  function getStoredOriginal(lessonId) {
    return {
      vocab: localStorage.getItem(key("original-vocab", lessonId)) || "",
      text: localStorage.getItem(key("original-text", lessonId)) || ""
    };
  }

  function saveStoredOriginal(lessonId, payload) {
    if (typeof payload.vocab === "string") {
      localStorage.setItem(key("original-vocab", lessonId), payload.vocab);
    }
    if (typeof payload.text === "string") {
      localStorage.setItem(key("original-text", lessonId), payload.text);
    }
  }

  function resetStoredOriginal(lessonId) {
    localStorage.removeItem(key("original-vocab", lessonId));
    localStorage.removeItem(key("original-text", lessonId));
  }

  function getAudioConfig(lessonId) {
    return {
      path: localStorage.getItem(key("audio-path", lessonId)) || "",
      title: localStorage.getItem(key("audio-title", lessonId)) || ""
    };
  }

  function saveAudioConfig(lessonId, payload) {
    if (typeof payload.path === "string") {
      localStorage.setItem(key("audio-path", lessonId), payload.path);
    }
    if (typeof payload.title === "string") {
      localStorage.setItem(key("audio-title", lessonId), payload.title);
    }
  }

  function getBestScore(lessonId) {
    const raw = localStorage.getItem(key("best-score", lessonId));
    return raw ? JSON.parse(raw) : null;
  }

  function saveBestScore(lessonId, score) {
    const current = getBestScore(lessonId);
    if (!current || score.points > current.points || (score.points === current.points && score.total === current.total)) {
      localStorage.setItem(key("best-score", lessonId), JSON.stringify(score));
    }
  }

  function buildNav(active) {
    return `
      <header class="topbar">
        <a class="brand" href="index.html">
          <span class="brand-mark">HSK 1</span>
          <span class="brand-text">Bộ web bổ trợ giảng dạy</span>
        </a>
        <nav class="nav">
          <a class="${active === "index" ? "active" : ""}" href="index.html">Tổng quan</a>
          <a class="${active === "lesson" ? "active" : ""}" href="bai-hoc.html">Bài học</a>
          <a class="${active === "vocab" ? "active" : ""}" href="tu-vung.html">Từ vựng</a>
          <a class="${active === "practice" ? "active" : ""}" href="luyen-tap.html">Luyện tập</a>
        </nav>
      </header>
    `;
  }

  function buildLessonOptions(selectedId) {
    return lessons.map((lesson) => `
      <option value="${lesson.id}" ${lesson.id === Number(selectedId) ? "selected" : ""}>
        Bài ${lesson.id} - ${lesson.subtitle}
      </option>
    `).join("");
  }

  function speak(text) {
    if (!("speechSynthesis" in window)) {
      alert("Trình duyệt hiện tại không hỗ trợ phát âm tích hợp.");
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-CN";
    utterance.rate = 0.88;
    const zhVoice = window.speechSynthesis.getVoices().find((voice) => voice.lang && voice.lang.toLowerCase().startsWith("zh"));
    if (zhVoice) utterance.voice = zhVoice;
    window.speechSynthesis.speak(utterance);
  }

  function bindSpeech(root = document) {
    root.querySelectorAll("[data-speak]").forEach((button) => {
      button.addEventListener("click", () => speak(button.dataset.speak));
    });
  }

  function speakButton(text, small = false) {
    return `<button class="speak-button ${small ? "small" : ""}" type="button" data-speak="${text}">Nghe</button>`;
  }

  return {
    lessons,
    $,
    normalize,
    shuffle,
    getLesson,
    getStoredOriginal,
    saveStoredOriginal,
    resetStoredOriginal,
    getAudioConfig,
    saveAudioConfig,
    getBestScore,
    saveBestScore,
    buildNav,
    buildLessonOptions,
    speak,
    speakButton,
    bindSpeech
  };
})();
