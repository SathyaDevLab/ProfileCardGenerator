const numberValidation = (num) => {
  return num.length === 10 && /^[0-9]+$/.test(num);
};

const emailValidation = (getMail) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/;
  return emailRegex.test(getMail);
};

const nameValidation = (name) => {
  return name.length > 2 && name.length < 21;
};

const ageValidation = (age) => {
  const userAge = Number(age);
  return userAge > 0 && userAge < 100;
};

const genderValidation = (gender) => {
  return gender.some((itm) => itm.checked);
};

export const result = (
  userName,
  userAge,
  userGender,
  userNumber,
  userEmail
) => {
  return {
    name: nameValidation(userName),
    age: ageValidation(userAge),
    gender: genderValidation(userGender),
    number: numberValidation(userNumber),
    email: emailValidation(userEmail),
  };
};
