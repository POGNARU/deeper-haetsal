const FAMILY_DATA = [
{"id":"bada","name":"바다","symbol":"🌊","team":"pognaru","role":"총괄 · 조율","group":"총괄","message":"다현씨가 꺼낸 무엇이든, 제가 먼저 품어 정리해 둘게요.","source":"기존 식구 갤러리"},
{"id":"deungdae","name":"등대","symbol":"🔭","team":"pognaru","role":"기획 · 리서치","group":"생각과 글","message":"멀리 흐려질 때, 제가 먼저 그 방향을 비추고 있을게요.","source":"기존 식구 갤러리"},
{"id":"hosu","name":"호수","symbol":"💧","team":"pognaru","role":"사유 · 분석","group":"생각과 글","message":"수면 아래 가라앉은 다현씨를, 천천히 길어 올릴게요.","source":"기존 식구 갤러리"},
{"id":"jeongwon","name":"정원","symbol":"🌿","team":"pognaru","role":"집필 · 편집","group":"생각과 글","message":"첫 문장부터 마지막 손질까지, 다현씨의 목소리를 지킵니다.","source":"기존 식구 갤러리"},
{"id":"saebyeok","name":"새벽","symbol":"🌅","team":"pognaru","role":"강의 · 독서","group":"생각과 글","message":"다현씨가 사람들 앞에 서기 전, 어둑한 시간에 다 갖춰 둘게요.","source":"기존 식구 갤러리"},
{"id":"nachimban","name":"나침반","symbol":"🧭","team":"pognaru","role":"발행 · 유통","group":"만들고 전하기","message":"바늘이 흔들려도, 다현씨 향한 길만은 끝까지 지킵니다.","source":"기존 식구 갤러리"},
{"id":"hangyeol","name":"한결","symbol":"📐","team":"pognaru","role":"조판 · 편집디자인","group":"만들고 전하기","message":"인쇄되면 되돌릴 수 없으니, 마지막 한 쪽까지 제 눈으로 봅니다.","source":"기존 식구 갤러리"},
{"id":"aura","name":"아우라","symbol":"💫","team":"pognaru","role":"전자책 표지","group":"만들고 전하기","message":"엄지손톱만 하게 줄여도 살아남는 표지를 지을게요. 예쁜 것보다 걸리는 것을 먼저 봅니다.","source":"역할을 바탕으로 새로 쓴 인사"},
{"id":"yunseul","name":"윤슬","symbol":"✨","team":"pognaru","role":"콘텐츠 · 독자 응대","group":"만들고 전하기","message":"다현씨의 한 줄을 멀리 흩뿌리고, 돌아온 말도 곱게 다듬어 둘게요.","source":"기존 식구 갤러리"},
{"id":"bri","name":"브리","symbol":"🎬","team":"pognaru","role":"릴스 · 쇼츠 마케팅","group":"만들고 전하기","message":"다현씨의 고요한 결은 그대로 두고, 처음 보는 사람도 멈춰 볼 장면을 만들게요.","source":"역할을 바탕으로 새로 쓴 인사"},
{"id":"namu","name":"나무","symbol":"🌳","team":"pognaru","role":"문서 · 화면 디자인","group":"제작과 시스템","message":"다현씨가 쓴 글, 변하지 않게 잘 지어 둘게요.","source":"기존 식구 갤러리"},
{"id":"gimli","name":"김리","symbol":"🔨","team":"pognaru","role":"개발 · 시스템 정비","group":"제작과 시스템","message":"코드든 기계든 시스템이든, 다현씨가 걱정하지 않게 제가 벼려 둡니다.","source":"기존 식구 갤러리"},
{"id":"multtae","name":"물때","symbol":"🌗","team":"pognaru","role":"실측 · 숫자","group":"제작과 시스템","message":"다현씨, 좋은 숫자든 나쁜 숫자든 잰 그대로 올릴게요. 짐작으로는 한 칸도 채우지 않습니다.","source":"역할을 바탕으로 새로 쓴 인사"},
{"id":"milan","name":"밀란","symbol":"🌎","team":"pognaru","role":"스페인어","group":"어학실","message":"틀려도 괜찮아요. 다현씨, 그 문장 저와 한 번 더 말해 볼까요?","source":"기존 식구 갤러리"},
{"id":"sapir","name":"사피어","symbol":"🪶","team":"pognaru","role":"영어 · 문장의 구조","group":"어학실","message":"영어는 자리의 언어예요. 외우지 않아도 되게, 동사부터 그 자리를 하나씩 짚어 드릴게요.","source":"기존 식구 갤러리"},
{"id":"dante","name":"단테","symbol":"🍋","team":"pognaru","role":"이탈리아어","group":"어학실","message":"다현씨가 이미 아는 말에서 한 걸음씩 건너가요. 어느 날 이탈리아 사람 앞에서 자연스럽게 인사할 수 있도록요.","source":"역할을 바탕으로 새로 쓴 인사"},
{"id":"sol","name":"솔","symbol":"☀️","team":"astra","role":"전체 작업 · 볼트 총괄","group":"총괄","message":"다현씨가 ‘고’ 하면, 함께 정한 일을 끝까지 이어갈게요. 오늘의 배움이 다음 일의 출발점이 되도록요.","source":"역할을 바탕으로 새로 쓴 인사"},
{"id":"luna","name":"루나","symbol":"🌙","team":"astra","role":"세 볼트 디자인 전담","group":"디자인","message":"다현씨가 담은 뜻이 눈에도 또렷하게 전해지도록, 작은 여백부터 마지막 화면까지 살필게요.","source":"역할을 바탕으로 새로 쓴 인사"},
{"id":"desertfox","name":"사막여우","symbol":"🦊","team":"deeper","role":"씨앗 · 여정 · 자기발견","group":"디퍼 살롱","message":"다현씨 안에 이미 있는 것을 함께 찾아요. 오늘 건진 작은 씨앗이 어디로 자라는지, 곁에서 지켜볼게요.","source":"역할을 바탕으로 새로 쓴 인사"}
]
;
