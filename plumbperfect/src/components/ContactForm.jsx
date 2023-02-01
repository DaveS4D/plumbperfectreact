import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import emailjs from "@emailjs/browser"
import { useRef} from 'react'

const ContactForm = () => {
  const form = useRef();
  // for validation
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    organization: Yup.string().required("Post code is required"),
    projectGoal: Yup.string().required("Please write the work you require"),
    timeline: Yup.string().required("Please write when you would like work to start."),
    email: Yup.string()
      .required("Email is required")
      .email("Entered value does not match email format"),
    budget: Yup.string().required("Pleaes select if you have recieved a quote"),
    acceptTerms: Yup.bool().oneOf(
      [true],
      "Accept Terms and Conditions is required"
    ),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const sendEmail = (e) => {
  e.preventDefault();
   emailjs.sendForm('service_dfbp356', 'template_lr8pad8', form.current, 'P83NsVYeb4Z5LrrNU')
   .then((result) => {
   console.log(result.text);
   alert("Message Sent")
   }, (error) => {
   console.log(error.text);
   alert("Something went wrong")
     });
     e.target.reset()
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact_form">
      <div className="ptf-form-group">
        <label data-number="01">What’s your name?</label>
        <input
          type="text" 
          name="name"
          {...register("name")}
          className={`${errors.name ? "is-invalid" : ""}`}
        />
        {errors.name && (
          <div className="invalid-feedback">{errors.name?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}

      <div className="ptf-form-group">
        <label data-number="02">What’s your postcode?</label>
        <input
          type="text"
          name="organization"
          {...register("organization")}
          className={`${errors.organization ? "is-invalid" : ""}`}
        />
        {errors.organization && (
          <div className="invalid-feedback">{errors.organization?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}

      <div className="ptf-form-group">
        <label data-number="03">What’s your email address?</label>
        <input
          name="email"
          type="text"
          {...register("email")}
          className={` ${errors.email ? "is-invalid" : ""}`}
        />
        {errors.email && (
          <div className="invalid-feedback">{errors.email?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}

      <div className="ptf-form-group">
        <label data-number="04">Tell us about the work you need.</label>
        <textarea
          type="text"
          name="projectGoal"
          {...register("projectGoal")}
          className={`${errors.projectGoal ? "is-invalid" : ""}`}
        />
        {errors.projectGoal && (
          <div className="invalid-feedback">{errors.projectGoal?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}

      <div className="ptf-form-group">
        <label data-number="05">When were you looking to have work starting?</label>
        <input
          type="text"
          name="timeline"
          {...register("timeline")}
          className={`${errors.timeline ? "is-invalid" : ""}`}
        />
        {errors.timeline && (
          <div className="invalid-feedback">{errors.timeline?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}

      <div className="ptf-form-group">
        <label data-number="06">Have you already recieved a quote?</label>
        <select
          name="budget"
          {...register("budget")}
          className={`${errors.budget ? "is-invalid" : ""}`}
        >
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
        {errors.budget && (
          <div className="invalid-feedback">{errors.budget?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}

      {/* <!--Spacer--> */}
      <div className="ptf-spacer" style={{ "--ptf-xxl": "2.5rem" }}></div>

      <div className="ptf-form-group agreement-checkbox ">
        <input
          name="acceptTerms"
          type="checkbox"
          id="acceptTerms"
          {...register("acceptTerms")}
          className={` ${errors.acceptTerms ? "is-invalid" : ""}`}
        />

        <label className="ptf-checkbox" htmlFor="acceptTerms">
          <span className="ptf-checkbox__checkmark"></span>I agree to receive
          occasional PlumbPerfect marketing material via email.
        </label>
        {errors.acceptTerms && (
          <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
        )}
      </div>
      {/* End .ptf-form-group */}

      {/* <!--Spacer--> */}
      <div className="ptf-spacer" style={{ "--ptf-xxl": "5.625rem" }}></div>

      <button className="ptf-submit-button">
        Submit
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 17 17"
        >
          <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
        </svg>
      </button>
      {/* End .ptf-submit-button */}
    </form>
  );
};

export default ContactForm;
