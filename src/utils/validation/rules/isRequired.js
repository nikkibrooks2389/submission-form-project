const isRequired = (value) => {
    return typeof value === "string" && value.trim().length > 0;
  };
  
  export default isRequired;