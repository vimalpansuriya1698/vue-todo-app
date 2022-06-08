<template>
  <div :class="`task ${task.done ? 'is-complete' : ''}`">
    <div class="content">{{ task.content }}</div>
    <div class="buttons">
      <button @click="toggle(task.id)" class="button">
        {{ task.done ? "Undo" : "Done" }}
      </button>
      <button @click="remove(task.id)" class="button deleteButton">
        Remove
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggle(taskId) {
      this.$store.dispatch("tasks/toggleTask", taskId);
    },
    remove(taskId) {
      this.$store.dispatch("tasks/removeTask", taskId);
    },
  },
};
</script>

<style lang="scss">
.task {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #16123f;
  color: #eee;
  padding: 0.75rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;

  .buttons {
    min-width: fit-content;

    .button {
      appearance: none;
      border: none;
      outline: none;
      background-color: #abd699;
      font-weight: bold;
      color: #000;
      font-size: 0.875rem;
      padding: 0.5rem;
      border-radius: 0.5rem;
      margin-left: 0.5rem;
      cursor: pointer;
    }

    .deleteButton {
      background-color: #b92e34;
      color: #eee;
    }
  }
}

.task.is-complete {
  opacity: 0.7;

  .content {
    text-decoration: line-through;
  }
}
</style>
