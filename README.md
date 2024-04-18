# 📏Resize Markdown image


👉 https://muyaaho.github.io/resize-markdown-img/ 

## 📖 Description
깃허브에서 마크다운 작성할 때 이미지가 항상 커지고, 쉽게 사이즈를 바꿀 수 없는 문제를 해결하고자 만든 페이지 입니다.
url과 조정할 크기를 작성하면 작성된 크기의 이미지 태그를 리턴합니다.

이미지 태그 위, 아래에 글 작성 시 아래 그림처럼 줄바꿈이 되지 않아 양 끝에 `<br>` 태그를 추가했습니다.
![image](https://github.com/muyaaho/resize-markdown-img/assets/76798969/952fe589-155b-400f-ba95-81c3bec39d48)


## 🐥 How to use


1. 이미지 경로와 크기를 입력합니다.
   ![image](https://github.com/muyaaho/resize-markdown-img/assets/76798969/5a7dbce7-66b8-43ad-b3bb-56554a009798)
   
2. 결과로 나온 url을 마크다운에 붙여넣고 사용합니다. (`ctrl + A` 전체선택 가능)
   적용 전
   ![image](https://github.com/muyaaho/resize-markdown-img/assets/76798969/6f92fdf6-bb1b-4832-acae-5163b9ad8534)
   젹용 후(80%) <br>
   <img src=https://github.com/muyaaho/resize-markdown-img/assets/76798969/6f92fdf6-bb1b-4832-acae-5163b9ad8534 width="80%" height="80%"/>

입력 시 `![image](https://github.com/muyaaho/project-board/assets/76798969/627c42c7-7e29-4f0a-9dcc-6ebb0dd4b1f2)` 같은 형식을 사용합니다.


## 🔎 
- 깃허브 페이지는 static website만 지원해서 뒤로가기 기능을 만들기 위해 post로 값들을 넘기려 했는데 그럴 수 없었습니다.
- 여러가지 하고 싶은 것들이 많았는데 제약이 있어 프로젝트는 여기서 마감하겠습니다.
- 뒤로가기에 집착을 많이 했는데 뒤로가기 대신 새로고침을 하면 깃허브 페이지로 넘어가지 않고 url 페이지로 넘어가긴 합니다.
