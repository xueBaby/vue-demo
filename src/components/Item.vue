<template>
  <!--一旦组件值是动态的就需要强制绑定  注意：写样式不用加""-->
  <li :style="{background: bgColor}" @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" style="display:none" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>
<script>
  export default {
    props: {
      todo: Object,
      deleteTodo: Function,
      index: Number
    },
    data () { // 定义初始化页面显示
      return {
        bgColor: 'white', //todo的背景颜色
        isShow: false// 删除是否显示
      }
    },
    methods: {
      //鼠标移入改变todo的背景颜色和添加删除
      handleEnter(isEnter){
//        if(isEnter){ //进入
//          this.bgColor = '#ccc';
//          this.isShow = 'true'
//        }else{  //离开
//          this.bgColor = '#fff';
//          this.isShow = 'false'
//        }
//       简化代码
        this.bgColor = isEnter ? '#ccc' : '#fff';
        this.isShow = isEnter;
      },
      deleteItem(){
        //获取todo和deleteTodo
        const {todo, deleteTodo, index} = this;
        if(confirm(`确认删除${todo.title}吗`)){
          deleteTodo(index)
        }
      }

    }
  }
</script>
<style scoped>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
