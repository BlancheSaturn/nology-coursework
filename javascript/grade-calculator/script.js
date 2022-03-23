function handleCalculateGrade(event) {
    let grade = event.target.value;
    grade =grade.toUpperCase();

    if (!grade) {
        return;
    }

   let percentage;
   switch (grade) {
       case "A":
           percentage = "90-100%";
           break;

        case "B":
            percentage = "75-90%";
            break;
        case "C":
            percentage = "75-90%";
            break;
        case "D":
            percentage = "75-90%";
            break;
        case "E":
            percentage = "75-90%";
            break;
   }

   alert("the percentage was " + percentage);
}