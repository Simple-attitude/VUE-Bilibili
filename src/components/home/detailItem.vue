<template>
  <div>
    <div class="parent" @click="pushRouter">
      <img :src="item.img" style="width:100%;height:27.778vw" />
      <div class="child">
        <div>
          <svg
            style="position:relative; top:2px;"
            t="1597398956135"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1303"
            width="12"
            height="12"
          >
            <path
              d="M512 947.2c-240.128 0-435.2-195.072-435.2-435.2s195.072-435.2 435.2-435.2 435.2 195.072 435.2 435.2-195.072 435.2-435.2 435.2z m0-828.928c-217.088 0-393.728 176.64-393.728 393.728s176.64 393.728 393.728 393.728 393.728-176.64 393.728-393.728-176.64-393.728-393.728-393.728z"
              p-id="1304"
              fill="#fcfcfa"
            ></path>
            <path
              d="M436.736 654.848c-5.632 0-11.264-1.536-16.384-4.608-9.216-5.632-14.848-15.36-14.848-26.624V399.872c0-10.752 5.632-20.48 14.848-26.624 9.216-5.632 20.48-6.144 30.208-1.536l224.256 112.128c10.752 5.12 17.408 15.872 17.408 27.648s-6.656 22.528-17.408 27.648l-224.256 112.64c-4.608 2.048-9.216 3.072-13.824 3.072z m10.24-238.08v190.464l190.464-95.232-190.464-95.232z"
              p-id="1305"
              fill="#fcfcfa"
            ></path></svg
          >&nbsp;&nbsp;&nbsp;321
        </div>
        <div>
          <svg
            style="position:relative; top:2px;"
            t="1597399200981"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1720"
            width="12"
            height="12"
          >
            <path
              d="M800 128H224C134.4 128 64 198.4 64 288v448c0 89.6 70.4 160 160 160h576c89.6 0 160-70.4 160-160V288c0-89.6-70.4-160-160-160z m96 608c0 54.4-41.6 96-96 96H224c-54.4 0-96-41.6-96-96V288c0-54.4 41.6-96 96-96h576c54.4 0 96 41.6 96 96v448z"
              p-id="1721"
              fill="#ffffff"
            ></path>
            <path
              d="M240 384h64v64h-64zM368 384h384v64h-384zM432 576h352v64h-352zM304 576h64v64h-64z"
              p-id="1722"
              fill="#ffffff"
            ></path></svg
          >&nbsp;&nbsp;&nbsp;{{ item.commentlen ? item.commentlen : 66 }}
        </div>
      </div>
    </div>
    <div>
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "detailItem",
  props: ["item"],
  methods: {
    pushRouter() {
      if (this.$route.path != `/article/${this.item.id}`) {
        this.$router.push(`/article/${this.item.id}`);
      }
      
    },
  },
};
</script>

<style>
.parent {
  position: relative;
}
.parent .child {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 1.667vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 0 1.389vw;
  color: white;
  font-size: 3.333vw;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.85), transparent);
}
</style>
