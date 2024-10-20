<script setup>

function showContent(content, element) {
  document.getElementById('ContentDisplay').innerText = content;
  const navItems = document.querySelectorAll('.sidebar-item');
  navItems.forEach(item => {
    item.classList.remove('active');
  });
  element.classList.add('active');
}
</script>

<template>

  <div class="flex flex-row bg-orange-100">
    <div class="basis-5/6 bg-blue-300">
      关于我们
    </div>

    <div class="basis-1/6 bg-blue-800 flex flex-col">
      导航栏
      <a href="#TeamProfile" onclick="showContent('内容一', this)">团队简介</a>
      <a href="#Merchantcooperation" onclick="showContent('内容二', this)">商家合作</a>
      <a href="#ContactUs" onclick="showContent('内容三', this)">联系我们</a>
      <a href="#Suggestion" onclick="showContent('内容四', this)">建议反馈</a>
      <a href="#CommonProblem" onclick="showContent('内容五', this)">常见问题</a>
      <a href="#PrivacyPolicy" onclick="showContent('内容六', this)">隐私条款</a>
      <a href="#UserAgreement" onclick="showContent('内容七', this)">用户协议</a>
    </div>

  </div>

</template>


<style scoped>
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: antiquewhite;
  display: flex;
  flex-direction: column;
}

header {
  background-color: white;
  padding-left: 5vw;
  height: 12vh;
  position: relative;
  z-index: 1;
}

header ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: absolute;
  top: 15%;
  margin-left: 20vw;
  z-index: 100;
}

.name {
  position: absolute;
  top: 15%;
}

.name h1 {
  font-size: 1.2vw;
  color: black;
}

.name h2 {
  font-size: 1vw;
  color: darkgrey;
}

li {
  float: left;
}

li a {
  display: block;
  color: black;
  text-align: center;
  padding: 2.5vh 2vw;
  text-decoration: none;
}

li a:hover {
  background-color: antiquewhite;
}

.search-form {
  display: flex;
  align-items: center;
  position: absolute;
  top: 25%;
}

.search-input {
  flex: 1;
  border: 0.2vw solid #ccc;
  border-radius: 0.4vw;
  font-size: 1vw;
  background-color: white;
  background-image: url('https://static.jyshare.com/images/mix/searchicon.png');
  background-position: 1.2vh 0.7vw;
  background-repeat: no-repeat;
  padding: 1.5vh 1.5vw 1.5vh 4vw;
  margin-left: 40vw;
}

.button {
  display: inline-block;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  border-radius: 1vw;
  padding: 1.2vh 1vw;
}

.button1 {
  font-size: 1vw;
  color: black;
  background-color: white;
  border: 0.2vw solid #ccc;
  box-shadow: 0 0.4vw #999;
}

.button1:hover {
  background-color: antiquewhite;
}

.button1:active {
  background-color: antiquewhite;
  box-shadow: 0 0.4vw #666;
  transform: translateY(0.4vw);
}

.button2 {
  font-size: 1vw;
  width: 6vw;
  transition: all 0.5s;
  margin: 0.4vw;
  color: white;
  border: none;
  float: right;
  position: relative;
  top: 25%;
}

.button2 span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button2 span:after {
  content: '»';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -1.5vw;
  transition: 0.5s;
}

.button2:hover span {
  padding-right: 1.5vw;
}

.button2:hover span:after {
  opacity: 1;
  right: 0;
}

.button3 {
  background-color: darksalmon;
  margin-right: 5vw;
}

.button4 {
  background-color: darkorange;
}

footer {
  background-color: white;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1vh 0;
  display: flex;
  justify-content: center;
}

footer ul {
  list-style-type: none;
  margin: auto;
  padding: 0;
  overflow: hidden;
}

.content {
  flex: 1;
  overflow-y: auto;
  background: white;
  width: 55vw;
  height: 550px;
  margin: 10px auto 90px auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.content::-webkit-scrollbar {
  display: none;
}

.sidebar {
  flex: 1;
  overflow-y: auto;
  width: 6vw;
  height: 65vh;
  background-color: white;
  color: black;
  padding: 15px;
  position: fixed;
  padding-top: 5vh;
  margin: 15vh auto auto 4vw;
}

.sidebar::-webkit-scrollbar {
  display: none;
}

.sidebar a {
  color: black;
  cursor: pointer;
  text-decoration: none;
  display: block;
  padding: 10px 10px;
}

.sidebar a:hover {
  background-color: antiquewhite;
  border-radius: 1vw;
}

.sidebar-item.active {
  color: darkorange;
}
</style>