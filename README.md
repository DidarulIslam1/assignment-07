liveLink: https://6543dd012a6dde29c715ad82--classy-gecko-f855b9.netlify.app/

Questions:-
Q-No-1: Add at least 3 project features.
Ans:-
Course Registration project features:-

1) Clicking on a course button will show the course name, course  credit hour, and remaining time count in the right-side cart.
2) An alert will show if a course is clicked more than once.
3) An alert will show if the total time of the selected courses is more than twenty hours. 

Q-No-2: Discuss how you managed the state in your assignment project.
Ans:-
In this project, state management was accomplished using the useState hook provided by React. Two main states were employed: "courses" and "totalCredit". The "courses" state, represented as an array, keeps track of selected courses, preventing duplicates. When a course is chosen, it's checked against existing selections and added if not already present. The "totalCredit" state maintains the cumulative credit hours of selected courses. When a course is added, its credit hours are integrated into the total. However, a check ensures the total does not exceed 20 hours, prompting a user alert if the limit is reached. These state updates drive component re-renders, ensuring the UI accurately reflects the application's current state. This approach ensures a streamlined and effective user experience throughout the project.

