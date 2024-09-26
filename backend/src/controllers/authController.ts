import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import { User } from "../entity/User";

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    const userRepository = AppDataSource.getRepository(User);

    // Check if the user already exists
    const existingUser = await userRepository.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const newUser = userRepository.create({
      name,
      email,
      password: hashedPassword,
    });
    await userRepository.save(newUser);

    res.status(201).json({
      message: "User registered successfully",
      user: { id: newUser.id, name: newUser.name, email: newUser.email },
    });
  } catch (error) {
    res.status(500).json({ error: "Error registering user" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const userRepository = AppDataSource.getRepository(User);

    // Find the user
    const user = await userRepository.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ error: "Error logging in" });
  }
};

export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({
      where: { id: (req as any).user.id },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ id: user.id, name: user.name, email: user.email });
  } catch (error) {
    res.status(500).json({ error: "Error fetching user profile" });
  }
};

export const updateUserProfile = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const userRepository = AppDataSource.getRepository(User);
    
    const user = await userRepository.findOne({where: { id: (req as any).user.id}});
    if(!user) {
      return res.status(404).json({error: "User not found"})
    }
    // Update fields that will be entered
    if (name) user.name = name;
    if (email) user.email = email;
    if (password) {
      user.password = await bcrypt.hash(password, 10);
    }

    await userRepository.save(user);

    res.json({message: "Profile updated successfully"})

  } catch(error) {
    res.status(500).json({ error: 'Error updating user profile' });
  }
};
