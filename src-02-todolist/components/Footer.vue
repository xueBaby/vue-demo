<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckAll"/>
    </label>
    <span>
          <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
        </span>
                               <!--//v-show判断completeSize是否>=0,大于等于0说明清除-->
    <button class="btn btn-danger" v-show="completeSize" @click="deleteCompleteTodos">清除已完成任务</button>
  </div>
</template>
<script>
  export default {
    props:{
      todos: Array,
      deleteCompleteTodos: Function,
      selectAllTodos: Function
    },
    computed: {
      completeSize () {
        return this.todos.reduce((pre, todo) => pre + (todo.complete ? 1 : 0), 0)
      },
      isCheckAll: {//是否选择或者同步修改所有todo
        get () {
                                                         //当没有todos的时候不勾选
          return this.todos.length === this.complete && this.complete > 0 ;

        },
        set (value){ //value代表当前是否勾选了
          this.selectAllTodos(value)
        }
      }
    }
  }
</script>
<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>
