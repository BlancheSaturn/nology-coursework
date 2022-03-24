// write a function named getDesription that:
// Takes 4 arguments: number of children, partner's name, geographic location, job title.
// Outputs your statement to the console like so: "I am currently a X Living in Y, and marries to Z with N kids.
// Call that function 3 times with 3 different values for the arguments

const getDesription = (partner, amountOfChildren, location, jobTitle) => {
    const message = " I am currently a " + jobTitle + " living in " + location + " and married to " + partner + " with 1 kid "
    console.log(message)
}
getDesription("Jordan", 2, "London", "Business Analyst")