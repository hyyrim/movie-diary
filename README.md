# Moviary

**미리보기**
![moviary](https://user-images.githubusercontent.com/84282163/151801478-2af3083c-1cd4-498a-84e1-d94a27ac9389.gif)

### 🔗 배포주소

https://moviary.netlify.app

<br>

## 🗒️ 프로젝트 소개

클론 코딩이 아닌, 실제로 사용할 수 있는 사이트를 만들고 싶다고 생각했습니다. 지금까지 본 영화가 680편을 넘을 정도로 영화 보는 것을 좋아하기도 하고, 매일 다이어리로 하루를 기록하고 있기 때문에 이것을 합친 Movie + Diary인 ‘Moviary’를 기획하게 되었습니다.

<br>

## 💻 프로젝트 기능

- Google / Github 로그인
- 포스터 이미지 업로드
- 영화 순위 확인
- 영화 검색
- 다이어리 글 추가 / 수정 / 삭제
- 데이터베이스 저장
- 반응형

<br>

## 📅 기간

2022/01/20 ~ 2022/01/24

<br>

## 🛠 기술 스택

- React & Router
- Open API
- Firebase
- Cloudinary
- Axios
- PostCSS
- React-icons
- Netlify

<br>

## 📁 구현 계획

1. Header / Footer
2. Login
3. MainPage
   1. MovieSearch
      1. Movie
      2. MovieResult
   2. Diary
      1. Post
      2. Button / ImageFileInput
      3. PostAddForm / PostEditForm
4. Database 연동
5. 최적화
6. UI 수정
7. 배포 & 피드백

<br>

## 어려웠던 부분 / 완성하지 못한 기능

처음엔 네이버에서 제공하는 API를 사용하려고 했다. 하지만 해당 API는 CORS 에러가 해결되지 않아서, (프록시를 추가해도 개발환경에서만 돌아가고 배포는 안된다고한다. ) 한국진흥위원회에서 제공하는 API를 사용했다. 이 API는 포스터를 제공하지 않아서 아쉬웠다.

⇒ 포스터가 없다면 영화느낌이 나지 않기때문에, 아쉬운대로 클라우디너리를 사용해 이미지를 업로드할 수 있게 만들었다.

<br>

**노션 📝** <br>
https://www.notion.so/hyyrim/Movie-Diary-Moviary-4edff8fb404d44e299d5af80f75dee74
