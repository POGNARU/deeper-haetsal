# deeper-haetsal

> 디퍼(deeper) **언브랜딩 — 햇살**의 **인사이트**와 **과제**를 모아두는 **공개 아카이브**입니다.

포근나루(POGNARU STUDIO)의 햇살(이다현)이 디퍼 언브랜딩 살롱에서 쌓은 성찰과 과제를 한자리에 두는 저장소입니다.
GitHub Pages로 공개되며, 날짜별 인사이트 리포트와 과제 결과물을 카드/링크로 넘겨볼 수 있는 **액티브 아카이브**입니다.

🌐 https://pognaru.github.io/deeper-haetsal/

## 구조

```
deeper-haetsal/
├─ index.html              # 랜딩 — 인사이트 · 과제 버튼
├─ insight/
│   ├─ index.html          # 인사이트 목록 (날짜순)
│   ├─ 260625.html         # 「보이지 않는 문」 (2026.06.19–06.25)
│   ├─ 260702.html         # 「완벽하지 않아도 짓는다」 (2026.06.26–07.02)
│   └─ 260710.html         # 「재료는 이미 내 안에 있었다」 (2026.07.03–07.10)
├─ assignment/
│   ├─ index.html          # 과제 아카이브 — 완성된 과제로 이어지는 카드 목록
│   ├─ sunlit-morning.html # 「선릿모닝 — 함께 쓰는 새벽」 — 8월 클래스 모집 · 새벽 팔레트(예외) · 검색 허용
│   ├─ 260715.html         # 「나의 언어 지문」 — 몽롱쓰기 128편을 관통해 건져 올린 포지셔닝
│   ├─ 260715-hands.html   # 「손이 아는 문법 — 인사」 — 암묵지 외부화 인터뷰(폴라니)
│   ├─ 260716-singularity.html # 「몸이 먼저 알던 세 개의 동작」 — 영웅 여정(캠벨) 발굴 · noindex
│   ├─ 260710.html         # 「태음인 · 목음체질 안내」 — 판별 근거·장부 도해·식단·운동
│   ├─ Bookish_DNA.html    # 「독서 DNA」 — 256권 독서 리포트 (data.js 필요)
│   ├─ data.js             # 독서 DNA 데이터 번들 (자동 생성 — 직접 수정 금지)
│   ├─ family.html         # 「포근나루 식구」 — 픽셀 캐릭터 갤러리
│   └─ family-chart.html   # 「포근나루 식구 조직도」 — 바다 아래 네 기둥 + 별채(사막여우)
└─ assets/                 # 리포트용 이미지 (나루의밤 카드 · 바탕화면 아이콘 · 체질 도해 인물)
```

## 과제 아카이브

`assignment/index.html`에서 아래 과제로 바로 넘어갈 수 있습니다 (대부분 별도 레포·페이지로 배포하고, 일부는 이 레포 안에 둡니다).

| 과제 | 링크 |
|---|---|
| 포근한 글쓰기 | https://pognaru.github.io/pognaru-writing/ |
| 아침 글 배달 | https://pognaru.github.io/dawn/ |
| 가비 플래너 | https://pognaru.github.io/gabi-planner/ |
| 모닝 페이지 회고 | https://pognaru.github.io/naru-review/ |
| 선릿모닝 — 함께 쓰는 새벽 (8월 새벽 글쓰기 클래스 모집) | [`assignment/sunlit-morning.html`](https://pognaru.github.io/deeper-haetsal/assignment/sunlit-morning.html) |
| 나루의 밤 고전 클래스 커리큘럼 | https://pognaru.github.io/bamnaru/ |
| 어린이 작가와 그림책 협업 일정 | https://pognaru.github.io/irum-picturebook/index.html |
| 별 — 밤하늘 서고 | https://pognaru.github.io/byeol/ |
| 나의 언어 지문 — 나는 '에세이 쓰는 사람'이 아니다 | [`assignment/260715.html`](https://pognaru.github.io/deeper-haetsal/assignment/260715.html) |
| 손이 아는 문법 — 인사 (암묵지 외부화 인터뷰) | [`assignment/260715-hands.html`](https://pognaru.github.io/deeper-haetsal/assignment/260715-hands.html) |
| 몸이 먼저 알던 세 개의 동작 (영웅 여정 발굴) | [`assignment/260716-singularity.html`](https://pognaru.github.io/deeper-haetsal/assignment/260716-singularity.html) |
| 태음인 · 목음체질 안내 | [`assignment/260710.html`](https://pognaru.github.io/deeper-haetsal/assignment/260710.html) |
| 독서 DNA | [`assignment/Bookish_DNA.html`](https://pognaru.github.io/deeper-haetsal/assignment/Bookish_DNA.html) |
| 포근나루 식구 | [`assignment/family.html`](https://pognaru.github.io/deeper-haetsal/assignment/family.html) |
| 포근나루 식구 조직도 | [`assignment/family-chart.html`](https://pognaru.github.io/deeper-haetsal/assignment/family-chart.html) |

> 독서 DNA와 식구 갤러리 페이지는 2026-07-10에 폐지된 `dh.archive` 레포에서 옮겨온 것입니다.
> `Bookish_DNA.html`의 숫자를 다시 뽑는 생성 스크립트(`analyze.py` · `build_data.py` · `data/*.json`)는
> 볼트 `클로드 에이전트/도구/독서DNA 생성기/`에 보관돼 있습니다. 북모리 백업으로 `data.js`를 재생성한 뒤 여기에 덮어씁니다.

## 인사이트 리포트 구성 규칙

> 2026-06-25 인사이트 보고회에서 확인 — **결과물을 보여주고 프롬프트를 나눌 때 청중 반응이 가장 좋았다.**
> 그래서 리포트는 **결과물을 앞에, 성찰을 뒤에** 둔다.

작성 순서:

1. **작업물(결과물) 먼저** — 한 주 동안 만든 것을 눌러볼 수 있게 보여준다. 공개 링크·이미지·카드, 그리고 **만든 방법(디자인 프롬프트 등)을 함께 공유**한다. 리포트의 중심.
2. **성찰은 하단에, 요약형으로** — 서술형 문단이 아니라 **짧은 항목(제목 + 한두 줄) 요약**으로 정리한다. 길게 풀어 쓰지 않는다.

- **파일명은 `YYMMDD.html`로 통일**한다. 새 회고는 같은 규칙으로 떨어뜨리면 목록에 한 줄씩 쌓인다 (5월 회고분도 같은 형식으로 재작성해 추가 예정).
- **과제**는 완성되는 대로 카드 하나씩 `assignment/`에 더해 간다. 과제 상세 페이지도 `YYMMDD.html` 규칙을 따른다.
- 과제 페이지가 **개인의 몸·건강·병력 같은 사적 정보**를 다룰 때는, 개인의 응답·증상은 싣지 않고 **일반 자료(공통 지식)로만** 정리한다. 필요하면 `<meta name="robots" content="noindex, nofollow">`를 넣는다.

## 무엇을 담나

- 한 주를 돌아본 **성찰(인사이트)** 글 — 사적인 일기·개인 이야기는 제외하고, 성찰만 공개
- 디퍼 언브랜딩-햇살 과정의 **과제 결과물**
- 공개된 결과물은 리포트 안에서 바로 눌러 볼 수 있도록 링크로 연결

> 디퍼 살롱 자료 별자리 목차는 별도 공개 레포 **[deeper-index](https://github.com/POGNARU/deeper-index)** ( https://pognaru.github.io/deeper-index/ )에 있습니다.

## 브랜드 컬러 — 해바라기 들판

| 이름 | 색 |
|---|---|
| 아이보리 | `#FFF7DE` |
| 해바라기 | `#FFC61E` |
| 잎새그린 | `#6FA52E` |
| 테라코타 | `#D55A2B` |
| 다크브라운 | `#3A2A12` |

선명한 노랑에 잎새 초록을 더한, '황금 별과 해바라기' 결의 팔레트입니다.
글꼴 — 로고: Gowun Batang · 본문 명조: Nanum Myeongjo · 보조 고딕: Gowun Dodum

### 예외 — 선릿모닝 '새벽' 팔레트

`assignment/sunlit-morning.html`은 위 팔레트도, 포근나루 크림 팔레트도 쓰지 않습니다.
선릿모닝은 '새벽'이 정체성이라, **페이지 자체가 새벽이 밝아오는 과정**이 되도록 설계했습니다 (2026-07-16 햇살 요청 — "포근나루 컬러를 벗고 더 시각화된 페이지로").

| 구간 | 색 |
|---|---|
| 밤 | `#131F38` → `#22304F` |
| 여명 보라 | `#4E4066` |
| 노을 | `#8E5A62` → `#C97B5E` |
| 살구 | `#EBAE85` |
| 아침 | `#F7D98B` → `#FDF6E7` |

스크롤을 내릴수록 밤에서 아침으로 넘어가고, 구간 사이는 **파도 무늬 SVG**로 잇습니다(`260716-singularity.html`의 파도 변주).

> **이 페이지만 다른 규칙을 따릅니다.** 과제로 만들었지만 실제로는 포근나루가 수강생 모집에 쓰는 살아 있는 랜딩입니다. 그래서:
> - 푸터는 `POGNARU × DEEPER UNBRANDING`이 아니라 **`POGNARU STUDIO`만** 씁니다 — 손님이 보는 자리라서. (다른 과제 페이지는 디퍼 병기 유지)
> - **돌아가기 링크가 없습니다.** 공유용 단독 랜딩이라, 링크를 받은 사람이 디퍼 아카이브로 타고 들어가지 않게 합니다. 들어오는 경로는 과제 목록의 카드(새 창)뿐입니다.
> - **noindex를 걸지 않습니다** — 모집 페이지라 검색에서 찾을 수 있어야 합니다. 사적 정보가 없어 안전합니다.
> - **주소를 고정해 매월 갱신합니다** (기수마다 새 파일을 만들지 않습니다). 검색 신뢰가 쌓이고, 인스타 프로필 링크를 한 번만 걸면 되고, 이미 뿌린 링크가 늘 최신 달을 가리킵니다. 매달 바뀌는 것은 **모임 안내의 기간** 한 줄과, 신청 폼을 새로 만들 경우 **버튼 주소**입니다. 같은 문구가 인스타 카드 8번과 캡션(볼트 `클로드 에이전트/윤슬의 기록/260715 선릿모닝 인스타 카드뉴스.md`)에도 있으니 함께 맞춥니다.
글꼴 — 영문 타이틀: Playfair Display 이탤릭 · 큰 숫자 `5:50`: Cormorant Garamond(올드스타일) · 한글 헤딩: Gowun Batang · 본문: Nanum Myeongjo · 라벨: Gowun Dodum.
같은 시각 언어를 인스타 카드(볼트 `클로드 에이전트/나무의 기록/260715 선릿모닝 카드 디자인/v2/`)와 공유해 페이지와 카드가 한 세트로 읽힙니다.

## 배포

- GitHub Pages (`.github/workflows/deploy.yml`, main 푸시 시 자동 배포)
- 넷리파이 연동은 하지 않습니다.

## 메모

- **공개 저장소**입니다. 개인적인 자기분석 기록·식구 일기·사적인 이야기는 이 저장소에 두지 않습니다 — 성찰 글만 공개합니다.
- `260716-singularity.html`은 위 규칙을 **서사에까지** 적용한 첫 과제 페이지입니다. 원본 실습에는 병력·가족·실명이 들어 있으나, 공개본에는 **발굴된 방법(세 동작)과 특이점만** 싣고 사연·병력·실명·가족은 전부 뺐습니다. 원본은 비공개 레포 `deeper-salon`의 `01-Grammar/Insights/260716-몸부터-일으키는-사람.md`에만 둡니다. 이후 유사한 과제도 같은 기준을 따릅니다.
- `assets/taeeumin-body.png`는 **햇살이 평생 이용권으로 정식 구매한 Getty Images 소재**(GettyImages-1305883689)에서 인물 하나만 잘라내 배경을 투명 처리한 것입니다. 라이선스가 없는 스톡 이미지는 이 저장소에 두지 않습니다.

---

*고요히, 마음에 머무는 글을 전하는 **포근나루***
