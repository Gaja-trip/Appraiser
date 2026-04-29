const icons = {
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.4-3.4"></path></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"></path></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="m3 10 9-7 9 7"></path><path d="M5 10v10h14V10"></path><path d="M9 20v-6h6v6"></path></svg>',
  folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path></svg>',
  help: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M9.5 9a2.8 2.8 0 0 1 5.2 1.5c0 2-2.7 2.3-2.7 4"></path><path d="M12 18h.01"></path></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2"></rect><path d="M8 11V8a4 4 0 0 1 8 0v3"></path></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z"></path><path d="M14 3v6h6"></path><path d="M8 13h8M8 17h6"></path></svg>',
  play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m10 9 5 3-5 3Z"></path></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M4 19V5"></path><path d="M4 19h16"></path><path d="m7 15 4-4 3 3 5-7"></path></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><circle cx="12" cy="8" r="4"></circle><path d="M4 21a8 8 0 0 1 16 0"></path></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5Z"></path><path d="M4 5.5v16"></path><path d="M8 7h8"></path></svg>',
  pen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="m16 4 4 4L8 20H4v-4Z"></path><path d="m14 6 4 4"></path></svg>',
  open: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M14 3h7v7"></path><path d="m10 14 11-11"></path><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"></path></svg>'
};

const page = document.body.dataset.page || "home";
const appConfig = window.APP_CONFIG || {};
const appStorageUrls = window.APP_STORAGE_URLS || {};

const utilityMenu = [
  { id: "search", label: "통합검색", href: "resources.html", icon: "search" },
  { id: "library", label: "자료실", href: "resources.html", icon: "folder", page: "resources" },
  { id: "qa", label: "Q&A", href: "qa.html", icon: "help", page: "qa" },
  { id: "login", label: "로그인", href: "login.html", icon: "lock", page: "login" }
];

const learningMenu = [
  { id: "basicLecture", label: "과목별 기본 강의", href: "lectures.html", icon: "play", page: "lectures" },
  { id: "lectureMaterials", label: "기본 강의 자료", href: "materials.html", icon: "book", page: "materials" },
  { id: "pastExams", label: "회차별/과목별 기출문제", href: "problems.html", icon: "file", page: "problems" },
  { id: "practice", label: "문제풀이", href: "practice.html", icon: "pen", page: "practice" },
  { id: "forecast", label: "분석 및 예상문제", href: "analysis.html", icon: "chart", page: "analysis" }
];

const bottomTabs = [
  { id: "home", label: "홈", href: "index.html", icon: "home", page: "home" },
  { id: "problems", label: "문제", href: "problems.html", icon: "file", page: "problems" },
  { id: "lectures", label: "강의", href: "lectures.html", icon: "play", page: "lectures" },
  { id: "qa", label: "Q&A", href: "qa.html", icon: "help", page: "qa" },
  { id: "my", label: "내학습", href: "login.html", icon: "user", page: "login" }
];

const subjectTracks = [
  {
    title: "민법",
    stage: "1차",
    tone: "green",
    progress: "기출 1교시",
    focus: "조문형 문제와 판례형 문제를 분리해 1차 객관식 회독 흐름을 만듭니다."
  },
  {
    title: "경제학",
    stage: "1차",
    tone: "blue",
    progress: "거시경제학 Part 1",
    focus: "국민소득, 이자율, 물가, 실업과 인플레이션 자료를 단원별로 이어봅니다."
  },
  {
    title: "부동산학",
    stage: "1차",
    tone: "gold",
    progress: "기출 1교시",
    focus: "경제학·민법과 같은 회차 파일에서 부동산학 문항을 별도 표시합니다."
  },
  {
    title: "감정평가 관계법규",
    stage: "1차",
    tone: "rose",
    progress: "기출 2교시",
    focus: "회계학과 같은 2교시 묶음에서 법규 문항을 회차별로 정리합니다."
  },
  {
    title: "회계학",
    stage: "1차",
    tone: "rose",
    progress: "회계원리 보충문제",
    focus: "정리노트와 보충문제를 같이 열어 기본 강의 복습용으로 배치합니다."
  },
  {
    title: "감정평가실무",
    stage: "2차",
    tone: "blue",
    progress: "사례형 풀이 8강",
    focus: "평가 3방식, 보상평가, 계산형 답안 구조를 기출과 묶어 학습합니다."
  },
  {
    title: "감정평가이론",
    stage: "2차",
    tone: "green",
    progress: "심화서 Part 1",
    focus: "이론 체계와 논술형 목차를 연결해 암기보다 서술 구조를 먼저 잡습니다."
  },
  {
    title: "감정평가 및 보상법규",
    stage: "2차",
    tone: "gold",
    progress: "쟁점 정리",
    focus: "보상법규 조문, 판례 키워드, 논점별 답안 흐름을 함께 정리합니다."
  }
];

const resources = [
  {
    title: "2023년도 제34회 감정평가사 1차시험 1교시",
    category: "기출문제",
    subject: "민법·경제학·부동산학",
    stage: "1차",
    year: "2023",
    round: "제34회",
    type: "PDF",
    href: "Data/기출문제/2023년도 제34회 감정평가사 1차시험 1교시.pdf",
    summary: "1차 1교시 과목을 한 번에 확인할 수 있는 최신 회차 자료입니다."
  },
  {
    title: "2023년도 제34회 감정평가사 1차시험 2교시",
    category: "기출문제",
    subject: "감정평가 관계법규·회계학",
    stage: "1차",
    year: "2023",
    round: "제34회",
    type: "PDF",
    href: "Data/기출문제/2023년도 제34회 감정평가사 1차시험 2교시.pdf",
    summary: "회계학과 관계법규를 같은 회차 기준으로 복습할 수 있습니다."
  },
  {
    title: "2022년도 제33회 감정평가사 1차시험 1교시",
    category: "기출문제",
    subject: "민법·경제학·부동산학",
    stage: "1차",
    year: "2022",
    round: "제33회",
    type: "PDF",
    href: "Data/기출문제/2022년도 제33회 감정평가사 1차시험 1교시(민법,경제학,부동산학).pdf",
    summary: "1차 주요 과목을 전년도 회차와 비교할 때 사용합니다."
  },
  {
    title: "2022년도 제33회 감정평가사 1차시험 2교시",
    category: "기출문제",
    subject: "감정평가 관계법규·회계학",
    stage: "1차",
    year: "2022",
    round: "제33회",
    type: "PDF",
    href: "Data/기출문제/2022년도 제33회 감정평가사 1차시험 2교시(감정평가 관계법규, 회계학).pdf",
    summary: "1차 2교시 회계학과 관계법규 문제를 묶어 둔 자료입니다."
  },
  {
    title: "2021년도 제32회 감정평가사 1차 1교시 A형",
    category: "기출문제",
    subject: "민법·경제학·부동산학",
    stage: "1차",
    year: "2021",
    round: "제32회",
    type: "PDF",
    href: "Data/기출문제/21년 32회A형/2021년도 제32회 감정평가사 1차 1교시 A형.pdf",
    summary: "A형 원문을 기준으로 과목별 오답 노트를 만들 수 있습니다."
  },
  {
    title: "1교시 23년도 감정평가사 2차시험_감정평가실무",
    category: "기출문제",
    subject: "감정평가실무",
    stage: "2차",
    year: "2023",
    round: "제34회",
    type: "PDF",
    href: "Data/기출문제/1교시 23년도 감정평가사 2차시험_감정평가실무.pdf",
    summary: "2차 실무 답안 시간 배분과 계산형 흐름을 확인하기 좋은 자료입니다."
  },
  {
    title: "2교시 23년도 감정평가사 2차시험_감정평가이론",
    category: "기출문제",
    subject: "감정평가이론",
    stage: "2차",
    year: "2023",
    round: "제34회",
    type: "PDF",
    href: "Data/기출문제/2교시 23년도 감정평가사 2차시험_감정평가이론.pdf",
    summary: "논술형 목차 구성과 키워드 누락 여부를 점검하기 좋습니다."
  },
  {
    title: "3교시 23년도 감정평가사 2차시험_감정평가 및 보상법규",
    category: "기출문제",
    subject: "감정평가 및 보상법규",
    stage: "2차",
    year: "2023",
    round: "제34회",
    type: "PDF",
    href: "Data/기출문제/3교시 23년도 감정평가사 2차시험_감정평가 및 보상법규.pdf",
    summary: "보상법규 쟁점과 조문 연결을 회차별로 확인합니다."
  },
  {
    title: "2022년 제33회 감정평가사 2차시험 1교시 문제지",
    category: "기출문제",
    subject: "감정평가실무",
    stage: "2차",
    year: "2022",
    round: "제33회",
    type: "PDF",
    href: "Data/기출문제/2022년 제33회 감정평가사 2차시험 1교시 문제지(감정평가실무).pdf",
    summary: "실무 과목의 반복 출제 유형을 비교하는 데 연결합니다."
  },
  {
    title: "2022년 제33회 감정평가사 2차시험 2교시 문제지",
    category: "기출문제",
    subject: "감정평가이론",
    stage: "2차",
    year: "2022",
    round: "제33회",
    type: "PDF",
    href: "Data/기출문제/2022년 제33회 감정평가사 2차시험 2교시 문제지(감정평가이론).pdf",
    summary: "2차 이론의 최근 출제 흐름을 비교합니다."
  },
  {
    title: "1교시_20년도 감정평가실무",
    category: "기출문제",
    subject: "감정평가실무",
    stage: "2차",
    year: "2020",
    round: "제31회",
    type: "PDF",
    href: "Data/기출문제/1교시_20년도 감정평가실무.pdf",
    summary: "2020년 2차 실무 자료입니다."
  },
  {
    title: "2017년 감정평가사 2차시험 기출문제(감정평가 이론)",
    category: "기출문제",
    subject: "감정평가이론",
    stage: "2차",
    year: "2017",
    round: "제28회",
    type: "PDF",
    href: "Data/기출문제/2017년 감정평가사 2차시험 기출문제(감정평가 이론).pdf",
    summary: "장기 출제 흐름을 볼 때 비교 기준으로 둡니다."
  },
  {
    title: "감정평가사 회계원리 정리노트",
    category: "기본서",
    subject: "회계학",
    stage: "1차",
    year: "강의자료",
    round: "회계원리",
    type: "PDF",
    href: "Data/회계원리(회계학)/회계학(신은미) 0626/감정평가사 회계원리 정리노트.pdf",
    summary: "회계원리 기본 강의 복습용 정리 자료입니다."
  },
  {
    title: "감정평가사 회계원리 강의계획서",
    category: "강의자료",
    subject: "회계학",
    stage: "1차",
    year: "강의자료",
    round: "회계원리",
    type: "PDF",
    href: "Data/회계원리(회계학)/회계학(신은미) 0626/감정평가사 회계원리 강의계획서.pdf",
    summary: "기본 강의 진도와 회차별 학습 범위를 잡는 자료입니다."
  },
  {
    title: "감정평가사 회계원리 보충문제",
    category: "문제풀이",
    subject: "회계학",
    stage: "1차",
    year: "강의자료",
    round: "회계원리",
    type: "PDF",
    href: "Data/회계원리(회계학)/회계학(신은미) 0628/감정평가사 회계원리 보충문제.pdf",
    summary: "강의 후 바로 풀어볼 수 있는 보충 문제입니다."
  },
  {
    title: "(경제학)Part1_거시경제학의 기초",
    category: "기본서",
    subject: "경제학",
    stage: "1차",
    year: "기본서",
    round: "Part 1",
    type: "PDF",
    href: "Data/새 폴더/(경제학)Part1_거시경제학의 기초.pdf",
    summary: "경제학 기본서 흐름의 첫 단원입니다."
  },
  {
    title: "(경제학)Part4_국민소득과 물가 결정이론",
    category: "기본서",
    subject: "경제학",
    stage: "1차",
    year: "기본서",
    round: "Part 4",
    type: "PDF",
    href: "Data/새 폴더/(경제학)Part4_국민소득과 물가 결정이론.pdf",
    summary: "거시경제 핵심 단원을 별도 자료로 분리합니다."
  },
  {
    title: "감정평가이론의 이해",
    category: "기본서",
    subject: "감정평가이론",
    stage: "2차",
    year: "기본서",
    round: "입문",
    type: "PDF",
    href: "Data/새 폴더/감정평가이론의 이해.pdf",
    summary: "2차 이론 학습 전 전체 구조를 잡기 위한 기본 자료입니다."
  },
  {
    title: "감정평가이론 심화서(part1)",
    category: "기본서",
    subject: "감정평가이론",
    stage: "2차",
    year: "기본서",
    round: "Part 1",
    type: "PDF",
    href: "Data/새 폴더/감정평가이론 심화서(part1).pdf",
    summary: "심화 학습을 단계별로 이어가기 위한 자료입니다."
  },
  {
    title: "2017_채점평(감정평가실무)",
    category: "채점평",
    subject: "감정평가실무",
    stage: "2차",
    year: "2017",
    round: "제28회",
    type: "HWP",
    href: "Data/자료/2017_채점평(감정평가실무).hwp",
    summary: "실무 과목 답안 방향과 감점 포인트를 확인합니다."
  },
  {
    title: "2023년도 제34회 감정평가사 제2차 시험 합격자 공고",
    category: "자료",
    subject: "시험공고",
    stage: "공통",
    year: "2023",
    round: "제34회",
    type: "HWP",
    href: "Data/자료/2023년도 제34회 감정평가사 제2차 시험 합격자 공고.hwp",
    summary: "시험 일정과 공고 자료를 자료실 축에서 접근합니다."
  }
];

const analysisItems = [
  {
    title: "실무: 계산형 답안 시간표",
    text: "2023, 2022, 2020년 실무 기출을 기준으로 문제별 배점과 계산 단계 누락을 점검합니다.",
    tag: "감정평가실무"
  },
  {
    title: "이론: 목차 선작성 훈련",
    text: "감정평가이론의 이해와 심화서 Part 1을 연결해 서론, 본론, 결론 틀을 반복합니다.",
    tag: "감정평가이론"
  },
  {
    title: "법규: 조문·판례 연결",
    text: "최근 2차 3교시 문제를 기준으로 논점, 근거 조문, 결론 문장을 한 줄씩 정리합니다.",
    tag: "보상법규"
  },
  {
    title: "1차: 회차별 약점 태깅",
    text: "1교시와 2교시를 나눠 과목별 오답 원인을 태그로 모으는 방식으로 예상 문제 범위를 좁힙니다.",
    tag: "1차 공통"
  }
];

const lectureProblemLinks = [
  {
    subject: "민법",
    stage: "1차",
    tone: "green",
    textbook: "민법 기본서: 권리변동, 물권, 채권 핵심 조문",
    lectureFocus: "조문 요건과 판례 키워드를 먼저 강의한 뒤 2023년 1교시 객관식으로 확인합니다.",
    problemScope: "2023년 제34회 1차 1교시",
    examKeys: ["기출문제/2023년도 제34회 감정평가사 1차시험 1교시.pdf"],
    solveFlow: ["조문 요건 표시", "선지별 판례 키워드 확인", "오답 조문을 기본서 목차에 되돌려 표시"],
    deliverables: ["조문 체크리스트", "판례 오답노트", "회독용 선지 태그"]
  },
  {
    subject: "경제학",
    stage: "1차",
    tone: "blue",
    textbook: "경제학 기본서: 수요·공급, 거시균형, 물가와 이자율",
    lectureFocus: "그래프와 계산식을 강의 단위로 쪼갠 뒤 같은 1교시 기출에서 계산형 문제를 연결합니다.",
    problemScope: "2023년 제34회 1차 1교시",
    examKeys: ["기출문제/2023년도 제34회 감정평가사 1차시험 1교시.pdf"],
    solveFlow: ["그래프 축과 이동 방향 정리", "공식 적용 조건 확인", "계산 실수 유형을 별도 태그로 저장"],
    deliverables: ["그래프 풀이표", "계산 공식표", "약점 유형 리포트"]
  },
  {
    subject: "부동산학",
    stage: "1차",
    tone: "gold",
    textbook: "부동산학 기본서: 시장론, 정책론, 투자론",
    lectureFocus: "개념 정의와 제도 비교를 강의한 뒤 2023년 1교시 선지 판단 문제로 복습합니다.",
    problemScope: "2023년 제34회 1차 1교시",
    examKeys: ["기출문제/2023년도 제34회 감정평가사 1차시험 1교시.pdf"],
    solveFlow: ["개념 정의 암기", "유사 제도 비교", "선지 표현의 예외 문구 표시"],
    deliverables: ["개념 비교표", "정책 키워드맵", "예외 선지 모음"]
  },
  {
    subject: "감정평가 관계법규",
    stage: "1차",
    tone: "rose",
    textbook: "관계법규 기본서: 감정평가법, 부동산공시법, 토지보상법",
    lectureFocus: "법령 구조와 절차 조문을 강의한 뒤 2023년 2교시 기출로 조문 적용을 점검합니다.",
    problemScope: "2023년 제34회 1차 2교시",
    examKeys: ["기출문제/2023년도 제34회 감정평가사 1차시험 2교시.pdf"],
    solveFlow: ["법령별 절차 흐름 표시", "기간·권한·주체 선지 분리", "틀린 선지를 조문 위치로 되돌리기"],
    deliverables: ["법령 절차표", "기간 암기표", "조문 근거 노트"]
  },
  {
    subject: "회계학",
    stage: "1차",
    tone: "green",
    textbook: "회계학 기본서: 재무회계, 원가관리회계, 회계원리",
    lectureFocus: "분개와 계산 구조를 강의한 뒤 2023년 2교시 계산형 기출을 풀이 자료로 연결합니다.",
    problemScope: "2023년 제34회 1차 2교시",
    examKeys: ["기출문제/2023년도 제34회 감정평가사 1차시험 2교시.pdf"],
    solveFlow: ["계정과목 분류", "분개와 계산식 동시 작성", "시간 초과 문제를 재풀이 세트로 이동"],
    deliverables: ["분개 템플릿", "계산 실수 로그", "재풀이 문제 세트"]
  }
];

const uploadedExamInsights = [
  {
    title: "2023년 1차 1교시 분석",
    tag: "민법·경제학·부동산학",
    examKeys: ["기출문제/2023년도 제34회 감정평가사 1차시험 1교시.pdf"],
    points: ["민법은 조문 요건과 판례 문구를 기본서 목차에 연결합니다.", "경제학은 그래프 이동과 계산식을 문제 유형별로 분리합니다.", "부동산학은 개념 정의, 정책 비교, 예외 표현을 선지 단위로 태그화합니다."]
  },
  {
    title: "2023년 1차 2교시 분석",
    tag: "관계법규·회계학",
    examKeys: ["기출문제/2023년도 제34회 감정평가사 1차시험 2교시.pdf"],
    points: ["관계법규는 법령별 절차, 기간, 권한 주체를 표로 정리합니다.", "회계학은 분개, 원가 흐름, 계산 실수 유형을 풀이 노트로 누적합니다.", "두 과목 모두 기본서 단원 뒤에 바로 풀 수 있는 복습 문제로 배치합니다."]
  }
];

const qaItems = [
  {
    title: "실무 답안에서 계산 과정은 어느 정도 써야 하나요?",
    text: "배점이 큰 계산 단계와 최종 결론을 분리해 답안 구조를 확인합니다.",
    tag: "감정평가실무"
  },
  {
    title: "1차 경제학 기본서와 기출은 어떤 순서가 좋나요?",
    text: "Part별 기본서 학습 후 같은 주제의 1차 기출을 바로 붙이는 방식으로 정리합니다.",
    tag: "경제학"
  },
  {
    title: "2차 이론은 기본서와 심화서를 어떻게 나눠 보나요?",
    text: "입문 자료로 전체 체계를 잡고, 심화서 Part 단위로 논술 목차를 누적합니다.",
    tag: "감정평가이론"
  }
];

const filters = ["전체", "기출문제", "기본서", "강의자료", "문제풀이", "채점평", "자료"];
let activeFilter = "전체";
let currentResourceScope = resources;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const escapeMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };
    return escapeMap[char];
  });
}

function hydrateIcons(root = document) {
  $$("[data-icon]", root).forEach((node) => {
    node.innerHTML = icons[node.dataset.icon] || "";
  });
}

function icon(name) {
  return `<span data-icon="${name}"></span>`;
}

function storageKeyFor(item) {
  return item.storageKey || item.href.replace(/^Data\//, "");
}

function joinUrl(base, ...parts) {
  const cleanBase = String(base || "").replace(/\/+$/, "");
  const cleanParts = parts
    .filter(Boolean)
    .map((part) => String(part).replace(/^\/+|\/+$/g, ""))
    .filter(Boolean);
  return encodeURI([cleanBase, ...cleanParts].join("/"));
}

function getResourceHref(item) {
  const key = storageKeyFor(item);
  if (appStorageUrls[key]) return appStorageUrls[key];
  if (appConfig.materialsBaseUrl) {
    return joinUrl(appConfig.materialsBaseUrl, appConfig.materialsPathPrefix, key);
  }
  return encodeURI(item.href);
}

function renderNav(containerId, items) {
  const container = $(`#${containerId}`);
  if (!container) return;

  container.innerHTML = items.map((item) => {
    const isActive = item.page === page;
    return `
      <a class="nav-link${isActive ? " is-active" : ""}" href="${item.href}" data-nav-id="${item.id}">
        ${icon(item.icon)}
        <span>${escapeHtml(item.label)}</span>
      </a>
    `;
  }).join("");
}

function renderBottomTabs() {
  const container = $("#mobileBottomTabs");
  container.innerHTML = bottomTabs.map((item) => `
    <a href="${item.href}" class="${item.page === page ? "is-active" : ""}" data-bottom-tab="${item.id}">
      ${icon(item.icon)}
      <span>${escapeHtml(item.label)}</span>
    </a>
  `).join("");
}

function pageHero(eyebrow, title, description = "") {
  return `
    <section class="overview-band page-hero" aria-labelledby="pageTitle">
      <div class="overview-copy">
        <p class="eyebrow">${escapeHtml(eyebrow)}</p>
        <h1 id="pageTitle">${escapeHtml(title)}</h1>
        ${description ? `<p>${escapeHtml(description)}</p>` : ""}
      </div>
      <div class="overview-visual" aria-hidden="true">
        <div class="paper-stack"><span></span><span></span><span></span></div>
        <div class="score-ring"><strong>68%</strong><span>주간 진도</span></div>
      </div>
    </section>
  `;
}

function countSubjectResources(subjectTitle) {
  return resources.filter((item) => item.subject.includes(subjectTitle) || subjectTitle.includes(item.subject)).length;
}

function subjectCard(subject) {
  const count = countSubjectResources(subject.title);
  return `
    <article class="subject-card">
      <header>
        <div>
          <h3>${escapeHtml(subject.title)}</h3>
          <p>${escapeHtml(subject.focus)}</p>
        </div>
        <span class="chip ${subject.tone}">${escapeHtml(subject.stage)}</span>
      </header>
      <div class="subject-meta">
        <span class="chip">${escapeHtml(subject.progress)}</span>
        <span class="chip ${subject.tone}">자료 ${count}개</span>
      </div>
    </article>
  `;
}

function subjectGrid(stage) {
  return `
    <section class="track-section">
      <div class="section-head inline">
        <div>
          <p class="eyebrow">${stage === "1차" ? "First Round" : "Second Round"}</p>
          <h2>${stage} 기본 강의</h2>
        </div>
        <a class="text-link" href="materials.html">${stage} 자료 보기</a>
      </div>
      <div class="subject-grid">${subjectTracks.filter((subject) => subject.stage === stage).map(subjectCard).join("")}</div>
    </section>
  `;
}

function quickLane(href, iconName, title, text) {
  return `
    <a href="${href}">
      ${icon(iconName)}
      <strong>${escapeHtml(title)}</strong>
      <small>${escapeHtml(text)}</small>
    </a>
  `;
}

function resourceCard(item) {
  return `
    <article class="resource-card">
      <div>
        <div class="resource-meta">
          <span class="chip blue">${escapeHtml(item.category)}</span>
          <span class="chip green">${escapeHtml(item.subject)}</span>
          <span class="chip">${escapeHtml(item.round)}</span>
        </div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.summary)}</p>
      </div>
      <footer>
        <span class="chip gold">${escapeHtml(item.type)}</span>
        <a class="open-link" href="${getResourceHref(item)}" target="_blank" rel="noreferrer">
          ${icon("open")}
          <span>열기</span>
        </a>
      </footer>
    </article>
  `;
}

function examItem(item) {
  return `
    <a class="exam-item" href="${getResourceHref(item)}" target="_blank" rel="noreferrer">
      <div class="exam-meta">
        <span class="chip blue">${escapeHtml(item.year)}</span>
        <span class="chip">${escapeHtml(item.round)}</span>
        <span class="chip green">${escapeHtml(item.stage)}</span>
      </div>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.summary)}</p>
      <span class="text-link">자료 열기</span>
    </a>
  `;
}

function analysisCard(item, index) {
  return `
    <article class="analysis-item">
      <span class="chip ${["blue", "green", "gold", "rose"][index % 4]}">${escapeHtml(item.tag)}</span>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `;
}

function findResourceByKey(key) {
  return resources.find((item) => storageKeyFor(item) === key);
}

function linkedExamButton(item) {
  if (!item) return "";

  return `
    <a class="open-link" href="${getResourceHref(item)}" target="_blank" rel="noreferrer">
      ${icon("open")}
      <span>${escapeHtml(item.title)}</span>
    </a>
  `;
}

function linkedStudyCard(item) {
  const linkedExams = item.examKeys.map(findResourceByKey).filter(Boolean);
  return `
    <article class="linked-study-card">
      <header>
        <div>
          <div class="resource-meta">
            <span class="chip ${escapeHtml(item.tone)}">${escapeHtml(item.stage)}</span>
            <span class="chip green">${escapeHtml(item.subject)}</span>
            <span class="chip">${escapeHtml(item.problemScope)}</span>
          </div>
          <h3>${escapeHtml(item.textbook)}</h3>
        </div>
      </header>
      <p>${escapeHtml(item.lectureFocus)}</p>
      <div class="linked-study-section">
        <strong>풀이 흐름</strong>
        <ol class="step-list">
          ${item.solveFlow.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}
        </ol>
      </div>
      <div class="linked-study-section">
        <strong>제공 자료</strong>
        <div class="tag-row">
          ${item.deliverables.map((tag) => `<span class="chip gold">${escapeHtml(tag)}</span>`).join("")}
        </div>
      </div>
      <footer class="link-list">
        ${linkedExams.map(linkedExamButton).join("")}
      </footer>
    </article>
  `;
}

function uploadedExamInsightCard(item, index) {
  const linkedExams = item.examKeys.map(findResourceByKey).filter(Boolean);
  return `
    <article class="insight-panel">
      <span class="chip ${["blue", "rose"][index % 2]}">${escapeHtml(item.tag)}</span>
      <h3>${escapeHtml(item.title)}</h3>
      <ul class="point-list">
        ${item.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
      </ul>
      <footer class="link-list">
        ${linkedExams.map(linkedExamButton).join("")}
      </footer>
    </article>
  `;
}

function renderLinkedStudySection(items = lectureProblemLinks) {
  return `
    <section class="section-head">
      <div>
        <p class="eyebrow">Lecture To Problems</p>
        <h2>기본서 강의와 기출문제 연동</h2>
      </div>
    </section>
    <section class="linked-study-grid">
      ${items.map(linkedStudyCard).join("")}
    </section>
  `;
}

function renderResourceShell({ title, eyebrow, description, scope, showFilters = true }) {
  currentResourceScope = scope;
  return `
    <section class="section-head page-section-head">
      <div>
        <p class="eyebrow">${escapeHtml(eyebrow)}</p>
        <h1>${escapeHtml(title)}</h1>
        <p>${escapeHtml(description)}</p>
      </div>
    </section>
    <section class="resource-toolbar" aria-label="자료 검색">
      <label class="search-field wide" for="librarySearch">
        ${icon("search")}
        <input id="librarySearch" type="search" placeholder="예: 감정평가실무, 2023, 회계원리" data-search-input>
      </label>
      <p id="resourceCount" aria-live="polite"></p>
    </section>
    ${showFilters ? '<section class="filter-bar resource-filter-row" id="resourceFilters" aria-label="자료 필터"></section>' : ""}
    <section class="resource-grid" id="resourceGrid" aria-label="자료 목록"></section>
  `;
}

function renderHome() {
  const recentExams = resources.filter((item) => item.category === "기출문제").slice(0, 4);

  $("#pageContent").innerHTML = `
    ${pageHero("감정평가사 학습 허브", "감정평가사 학습")}
    <section class="quick-lanes" aria-label="빠른 학습">
      ${quickLane("lectures.html", "play", "기본 강의", "1차와 2차 분리")}
      ${quickLane("problems.html", "file", "기출문제", "회차·과목별 정리")}
      ${quickLane("analysis.html", "chart", "분석", "예상문제와 약점")}
      ${quickLane("resources.html", "folder", "자료실", "기본서와 보충자료")}
    </section>
    <section class="section-head">
      <div>
        <p class="eyebrow">Lecture Tracks</p>
        <h2>과목별 기본 강의</h2>
      </div>
      <a class="text-link" href="lectures.html">전체 보기</a>
    </section>
    <section class="lecture-split">
      ${subjectGrid("1차")}
      ${subjectGrid("2차")}
    </section>
    <section class="learning-board">
      <div class="board-column">
        <div class="section-head inline">
          <div>
            <p class="eyebrow">Past Exams</p>
            <h2>최근 기출문제</h2>
          </div>
          <a class="text-link" href="problems.html">기출 전체 보기</a>
        </div>
        <div class="exam-list">${recentExams.map(examItem).join("")}</div>
      </div>
      <div class="board-column">
        <div class="section-head inline">
          <div>
            <p class="eyebrow">Study Focus</p>
            <h2>분석 및 예상문제</h2>
          </div>
          <a class="text-link" href="analysis.html">분석 보기</a>
        </div>
        <div class="analysis-list">${analysisItems.slice(0, 3).map(analysisCard).join("")}</div>
      </div>
    </section>
  `;
}

function renderLecturesPage() {
  $("#pageContent").innerHTML = `
    ${pageHero("Subject Roadmap", "과목별 기본 강의", "1차 객관식 과목과 2차 논술형 과목을 분리해 진도와 자료를 관리합니다.")}
    <section class="lecture-split standalone">
      ${subjectGrid("1차")}
      ${subjectGrid("2차")}
    </section>
    ${renderLinkedStudySection()}
  `;
}

function renderMaterialsPage() {
  $("#pageContent").innerHTML = renderResourceShell({
    title: "기본 강의 자료",
    eyebrow: "Lecture Materials",
    description: "회계원리, 경제학, 감정평가이론 등 기본 강의와 연결되는 기본서·강의자료를 모았습니다.",
    scope: resources.filter((item) => ["기본서", "강의자료"].includes(item.category))
  });
}

function renderProblemsPage() {
  $("#pageContent").innerHTML = renderResourceShell({
    title: "회차별/과목별 기출문제",
    eyebrow: "Past Exams",
    description: "1차와 2차 기출문제를 회차, 과목, 시험 단계 기준으로 검색합니다.",
    scope: resources.filter((item) => item.category === "기출문제"),
    showFilters: false
  });
}

function renderPracticePage() {
  const practiceResources = resources.filter((item) => item.category === "문제풀이" || item.category === "기출문제").slice(0, 8);
  $("#pageContent").innerHTML = `
    <section class="section-head page-section-head">
      <div>
        <p class="eyebrow">Practice</p>
        <h1>문제풀이</h1>
        <p>기출과 보충문제를 바로 풀이 흐름으로 연결합니다.</p>
      </div>
    </section>
    <section class="metric-grid">
      <article class="analysis-item"><span class="chip blue">1차</span><h3>객관식 회독</h3><p>회차별 문제를 풀고 과목별 오답 태그를 누적합니다.</p></article>
      <article class="analysis-item"><span class="chip green">2차</span><h3>답안 구조 훈련</h3><p>문제 읽기, 목차, 계산, 결론을 시간 단위로 분리합니다.</p></article>
      <article class="analysis-item"><span class="chip gold">보충</span><h3>강의 후 복습</h3><p>회계원리 보충문제처럼 강의 직후 풀 자료를 우선 노출합니다.</p></article>
    </section>
    <section class="section-head">
      <div><p class="eyebrow">Practice Set</p><h2>풀이 자료</h2></div>
    </section>
    <section class="resource-grid">${practiceResources.map(resourceCard).join("")}</section>
    ${renderLinkedStudySection(lectureProblemLinks.slice(0, 5))}
  `;
}

function renderAnalysisPage() {
  $("#pageContent").innerHTML = `
    <section class="section-head page-section-head">
      <div>
        <p class="eyebrow">Forecast</p>
        <h1>분석 및 예상문제</h1>
        <p>자료실의 기출과 기본서를 기준으로 약점, 출제 흐름, 예상 훈련 단위를 나눕니다.</p>
      </div>
    </section>
    <section class="insight-grid">${uploadedExamInsights.map(uploadedExamInsightCard).join("")}</section>
    ${renderLinkedStudySection()}
    <section class="analysis-list wide-list">${analysisItems.map(analysisCard).join("")}</section>
    <section class="learning-board">
      <div class="board-column">
        <div class="section-head inline"><div><p class="eyebrow">2차</p><h2>논술형 예상 축</h2></div></div>
        <div class="exam-list">${resources.filter((item) => item.stage === "2차" && item.category === "기출문제").slice(0, 4).map(examItem).join("")}</div>
      </div>
      <div class="board-column">
        <div class="section-head inline"><div><p class="eyebrow">1차</p><h2>객관식 약점 축</h2></div></div>
        <div class="exam-list">${resources.filter((item) => item.stage === "1차" && item.category === "기출문제").slice(0, 4).map(examItem).join("")}</div>
      </div>
    </section>
  `;
}

function renderResourcesPage() {
  $("#pageContent").innerHTML = renderResourceShell({
    title: "자료실",
    eyebrow: "Library",
    description: "기출문제, 기본서, 강의자료, 채점평, 시험 공고를 통합 검색합니다.",
    scope: resources
  });
}

function renderQaPage() {
  $("#pageContent").innerHTML = `
    <section class="section-head page-section-head">
      <div>
        <p class="eyebrow">Q&A</p>
        <h1>Q&A</h1>
        <p>과목별 질문을 학습 흐름과 함께 관리합니다.</p>
      </div>
    </section>
    <section class="qa-strip">
      <div class="qa-list">${qaItems.map((item) => `
        <article class="qa-item">
          <span class="chip blue">${escapeHtml(item.tag)}</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
          <a class="text-link" href="qa.html">답변 보기</a>
        </article>
      `).join("")}</div>
    </section>
  `;
}

function renderLoginPage() {
  $("#pageContent").innerHTML = `
    <section class="section-head page-section-head">
      <div>
        <p class="eyebrow">My Study</p>
        <h1>로그인 / 내학습</h1>
        <p>로그인 이후 내 진도, 최근 열람 자료, 오답 흐름이 표시되는 자리입니다.</p>
      </div>
    </section>
    <section class="metric-grid">
      <article class="analysis-item"><span class="chip blue">진도</span><h3>주간 진도 68%</h3><p>기출 4회와 기본서 3단원을 이번 주 목표로 둡니다.</p></article>
      <article class="analysis-item"><span class="chip green">최근 학습</span><h3>감정평가이론 심화서</h3><p>2차 이론 자료와 2023년 기출을 이어서 볼 수 있게 구성합니다.</p></article>
      <article class="analysis-item"><span class="chip gold">계정</span><h3>학습 기록 준비</h3><p>실제 인증이 연결되면 이 페이지가 내학습 탭의 기본 화면이 됩니다.</p></article>
    </section>
  `;
}

function renderPage() {
  const renderers = {
    home: renderHome,
    lectures: renderLecturesPage,
    materials: renderMaterialsPage,
    problems: renderProblemsPage,
    practice: renderPracticePage,
    analysis: renderAnalysisPage,
    resources: renderResourcesPage,
    qa: renderQaPage,
    login: renderLoginPage
  };

  (renderers[page] || renderHome)();
}

function getSearchValue() {
  return $$("[data-search-input]")
    .map((input) => input.value.trim())
    .find(Boolean) || "";
}

function setSearchValue(value, source) {
  $$("[data-search-input]").forEach((input) => {
    if (input !== source) input.value = value;
  });
}

function matchesQuery(item, query) {
  if (!query) return true;
  const target = [
    item.title,
    item.category,
    item.subject,
    item.stage,
    item.year,
    item.round,
    item.type,
    item.summary
  ].join(" ").toLowerCase();

  return query.toLowerCase().split(/\s+/).every((token) => target.includes(token));
}

function renderResourceFilters() {
  const container = $("#resourceFilters");
  if (!container) return;

  container.innerHTML = filters.map((filter) => `
    <button class="filter-button${filter === activeFilter ? " is-active" : ""}" type="button" data-filter="${escapeHtml(filter)}">
      ${escapeHtml(filter)}
    </button>
  `).join("");

  container.onclick = (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    activeFilter = button.dataset.filter;
    renderResourceFilters();
    renderResources();
  };
}

function renderResources() {
  const grid = $("#resourceGrid");
  const counter = $("#resourceCount");
  if (!grid || !counter) return;

  const query = getSearchValue();
  const list = currentResourceScope.filter((item) => {
    const categoryMatch = activeFilter === "전체" || item.category === activeFilter;
    return categoryMatch && matchesQuery(item, query);
  });

  counter.textContent = `${list.length}개 자료`;
  grid.innerHTML = list.length
    ? list.map(resourceCard).join("")
    : '<p class="empty-state">검색 조건에 맞는 자료가 없습니다.</p>';

  hydrateIcons(grid);
}

function applyQueryParam() {
  const query = new URLSearchParams(window.location.search).get("q") || "";
  if (!query) return;
  $$("[data-search-input]").forEach((input) => {
    input.value = query;
  });
}

function bindSearch() {
  $$("[data-search-input]").forEach((input) => {
    input.addEventListener("input", () => {
      setSearchValue(input.value, input);
      renderResources();
    });

    input.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      const query = encodeURIComponent(input.value.trim());
      if (page !== "resources") {
        window.location.href = query ? `resources.html?q=${query}` : "resources.html";
      }
    });
  });

  $$("[data-focus-search]").forEach((button) => {
    button.addEventListener("click", () => {
      const menu = $("#mobileMenu");
      if (menu.hidden) toggleMobileMenu(true);
      $("#mobileSearch").focus();
    });
  });
}

function toggleMobileMenu(force) {
  const menu = $("#mobileMenu");
  const button = $("#menuToggle");
  const nextState = typeof force === "boolean" ? force : menu.hidden;
  menu.hidden = !nextState;
  button.setAttribute("aria-expanded", String(nextState));
  document.body.classList.toggle("menu-open", nextState);
}

function bindMobileMenu() {
  $("#menuToggle").addEventListener("click", () => toggleMobileMenu());

  $("#mobileMenu").addEventListener("click", (event) => {
    if (event.target.closest("a")) toggleMobileMenu(false);
  });
}

function init() {
  renderNav("desktopUtilityNav", utilityMenu);
  renderNav("mobileUtilityNav", utilityMenu);
  renderNav("desktopLearningNav", learningMenu);
  renderNav("mobileLearningNav", learningMenu);
  renderBottomTabs();
  renderPage();
  applyQueryParam();
  renderResourceFilters();
  renderResources();
  hydrateIcons();
  bindSearch();
  bindMobileMenu();
}

init();
