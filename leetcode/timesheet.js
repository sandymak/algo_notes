/*

In JavaScript, You are building a system to add an appointment to a therapist's upcoming schedule. Appointments vary in length, and they must not overlap. When adding a new appointment, the thrapist requests that we use the "tightest fit" possible. That is, we should schedule the appointment in the shortest open space on the schedule that is still long enough to fit the appointment. 

Write a function that takes two parameters:
- The first parameter is a list of the therapist's existing appointment
- The second parameter is the length of the appointment we want to add.

The function should return a start time for the newly added appointment that meets the requirement above. 

Example: 

 Existing example: 
 2023-01-01 12:00 to 2023-01-01 12:30 // 30
 2023-01-01 13:00 to 2023-01-01 14:00 // 60
 2023-01-01 15:00 to 2023-01-01 15:30 // 45
 2023-01-01 16:15 to 2023-01-01 17:00

 Appointment length to add: 45 minutes
 expected output: 2023-01-01 15:30
*/

/* 
1. sort the appointments by start time ASC
2. create a variable to hold shortestBreak, newAppointmentTime
3. loop through the appointments
    have the currentAppoint, nextAppointment
    compare: if the nextAppointment.start - currentAppointment.end === mintuesToSchedule return nextAppointment.start.toISOString()
    if nextAppointment.start - currentAppointment.end > minutesToScehduel && diff < shortestBreak
    shortestBreak = diff
    newAppointmentTime

    end loop

    return newAppointmentTime;

*/

/* 
QUESTIONS:
1. What will appointments look like? [ {start: "timestamp", end}]
2. Default start at 2024-01-01 00:00;
3. What is new appointment input like? 
4. What to do when no breaks are found?
5. handle EMPTY appointments
6. 

*/

function findShortestFreeBlock (appointments, minutesToSchedule) {
  appointments.sort((a,b) => new Date(a.start).getTime() - new Date(b.start).getTime());

  const start = "9:30";
  const end = "18:30";

  

  console.log('appointment', appointments)

  let shortestBlock = Infinity;
  let newAppointmentTime = null;

  for (let i = 0; i < appointments.length-1; i +=1) {
    const currentAppointment = appointments[i];
    const nextAppointment = appointments[i + 1];



    const blockInMinutes = (new Date(nextAppointment.start).getTime() - new Date(currentAppointment.end).getTime()) / 60000;
    console.log('blockInMinutes', blockInMinutes)
    
    if (blockInMinutes === minutesToSchedule) return new Date(currentAppointment.end).toISOString();

    if (blockInMinutes > minutesToSchedule && blockInMinutes < shortestBlock) {
      shortestBlock = blockInMinutes;
      console.log('curerntAPpoint', currentAppointment.end)
      newAppointmentTime = new Date(currentAppointment.end).toISOString();
    }
  }
  
  return newAppointmentTime;
}


const a = [
    { start: "2023-01-01 9:15", end: "2023-01-01 9:30" }, // 150min
    { start: "2023-01-01 12:00", end: "2023-01-01 12:30" }, // 30min
    { start: "2023-01-01 13:00", end: "2023-01-01 14:00" }, // 60min
    { start: "2023-01-01 15:00", end: "2023-01-01 15:30" }, // 45min
    { start: "2023-01-01 16:15", end: "2023-01-01 17:00" }, // 15 min
    { start: "2023-01-01 17:15", end: "2023-01-01 17:55" },
];

const min = 20

// console.log('Free Block starts:', findShortestFreeBlock(a, min))



module.exports = { findShortestFreeBlock };