/**
 * Dash Influence Email Handler - Cloudflare Worker
 * Handles contact, early-access, and business-intake forms
 */

export default {
  async fetch(request, env) {
    // Handle CORS
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      });
    }

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", {
        status: 405,
        headers: { "Access-Control-Allow-Origin": "*" },
      });
    }

    try {
      const url = new URL(request.url);
      const path = url.pathname;

      // Extract form type from URL path
      let formType;
      if (path === "/api/contact") {
        formType = "contact";
      } else if (path === "/api/early-access") {
        formType = "early-access";
      } else if (path === "/api/business-intake") {
        formType = "business-intake";
      } else {
        return new Response("Not Found", {
          status: 404,
          headers: { "Access-Control-Allow-Origin": "*" },
        });
      }

      const body = await request.json();
      const formData = body.formType ? { ...body } : { formType, ...body };

      // Validate form type
      if (
        !formData.formType ||
        !["contact", "early-access", "business-intake"].includes(
          formData.formType
        )
      ) {
        return new Response("Invalid form type", {
          status: 400,
          headers: { "Access-Control-Allow-Origin": "*" },
        });
      }

      // Get Resend API key from environment
      const RESEND_API_KEY = env.RESEND_API_KEY;
      if (!RESEND_API_KEY) {
        console.error("Resend API key not configured");
        return new Response("Server configuration error", {
          status: 500,
          headers: { "Access-Control-Allow-Origin": "*" },
        });
      }

      // Prepare email content based on form type
      const emailContent = prepareEmailContent(formData.formType, formData);

      // Send email via Resend API
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Dash Influence <onboarding@resend.dev>",
          to: "hello@dashinfluence.com",
          subject: emailContent.subject,
          html: emailContent.html,
          text: emailContent.text,
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error("Resend API error:", errorData);
        return new Response("Email send failed", {
          status: 500,
          headers: { "Access-Control-Allow-Origin": "*" },
        });
      }

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    } catch (error) {
      console.error("Worker error:", error);
      return new Response("Internal server error", {
        status: 500,
        headers: { "Access-Control-Allow-Origin": "*" },
      });
    }
  },
};

function prepareEmailContent(formType, formData) {
  switch (formType) {
    case "contact":
      return {
        subject: "New Contact Form Submission",
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.firstName} ${
          formData.lastName
        }</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
          <p><strong>Company:</strong> ${formData.company || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message}</p>
        `,
        text: `
New Contact Form Submission

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Company: ${formData.company || "Not provided"}

Message:
${formData.message}
        `,
      };

    case "early-access":
      return {
        subject: "New Early Access Application",
        html: `
          <h2>New Early Access Application</h2>
          <p><strong>Name:</strong> ${formData.firstName} ${
          formData.lastName
        }</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
          <p><strong>Company:</strong> ${formData.company || "Not provided"}</p>
          <p><strong>Industry:</strong> ${
            formData.industry || "Not specified"
          }</p>
          <p><strong>Business Size:</strong> ${
            formData.businessSize || "Not specified"
          }</p>
          <p><strong>Current Challenges:</strong> ${
            formData.currentChallenges || "Not specified"
          }</p>
          <p><strong>Automation Needs:</strong> ${
            Array.isArray(formData.automationNeeds)
              ? formData.automationNeeds.join(", ")
              : "Not specified"
          }</p>
          <p><strong>Timeline:</strong> ${
            formData.timeline || "Not specified"
          }</p>
          <p><strong>Budget:</strong> ${formData.budget || "Not specified"}</p>
          <p><strong>Additional Info:</strong> ${
            formData.additionalInfo || "None provided"
          }</p>
        `,
        text: `
New Early Access Application

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Company: ${formData.company || "Not provided"}
Industry: ${formData.industry || "Not specified"}
Business Size: ${formData.businessSize || "Not specified"}
Current Challenges: ${formData.currentChallenges || "Not specified"}
Automation Needs: ${
          Array.isArray(formData.automationNeeds)
            ? formData.automationNeeds.join(", ")
            : "Not specified"
        }
Timeline: ${formData.timeline || "Not specified"}
Budget: ${formData.budget || "Not specified"}
Additional Info: ${formData.additionalInfo || "None provided"}
        `,
      };

    case "business-intake":
      return {
        subject: "New Business Intake Submission",
        html: `
          <h2>New Business Intake Submission</h2>
          <p><strong>Business Name:</strong> ${formData.businessName}</p>
          <p><strong>Website:</strong> ${formData.website || "Not provided"}</p>
          <p><strong>Industry:</strong> ${
            formData.industry || "Not specified"
          }</p>
          <p><strong>Business Size:</strong> ${
            formData.businessSize || "Not specified"
          }</p>
          <p><strong>Location:</strong> ${
            formData.location || "Not provided"
          }</p>
          <p><strong>Contact Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
          <p><strong>Business Activity:</strong> ${
            formData.activity || "Not specified"
          }</p>
          <p><strong>Challenges:</strong> ${
            formData.challenges || "Not specified"
          }</p>
          <p><strong>Current Tools:</strong> ${
            formData.tools || "Not specified"
          }</p>
          <p><strong>Goals:</strong> ${formData.goals || "Not specified"}</p>
          <p><strong>Success Metrics:</strong> ${
            formData.success || "Not specified"
          }</p>
          <p><strong>Processes to Automate:</strong> ${
            Array.isArray(formData.processes)
              ? formData.processes.join(", ")
              : "Not specified"
          }</p>
          <p><strong>Timeline:</strong> ${
            formData.timeline || "Not specified"
          }</p>
          <p><strong>Budget:</strong> ${formData.budget || "Not specified"}</p>
          <p><strong>Additional Info:</strong> ${
            formData.anythingElse || "None provided"
          }</p>
        `,
        text: `
New Business Intake Submission

Business Name: ${formData.businessName}
Website: ${formData.website || "Not provided"}
Industry: ${formData.industry || "Not specified"}
Business Size: ${formData.businessSize || "Not specified"}
Location: ${formData.location || "Not provided"}
Contact Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Business Activity: ${formData.activity || "Not specified"}
Challenges: ${formData.challenges || "Not specified"}
Current Tools: ${formData.tools || "Not specified"}
Goals: ${formData.goals || "Not specified"}
Success Metrics: ${formData.success || "Not specified"}
Processes to Automate: ${
          Array.isArray(formData.processes)
            ? formData.processes.join(", ")
            : "Not specified"
        }
Timeline: ${formData.timeline || "Not specified"}
Budget: ${formData.budget || "Not specified"}
Additional Info: ${formData.anythingElse || "None provided"}
        `,
      };

    default:
      throw new Error("Invalid form type");
  }
}
