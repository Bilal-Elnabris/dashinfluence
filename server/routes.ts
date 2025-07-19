import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  app.post("/api/early-access", async (req, res) => {
    const form = req.body;
    try {
      // Configure nodemailer transporter for Namecheap/PrivateEmail
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "mail.privateemail.com",
        port: Number(process.env.SMTP_PORT) || 465,
        secure: true, // true for 465, false for 587
        auth: {
          user: process.env.SMTP_USER || "hello@dashinfluence.com",
          pass: process.env.SMTP_PASS || "",
        },
      });

      const mailOptions = {
        from: process.env.SMTP_USER || "hello@dashinfluence.com",
        to: "hello@dashinfluence.com",
        subject: "New Early Access Application",
        text: `New Early Access Application:\n\n${JSON.stringify(
          form,
          null,
          2
        )}`,
        html: `<h2>New Early Access Application</h2><pre>${JSON.stringify(
          form,
          null,
          2
        )}</pre>`,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ success: false, error: err.message });
    }
  });

  app.post("/api/contact", async (req, res) => {
    const form = req.body;
    // Basic validation
    if (!form.email || !form.message) {
      return res
        .status(400)
        .json({ success: false, error: "Email and message are required." });
    }
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "mail.privateemail.com",
        port: Number(process.env.SMTP_PORT) || 465,
        secure: true, // true for 465, false for 587
        auth: {
          user: process.env.SMTP_USER || "hello@dashinfluence.com",
          pass: process.env.SMTP_PASS || "",
        },
      });
      const mailOptions = {
        from: process.env.SMTP_USER || "hello@dashinfluence.com",
        to: "hello@dashinfluence.com",
        subject: "New Contact Form Submission",
        text: `New Contact Form Submission:\n\n${JSON.stringify(
          form,
          null,
          2
        )}`,
        html: `<h2>New Contact Form Submission</h2><pre>${JSON.stringify(
          form,
          null,
          2
        )}</pre>`,
      };
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error: any) {
      console.error("Contact form error:", error);
      res
        .status(500)
        .json({ success: false, error: error.message || "Unknown error" });
    }
  });

  app.post("/api/business-intake", async (req, res) => {
    const form = req.body;
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "mail.privateemail.com",
        port: Number(process.env.SMTP_PORT) || 465,
        secure: true, // true for 465, false for 587
        auth: {
          user: process.env.SMTP_USER || "hello@dashinfluence.com",
          pass: process.env.SMTP_PASS || "",
        },
      });

      const mailOptions = {
        from: process.env.SMTP_USER || "hello@dashinfluence.com",
        to: "hello@dashinfluence.com",
        subject: "New Business Intake Submission",
        text: `New Business Intake Submission:\n\n${JSON.stringify(
          form,
          null,
          2
        )}`,
        html: `<h2>New Business Intake Submission</h2><pre>${JSON.stringify(
          form,
          null,
          2
        )}</pre>`,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ success: false, error: err.message });
    }
  });

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
