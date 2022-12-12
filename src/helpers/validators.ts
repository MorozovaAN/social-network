export const requiredField = (value: any) => {
  if (value) {
    return undefined;
  } else {
    return "field is required";
  }
};

export const maxLengthCreator = (maxLength: number) => (value: string) => {
  if (value.length > maxLength) {
    return `max length is ${maxLength} symbols`;
  } else {
    return undefined;
  }
};
