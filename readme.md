# new notice board

## 1. app.js 생성 후 express 모듈 불러오기

-  1.1 app 안에 담기

## 2. MVC의 V(view) 분리하기
- 2-1. 앱세팅 - app.set을 통해 ("저장될 파일", "파일이 저장될 폴더 이름")
- 2-2. 생성될 html 코드들을 어떤 엔진으로 해석할지 정해준다. - ("view engine", "어떤걸 사용할지")
- 2-3. views 폴더 안에 home폴더를 만들고 첫화면과 로그인화면의 ejs파일을 만든후 내용 입력

## 3.routing 분리하기
- routing을 관리할 폴더와 파일.js를 만들어 준다
- 3-1 안에 express와 express.Router을 express 와 router에 담는다.
- 3-2 router get (열릴 주소, 열리면 실행될 행동) 을 불러온다.
- * 위 열리면 실행될 행동을 '컨트롤러'라 하고 컨트롤러 를 분리한다.

- 3-2* 같은 폴더에 컨트롤 파일을 만들어 준 후 실행될 행동을 정의한다.
- 3-2* const 행동1 = (req,res)=> {res.render(home/첫화면파일)} 
- 3-2* const 행동2 = (req,res)=> {res.render(home/로그인파일)}
- 3-2* module.exports를 통해 내보내준다 (2개의 파일이니 객체로 내보낸다.)
- 3-3 3-2에서 불러온 후에 module.exports를 통해 내보낸다. 
- 3-4 routing을 관리할 파일에서 컨트롤러를 정의한후 require을 통해 컨트롤러 주소를 불러온다
- 3-5 불러온후 열리면 실행될 행동에 ctrl 정의를 추가해준다.

## 4. app.js에서 home으로 정의 한 후 라우터의 파일들을 명시해 불러온다.

## 5. app.use를 통해 (열릴주소, 라우팅 정의) 미들웨어를 등록한다.

## 6. PORT를 연결하는 app.listen 을 모듈화 = 서버가동

- 6-1 app.js 에서 app을 exports 한 후
- 6-2 폴더를 만들고 그 안에 서버를 가동시킬 js파일을 만든다.
- 6-3 bin 폴더안의 파일이기때문에 상위폴더의 표시인 ../ 와 app을 exports한 app 파일을 불러온다 = "../app"
- 6-4 PORT를 정의해준다.
- 6-5 app.listen 을 한 후 (PORT,화살표함수=>{console.log('서버가동')})을 통해 서버가 연결된것을 표시