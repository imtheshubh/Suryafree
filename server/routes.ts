import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuoteRequestSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Quote request endpoint
  app.post("/api/quote-requests", async (req, res) => {
    try {
      const validatedData = insertQuoteRequestSchema.parse(req.body);
      const quoteRequest = await storage.createQuoteRequest(validatedData);
      res.json({ success: true, data: quoteRequest });
    } catch (error: any) {
      if (error.name === "ZodError") {
        return res.status(400).json({ 
          success: false, 
          error: fromZodError(error).toString() 
        });
      }
      console.error("Error creating quote request:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to submit quote request" 
      });
    }
  });

  // Get all quote requests (for admin/business use)
  app.get("/api/quote-requests", async (req, res) => {
    try {
      const quoteRequests = await storage.getQuoteRequests();
      res.json({ success: true, data: quoteRequests });
    } catch (error) {
      console.error("Error fetching quote requests:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to fetch quote requests" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
