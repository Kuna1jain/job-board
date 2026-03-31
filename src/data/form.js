const formConfig =  
    {
  "applyForm": {
    "title": "Apply for this Role",
    "submitLabel": "Submit Application",
    "requiredNote": "Fields marked * are required",

    "fields": [
      {
        "id": "fname",
        "type": "text",
        "label": "First Name",
        "placeholder": "John",
        "required": true,
        "errorMessage": "Please enter your first name.",
        "validation": "minLength:1"
      },
      {
        "id": "lname",
        "type": "text",
        "label": "Last Name",
        "placeholder": "Smith",
        "required": true,
        "errorMessage": "Please enter your last name.",
        "validation": "minLength:1"
      },
      {
        "id": "email",
        "type": "email",
        "label": "Email Address",
        "placeholder": "john@example.com",
        "required": true,
        "errorMessage": "Please enter a valid email address.",
        "validation": "email"
      },
      {
        "id": "phone",
        "type": "tel",
        "label": "Phone Number",
        "placeholder": "+1 (555) 000-0000",
        "required": false,
        "errorMessage": null,
        "validation": null
      },
      {
        "id": "portfolio",
        "type": "url",
        "label": "Portfolio / LinkedIn URL",
        "placeholder": "https://yourportfolio.com",
        "required": true,
        "errorMessage": "Please enter a valid URL.",
        "validation": "url"
      },
      {
        "id": "resume",
        "type": "file",
        "label": "Resume / CV",
        "placeholder": "Click to upload your resume",
        "hint": "PDF, DOC, DOCX — Max 5MB",
        "required": true,
        "accept": ".pdf,.doc,.docx",
        "maxSizeMB": 5,
        "errorMessage": "Please upload your resume."
      },
      {
        "id": "cover",
        "type": "textarea",
        "label": "Cover Note",
        "placeholder": "Tell us why you're a great fit for this role...",
        "required": true,
        "errorMessage": "Please write a brief cover note (at least 20 characters).",
        "validation": "minLength:20"
      }
    ],

    "success": {
      "icon": "✅",
      "title": "Application Sent!",
      "message": "Your application has been submitted successfully. The hiring team will be in touch within 5–7 business days.",
      "buttonLabel": "Back to Jobs"
    }
  }

 };

export default formConfig;