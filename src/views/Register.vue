<template>
  <div>
    <login-top middleTop="注册bilibili">
      <div  style="font-size:3.611vw"  slot="right" @click="$router.push('./login')" >登录</div>
    </login-top>
    <login-text lable="姓名" placeholder="请输入姓名" style="margin:15px 0px;" @inputChange='res=>model.name=res' ></login-text>
    <login-text lable="账号" placeholder="请输入账号" @inputChange='res=>model.username=res' ></login-text>
    <login-text lable="密码" placeholder="请输入密码" type="password" @inputChange='res=>model.password=res' ></login-text>
    <login-btn btntext="注册" @btnSubmit='btnSubmit'></login-btn>
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
        name:'',
        username:'',
        password:''
      }
    }
  },
  methods: {
   async  btnSubmit(){
      let rulg = /^.{6,16}/   
      if (this.model.name!=""&&rulg.test( this.model.username)&&rulg.test( this.model.password)) {
        let res= await this.$http.post('/register',this.model)
        if(res.data.code==200){
          this.$msg.success(res.data.msg)
          setTimeout(() => {
            this.$router.push('/login')
          }, 1000);
          return
        }
        this.$msg.fail(res.data.msg)
      }
      else{
        this.$msg.fail('你的格式输入有误')
      }
    }
  }
};

</script>

<style></style>
