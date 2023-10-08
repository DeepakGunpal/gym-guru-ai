export const getExercisesGroupedByColumn = async () => {
  const res = await fetch("http://localhost:3000/api/public/exercises", {
    method: "GET",
  });
  const exercises: Exercise[] = await res.json();

  // const columns = exercises.reduce((acc, exercise) => {
  //   // if (!acc.get(exercise.difficultyLevel)) {
  //   // }
  // }, new Map<TypedColumn, Column>());
};
