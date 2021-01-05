
export default {
  doctors: [
    {
      id: "1001",
      name: 'Anjali Mehta',
      charge: 500,
      availability: {isAvailable: true, appointments: 0},
    },
    {
      id: "1002",
      name: 'Hriday Nathwani',
      charge: 800,
      availability: {isAvailable: true, appointments: 0},
    },
    {
      id: "1003",
      name: 'Riya Singhania',
      charge: 1000,
      availability: {isAvailable: true, appointments: 0},
    }
  ],
  
  availability: [
    {
      id: "1001",
      startTime: "13:00",
      endTime: "13:30"
    },
    {
      id: "1002",
      startTime: "15:00",
      endTime: "18:00"
    },
    {
      id: "1003",
      startTime: "17:30",
      endTime: "20:15"
    }
  ],
  
  speciality: [
    {
      name: 'heart',
      doc: ["1001", "1003"]
    },
    {
      name: 'cancer',
      doc: ["1001", "1002"]
    },
    {
      name: 'brain',
      doc: ["1003"]
    },
    {
      name: 'General Physician',
      doc: ["1001", "1002", "1003"]
    },

  ]
};
