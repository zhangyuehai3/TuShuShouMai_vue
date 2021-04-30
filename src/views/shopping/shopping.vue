<template>
  <div class="shopping">
    <el-header class="header">
      <div>i 读书</div>
      <el-button class="header-button" type="info" plain
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
         
        <div style="font-size: 25px">首页>我的购物车</div>
        
          <div class="fonter-picture">
            <div class="bbb">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleAllChange">全选</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <div class="aaa">
            <el-checkbox v-for="good in goods" :label="good.name" :key="good.id">
                <span style="width:150px;display:inline-block">商品名称： {{good.name}}</span>
                <span style="width:150px;display:inline-block;margin-left:100px;margin-right:100px">商品价格： {{good.price}} 元</span>
                <span> 商品数量：
                  <el-input-number v-model="good.num" @change="handleChangeNum(good.id)" label="描述文字" size="small"></el-input-number>
                  </span>
                <span style="width:150px;display:inline-block;margin-left:100px;margin-right:100px">小计： {{good.OnePrice}}元</span>
                <span @click.stop ="into(good.id)">x</span>
            </el-checkbox>
        </div>
        <div style="margin-top:40px;margin-left:450px;text-align:left">
            <span style="margin-right:20px;display:inline-block">总价：{{allPrice}}元</span>
            <el-button type="primary" size="small" @click="submitBtn">去结算<i class="el-icon-upload el-icon--right"></i></el-button>
        </div>

    </div>
 

  
      
         
         
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

export default {
  name: "shopping",
  props: {},
  data() {
            return {
          goods: [],
            checkAll: false,
            isIndeterminate: true,
            checkedGoods: [],
            allPrice: 0,
            
        
      
      }},
  created() {
    this.to()
  },
  mounted() {},
  watch: {},
  computed: {},
  methods: {
           handleAllChange(val) {
            console.log(val, "555");
            this.checkedGoods = val ? goodOptions : [];
            this.isIndeterminate = false;
            if (val) {
                this.getAllPrice();
            } else {
                this.allPrice = 0;
            }
        },
        handleOneChange(value) {
            let a = 0;
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.checkedGoods.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.checkedGoods.length;
            value.filter((it, id) => {
                if (it == this.goods[id].name) {
                    if (this.goods[id].OnePrice) {
                        a += this.goods[id].OnePrice;
                    }
                }
            });
            this.allPrice = a;
        },
        handleChangeNum(val) {
            this.goods.filter((it, id) => {
                if (it.id == val) {
                    it.OnePrice = it.num * it.price;
                }
            });
            this.getAllPrice();
        },
        getAllPrice() {
            //获取总价方法封装
            let money = 0;
            this.goods.filter((it, id) => {
                if (it.OnePrice) {
                    money += it.OnePrice;
                }
            });
            this.allPrice = money;
        },
        submitBtn() {
            this.$confirm( this.allPrice+"元", "所有商品总计",{
                confirmButtonText: "确定",
                callback: action => 
                    // this.$message({
                    //     type: "info",
                    //     message: "本次消费"+this.allPrice 
                    // });
                    
                  this.$router.push('/order')

                
            });
        },
        async to(){
          const {data} = await this.$http('shop.php')
        
          this.goods =data
          console.log(this.goods);
        },
        async into(id){
          const data =await this.$http({
          method:'post',
          url:'shopselect.php',
            headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
          data: {
          id:id,
        },
          transformRequest: [
          function (data) {
            // Do whatever you want to transform the data
            let ret = "";
            for (let it in data) {
              ret +=
                encodeURIComponent(it) +
                "=" +
                encodeURIComponent(data[it]) +
                "&";
            }
            return ret;
          },
        ],
        })
       this.$router.go(0)
        },
        
        },
       

        

  
  components: {},
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
        margin-top: 50px;
      width: 100%;
      height: 400px;

      padding: 30px;
      box-sizing: border-box;
    .bbb {
    margin-left: 40px;
    
}
.aaa > label {
    display: block;
    text-align: left;
    margin-top: 20px;
}
.el-checkbox {
    display: block;
    text-align: left;
}
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