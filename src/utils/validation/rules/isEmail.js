const isEmail = (value) => {
    if (typeof value !== "string") return false;
    return /\S+@\S+\.\S+/.test(value);
  };
  
  export default isEmail;