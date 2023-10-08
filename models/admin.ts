import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    username: String, // Username of the admin
    password: String, // Hashed password of the admin (for security)
    fullName: String, // Full name of the admin
    email: String, // Email address of the admin
    role: String, // Role of the admin (e.g., "admin", "superadmin")
  },
  { timestamps: true }
);

const Admin = mongoose.models.admin || mongoose.model("admin", adminSchema);

export default Admin;
