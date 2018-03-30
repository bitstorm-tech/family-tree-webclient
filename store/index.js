import Vuex from "vuex";

export default () => {
  return new Vuex.Store({
    state: {
      persons: []
    },

    mutations: {
      loadPersons(state, persons) {
        state.persons = persons;
      },

      upsertPerson(state, person) {
        const index = state.persons.indexOf(_person => _person.key === person.key)

        if (index > 0) {
          state.persons[index] = person;
        } else {
          state.persons.push(person);
        }
      }
    },

    actions: {
      async loadPersons(context) {
        if (!process.browser) {
          return;
        }

        try {
          const response = await this.$axios.$get("/persons/all");
          context.commit('loadPersons', response);
        } catch (error) {
          console.log("Error while fetching persons", error)
        }
      },

      async upsertPerson(context, person) {
        try {
          const response = await this.$axios.$put("/persons", person);
          context.commit('upsertPerson', response);
        } catch (error) {
          console.log("Error while upsert person", error);
        }
      }
    },

    getters: {
      persons(state) {
        return state.persons;
      }
    }
  })
}
