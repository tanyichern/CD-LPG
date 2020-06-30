export const selectById = (lesson, user) => {
  return lesson.owner._id === user._id;
};

export const selectByUnit = (lesson, user) => {
  return lesson.owner.unit === user.unit;
};
