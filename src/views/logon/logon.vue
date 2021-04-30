<template>
  <div class="logon">
    <el-header class="header">
      <div>i 读书</div>
      <el-button class="header-button" type="info" plain
        ><i class="el-icon-goods"></i>我的购物车</el-button
      >
    </el-header>
    <div class="elmian">
      <div class="main">
        <ui class="main-left">
          <router-link :to="{ path: 'Home' }">
            <li>首页</li>
          </router-link>

          <router-link :to="{ path: 'Shop' }">
            <li>全部商品</li>
          </router-link>
        </ui>
        <ui class="main-right">
          <router-link :to="{ path: 'Register' }">
            <li>登录</li>
          </router-link>
          |
          <router-link :to="{ path: 'Logon' }">
            <li>注册</li>
          </router-link>
        </ui>
      </div>
    </div>
    <div class="logon-one">
      <div class="logon-one-center">
        <div class="logon-one-center-div">新用户注册</div>

        <el-form
          style="margin-top: 20px"
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="账号" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button
              style="display: inline-block; margin-left: 40%"
              type="primary"
              @click="submitForm()"
              >立即创建</el-button
            >
          </el-form-item>
        </el-form>
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
  name: "logon",
  props: {},
  data() {
    return {
      ruleForm: {
        name: "",
        password: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入账号名称", trigger: "blur" },
          {
            min: 3,
            max: 15,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 3,
            max: 15,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    async submitForm() {
      const data = await this.$http({
        method: "POST",
        url: "zhuce.php",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: {
          uname: this.ruleForm.name,
          phone: this.ruleForm.password,
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
      });
      this.$message({
        type: "success",
         message: '注册成功',
        
      });
      this.$router.push('/register')
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {},

  components: {},
};
</script>
<style lang="less" scoped>
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
.logon-one {
  box-sizing: border-box;
  padding: 5%;
  width: 100%;
  height: 500px;
  .logon-one-center {
    border: 2px solid rgb(221, 221, 221);
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.2);
    padding: 3%;
    box-sizing: border-box;
    width: 80%;
    margin: 0 auto;
    height: 450px;
    .logon-one-center-div {
      width: 50%;
      font-size: 36px;
      color: rgb(255, 173, 75);
      text-align: center;
      border-bottom: 1px solid rgb(221, 221, 221);
      margin: 0 auto;
    }
  }
}
.footer2 {
  width: 100%;
  margin-top: 50px;
  box-shadow: 2px -3px rgba(238, 238, 238, 0.1);

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