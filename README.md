# Appraiser

감정평가사 학습 웹페이지 프로토타입입니다. 공통 메뉴를 공유하는 멀티 페이지 구조로 구성되어 있습니다.

## 실행

`index.html`을 브라우저에서 열면 됩니다. 기출문제와 기본서 자료 링크는 프로젝트의 `Data` 폴더를 기준으로 연결되어 있습니다.

로컬 서버로 확인하려면:

```bash
npm run dev
```

## Vercel 배포 구조

```bash
npm run build
```

빌드 결과는 `dist` 폴더에 생성됩니다. Vercel은 `vercel.json` 설정에 따라 `dist`를 정적 사이트로 배포합니다.

GitHub에 저장하면 `.github/workflows/vercel.yml`이 PR에서는 Preview 배포, `main` 브랜치 push에서는 Production 배포를 실행합니다. 자세한 설정 순서는 `docs/deployment.md`를 참고하세요.

`Data` 폴더는 `.vercelignore`로 배포 번들에서 제외됩니다. 자료 파일은 외부 스토리지에 올리고, 아래 둘 중 하나로 연결합니다.

### 방법 1: 기본 URL로 연결

외부 스토리지에 `Data` 내부와 같은 폴더 구조로 업로드한 뒤 Vercel 환경 변수에 설정합니다.

```text
MATERIALS_BASE_URL=https://cdn.example.com/appraiser-data
MATERIALS_PATH_PREFIX=
```

### 방법 2: Vercel Blob URL 맵으로 연결

Vercel Blob 스토어를 연결하고 `BLOB_READ_WRITE_TOKEN`을 `.env.local` 또는 `.env`에 넣은 뒤 실행합니다.

```bash
npm install
npm run storage:dry-run
npm run storage:activate
```

`storage:activate`는 `Data` 자료 인벤토리를 갱신하고, Vercel Blob에 업로드한 뒤, `storage/blob-upload-manifest.json`을 빌드용 `storage-map.js`로 변환합니다. 생성된 `storage/blob-upload-manifest.json`을 커밋하면 배포된 페이지가 각 자료의 Blob URL을 정확히 열게 됩니다.

자료 인벤토리만 갱신하려면:

```bash
npm run storage:manifest
```

## 페이지

- `index.html`: 홈
- `lectures.html`: 과목별 기본 강의, 1차/2차 분리
- `materials.html`: 기본 강의 자료
- `problems.html`: 회차별/과목별 기출문제
- `practice.html`: 문제풀이
- `analysis.html`: 분석 및 예상문제
- `resources.html`: 자료실 및 통합검색
- `qa.html`: Q&A
- `login.html`: 로그인 / 내학습
