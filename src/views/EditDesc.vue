<template>
  <div>
    <nav-bar></nav-bar>
    <div class="banner" v-if="model">
      <div class="file">
        <div class="uploadfile">
          <van-uploader
            :after-read="afterRead"
            preview-size="100vw"
            class="childfile"
          />
        </div>
        <edit-banner left="头像">
          <img
            :src="model.user_img"
            slot="right"
            v-if="model.user_img"
            alt=""
          />
          <img
            v-else
            slot="right"
            src="../assets/images/default_img.jpg"
            alt=""
            srcset=""
          />
        </edit-banner>
      </div>

      <edit-banner left="昵称" @changeDesc="showName = true">
        <div slot="right">
          {{ model.name }}
        </div>
      </edit-banner>
      <edit-banner left="账号">
        <div slot="right">
          {{ model.username }}
        </div>
      </edit-banner>
      <edit-banner left="性别" @changeDesc="showGender=true">
        <div slot="right">
          <span v-if="model.gender == 0">男</span>
          <span v-else-if="model.gender == 1">女</span>
          <span v-else>保密</span>
        </div>
      </edit-banner>
      <edit-banner left="个人签名" @changeDesc="showDesc = true">
        <div slot="right">
          {{ model.user_desc }}
        </div>
      </edit-banner>
    </div>
    <div class="edit-button">
      <div @click="outLogin">
        <edit-button style="border-bottom: 1px solid #EEEEEE;">
          <span slot="text">退出登录</span>
        </edit-button>
      </div>
      <div @click="$router.push('/userinfo')">
        <edit-button>
          <span slot="text">返回空间</span>
        </edit-button>
      </div>
    </div>
    <van-dialog
      v-model="showName"
      title="昵称"
      show-cancel-button
      @confirm="changeName"
      @close="content = ''"
    >
      <van-field
        v-model="content"
        placeholder="请输入昵称"
        type="text"
        autofocus
      />
    </van-dialog>
    <van-dialog
      v-model="showDesc"
      title="个性签名"
      show-cancel-button
      @confirm="changeDesc"
      @close="content = ''"
    >
      <van-field
        v-model="content"
        placeholder="请输入个性签名"
        type="textarea"
        rows="1"
        autosize
        autofocus
      />
    </van-dialog>
    <van-action-sheet
      v-model="showGender"
      :actions="actions"
      cancel-text="取消"
      close-on-click-action
      @cancel="onCancel"
      @select="onSelect"
    />
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar";
import EditBanner from "@/components/common/EditBanner";
import EditButton from "@/components/common/EditButton";
export default {
  name: "EditDesc",
  components: {
    NavBar,
    EditBanner,
    EditButton,
  },
  data() {
    return {
      model: {},
      content: "",
      showName: false,
      showDesc: false,
      showGender:false,
      actions: [{ name: '男',val:0 }, { name: '女',val:1 }, { name: '保密',val:'3' }],
    };
  },
  created() {
    this.getUserData();
  },
  methods: {
    async getUserData() {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      this.model = res.data[0];
    },
    outLogin() {
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      this.$msg.success("退出登录成功");
      setTimeout(() => {
        this.$router.push("/login");
      }, 1000);
    },
    async afterRead(file) {
      const formdata = new FormData();
      formdata.append("file", file.file);
      const res = await this.$http.post("/upload", formdata);
      this.model.user_img = res.data.url;
      this.uploadModel();
    },
    async uploadModel() {
      const res = await this.$http.post(
        "/update/" + localStorage.getItem("id"),
        this.model
      );
      if (res.data.code == 200) {
        this.$msg.success("编辑成功");
      }
    },
    changeName() {
      if (this.content) {
        this.model.name = this.content;
        this.uploadModel();
        this.content = "";
        return;
      }
    },
    changeDesc() {
      if (this.content) {
        this.model.user_desc = this.content;
        this.uploadModel();
        this.content = "";
        return;
      }
    },
    onSelect(item){
      this.model.gender=item.val
      this.uploadModel()
    },
    onCancel(){
      this.showGender=false
    }
  },
};
</script>

<style>
.banner {
  margin-top: 2.778vw;
  background-color: white;
  margin-bottom: 5.556vw;
}
.banner img {
  height: 16.111vw;
  width: 16.111vw;
  border-radius: 8.056vw;
}
.file {
  position: relative;
  overflow: hidden;
}
.file .childfile {
  opacity: 0;
  position: absolute;
}
</style>
