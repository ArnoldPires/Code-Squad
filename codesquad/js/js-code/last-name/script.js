function getLastName(fullName) {
  let endOfFirstName = fullName.indexOf(" ");
  let lastName = fullName.substring(endOfFirstName + 1); 
  return lastName;
}
