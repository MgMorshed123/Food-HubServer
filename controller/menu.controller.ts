import { Request, Response } from "express";
import { Menu } from "../model/menu.model";
import { Restaurant } from "../model/restaurant.model";
import mongoose from "mongoose";

export const addMenu = async (req: Request, res: Response) => {
  try {
    const { name, description, price } = req.body;
    const file = req.file;
    if (!file) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }
    // const imageUrl = await uploadImageOnCloudinary(file as Express.Multer.File);
    const menu: any = await Menu.create({
      name,
      description,
      price,
    });
    const restaurant = await Restaurant.findOne({ user: req.id });
    if (restaurant) {
      (restaurant.menus as mongoose.Schema.Types.ObjectId[]).push(menu._id);
      await restaurant.save();
    }

    return res.status(201).json({
      success: true,
      message: "Menu added successfully",
      menu,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
