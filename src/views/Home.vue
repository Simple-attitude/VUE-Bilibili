<template>
  <div class="home">
    <nav-bar></nav-bar>
    <van-tabs v-model="active" swipeable animated>
      <van-tab
        v-for="(item, index) in category"
        :title="item.title"
        :key="index"
      >
      <swipe v-if="index==0"></swipe>
        <van-pull-refresh v-model="item.refreshing" @refresh="onRefresh">
          <van-list
            v-model="item.loading"
            :immediate-check="false"
            :finished="item.finished"
            finished-text="我也是有底线的哦！"
            @load="onLoad"
          >
            <div class="parent-item">
              <detail-item
                class="child-item"
                :item="categoryItem"
                v-for="(categoryItem, categoryIndex) in item.list"
                :key="categoryIndex"
              />
            </div>
          </van-list>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/common/NavBar";
import swipe from '@/components/home/swipe'
import detailItem from "@/components/home/detailItem";
export default {
  name: "Home",
  components: {
    NavBar,
    detailItem,
    swipe
  },
  data() {
    return {
      active: 0,
      category: [],
            images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
      ],
    };
  },
  created() {
    //获取所有数据
    this.getCategory();
  },
  methods: {
    async getCategory() {
      const res = await this.$http.get("/category");
      //将返回的数据放入changeCategory中形成新的category
      this.changeCategory(res.data);
    },
    //改变原有的category
    changeCategory(data) {
      const result = data.map((item, index) => {
        (item.list = []),
          (item.page = 0),
          (item.pagesize = 10),
          (item.loading = false),
          (item.finished = false),
          (item.refreshing = false);
        return item;
      });
      //指向同一个数据
      this.category = result;
      this.getCategoryItemList();
    },
    //根据active获取当前的分类
    getCategoryItem() {
      const categoryItem = this.category[this.active];
      return categoryItem;
    },
    //将获取的数据放入catagory中的list（通过map方法构造list）中，
    async getCategoryItemList() {
      //获取当前点击的栏目的categoryItem
      const categoryItem = this.getCategoryItem();
      const res = await this.$http.get("/detail/" + categoryItem._id, {
        params: {
          page: categoryItem.page,
          pagesize: categoryItem.pagesize,
        },
      });
      categoryItem.list.push(...res.data);
      categoryItem.loading = false;
      setTimeout(() => {
        categoryItem.refreshing = false;
        if (res.data.length < categoryItem.page) {
          categoryItem.finished = true;
        }
      }, 1000);
      //将获取到的数据放入list集合中
    },
    onRefresh() {
      const categoryItem = this.getCategoryItem();
      // 清空列表数据
      categoryItem.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      categoryItem.loading = true;
      this.onLoad();
    },
    onLoad() {
      const categoryItem = this.getCategoryItem();
      categoryItem.page += 1;
      this.getCategoryItemList();
    },
  },
  //获取监视active值得改变过去当前分类下的文章数据
  watch: {
    active() {
      this.getCategoryItemList();
    },
  },
};
</script>
<style>
.parent-item {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: white;
  margin: 10px;
}
.parent-item .child-item {
  width: 45%;
}
.swipe{
  margin: 10px 10px;
}
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    /* background-color: #39a9ed; */
  }
</style>
