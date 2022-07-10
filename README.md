# React + Spring Boot 연결

npm uninstall -g create-react-app (리액트 앱 제거)
npm install -g create-react-app (리액트 앱 재설치)
npx create-react-app hts_frontend (리액트 앱 실행)

# .prettierrc 파일생성

{
"singleQuote": true,
"semi": true,
"tabWidth": 2,
"trailingComma": "all",
"printWidth": 80
}

### 설정

- Springboot ^2.0
- JPA
- MyBatis
- MYSQL
- Maven
- Spring security
- Spring security taglibs
- JSTL
- React
- react-route-dom
- redux react-redux
- react-bootstrap bootstrap
- npm install @reduxjs/toolkit

###

- ESLint ( 문법 검사 )
- Reacts code nippets
- vscode-styled-components npm install --save styled-components
- npm install @reduxjs/toolkit

###

cd hts_frontend
npx create-react-app hts_ftrontend
npm i react-router-dom

###

netstat -ano 사용중인 포트 확인

yum remove -y httpd 기존 서버 삭제

yum remove tomcat9* jakarta* ecj eclipse-ecj redhat-lsb xalan-j2

# 설치된 목록 보기

yum list installed
yum check-update // 설치된 패키를 업데이트
sudo yum update
yum upgrade

파일을 갖고 있는 폴더(디렉토리) 삭제 : rm -r [dir path]
사용법 : find [찾을위치] -name [파일명]

chmod로 하위폴더까지 권한주기
[root@~/]# chmod 777 -R tomcat-connectors-1.2.48-src

filezilla로 편하게 삭제함

# node.js 설치

curl -o- -L https://yarnpkg.com/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node
node -e "console.log('Running Node.js ' + process.version)"

####

80번 포트로 구동 :
PORT=80 npm run start

####

node -v

nvm deactivate
nvm uninstall <version node>

node -v
npm cache clean
sudo npm install -g n lst

// 노드 설치후 추가 설치
npm install react-router-dom --save
npm install --save styled-components
npm install @reduxjs/toolkit

// 프록시 일단 막음
/home/ubuntu/awsHts/hts_frontend/node_modules/react-scripts/config# vi webpackDevServer.config.js

disableHostCheck:true,
// !proxy || process.env.DANGEROUSLY_DISABLE_HOST_CHECK === 'true',

### git 명령어

git remote add origin https://github.com/neosam32/awsHts.git 처음에만 해주나???

git add .
git commit -m " "
git push -f origin master /_ 강제로 push _/

git config --global user.name 'neosam32' //
git config --global user.password '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'

----- 새로만드는 경우
git init
git remote -v /_ 현재 깃의 리모트 설정 확인 _/
git remote add origin https://github.com/neosam32/awsHts.git

# linux 명령어

파일을 갖고 있는 폴더(디렉토리) 삭제 : rm -r [dir path] 사용법 : find [찾을위치] -name [파일명]-R

chmod로 하위폴더까지 권한주기 [root@~/]# chmod 777 -R tomcat-connectors-1.2.48-src

문제 : react-scripts: Permission denied
$ sudo chmod +x node_modules/.bin/react-scripts

백그라운드 실행
nohup PORT=80 npm run start &

자바위치
which java
apt-get install openjdk-8-jdk
vi /etc/profile

export PATH=$PATH:$JAVA_HOME/bin
source /etc/profile

readlink -f /usr/bin/java
/usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java 에서 bin/java 삭제

profile 수정 /usr/lib/jvm/java-8-openjdk-amd64/jre

# spring

// 최초 build
./mvnw clean package
BUILD SUCCESS 와 함께 다시 콘솔창이 뜨면 현재 디렉토리의 파일들 확인 후 target 폴더로 이동

ls -al // target 폴더가 존재할 것임
cd target
java - jar [빌드된 jar 파일 이름] &
