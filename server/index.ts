import dotenv from "dotenv";
import express from "express";
import expressLayout from "express-ejs-layouts";
import { postRouter } from "../routes/post.ts";
dotenv.config();
const app = express();
//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ REQUEST HANDLERS:                                                       │
//  ╰─────────────────────────────────────────────────────────────────────────╯
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(expressLayout);
//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ VIEWS:                                                                  │
//  ╰─────────────────────────────────────────────────────────────────────────╯
app.set("view engine", "ejs");
app.set("layout", "layouts/layout");
//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ Routes Handllers:                                                       │
//  ╰─────────────────────────────────────────────────────────────────────────╯
app.use("/", postRouter);
//  ╭─────────────────────────────────────────────────────────────────────────╮
//  │ RUN SERVER:                                                             │
//  ╰─────────────────────────────────────────────────────────────────────────╯
app.listen(process.env.PORT || 8080);
