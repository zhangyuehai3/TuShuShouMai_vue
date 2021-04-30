<template>
    <div class="fonter-picture">
      <img width="100%" height="100%" :src="item.pic" alt="" />
          <p>{{item.title}}</p>
          <p class="picture">{{item.price}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    props: {
        item:{
            type:Object,
            require:true
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped lang="less">
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
  
</style>
