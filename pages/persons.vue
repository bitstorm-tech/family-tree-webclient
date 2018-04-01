<template>
  <section class="section">

    <div class="columns">
      <div class="column is-1">
        <button class="button" @click="newPerson">New</button>
      </div>
      <div class="column is-1">
        <button class="button" @click="save" :disabled="editedPerson.payload.firstName.length === 0 && editedPerson.payload.lastName.length === 0">
          Save
        </button>
      </div>
      <div class="column">
        <b-select placeholder="Select Person">
          <option v-for="person in getPersons" :key="person.key" :value="person.key">
            {{person.payload.firstName}} {{person.payload.lastName}}
          </option>
        </b-select>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <b-field label="First Name">
          <b-input v-model="editedPerson.payload.firstName"></b-input>
        </b-field>
      </div>
      <div class="column">
        <b-field label="Last Name">
          <b-input v-model="editedPerson.payload.lastName"></b-input>
        </b-field>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <b-field label="Maiden Name">
          <b-input v-model="editedPerson.payload.maidenName"></b-input>
        </b-field>
      </div>
      <div class="column">
        <b-field label="Place Of Birth">
          <b-input v-model="editedPerson.payload.placeOfBirth"></b-input>
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
      <div class="column">
        <div>Jobs</div>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <b-field label="Additional notes">
          <b-input type="textarea" v-model="editedPerson.payload.notes"></b-input>
        </b-field>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <div>Additional Documents</div>
      </div>
    </div>
  </section>
</template>

<script>
import { NewPerson } from "@/assets/js/models/person";

export default {
  data() {
    return {
      persons: [],
      selectedPersonKey: "",
      editedPerson: {
        key: "",
        payload: {
          firstName: "",
          lastName: "",
          maidenName: "",
          placeOfBirth: "",
          notes: "",
          birthday: "",
          death: ""
        }
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
    },
    newPerson() {
      this.editedPerson = NewPerson();
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

