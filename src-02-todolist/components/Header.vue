<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="addTitle" v-model="title"/>
  </div>
</template>
<script>
  export default {
    props: {
      addTodo:{
        type: Function,
        required: true
      }
    },
    data () {//初始化状态
      return {
        title: ''
      }
    },
    methods: {
      addTitle () {
        //根据输入的数据，封装一个todo对象
        const title = this.title.trim();
        if(!title){
          return console.log('必须输入');//此时return就是为了结束
        }
        const todo = {
          title,
          complete: false
        }
        //调用addTodo添加todo
        this.addTodo(todo);
//        清除输入
        this.title= '';//双向数据绑定，通过data来显示页面
      }
    }
  }
</script>
<style scoped>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }
  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
