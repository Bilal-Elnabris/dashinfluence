import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { Resend } from "resend";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  app.post("/api/early-access", async (req, res) => {
    const form = req.body;
    try {
      if (!process.env.RESEND_API_KEY) {
        throw new Error("Resend API key not configured");
      }

      const resend = new Resend(process.env.RESEND_API_KEY);

      const { data, error } = await resend.emails.send({
        from: "Dash Influence <dashinfluence@gmail.com>",
        to: ["dashinfluence@gmail.com"],
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
      });

      if (error) {
        throw new Error(error.message);
      }

      res.status(200).json({ success: true });
    } catch (error: any) {
      console.error("Early access form error:", error);
      const errorMessage =
        error?.message || error?.toString() || "Unknown error";
      res.status(500).json({ success: false, error: errorMessage });
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
      if (!process.env.RESEND_API_KEY) {
        throw new Error("Resend API key not configured");
      }

      const resend = new Resend(process.env.RESEND_API_KEY);

      const { data, error } = await resend.emails.send({
        from: "Dash Influence <dashinfluence@gmail.com>",
        to: ["dashinfluence@gmail.com"],
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
      });

      if (error) {
        throw new Error(error.message);
      }

      res.status(200).json({ success: true });
    } catch (error: any) {
      console.error("Contact form error:", error);
      const errorMessage =
        error?.message || error?.toString() || "Unknown error";
      res.status(500).json({ success: false, error: errorMessage });
    }
  });

  app.post("/api/business-intake", async (req, res) => {
    const form = req.body;
    try {
      if (!process.env.RESEND_API_KEY) {
        throw new Error("Resend API key not configured");
      }

      const resend = new Resend(process.env.RESEND_API_KEY);

      const { data, error } = await resend.emails.send({
        from: "Dash Influence <dashinfluence@gmail.com>",
        to: ["dashinfluence@gmail.com"],
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
      });

      if (error) {
        throw new Error(error.message);
      }

      res.status(200).json({ success: true });
    } catch (error: any) {
      console.error("Business intake form error:", error);
      const errorMessage =
        error?.message || error?.toString() || "Unknown error";
      res.status(500).json({ success: false, error: errorMessage });
    }
  });

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
