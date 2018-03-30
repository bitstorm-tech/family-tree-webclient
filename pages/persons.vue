<template>
  <section class="section">

    <div class="columns">
      <div class="column">
        <ul>
          <li v-for="person in getPersons" :key="person.key">{{person.payload.firstName}} {{person.payload.lastName}}</li>
        </ul>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <b-field label="First Name">
          <b-input v-model="person.firstName"></b-input>
        </b-field>
      </div>
      <div class="column">
        <b-field label="Last Name">
          <b-input v-model="person.lastName"></b-input>
        </b-field>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <b-field label="Maiden Name">
          <b-input v-model="person.maidenName"></b-input>
        </b-field>
      </div>
      <div class="column">
        <b-field label="Place Of Birth">
          <b-input v-model="person.placeOfBirth"></b-input>
        </b-field>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <b-field label="Birthday">
          <b-datepicker placeholder="Select" icon-pack="fas" icon="calendar-alt"></b-datepicker>
        </b-field>
      </div>
      <div class="column">
        <b-field label="Death">
          <b-datepicker placeholder="Select" icon-pack="fas" icon="calendar-alt"></b-datepicker>
        </b-field>
      </div>
    </div>

    <div class="columns">
      <div>Jobs</div>
    </div>

    <div class="columns">
      <div class="column">
        <b-field label="Additional notes">
          <b-input type="textarea" v-model="person.notes"></b-input>
        </b-field>
      </div>
    </div>

    <div class="columns">
      <div>Additional Documents</div>
    </div>

    <div class="columns">
      <button class="button" @click="save">Save</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      persons: [],
      person: {
        firstName: "",
        lastName: "",
        maidenName: "",
        placeOfBirth: "",
        notes: "",
        birthday: "",
        death: ""
      }
    };
  },

  methods: {
    async save() {
      try {
        const person = {
          key: "",
          payload: this.person
        };
        this.$store.dispatch("upsertPerson", person);
      } catch (error) {
        console.log("Error while upsert person", error);
      }
    }
  },

  computed: {
    getPersons() {
      return this.$store.getters.persons;
    }
  },

  created() {
    this.$store.dispatch("loadPersons");
  }
};
</script>

