interface Board {
  columns: Map<TypedColumn, Column>;
}

type TypedColumn =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

interface Column {
  id: TypedColumn;
  exercises: Exercise[];
}

// Define an enum for the major body parts
enum MajorBodyPart {
  Chest = "chest",
  Tricep = "tricep",
  Shoulder = "shoulder",
  Back = "back",
  Bicep = "bicep",
  Leg = "leg",
  Abs = "abs",
}

type DifficultyLevel =
  | "noob"
  | "beginner"
  | "intermediate"
  | "advanced"
  | "elite"
  | "freak";

// Define a TypeScript type that matches the schema structure
interface Exercise {
  name: string;
  description?: string;
  targetedBodyPart: MajorBodyPart; // New field
  reps?: {
    noob: number[];
    beginner: number[];
    intermediate: number[];
    advanced: number[];
    elite: number[];
    freak: number[];
  };
  type?: "Body Weight" | "External Weight";
  image?: string;
  difficultyLevel?: DifficultyLevel;
  equipmentNeeded?: string;
  muscleGroupsTargeted?: string[];
  variations?: string[];
  notesAndTips?: string;
  caloriesBurned?: string;
  tagsOrCategories?: string[];
  userRatings?: {
    userId?: mongoose.Schema.Types.ObjectId;
    rating?: number;
    review?: string;
  }[];
  videoTutorials?: string;
  historyAndTracking?: {
    date?: Date;
    sets?: number;
    reps?: number;
    weightUsed?: number;
  }[];
  safetyPrecautions?: string[];
}

interface Image {
  buckedId: string;
  fileId: string;
}
