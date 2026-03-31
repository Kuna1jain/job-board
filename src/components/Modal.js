import { useState } from "react";
import formConfig from "../data/form";

function Modal({ job, onClose }) {

  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  if (!job) return null;

  const form = formConfig.applyForm;

  // handle input change
  const handleChange = (id, value) => {
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // handle submit
  const handleSubmit = (e) => {
  e.preventDefault();

  // simple validation
  for (let field of form.fields) {
    if (field.required && !formData[field.id]) {
      alert(field.errorMessage);
      return;
    }
  }

  setSubmitted(true);
};

  // success UI
  if (submitted) {
    return (
      <div className="modal-overlay">
        <div className="modal-content">

          <h2>{form.success.icon} {form.success.title}</h2>
          <p>{form.success.message}</p>

          <button onClick={onClose}>
            {form.success.buttonLabel}
          </button>

        </div>
      </div>
    );
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>

        <h2>{form.title}</h2>
        <p>{form.requiredNote}</p>

        <form onSubmit={handleSubmit}>

          {form.fields.map(field => (

            <div key={field.id} className="form-group">

              <label>
                {field.label} {field.required && "*"}
              </label>

              {/* INPUT TYPES */}

              {field.type === "textarea" ? (
                <textarea
                  placeholder={field.placeholder}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                />
              ) : field.type === "file" ? (
                <input
                  type="file"
                  accept={field.accept}
                  onChange={(e) => handleChange(field.id, e.target.files[0])}
                />
              ) : (
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                />
              )}

            </div>

          ))}

          <button type="submit" className="btn-primary">
            {form.submitLabel}
          </button>

        </form>

      </div>

    </div>
  );
}

export default Modal;