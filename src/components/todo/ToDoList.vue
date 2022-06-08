<template>
  <div class="main">
    <h1 class="mainHeading">TO DO LIST</h1>
    <p class="subHeading">Create a list of tasks :</p>
    <TaskForm />
    <div class="tasks">
      <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
    </div>
  </div>
</template>

<script>
import TaskItem from "@/components/todo/TaskItem.vue";
import TaskForm from "@/components/todo/TaskForm.vue";
export default {
  components: {
    TaskItem,
    TaskForm,
  },
  computed: {
    tasks() {
      return this.$store.getters["tasks/getAllTasks"];
    },
  },
  beforeMount() {
    this.$store.dispatch("tasks/addNewTask", { taskName: "Buy a milk" });
  },
};
</script>
<style lang="scss">
.main {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;

  .mainHeading {
    font-size: 2.5rem;
    text-transform: capitalize;
    margin-bottom: 0.5rem;
  }

  .subHeading {
    margin-bottom: 2rem;
  }

  .tasks {
    width: 100%;
    max-width: 480px;
    margin-top: 2rem;
  }
}
</style>
