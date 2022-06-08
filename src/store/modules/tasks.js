export const REMOVE_TASK = "REMOVE_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const ADD_TASK = "ADD_TASK";

const state = {
  tasks: [],
  uuid: 0,
};

const getters = {
  getAllTasks: (state) => state.tasks,
};

const mutations = {
  [TOGGLE_TASK](state, id) {
    const task = state.tasks.find((task) => task.id === id);
    if (task) {
      task.done = !task.done;
    }
  },
  [REMOVE_TASK](state, id) {
    const index = state.tasks.findIndex((task) => task.id === id);
    if (index > -1) {
      state.tasks.splice(index, 1);
    }
  },
  [ADD_TASK](state, task) {
    state.uuid++;
    if (task) {
      state.tasks.push({ id: state.uuid, content: task, done: false });
    }
  },
};

const actions = {
  addNewTask({ commit }, data) {
    commit(ADD_TASK, data.taskName);
    return true;
  },
  removeTask({ commit }, id) {
    commit(REMOVE_TASK, id);
    return true;
  },
  toggleTask({ commit }, id) {
    commit(TOGGLE_TASK, id);
    return true;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
