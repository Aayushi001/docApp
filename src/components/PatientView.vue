<template>
  <div class="container" v-if="localData">
    <div class="row">
      <div class="offset-md-4">
        <h2>Please select the speciality:</h2>
      </div>
    </div>
    <div class="row">
      <div class="offset-md-3 col-md-6">
        <select class="custom-select" v-model="selectedSpec" @change="changeSpecs()">
          <option v-for="spec in localData.speciality" :key="spec.name" :value="spec">
            {{spec.name}}
          </option>
        </select>
      </div>
    </div>
    <div class="row m-t-50">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Availability Slot</th>
            <th>Charges</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="doc in doctors" :key="doc.id">
            <td>Dr. {{doc.name}}</td>
            <td>{{doc.startTime}} - {{doc.endTime}}</td>
            <td>Rs. {{doc.charge}}</td>
            <td>
              <button v-if="doc.availability.isAvailable" class="btn btn-primary" @click="book(doc)">Book</button>
              <p v-else>No appointments available</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import seed from '@/seed.js';
import _ from 'lodash';

export default {
  name: 'PatientView',
  data() {
    return {
      localData: {},
      selectedSpec: '',
      doctors: [],
    }
  },

  created() {
   this.localData = seed;
   this.selectedSpec = this.localData.speciality[0];
   this.changeSpecs();
  },

  methods: {
    changeSpecs() {
      const relevantDocIds = this.selectedSpec.doc;
      const relevantDocData = _.filter(this.localData.doctors, (doc) => {return relevantDocIds.includes(doc.id)});
      const relevantDocAvl = [];
      this.localData.availability.forEach((obj) => {
        if (relevantDocIds.includes(obj.id)) {
          const startArr = obj.startTime.split(':');
          const endArr = obj.endTime.split(':');
          obj.slotDuration = (parseInt(endArr[0]) - parseInt(startArr[0]))  * 60 + (parseInt(endArr[1]) % 60) - (parseInt(startArr[1]) % 60);
          relevantDocAvl.push(obj);
        }
      })
      this.doctors = _(relevantDocData).keyBy('id').merge(_.keyBy(relevantDocAvl, 'id')).values().value();
    },

    book(doc) {
      doc.availability.appointments += 1;
      if (doc.availability.appointments + 1 >= doc.slotDuration/20) doc.availability.isAvailable = false;
      alert(`Successfully booked an appointment with Dr. ${doc.name}.`);
    }
  }
}
</script>

<style scoped>
.m-t-50 {
  margin-top: 50px;
}
.custom-select {
  height: 50px;
  padding: 10px;
}
</style>