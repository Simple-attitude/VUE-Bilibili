<template>
  <div>
    <login-top middleTop="登录bilibili">
      <div style="font-size:3.611vw" slot="right" @click="$router.push('./register')">切换到注册</div>
    </login-top>
    <login-text lable="账号" placeholder="请输入账号" @inputChange='res=>model.username=res' ></login-text>
    <login-text lable="密码" placeholder="请输入密码" type="password" @inputChange='res=>model.password=res' ></login-text>
    <login-btn btntext="登录" @btnSubmit='btnSubmit'></login-btn>
  </div>
</template>

<script>
import LoginTop from "@/components/common/LoginTop";
import LoginText from "@/components/common/LoginText"
import LoginBtn from '@/components/common/LoginBtn'


export default {
  components: {
    LoginTop,
    LoginText,
    LoginBtn
  },
  data() {
    return {
      model:{
        username:'',
        password:''
      }
    }
  },
  methods: {
   async  btnSubmit(){
      let rulg = /^.{6,16}/   
      if (rulg.test( this.model.username)&&rulg.test( this.model.password)) {
        let res= await this.$http.post('/login',this.model)
        console.log(res)
        if(res.data.code==200){
          this.$msg.success(res.data.msg)
          localStorage.setItem('id',res.data.id)
          localStorage.setItem('token',res.data.token)
          setTimeout(() => {
            this.$router.push('/userinfo')
          }, 1000);
        }
        else{
         this.$msg.fail(res.data.msg)
        }
      }
      else{
        this.$msg.fail('你的格式输入有误')
      }
    }
  }
};

</script>

<style></style>
