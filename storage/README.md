# 외부 자료 저장소 구조

`Data` 폴더는 Vercel 배포 번들에 포함하지 않습니다. 자료 파일은 Vercel Blob, S3, R2 같은 외부 스토리지에 올리고, 웹페이지는 공개 URL을 통해 자료를 엽니다.

## 권장 흐름

1. Vercel 프로젝트에 Blob 스토어를 연결합니다.
2. `BLOB_READ_WRITE_TOKEN`을 `.env.local`, `.env`, 또는 셸 환경 변수에 넣습니다.
3. `npm run storage:dry-run`으로 업로드 대상을 확인합니다.
4. `npm run storage:activate`로 `Data` 폴더 파일을 업로드하고 정적 빌드 URL 맵을 생성합니다.
5. 생성된 `storage/blob-upload-manifest.json`을 커밋하면 빌드 때 `storage-map.js`가 만들어져 정확한 Blob URL로 연결됩니다.

## 대체 흐름

이미 S3/R2/CDN에 같은 폴더 구조로 업로드했다면 Vercel 환경 변수만 설정해도 됩니다.

```text
MATERIALS_BASE_URL=https://cdn.example.com/appraiser-data
MATERIALS_PATH_PREFIX=
```

사이트는 `Data/기출문제/example.pdf` 대신 `https://cdn.example.com/appraiser-data/기출문제/example.pdf`를 열게 됩니다.
