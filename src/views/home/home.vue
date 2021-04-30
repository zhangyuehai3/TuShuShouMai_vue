<template>
  <div class="home">
    <el-header class="header">
      <div>i 读书</div>
      <span v-if="cookie" style="margin-left:100px">欢迎用户为 {{cookie}}的登录----</span>
      <el-button @click="to" class="header-button" type="info" plain
        ><i class="el-icon-goods"></i>我的购物车</el-button
      >
    </el-header>
    <div class="elmian">
      <div class="main">
        <ui class="main-left">
          <router-link :to="{path:'Home'}">
            <li>首页</li>
          </router-link>
          
          <router-link :to="{path:'Shop'}">
            <li>全部商品</li>
          </router-link>
        </ui>
        <ui class="main-right">
          <router-link :to='{path:"Register"}'>
            <li >登录</li>
          </router-link>
          |
           <router-link :to="{path:'Logon'}">
            <li>注册</li>
          </router-link>
          
          
        </ui>
      </div>
    </div>

    <div class="carousel">
      <div class="carousel-main">
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="(item,key) in picture" :key="key">
            <img style=" width: 100%;height: 100%;" :src="item.pic" class="medium">
          </el-carousel-item>
        </el-carousel>
        <div style="font-size: 25px">最新商品</div>
        <div class="fonter-one"></div>
        <div class="fonter-two"></div>
        
        <div @click="$router.push({path:'/one',query:{productId: item.pid-1}})" class="fonter-picture" v-for="(item,key) in picture" :key="key" :item="item">
      <img width="100%" height="100%" :src="item.pic" alt="" />
          <p>{{item.title}}</p>
          <p class="picture">{{item.price}}</p>
    </div>
        

            
          
       
      </div>
   
    </div>
  
  <div class="footer2">
       <div class="button1">
        <div class="button-main">
          <div class="button-left">
            <tr>
              <th>关于i读书</th>
              <th>发展历程</th>
              <th>企业文化</th>
              <th>加入我们</th>
              <th>联系我们</th>
            </tr>
            <tr>
              <th>购物指南</th>
              <th>购物流程</th>
              <th>会员介绍</th>
              <th>常见问题</th>
              <th>联系客服</th>
            </tr>
            <tr>
              <th>配送方式</th>
              <th>快递直达</th>
              <th>网点自取</th>
              <th>配送费收取标准</th>
              <th>配送服务查询</th>
            </tr>
            <tr>
              <th>支付方式</th>
              <th>货到付款</th>
              <th>在线支付</th>
              <th>分期付款</th>
              <th></th>
            </tr>
          </div>
          <div class="button-right">
            <i class="el-icon-phone-outline"></i>
            <div>
              <p>客服热线</p>
              <p>4008-220-220</p>
            </div>
          </div>
        </div>
      </div>
      <div class="footer1">
        <div class="footer1-one">
          <div>Copyrightc 2016 iqianduan.com,All Rights Reserved 版权所有</div>
          <div>
            北京爱读书教育科技有限公司京ICP备123456号-1京公网安备110180201608号
          </div>
        </div>
  </div>
  </div>
  </div>
</template>

<script>
import contentpicture from '../../components/contentpicture/contentpicture'
export default {
  name: "home",
  props: {},
  data() {
    return {
      picture:[],
    };
  },
  created() {
    this.req()
  },
  mounted() {},
  watch: {},
  computed: {
    cookie(){
      return this.getCookie('uname')
    }
  },
  methods: {
    async req(){
       const {data} = await this.$http.get('product.php')
       
     this.picture =data
     
    },

 
    to(){
     const a =this.getCookie('uname')
      console.log(a);
      if(a!=""){
        this.$router.push('/shopping')
      }else{
              this.$confirm( "当前用户未登录，是否前往登录...",{
                confirmButtonText: "宝贝登录点我",
                callback: action => 
                    // this.$message({
                    //     type: "info",
                    //     message: "本次消费"+this.allPrice 
                    // });
                    
                  this.$router.push('/register')

                
            });
      }

    },
getCookie(cookieName) {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split("; ");
    for(var i = 0; i < arrCookie.length; i++){
        var arr = arrCookie[i].split("=");
        if(cookieName == arr[0]){
            return arr[1];
        }
    }
    return "";



  },},
  components: {
contentpicture
  },
};
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
}
.header {
  width: 80%;
  margin: 0 auto;

  div {
    display: inline-block;
    color: rgb(87, 188, 76);
    font-size: 50px;
    font-weight: 500px;
  }
  .header-button {
    display: inline-block;
    margin-top: 2%;
    float: right;
  }
  i {
    color: green;
  }
}
.elmian {
  margin-top: 20px;
  width: 100%;

  background-color: green;

  .main {
   
    margin-top: 0px;
    display: block;
    width: 90%;
    margin: 0 auto;

    .main-left {
      display: inline-block;
      li {
        display: inline-block;
        color: rgb(255, 255, 255);
        width: 100px;
        height: 50px;
        font-size: 20px;
        text-align: center;
        line-height: 50px;
      }
    }
    .main-right {
      display: inline-block;
      float: right;
      li {
        display: inline-block;
        display: inline-block;
        color: rgb(255, 255, 255);
        width: 100px;
        height: 50px;
        font-size: 20px;
        text-align: center;
        line-height: 50px;
      }
    }
  }
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.carousel {
  position: relative;

  .carousel-main {
    width: 80%;
    margin: 0 auto;
    .fonter-one {
      display: inline-block;
      background-color: rgb(87, 188, 76);
      width: 10%;
      height: 2px;
    }
    .fonter-two {
      display: inline-block;
      background-color: black;
      width: 90%;
      height: 2px;
    }
      .fonter-picture {
      width: 25%;
      height: 300px;
      display: inline-block;
      padding: 30px;
      box-sizing: border-box;
      img {
        width: 100%;
      }
      .picture {
        color: rgb(255, 102, 0e);
      }
    }

  }
  
}
.footer2{
  width: 100%;
  box-shadow: 2px -3px rgba(238, 238, 238,0.1);
  .button1 {
    width: 100%;
    background-color: rgb(238, 238, 238);
    .button-main {
      border-bottom: 2px solid rgb(238, 238, 238);
      width: 80%;
      margin: 0 auto;

      .button-left {
        color: rgb(125, 125, 134);
        display: inline-block;
        width: 60%;
        tr {
          width: 150px;
          height: 20px;
        }
        th {
          width: 150px;
        }
      }
      .button-right {
        display: inline-block;
        width: 40%;
        box-sizing: border-box;
        padding-left: 150px;

        i {
          display: inline-block;
          font-size: 80px;
        }

        div {
          display: inline-block;
          p {
            font-size: 20px;
          }
        }
      }
    }
  }
  .footer1 {
    width: 100%;
    background-color: rgb(238, 238, 238);
    .footer1-one {
      width: 50%;

      margin: 0 auto;
      div {
        text-align: center;
        color: rgb(171, 160, 160);
      }
    }
  }
}
</style>