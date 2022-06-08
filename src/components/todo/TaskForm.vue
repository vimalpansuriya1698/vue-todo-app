<template>
  <div class="task-form">
    <input
      type="text"
      v-model="newTask"
      placeholder="Add a new task"
      class="task-input"
      @keypress.enter="addTask"
    />
    <button @click="addTask" class="add-button">ADD</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.$store.dispatch("tasks/addNewTask", { taskName: this.newTask });
        this.newTask = "";
      }
    },
  },
};
</script>
<style lang="scss">
.task-form {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 480px;

  .task-input {
    appearance: none;
    border: none;
    outline: none;
    background-color: transparent;
    color: #000;
    font-size: 1.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin: 0;
    transition: 0.4s;
    border-bottom: 1px solid #abd699;
  }

  .add-button {
    appearance: none;
    border: none;
    outline: none;
    background-color: #abd699;
    font-weight: bold;
    color: #000;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    margin-left: 0.5rem;
    cursor: pointer;
  }
}
</style>
