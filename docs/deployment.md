# GitHub + Vercel 배포 구조

이 저장소는 GitHub에 저장하면 GitHub Actions가 Vercel 배포를 실행하도록 구성되어 있습니다.

## 파일 구조

```text
.
├── .github/workflows/vercel.yml   # PR Preview, main Production 배포
├── scripts/                       # 정적 빌드와 자료 업로드 스크립트
├── storage/                       # 외부 스토리지 매니페스트
├── *.html                         # 멀티 페이지 화면
├── app.js                         # 공통 메뉴, 자료 카탈로그, 페이지 렌더링
├── config.js                      # 로컬 기본 설정
├── storage-map.js                 # 로컬 기본 스토리지 URL 맵
├── vercel.json                    # Vercel 빌드 설정
└── package.json                   # npm scripts
```

## GitHub 저장소에 넣지 않는 것

`Data/` 원본 자료는 `.gitignore`와 `.vercelignore`에 포함되어 있어 GitHub와 Vercel 배포 번들에 들어가지 않습니다. 자료는 Vercel Blob, S3, Cloudflare R2 같은 외부 스토리지에 올리고 URL로 연결합니다.

## GitHub Secrets

GitHub 저장소의 `Settings > Secrets and variables > Actions`에 아래 값을 등록합니다.

```text
VERCEL_TOKEN
VERCEL_ORG_ID
VERCEL_PROJECT_ID
```

Vercel 환경변수에는 외부 자료 저장소 설정을 둡니다.

```text
MATERIALS_BASE_URL
MATERIALS_PATH_PREFIX
BLOB_READ_WRITE_TOKEN
```

`BLOB_READ_WRITE_TOKEN`은 로컬에서 `npm run storage:upload`를 실행할 때만 필요합니다.

## 배포 흐름

```text
Pull Request 생성/업데이트
→ GitHub Actions Preview Deployment
→ Vercel Preview URL 생성

main 브랜치 push
→ GitHub Actions Production Deployment
→ Vercel Production 배포
```

## 최초 설정 순서

1. GitHub에 저장소를 생성하고 이 프로젝트를 push합니다.
2. Vercel에서 새 프로젝트를 만들고 GitHub 저장소를 연결합니다.
3. Vercel 프로젝트의 `Project ID`와 `Org ID`를 GitHub Secrets에 넣습니다.
4. Vercel 계정 토큰을 `VERCEL_TOKEN`으로 GitHub Secrets에 넣습니다.
5. 자료 파일은 외부 스토리지에 업로드합니다.
6. `main` 브랜치에 push하면 production 배포가 실행됩니다.

## 자료 업로드

Vercel Blob을 사용할 경우:

```bash
npm install
npm run storage:upload
npm run build
```

업로드 결과인 `storage/blob-upload-manifest.json`이 있으면 빌드 시 `dist/storage-map.js`에 URL 맵이 들어갑니다.
